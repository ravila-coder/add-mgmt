"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { QuickLinks } from "@/components/quick-links";

/**
 * Símbolo motif — a faint field of rounded squares echoing the Addem mark
 * (the LATAM map rendered as a cluster of square modules). Deterministic
 * layout so server and client render identically.
 */
function SymbolField() {
  const cells: { x: number; y: number; d: number; o: number }[] = [];
  const rand = (a: number, b: number) => {
    const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
    return s - Math.floor(s);
  };
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 12; col++) {
      const r = rand(row, col);
      if (r > 0.72) {
        cells.push({
          x: col * 64 + 8,
          y: row * 64 + 8,
          d: 1.5 + r * 2,
          o: 0.04 + r * 0.08,
        });
      }
    }
  }
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-[420px] w-full"
      viewBox="0 0 768 448"
      preserveAspectRatio="xMidYMin slice"
    >
      {cells.map((c, i) => (
        <motion.rect
          key={i}
          x={c.x}
          y={c.y}
          width={40}
          height={40}
          rx={9}
          fill="#b0ebc2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, c.o, c.o * 0.4, c.o] }}
          transition={{
            duration: 6 + c.d,
            delay: c.d,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 + i * 0.11, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-36">
      {/* Ambient deep-green glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-340px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-green-800/40 blur-[140px]"
      />
      <SymbolField />

      <div className="relative mx-auto flex max-w-page flex-col items-center px-5 text-center sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <Image
            src="/logos/ac-symbol-mint.png"
            alt=""
            width={48}
            height={48}
            priority
            className="mx-auto h-11 w-11 md:h-12 md:w-12"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-7 text-lg font-light text-mint-300/90 md:text-xl"
        >
          Welcome
        </motion.p>

        {/* Wordmark as the title, "Management System" set in Inter Tight below */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-5 flex flex-col items-center"
        >
          <Image
            src="/logos/ac-horizontal-white.png"
            alt="Addem Capital"
            width={520}
            height={104}
            priority
            className="h-9 w-auto sm:h-11 md:h-14"
          />
          <span className="mt-4 bg-gradient-to-r from-offwhite/90 via-mint-200 to-mint-300/80 bg-clip-text text-xl font-light uppercase tracking-[0.32em] text-transparent sm:text-2xl sm:tracking-[0.38em] md:mt-5 md:text-[1.75rem]">
            Management&nbsp;System
          </span>
        </motion.h1>

        {/* Primary access — first thing an investor sees */}
        <QuickLinks />
      </div>
    </section>
  );
}
