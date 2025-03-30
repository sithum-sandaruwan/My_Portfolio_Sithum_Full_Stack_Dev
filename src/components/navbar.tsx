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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinks: NavLinkType[] = [
    {
      href: "#about",
      text: "About",
      icon: User,
    },
    {
      href: "#projects",
      text: "Projects",
      icon: Code2,
    },
    {
      href: "#blog", // Updated to point to blog page
      text: "Blog",
      icon: BookOpen,
    },
    {
      href: "#experience", // Updated to point to experience page
      text: "Experience",
      icon: Briefcase,
    },
    {
      href: "#contact",
      text: "Contact",
      isButton: true,
    },
  ];

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-16">
        {/* Empty shell during SSR */}
      </nav>
    );
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link
                href="/"
                className="text-white font-bold text-xl flex items-center gap-2"
              >
                <Code2 className="text-blue-400" />
                Sithum Sandaruwan
              </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <NavLink link={link} />
                </motion.div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-16 bg-black/90 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center space-y-8 p-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-center"
                >
                  <NavLink
                    link={link}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl py-4 block"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// NavLink component with proper typing
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
      className={`${
        link.isButton
          ? "bg-blue-600 hover:bg-blue-700 text-white px-4"
          : "text-gray-300 hover:text-white"
      } 
        px-3 py-2 rounded-md font-medium flex items-center justify-center gap-1 ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon size={20} />}
      {link.text}
    </Link>
  );
}
