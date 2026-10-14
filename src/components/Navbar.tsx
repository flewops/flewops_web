import { useEffect, useState } from "react";
import { href, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { label } from "framer-motion/client";

const navLinks = [
{
  label: "Turbine",
  href: "https://turbine.flewops.com"
},
  { label: "Services", href: "/services/security", dropdown: [
    { label: "Data Security", href: "/services/security" },
    { label: "ERP Solutions", href: "/services/erp" },
    { label: "E-Commerce", href: "/services/ecom" },
    { label: "AI Solutions", href: "/services/ai" },
    { label: "Real-Time Chat", href: "/services/chat" },
    { label: "Network Solutions", href: "/services/network" },
  ]},
  { label: "About", href: "/about/company", dropdown: [
    { label: "Our Company", href: "/about/company" },
    { label: "Our Team", href: "/about/team" },
    { label: "Careers", href: "/about/careers" },
  ]},
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 backdrop-blur-xl transition-all ${
            scrolled ? "bg-ink-2/80 shadow-2xl shadow-black/40" : "bg-white/5"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="FlewOps Global logo"
              className="h-9 w-9 object-contain drop-shadow-[0_0_10px_rgba(196,255,0,0.45)] transition-transform group-hover:scale-105"
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              FlewOps
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => l.dropdown && setOpenDropdown(l.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={l.href}
                  className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                  {l.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                <AnimatePresence>
                  {l.dropdown && openDropdown === l.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-1 w-56 rounded-2xl border border-white/10 bg-ink-2/95 p-2 backdrop-blur-xl shadow-2xl"
                    >
                      {l.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          to={d.href}
                          className="block rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-lime px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 rounded-2xl border border-white/10 bg-ink-2/95 p-3 backdrop-blur-xl"
            >
              {navLinks.map((l) => (
                <div key={l.label}>
                  <Link
                    to={l.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10"
                  >
                    {l.label}
                  </Link>
                  {l.dropdown && (
                    <div className="ml-3 border-l border-white/10 pl-3">
                      {l.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          to={d.href}
                          className="block rounded-lg px-4 py-2 text-sm text-white/60 hover:bg-white/10"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="mt-2 block rounded-xl bg-lime px-4 py-3 text-center text-base font-semibold text-ink"
              >
                Start a project
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
