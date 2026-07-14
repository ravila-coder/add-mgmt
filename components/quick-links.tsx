"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  Globe,
  Workflow,
} from "lucide-react";
import { links } from "@/lib/site";

const primary = [
  {
    icon: ChartNoAxesCombined,
    title: "Investor Report",
    description: "Interactive reporting platform",
    cta: "Open Report",
    href: links.investorReport,
  },
  {
    icon: Workflow,
    title: "Pipeline",
    description: "Investment pipeline",
    cta: "Open Pipeline",
    href: links.pipeline,
  },
];

const secondary = [
  {
    icon: Globe,
    title: "Website",
    description: "Corporate website",
    cta: "Visit Website",
    href: links.website,
  },
  {
    icon: BookOpen,
    title: "Publications",
    description: "Research & Insights",
    cta: "Read Articles",
    href: links.publications,
  },
];

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

/** Primary access grid — rendered inside the hero so it's the first thing visible. */
export function QuickLinks() {
  return (
    <div className="mt-10 w-full md:mt-14">
      {/* Primary destinations */}
      <div className="grid gap-4 md:grid-cols-2">
        {primary.map((item, i) => (
          <motion.div key={item.title} {...enter(0.45 + i * 0.1)}>
            {/* Gradient hairline frame */}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-gradient-to-br from-mint-300/40 via-offwhite/10 to-transparent p-px transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[15px] bg-night-card p-7 text-left transition-shadow duration-300 group-hover:shadow-lift md:p-9">
                {/* Deep-green radial glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-green-800/50 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-mint-300/[0.07] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-xl bg-mint-300/10 text-mint-300 ring-1 ring-inset ring-mint-300/25">
                    <item.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-offwhite/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint-300" />
                </div>

                <h3 className="relative mt-7 text-2xl font-semibold tracking-display">
                  {item.title}
                </h3>
                <p className="relative mt-1.5 text-[0.9375rem] font-light text-offwhite/55">
                  {item.description}
                </p>

                <span className="relative mt-8 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-mint-300 px-6 text-sm font-semibold text-green-800 transition-colors duration-200 group-hover:bg-mint-200">
                  {item.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Secondary destinations */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {secondary.map((item, i) => (
          <motion.div key={item.title} {...enter(0.65 + i * 0.1)}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-offwhite/[0.08] bg-night-card/70 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-offwhite/[0.16] hover:bg-night-card md:p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-offwhite/[0.08] bg-offwhite/[0.03] text-mint-300/80 transition-colors duration-300 group-hover:text-mint-300">
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold tracking-display">
                  {item.title}
                </h3>
                <p className="mt-0.5 truncate text-sm font-light text-offwhite/50">
                  {item.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-mint-300/90">
                <span className="hidden sm:inline">{item.cta}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
