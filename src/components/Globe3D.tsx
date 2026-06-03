"use client";

import React, { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import Script from "next/script";
import * as THREE from "three";

// Custom country-specific info mapping
const COUNTRY_DETAILS: Record<string, { capital: string; timezone: string; offset: number; visas: string[] }> = {
  "United States of America": { capital: "Washington, D.C.", timezone: "EST", offset: -5, visas: ["F-1 Student", "H-1B Work", "B1/B2 Visitor", "EB-5 Investor"] },
  "United States": { capital: "Washington, D.C.", timezone: "EST", offset: -5, visas: ["F-1 Student", "H-1B Work", "B1/B2 Visitor", "EB-5 Investor"] },
  "Canada": { capital: "Ottawa", timezone: "EST", offset: -5, visas: ["Express Entry PR", "Student Visa", "Work Permit", "Super Visa"] },
  "United Kingdom": { capital: "London", timezone: "GMT", offset: 0, visas: ["Student Visa", "Skilled Worker", "Standard Visitor", "Innovator Founder"] },
  "Australia": { capital: "Canberra", timezone: "AEST", offset: 10, visas: ["Subclass 189 PR", "Subclass 500 Student", "TSS 482 Work"] },
  "Germany": { capital: "Berlin", timezone: "CET", offset: 1, visas: ["Opportunity Card", "Student Visa", "Schengen Visitor", "EU Blue Card"] },
  "Ireland": { capital: "Dublin", timezone: "GMT", offset: 0, visas: ["Stamp 1G / Stamp 4", "Higher Education Student", "C-Visit Visitor"] },
  "New Zealand": { capital: "Wellington", timezone: "NZST", offset: 12, visas: ["Accredited Work", "Fee Paying Student", "Visitor Visa"] },
  "India": { capital: "New Delhi", timezone: "IST", offset: 5.5, visas: ["e-Tourist Visa", "Business Visa", "Employment Visa"] },
  "France": { capital: "Paris", timezone: "CET", offset: 1, visas: ["Talent Passport", "Long-stay Student", "Schengen Tourism"] },
  "Singapore": { capital: "Singapore", timezone: "SGT", offset: 8, visas: ["Employment Pass", "Student Pass", "Social Visit Pass"] },
  "United Arab Emirates": { capital: "Abu Dhabi", timezone: "GST", offset: 4, visas: ["Golden Visa", "Green Visa", "Tourist Visa"] },
  "Schengen Area": { capital: "Brussels", timezone: "CET", offset: 1, visas: ["Schengen Business", "Schengen Tourist", "Long-term Study"] }
};

// Labels for major continents and oceans
const LABELS_DATA = [
  { lat: 37.0902, lng: -95.7129, text: "North America", size: 1.8, color: "#FFFFFF" },
  { lat: -14.2350, lng: -51.9253, text: "South America", size: 1.8, color: "#FFFFFF" },
  { lat: 48.3794, lng: 31.1656, text: "Europe", size: 1.8, color: "#FFFFFF" },
  { lat: 34.0479, lng: 100.6197, text: "Asia", size: 1.8, color: "#FFFFFF" },
  { lat: -8.7832, lng: 34.5085, text: "Africa", size: 1.8, color: "#FFFFFF" },
  { lat: -25.2744, lng: 133.7751, text: "Australia", size: 1.8, color: "#FFFFFF" },
  { lat: -10.0, lng: -140.0, text: "Pacific Ocean", size: 1.4, color: "#FFA54F" },
  { lat: 15.0, lng: -30.0, text: "Atlantic Ocean", size: 1.4, color: "#FFA54F" },
  { lat: -20.0, lng: 80.0, text: "Indian Ocean", size: 1.4, color: "#FFA54F" }
];

export default function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);
  const geoJsonData = useRef<any>(null);
  const cloudAnimId = useRef<number | null>(null);
  const airplanesRef = useRef<any[]>([]);

  // Preload heavy textures to dramatically speed up the globe loading time
  preload('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg', { as: 'image' });
  preload('https://unpkg.com/three-globe/example/img/earth-topology.png', { as: 'image' });
  preload('https://unpkg.com/three-globe/example/img/earth-water.png', { as: 'image' });
  preload('https://unpkg.com/three-globe/example/img/earth-clouds10k.png', { as: 'image' });

  // Helper: ISO code to flag emoji
  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode || countryCode.length !== 2) return "🌐";
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map(char => 127397 + char.charCodeAt(0));
    try {
      return String.fromCodePoint(...codePoints);
    } catch (e) {
      return "🌐";
    }
  };

  // Helper: Local Time computation based on offset
  const getLocalTime = (offset: number) => {
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * offset));
    return nd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  // Parse rich country details on hover
  const getCountryInfo = (properties: any) => {
    const name = properties.ADMIN || properties.NAME || "Unknown Country";
    const iso2 = properties.ISO_A2 || "";
    const flag = getFlagEmoji(iso2);

    let detail = COUNTRY_DETAILS[name] || COUNTRY_DETAILS[iso2];

    if (!detail) {
      // Fallback calculation using longitude
      const lng = properties.LABEL_X || 0;
      const offset = Math.round(lng / 15);
      detail = {
        capital: "Info N/A",
        timezone: `GMT${offset >= 0 ? '+' : ''}${offset}`,
        offset,
        visas: ["Study Visa", "Visitor Visa"]
      };
    }

    const localTime = getLocalTime(detail.offset);
    const offsetString = `UTC${detail.offset >= 0 ? '+' : ''}${detail.offset}`;

    return {
      name,
      flag,
      capital: detail.capital,
      timezone: detail.timezone,
      offsetString,
      localTime,
      visas: detail.visas
    };
  };

  useEffect(() => {
    // Fetch world countries GeoJSON with force-cache for instant loads after first visit
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson', { cache: "force-cache" })
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
        .atmosphereColor('#3a86ff') // Soft atmospheric blue glow
        .atmosphereAltitude(0.22)
        
        // Photorealistic Earth textures
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')

        // Continent and ocean text labels
        .labelsData(LABELS_DATA)
        .labelLat((d: any) => d.lat)
        .labelLng((d: any) => d.lng)
        .labelText((d: any) => d.text)
        .labelSize((d: any) => d.size)
        .labelColor((d: any) => d.color)
        .labelDotRadius(0)
        .labelAltitude(0.015)
        .labelResolution(2)

        // Interactive polygons (for country highlighting)
        .polygonsData(geoJsonData.current.features)
        .polygonAltitude(0.005)
        .polygonCapColor((d: any) => 'rgba(0, 0, 0, 0)') // fully transparent by default
        .polygonSideColor(() => 'rgba(0, 0, 0, 0)')
        .polygonStrokeColor(() => 'rgba(255, 255, 255, 0.08)') // ultra subtle borders

        // Customized premium tooltips
        .polygonLabel((d: any) => {
          const info = getCountryInfo(d.properties);
          return `
            <div style="background: rgba(10, 10, 10, 0.94); border: 1px solid rgba(255, 107, 0, 0.4); padding: 12px 16px; border-radius: 12px; color: #ffffff; font-family: system-ui, -apple-system, sans-serif; font-size: 13px; min-width: 220px; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.6); backdrop-filter: blur(10px); pointer-events: none;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 22px;">${info.flag}</span>
                <div>
                  <strong style="color: #ffffff; font-size: 14px; font-weight: 600; display: block; line-height: 1.2;">${info.name}</strong>
                  <span style="font-size: 11px; color: #a1a1aa; font-weight: 500;">Capital: ${info.capital}</span>
                </div>
              </div>
              <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px; margin-top: 8px; display: flex; flex-direction: column; gap: 4px;">
                <div style="display: flex; justify-content: space-between; font-size: 11px;">
                  <span style="color: #a1a1aa;">Local Time:</span>
                  <strong style="color: #FF6B00; font-weight: 600;">${info.localTime}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 11px;">
                  <span style="color: #a1a1aa;">Timezone:</span>
                  <span style="color: #ffffff; font-weight: 500;">${info.timezone} (${info.offsetString})</span>
                </div>
              </div>
              <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px; margin-top: 8px;">
                <span style="font-size: 9px; font-weight: 700; color: #FF6B00; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Visa Services</span>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  ${info.visas.map(v => `<span style="font-size: 9px; background: rgba(255, 107, 0, 0.15); border: 1px solid rgba(255, 107, 0, 0.3); color: #FFA54F; padding: 2px 6px; border-radius: 4px; font-weight: 500;">${v}</span>`).join('')}
                </div>
              </div>
            </div>
          `;
        })
        .onPolygonHover((hoverD: any) => globe
          .polygonCapColor((d: any) => d === hoverD ? 'rgba(255, 107, 0, 0.22)' : 'rgba(0, 0, 0, 0)')
          .polygonStrokeColor((d: any) => d === hoverD ? 'rgba(255, 107, 0, 0.8)' : 'rgba(255, 255, 255, 0.08)')
        )
        .polygonsTransitionDuration(200);

      // Access ThreeJS scene and setup custom lighting + materials
      const scene = globe.scene();
      const globeMaterial = globe.globeMaterial();
      const textureLoader = new THREE.TextureLoader();

      // Specular ocean map (to reflect sunlight)
      const waterTexture = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-water.png');
      if (globeMaterial.isMeshPhongMaterial) {
        globeMaterial.specularMap = waterTexture;
        globeMaterial.specular = new THREE.Color(0x222222);
        globeMaterial.shininess = 25;
      } else if (globeMaterial.isMeshStandardMaterial) {
        globeMaterial.roughnessMap = waterTexture;
        globeMaterial.roughness = 0.65;
        globeMaterial.metalnessMap = waterTexture;
        globeMaterial.metalness = 0.1;
      }

      // Emissive night city-lights map (visible on shadowed side)
      const nightTexture = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-night.jpg');
      globeMaterial.emissiveMap = nightTexture;
      globeMaterial.emissive = new THREE.Color(0xffbb77); // soft amber glow
      globeMaterial.emissiveIntensity = 2.5;

      // Add Custom Dynamic Cloud Layer
      const radius = globe.getGlobeRadius();
      const cloudGeometry = new THREE.SphereGeometry(radius * 1.010, 64, 64);
      const cloudMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load('https://unpkg.com/three-globe/example/img/earth-clouds10k.png'),
        transparent: true,
        opacity: 0.35,
        depthWrite: false
      });
      const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
      scene.add(clouds);

      // Create Airplane Mesh Factory (Highly Detailed Passenger Jet Structure)
      const createAirplane = () => {
        const group = new THREE.Group();
        const mat = new THREE.MeshStandardMaterial({ 
          color: 0xffffff, 
          emissive: 0xFF6B00, 
          emissiveIntensity: 1.2,
          roughness: 0.3,
          metalness: 0.6
        });
        
        // 1. Main Fuselage
        const fuselageGeo = new THREE.CylinderGeometry(0.4, 0.4, 4.5, 32);
        fuselageGeo.rotateX(Math.PI / 2);
        const fuselage = new THREE.Mesh(fuselageGeo, mat);

        // 2. Nose Cone
        const noseGeo = new THREE.ConeGeometry(0.4, 1.5, 32);
        noseGeo.rotateX(Math.PI / 2);
        const nose = new THREE.Mesh(noseGeo, mat);
        nose.position.z = 3.0; // Attach to front of fuselage

        // 3. Tail Cone
        const tailConeGeo = new THREE.ConeGeometry(0.4, 1.2, 32);
        tailConeGeo.rotateX(-Math.PI / 2);
        const tailCone = new THREE.Mesh(tailConeGeo, mat);
        tailCone.position.z = -2.85; // Attach to rear

        // 4. Main Wings (Swept back)
        const wingGeo = new THREE.BoxGeometry(4.0, 0.15, 1.5);
        const rightWing = new THREE.Mesh(wingGeo, mat);
        rightWing.position.set(1.8, 0, 0.5);
        rightWing.rotation.y = -0.5; // Sweep back angle
        
        const leftWing = new THREE.Mesh(wingGeo, mat);
        leftWing.position.set(-1.8, 0, 0.5);
        leftWing.rotation.y = 0.5;

        // 5. Vertical Stabilizer (Tail Fin)
        const finGeo = new THREE.BoxGeometry(0.15, 1.8, 1.5);
        const fin = new THREE.Mesh(finGeo, mat);
        fin.position.set(0, 0.9, -2.8);
        fin.rotation.x = -0.5; // Sweep backwards

        // 6. Horizontal Stabilizers
        const hStabGeo = new THREE.BoxGeometry(2.0, 0.1, 0.8);
        const rightHStab = new THREE.Mesh(hStabGeo, mat);
        rightHStab.position.set(0.8, 0, -3.0);
        rightHStab.rotation.y = -0.5;

        const leftHStab = new THREE.Mesh(hStabGeo, mat);
        leftHStab.position.set(-0.8, 0, -3.0);
        leftHStab.rotation.y = 0.5;

        group.add(fuselage, nose, tailCone, rightWing, leftWing, fin, rightHStab, leftHStab);
        
        // Massive overall scale
        group.scale.set(1.4, 1.4, 1.4); 
        return group;
      };

      // Define major international flight routes (Expanded for dense air traffic)
      const FLIGHTS = [
        { from: [28.6139, 77.2090], to: [40.7128, -74.0060] }, // Delhi -> NY
        { from: [28.6139, 77.2090], to: [51.5074, -0.1278] }, // Delhi -> London
        { from: [28.6139, 77.2090], to: [-33.8688, 151.2093] }, // Delhi -> Sydney
        { from: [40.7128, -74.0060], to: [51.5074, -0.1278] }, // NY -> London
        { from: [51.5074, -0.1278], to: [25.2048, 55.2708] }, // London -> Dubai
        { from: [25.2048, 55.2708], to: [1.3521, 103.8198] }, // Dubai -> Singapore
        { from: [1.3521, 103.8198], to: [-33.8688, 151.2093] }, // Singapore -> Sydney
        { from: [43.6510, -79.3470], to: [28.6139, 77.2090] }, // Toronto -> Delhi
        { from: [48.8566, 2.3522], to: [35.6762, 139.6503] }, // Paris -> Tokyo
        { from: [-23.5505, -46.6333], to: [40.7128, -74.0060] }, // Sao Paulo -> NY
        { from: [-23.5505, -46.6333], to: [51.5074, -0.1278] }, // Sao Paulo -> London
        { from: [-33.9249, 18.4241], to: [51.5074, -0.1278] }, // Cape Town -> London
        { from: [-33.9249, 18.4241], to: [25.2048, 55.2708] }, // Cape Town -> Dubai
        { from: [35.6762, 139.6503], to: [37.7749, -122.4194] }, // Tokyo -> SF
        { from: [37.7749, -122.4194], to: [40.7128, -74.0060] }, // SF -> NY
        { from: [19.0760, 72.8777], to: [51.5074, -0.1278] }, // Mumbai -> London
        { from: [19.0760, 72.8777], to: [1.3521, 103.8198] }, // Mumbai -> Singapore
        { from: [39.9042, 116.4074], to: [40.7128, -74.0060] }, // Beijing -> NY
        { from: [39.9042, 116.4074], to: [48.8566, 2.3522] }, // Beijing -> Paris
        { from: [55.7558, 37.6173], to: [25.2048, 55.2708] }, // Moscow -> Dubai
        { from: [41.9028, 12.4964], to: [40.7128, -74.0060] }, // Rome -> NY
        { from: [34.0522, -118.2437], to: [-33.8688, 151.2093] }, // LA -> Sydney
        { from: [34.0522, -118.2437], to: [35.6762, 139.6503] }, // LA -> Tokyo
        { from: [-34.6037, -58.3816], to: [40.4168, -3.7038] }, // Buenos Aires -> Madrid
        { from: [40.4168, -3.7038], to: [25.2048, 55.2708] }, // Madrid -> Dubai
      ];

      // Initialize airplanes
      const airplanes: any[] = [];
      FLIGHTS.forEach(route => {
        const mesh = createAirplane();
        scene.add(mesh);
        
        const start = globe.getCoords(route.from[0], route.from[1], 0);
        const end = globe.getCoords(route.to[0], route.to[1], 0);
        
        airplanes.push({
          mesh,
          start: new THREE.Vector3(start.x, start.y, start.z),
          end: new THREE.Vector3(end.x, end.y, end.z),
          progress: Math.random(), // Staggered start times
          speed: 0.0015 + Math.random() * 0.0015, // Variable speeds
        });
      });
      airplanesRef.current = airplanes;

      // Animate clouds rotation and flight arcs independently
      const animateScene = () => {
        if (clouds) clouds.rotation.y += 0.0005;

        airplanesRef.current.forEach(plane => {
          plane.progress += plane.speed;
          if (plane.progress > 1) plane.progress = 0;
          
          // Parabolic altitude for takeoff and landing
          const currentAlt = 1.001 + Math.sin(plane.progress * Math.PI) * 0.12;
          
          // Slerp for realistic curved trajectory across the globe
          const currentPos = new THREE.Vector3().copy(plane.start).lerp(plane.end, plane.progress).normalize().multiplyScalar(radius * currentAlt);
          plane.mesh.position.copy(currentPos);
          
          // Point the airplane in the direction of travel
          const nextPos = new THREE.Vector3().copy(plane.start).lerp(plane.end, plane.progress + 0.01).normalize().multiplyScalar(radius * currentAlt);
          plane.mesh.lookAt(nextPos);
        });

        cloudAnimId.current = requestAnimationFrame(animateScene);
      };
      animateScene();

      // Configure Day/Night Cycle Lighting (Statically Aligned Sun)
      const defaultLights = scene.children.filter((c: any) => c.isLight);
      defaultLights.forEach((light: any) => scene.remove(light)); // clear camera-following lights

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.20); // soft night visibility
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xffffff, 2.2); // strong direct daylight
      sunLight.position.set(-150, 40, 100); // sun shines from front-left
      scene.add(sunLight);

      globeInstance.current = globe;
      
      // Setup controls
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 1.8; // Faster rotation speed as requested
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
      setTimeout(handleResize, 100); // Initial resize trigger

      return () => {
        window.removeEventListener('resize', handleResize);
        if (cloudAnimId.current) cancelAnimationFrame(cloudAnimId.current);
        if (scene) {
          if (clouds) scene.remove(clouds);
          airplanesRef.current.forEach(p => scene.remove(p.mesh));
        }
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
        globeInstance.current = null;
      };
    }
  }, [dataLoaded, globeReady]);

  return (
    <div className="relative w-full h-[450px] md:h-[650px] lg:h-[700px] flex items-center justify-center overflow-visible">
      {/* Load globe.gl via unpkg */}
      <Script 
        src="https://unpkg.com/globe.gl" 
        strategy="afterInteractive" 
        onLoad={() => setGlobeReady(true)}
      />
      
      {/* Background soft orange atmospheric glow behind the globe */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.14)_0%,transparent_65%)] pointer-events-none z-0" />

      {/* Globe Container */}
      <div ref={containerRef} className="w-full h-full relative z-10 cursor-crosshair" />

      {/* Floating real-time visa updates (Premium Touch) */}
      <div className="absolute top-[12%] right-[8%] glass border-white/10 p-3.5 rounded-2xl text-xs flex items-center gap-2.5 animate-float shadow-xl z-20 pointer-events-none bg-white/70 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
        <span className="font-semibold text-black tracking-wide">VE-2026: USA F-1 Approved</span>
      </div>
      <div className="absolute bottom-[18%] left-[5%] glass border-white/10 p-3.5 rounded-2xl text-xs flex items-center gap-2.5 animate-float shadow-xl z-20 pointer-events-none bg-white/70 backdrop-blur-md" style={{ animationDelay: "1.8s" }}>
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="font-semibold text-black tracking-wide">Canada Express Entry CRS: 512</span>
      </div>
    </div>
  );
}
