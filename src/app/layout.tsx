import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import InteractiveCursorGlow from "@/components/InteractiveCursorGlow";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "VisaEnsure | Your Trusted Visa Companion",
  description: "Experience luxury travel and high-trust immigration consultancy. Expert visa guidance for study, work, migration, and tourism from Hyderabad to the world.",
  keywords: ["visa consultancy", "study abroad", "immigration platform", "work visa", "PR visa", "Hyderabad visa consultants", "VisaEnsure"],
  metadataBase: new URL("https://www.visaensure.com"),
  openGraph: {
    title: "VisaEnsure | Your Trusted Visa Companion",
    description: "Expert visa guidance for study, work, migration, and tourism with a trusted success-driven process.",
    url: "https://www.visaensure.com",
    siteName: "VisaEnsure",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisaEnsure | Your Trusted Visa Companion",
    description: "Your Future Has No Borders. Expert immigration and visa services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/globe.gl" strategy="beforeInteractive" />
      </head>
      <body className="min-h-full flex flex-col font-body bg-white text-black" suppressHydrationWarning>
        <InteractiveCursorGlow />
        {children}
      </body>
    </html>
  );
}
