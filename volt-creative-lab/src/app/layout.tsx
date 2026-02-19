import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientNavbarWrapper from "@/components/ClientNavbarWrapper";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Volt Creative Lab - Web Design & Development | Global Creative Agency",
  description:
    "Award-winning creative agency offering web design, web development, graphic design, and digital solutions. Serving clients in Nigeria, Belgium, UK, Europe, USA, and globally.",
  keywords: [
    "web design",
    "web development",
    "graphic design",
    "creative agency",
    "digital agency",
    "branding",
    "logo design",
    "UI/UX design",
    "responsive web design",
    "e-commerce development",
    "mobile app development",
    "digital marketing",
    "social media design",
    "website development",
    "creative services",
    "design agency Nigeria",
    "web agency Nigeria",
    "design agency Belgium",
    "design agency UK",
    "design agency Europe",
    "design agency USA",
    "design agency America",
    "global design agency",
    "international design",
    "professional design",
    "custom web design",
    "brand design",
    "visual design",
    "digital creativity",
    "web solutions",
    "design consultation",
  ].join(", "),
  openGraph: {
    title:
      "Volt Creative Lab - Web Design & Development | Global Creative Agency",
    description:
      "Award-winning creative agency offering web design, web development, graphic design, and digital solutions globally.",
    url: "https://voltcreativelab.com",
    siteName: "Volt Creative Lab",
    images: [
      {
        url: "https://voltcreativelab.com/volt-logo.png",
        width: 800,
        height: 800,
        alt: "Volt Creative Lab Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volt Creative Lab - Web Design & Development",
    description:
      "Global creative agency specializing in web design, development, and graphic design.",
    creator: "@volt_create",
    images: ["https://voltcreativelab.com/volt-logo.png"],
  },
  icons: {
    icon: "/volt-logo.png",
    apple: "/volt-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://voltcreativelab.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Volt Creative Lab",
    url: "https://voltcreativelab.com",
    logo: "https://voltcreativelab.com/volt-logo.png",
    description:
      "Award-winning creative agency offering web design, web development, graphic design, and digital solutions.",
    sameAs: ["https://x.com/volt_create"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "voltcreativelab@gmail.com",
      telephone: "+234 814 352 9665",
    },
    areaServed: ["NG", "BE", "GB", "US", "EU"],
    priceRange: "$$",
    image: "https://voltcreativelab.com/volt-logo.png",
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0814] text-white`}
      >
        <ClientNavbarWrapper />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
