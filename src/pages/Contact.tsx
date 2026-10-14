import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, MapPin, Linkedin } from "lucide-react";
import SEO from "../components/SEO";
import { webPageSchema, breadcrumbSchema, contactPageSchema, speakableSchema } from "../lib/structuredData";
import { contact } from "../lib/data";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact FlewOps Global — Start Your Digital Transformation"
        description="Get in touch with FlewOps Global. Email business@flewops.com or call +91 88255 72114. Let's build secure, scalable digital solutions for your business."
        keywords="contact FlewOps Global, hire software development company, enterprise solutions contact, digital transformation consultation, ERP development inquiry"
        path="/contact"
        jsonLd={[
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          speakableSchema("/contact"),
        ]}
      />

      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-lime/20 blur-3xl animate-blob" />
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-cyan/15 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
              Get in touch{" "}
              <span className="bg-gradient-to-r from-lime via-cyan to-violet bg-clip-text text-transparent">
                with us!
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              We'd love to hear from you! Whether you have questions about our
              services, want a consultation, or are ready to start a project —
              our team is here to help.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-ink-2 p-6 transition-colors hover:border-lime/40"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-lime">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-white/50">Email us</div>
                  <div className="font-display text-lg font-semibold">{contact.email}</div>
                </div>
                <ArrowUpRight className="ml-auto h-5 w-5 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:text-lime" />
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-ink-2 p-6 transition-colors hover:border-cyan/40"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-cyan">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-white/50">Call us</div>
                  <div className="font-display text-lg font-semibold">{contact.phone}</div>
                </div>
                <ArrowUpRight className="ml-auto h-5 w-5 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:text-cyan" />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-ink-2 p-6 transition-colors hover:border-magenta/40"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-magenta">
                  <Linkedin className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-white/50">Connect</div>
                  <div className="font-display text-lg font-semibold">FlewOps Global on LinkedIn</div>
                </div>
                <ArrowUpRight className="ml-auto h-5 w-5 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:text-magenta" />
              </a>

              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-sm text-white/50">
                <MapPin className="h-5 w-5 text-orange" />
                Serving clients globally · HQ India
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Project inquiry from ${data.get("name") || "someone"}`);
                const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
                window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
              }}
              className="rounded-3xl border border-white/10 bg-ink-2 p-6 sm:p-8"
            >
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <p className="mt-1 text-sm text-white/50">We'll get back to you within 24 hours.</p>
              <div className="mt-6 grid gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">Name</label>
                  <input name="name" required placeholder="Jane Doe" className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-lime/60" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">Email</label>
                  <input name="email" type="email" required placeholder="jane@company.com" className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-lime/60" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">What are you building?</label>
                  <textarea name="message" required rows={4} placeholder="A secure ERP for a 200-person team..." className="w-full resize-none rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-lime/60" />
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-lime to-cyan px-6 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.02]">
                  Send inquiry <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
