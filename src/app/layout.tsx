import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atti-woad.vercel.app"),
  title: "Atti — We build websites, brands, and apps",
  description: "Student-driven creative & tech community helping businesses and individuals build their digital presence affordably.",
  openGraph: {
    title: "Atti — We build websites, brands, and apps",
    description: "Student-driven creative & tech community helping businesses and individuals build their digital presence affordably.",
    url: "https://atti-woad.vercel.app",
    siteName: "Atti",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atti — We build websites, brands, and apps",
    description: "Student-driven creative & tech community helping businesses and individuals build their digital presence affordably.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Atti",
    url: "https://atti-woad.vercel.app",
    logo: "https://atti-woad.vercel.app/globe.svg",
    sameAs: [
      // TODO: replace with actual social links when available
      "https://instagram.com/atti", 
      "https://linkedin.com/company/atti"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "attiofficial.in@gmail.com",
      contactType: "customer service"
    }
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
