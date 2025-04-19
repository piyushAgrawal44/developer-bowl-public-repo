import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navabar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add required font weights
});

export const metadata: Metadata = {
  title: "Developer Bowl - Innovate with Us",
  description: "Join Developer Bowl, a hub for cutting-edge development, insights, and collaboration.",
  keywords: "Developer Bowl, Next.js, React, Web Development, Programming",
  openGraph: {
    title: "Developer Bowl - Innovate with Us",
    description: "A leading platform for developers to collaborate and build amazing projects.",
    url: "https://developerbowl.com", // Update with actual domain
    siteName: "Developer Bowl",
    images: [
      {
        url: "/images/og-image.jpg", // Update with actual OG image
        width: 1200,
        height: 630,
        alt: "Developer Bowl Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@developerbowl", // Update with actual Twitter handle
    title: "Developer Bowl - Innovate with Us",
    description: "Join Developer Bowl, a hub for cutting-edge development, insights, and collaboration.",
    images: ["/images/twitter-card.jpg"], // Update with actual Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Developer Bowl Team" />

        <link rel="icon" href="favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="viyUCmafqXFrP9ddyKOVuRLeocHfUrrYSw7G-wR5XWY" />
      </head>
      <body className={`${poppins.variable} antialiased max-w-[1660px] mx-auto`}>
        <Analytics />
        <Toaster position="top-right" />
        <Navbar />
        <main className="flex-1 px-5 md:px-11 mx-auto max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
