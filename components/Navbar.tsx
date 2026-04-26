"use client";

import Link from "next/link";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [lang, setLang] = useState("EN");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="text-xl font-medium tracking-tight">
        <Link href="/">Achmad Aidhil</Link>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center space-x-6 text-sm text-foreground">
        {(lang === "ID" ? [
          { name: "Beranda", href: "/" },
          { name: "Tentang", href: "/about" },
          { name: "Proyek", href: "/projects" },
          { name: "Keahlian", href: "/skills" },
          { name: "Sertifikat", href: "/certificates" },
          { name: "Github", href: "https://github.com" },
          { name: "Kontak", href: "/contact" },
        ] : [
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Projects", href: "/projects" },
          { name: "Skills", href: "/skills" },
          { name: "Certificates", href: "/certificates" },
          { name: "Github", href: "https://github.com" },
          { name: "Contact", href: "/contact" },
        ]).map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="hover:opacity-70 transition-opacity"
            target={link.name === "Github" ? "_blank" : undefined}
            rel={link.name === "Github" ? "noopener noreferrer" : undefined}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
          className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded-full hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
        >
          {lang}
        </button>
        {mounted && (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:opacity-70 transition-opacity rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
      </div>
    </nav>
  );
}
