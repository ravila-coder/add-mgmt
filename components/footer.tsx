import Image from "next/image";
import { links } from "@/lib/site";

const footerLinks = [
  { label: "Privacy", href: `${links.website}/aviso-de-privacidad` },
  { label: "Terms", href: links.website },
  { label: "Contact", href: `${links.website}/contact-us` },
];

export function Footer() {
  return (
    <footer className="border-t border-offwhite/[0.06]">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logos/ac-horizontal-white.png"
            alt="Addem Capital"
            width={110}
            height={22}
            className="h-5 w-auto opacity-70"
          />
          <span className="text-xs font-light text-offwhite/35">2026</span>
        </div>

        <nav className="flex items-center gap-7">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-offwhite/45 transition-colors hover:text-offwhite"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
