"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Briefcase,
  User,
  BookOpen,
  X,
  Menu,
  LucideIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

type NavLinkType = {
  href: string;
  text: string;
  icon?: LucideIcon;
  isButton?: boolean;
};

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLinkType[] = [
    { href: "#about", text: "About", icon: User },
    { href: "#projects", text: "Projects", icon: Code2 },
    { href: "#blog", text: "Blog", icon: BookOpen },
    { href: "#experience", text: "Experience", icon: Briefcase },
    { href: "#contact", text: "Contact", isButton: true },
  ];

  if (!isMounted) {
    return (
      <nav className="fixed top-1 left-0 right-0 z-20 bg-black/80 backdrop-blur-md border-b border-white/10 h-16 transition-all duration-300" />
    );
  }

  return (
    <>
      <nav
        className={`fixed top-1 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "bg-black/90 border-white/10 shadow-xl h-16"
            : "bg-black/70 border-transparent h-19"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Name with cool hover effect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Link
                href="/"
                className="text-white font-bold text-xl flex items-center gap-2 group"
              >
                <motion.div
                  className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 group-hover:rotate-12 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Code2 className="text-white" size={24} />
                </motion.div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Sithum Sandaruwan
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ y: -2 }}
                >
                  <NavLink link={link} />
                </motion.div>
              ))}
            </div>

            {/* Modern Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative p-2 text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-6 h-6 transition-all duration-300 relative ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <span
                    className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? "rotate-45 top-1/2" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? "opacity-0 top-1/2" : "top-1/2 -translate-y-1/2"
                    }`}
                  />
                  <span
                    className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? "-rotate-45 top-1/2" : "bottom-0"
                    }`}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-40 pt-24 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                      },
                    }}
                    whileHover={{ x: 5 }}
                    className="border-b border-white/10 last:border-0"
                  >
                    <NavLink
                      link={link}
                      onClick={() => setIsOpen(false)}
                      className="text-xl py-4 block hover:pl-4 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Enhanced NavLink component
function NavLink({
  link,
  onClick,
  className = "",
}: {
  link: NavLinkType;
  onClick?: () => void;
  className?: string;
}) {
  const Icon = link.icon;
  return (
    <Link
      href={link.href}
      className={`relative group ${
        link.isButton
          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2 rounded-full shadow-lg"
          : "text-gray-300 hover:text-white"
      } px-3 py-2 font-medium flex items-center justify-center gap-2 ${className}`}
      onClick={onClick}
    >
      {Icon && (
        <motion.span
          className="group-hover:text-blue-400 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Icon size={20} />
        </motion.span>
      )}
      <span className="relative">
        {link.text}
        {!link.isButton && (
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
        )}
      </span>
    </Link>
  );
}
