"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);
  const geoJsonData = useRef<any>(null);

  useEffect(() => {
    // Fetch world countries GeoJSON
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        geoJsonData.current = data;
        setDataLoaded(true);
      })
      .catch(err => console.error("Error fetching GeoJSON", err));
  }, []);

  useEffect(() => {
    if (dataLoaded && globeReady && containerRef.current && (window as any).Globe && !globeInstance.current) {
      // Initialize globe.gl
      const globe = (window as any).Globe()(containerRef.current)
        .backgroundColor('rgba(0,0,0,0)')
        .showGlobe(true)
        .showAtmosphere(true)
        .atmosphereColor('#ffffff') // White atmosphere
        .atmosphereAltitude(0.15)
        .polygonsData(geoJsonData.current.features)
        .polygonAltitude(0.01)
        .polygonCapColor(() => 'rgba(234, 88, 12, 0.7)') // Orange for continents
        .polygonSideColor(() => 'rgba(234, 88, 12, 0.1)')
        .polygonStrokeColor(() => '#ffffff') // White borders for contrast
        .polygonLabel((d: any) => `
          <div style="background: rgba(255,255,255,0.95); padding: 8px 12px; border-radius: 8px; color: #1e293b; border: 1px solid #EA580C; font-family: inherit; font-size: 13px; font-weight: 500; pointer-events: none; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <strong style="color: #EA580C; display: block; margin-bottom: 2px;">${d.properties.ADMIN}</strong>
            <span style="font-size: 11px; color: #64748b;">ISO: ${d.properties.ISO_A2} | Pop: ${(d.properties.POP_EST / 1000000).toFixed(1)}M</span>
          </div>
        `)
        .onPolygonHover((hoverD: any) => globe
          .polygonAltitude((d: any) => d === hoverD ? 0.08 : 0.01)
          .polygonCapColor((d: any) => d === hoverD ? 'rgba(234, 88, 12, 0.9)' : 'rgba(234, 88, 12, 0.7)')
        )
        .polygonsTransitionDuration(300);

      // Access ThreeJS material to change ocean color
      const globeMaterial = globe.globeMaterial();
      globeMaterial.color.set('#ffedd5'); // Light orange for oceans
      globeMaterial.emissive.set('#fed7aa');
      globeMaterial.emissiveIntensity = 0.2;

      globeInstance.current = globe;
      
      // Setup controls
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 1.0;
      globe.controls().enableZoom = false;

      // Responsive sizing
      const handleResize = () => {
        if (containerRef.current && globeInstance.current) {
          const width = containerRef.current.clientWidth;
          const height = containerRef.current.clientHeight;
          globeInstance.current.width(width).height(height);
        }
      };
      
      window.addEventListener('resize', handleResize);
      setTimeout(handleResize, 100); // Initial resize to fit container

      return () => {
        window.removeEventListener('resize', handleResize);
        if (containerRef.current) {
            containerRef.current.innerHTML = ''; // Cleanup DOM
        }
        globeInstance.current = null;
      };
    }
  }, [dataLoaded, globeReady]);

  return (
    <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Load globe.gl via unpkg */}
      <Script 
        src="https://unpkg.com/globe.gl" 
        strategy="afterInteractive" 
        onLoad={() => setGlobeReady(true)}
      />
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none" />

      {/* Globe Container */}
      <div ref={containerRef} className="w-full h-full relative z-10 cursor-crosshair" />

      {/* Floating visa status cards */}
      <div className="absolute top-[10%] right-[10%] glass border-orange/20 p-3 rounded-lg text-xs flex items-center gap-2 animate-float shadow-lg z-20 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
        <span className="font-semibold text-orange">VE-2026: USA F-1 Approved</span>
      </div>
      <div className="absolute bottom-[20%] left-[5%] glass border-orange/20 p-3 rounded-lg text-xs flex items-center gap-2 animate-float shadow-lg z-20 pointer-events-none" style={{ animationDelay: "1.5s" }}>
        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
        <span className="font-semibold text-black">Canada Express Entry CRS: 512</span>
      </div>
    </div>
  );
}
