import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "VisaEnsure | Premium Global Immigration & Visa Consultancy",
  description: "Experience luxury travel and high-trust immigration consultancy. Expert visa guidance for study, work, migration, and tourism from Hyderabad to the world.",
  keywords: ["visa consultancy", "study abroad", "immigration platform", "work visa", "PR visa", "Hyderabad visa consultants", "VisaEnsure"],
  metadataBase: new URL("https://www.visaensure.com"),
  openGraph: {
    title: "VisaEnsure | Premium Global Immigration & Visa Consultancy",
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
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-white text-black">
        {children}
      </body>
    </html>
  );
}
