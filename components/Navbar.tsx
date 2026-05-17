"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";

const headerVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Navbar() {
  const { lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links =
    lang === "ID"
      ? [
        { name: "Beranda", href: "#home" },
        { name: "Tentang", href: "#about" },
        { name: "Layanan", href: "#services" },
        { name: "Proyek", href: "#projects" },
        { name: "Keahlian", href: "#skills" },
        // { name: "Sertifikat", href: "#certificates" },
        // { name: "Kontak", href: "#contact" },
      ]
      : [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        // { name: "Certificates", href: "#certificates" },
        // { name: "Contact", href: "#contact" },
      ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-transparent backdrop-blur-md border-b border-foreground/20 py-2"
        : "bg-transparent border-transparent py-4"
        }`}
    >
      <nav className="w-full flex items-center justify-between px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-medium tracking-tight"
        >
          <Link href="/">Achmad Aidhil</Link>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-foreground">
          {links.map((link) => (
            <motion.div
              key={link.href}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                onClick={handleNavClick}
                className="hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            className="px-2 py-1 md:px-3 text-xs md:text-sm border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            {lang}
          </motion.button>
          {mounted && (
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 md:p-2 hover:opacity-70 transition-opacity rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
            </motion.button>
          )}

          {/* Mobile Menu Toggle */}
          <motion.button
            variants={itemVariants}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 hover:opacity-70 transition-opacity rounded-full"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-foreground/10 overflow-hidden"
          >
            <div className="flex flex-col px-8 py-4 space-y-4 text-foreground">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-lg font-medium hover:opacity-70 transition-opacity py-2 border-b border-foreground/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
