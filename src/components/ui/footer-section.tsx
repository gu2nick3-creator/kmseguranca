import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterSectionProps {
  brand: ReactNode;
  description: string;
  cta?: ReactNode;
  columns: FooterColumn[];
  socialLinks?: FooterLink[];
  bottomNote: string;
  className?: string;
}

export function FooterSection({
  brand,
  description,
  cta,
  columns,
  socialLinks,
  bottomNote,
  className,
}: FooterSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
    }),
  };

  return (
    <footer className={cn("bg-green-900 text-green-100", className)}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeUp}
          >
            {brand}
            <p className="text-green-300 text-sm leading-relaxed mt-4 max-w-xs">{description}</p>
            {cta && <div className="mt-5">{cta}</div>}

            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center gap-3 mt-5">
                {socialLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={s.onClick}
                    aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-green-50/10 text-green-200 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          {columns.map((column, colIdx) => (
            <motion.div
              key={column.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={colIdx + 1}
              variants={fadeUp}
            >
              <h4 className="text-green-50 font-semibold text-sm mb-4 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href} className="flex items-start gap-2.5 text-sm text-green-300">
                    {link.icon && <span className="mt-0.5 shrink-0 text-green-400">{link.icon}</span>}
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={link.onClick}
                        className="hover:text-green-50 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={link.onClick}
                        className="hover:text-green-50 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-green-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-green-400">{bottomNote}</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
