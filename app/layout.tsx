import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LangProvider } from "@/context/LangContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Achmad Aidhil - Portfolio",
  description: "Personal portfolio of Achmad Aidhil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="dqzwnfyomiDhrhTWKmyOKVYGbhkUo4eqUS1tV3Vs_Io" />
      </head>
      <body className="min-h-full flex flex-col font-sans font-light">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LangProvider>
            <Navbar />
            {children}
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
