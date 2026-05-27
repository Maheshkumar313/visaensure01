import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import ServicePageClient from "@/components/ServicePageClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.id];
  if (!service) return { title: "Service | VisaEnsure" };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

// Generate static parameters for build-time generation of SEO routes
export async function generateStaticParams() {
  return Object.keys(servicesData).map((id) => ({
    id: id,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.id];

  if (!service) {
    notFound();
  }

  // Generate FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Schema Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageClient service={service} />
    </>
  );
}
