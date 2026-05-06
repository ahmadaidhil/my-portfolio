"use client";

import { useLang } from "@/context/LangContext";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/ahmadaidhil_", Icon: InstagramIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@aidhill_", Icon: TikTokIcon },
  { name: "Email", href: "mailto:achmadaidhil2@gmail.com", Icon: Mail },
];

export default function Footer() {
  const { lang } = useLang();

  return (
    <motion.footer
      className="w-full border-t border-foreground/20 py-6 px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} Achmad Aidhil.{" "}
          {lang === "ID" ? "Hak cipta dilindungi." : "All rights reserved."}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-sm">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.Icon className="w-4 h-4" />
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
