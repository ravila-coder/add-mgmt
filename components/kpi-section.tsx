"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate,
} from "framer-motion";
import { kpis, kpiFootnote } from "@/lib/site";

function Counter({
  value,
  prefix,
  suffix,
  decimals,
}: {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [inView, reduced, mv, value]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

export function KpiSection() {
  return (
    <section className="relative border-t border-offwhite/[0.06]">
      <div className="mx-auto max-w-page px-5 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: "easeOut" }}
              className="group relative text-center lg:text-left"
            >
              {/* Accent tick */}
              <div className="mx-auto h-1 w-8 rounded-full bg-gradient-to-r from-mint-300 to-green-300 lg:mx-0" />

              <p className="mt-5 bg-gradient-to-br from-offwhite via-mint-200 to-mint-300 bg-clip-text text-4xl font-semibold tracking-display text-transparent md:text-5xl">
                <Counter
                  value={kpi.value}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                  decimals={kpi.decimals}
                />
              </p>
              <p className="mt-3 text-xs font-light uppercase tracking-[0.14em] text-offwhite/50 md:text-sm md:tracking-[0.12em]">
                {kpi.label}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs font-light text-offwhite/30 lg:text-right">
          {kpiFootnote}
        </p>
      </div>
    </section>
  );
}
