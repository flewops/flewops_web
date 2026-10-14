import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { services, contact } from "../lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-2/50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="FlewOps Global logo"
                className="h-9 w-9 object-contain drop-shadow-[0_0_10px_rgba(196,255,0,0.45)]"
              />
              <span className="font-display text-lg font-semibold tracking-tight">
                FlewOps<span className="text-lime">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              FlewOps Global is a forward-thinking technology company delivering
              innovative, secure, and scalable digital solutions for modern
              enterprises. From ERP and data security to AI automation — we
              build the backbone your business runs on.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/about/company" className="text-sm text-white/65 hover:text-white">Our Company</Link></li>
              <li><Link to="/about/team" className="text-sm text-white/65 hover:text-white">Our Team</Link></li>
              <li><Link to="/about/careers" className="text-sm text-white/65 hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="text-sm text-white/65 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-white/65 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-white/65 hover:text-white">
                  <Mail className="h-4 w-4 text-lime" /> {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-white/65 hover:text-white">
                  <Phone className="h-4 w-4 text-cyan" /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/65 hover:text-white">
                  <Linkedin className="h-4 w-4 text-magenta" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} FlewOps Global. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Privacy Policy | Cookies | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
