"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { links } from "@/lib/site";
import { cn } from "@/lib/utils";

const external = [
  { label: "Website", href: links.website },
  { label: "Publications", href: links.publications },
  { label: "Investor Report", href: links.investorReport },
  { label: "Pipeline", href: links.pipeline },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "glass border-offwhite/[0.08]"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-6 lg:px-8">
        {/* Left — logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="Addem Capital — Home">
          <Image
            src="/logos/ac-horizontal-white.png"
            alt="Addem Capital"
            width={132}
            height={26}
            priority
            className="h-6 w-auto"
          />
        </Link>

        {/* Center — Home */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <Link
            href="/"
            className="text-sm text-offwhite transition-opacity hover:opacity-70"
          >
            Home
          </Link>
        </div>

        {/* Right — external links */}
        <div className="hidden items-center gap-7 md:flex">
          {external.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-offwhite/60 transition-colors hover:text-offwhite"
            >
              {item.label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-70" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-offwhite/80 hover:bg-offwhite/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass border-t border-offwhite/[0.08] px-6 py-4 md:hidden">
          <Link
            href="/"
            className="block py-2.5 text-sm text-offwhite"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          {external.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2.5 text-sm text-offwhite/60 hover:text-offwhite"
              onClick={() => setOpen(false)}
            >
              {item.label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
