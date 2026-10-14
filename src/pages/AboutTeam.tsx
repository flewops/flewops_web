import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import SEO from "../components/SEO";
import { breadcrumbSchema, profilePageSchema, speakableSchema } from "../lib/structuredData";
import { teamMembers, perks } from "../lib/data";

export default function AboutTeam() {
  return (
    <>
      <SEO
        title="Our Team — Meet the People Behind FlewOps Global"
        description="Meet the passionate engineers, designers, and innovators shaping the future of FlewOps Global every day. Explore our team culture, perks, and life at FlewOps."
        keywords="FlewOps team, software engineers, technology team, company culture, life at FlewOps, tech careers, engineering team, flexible work"
        path="/about/team"
        jsonLd={[
          profilePageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about/company" },
            { name: "Our Team", path: "/about/team" },
          ]),
          speakableSchema("/about/team"),
        ]}
      />

      {/* HEADER */}
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-cyan/20 blur-3xl animate-blob" />
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-lime/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-lime via-cyan to-violet bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              The people shaping the future of FlewOps every single day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={m.image} alt={`${m.name} — ${m.role} at FlewOps Global`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-xl font-bold">{m.name}</h3>
                    <p className="text-sm text-lime">{m.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Open positions placeholder cards */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={`open-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.05 }}
                className="group relative flex aspect-[3/4] flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center transition-colors hover:border-lime/40 hover:bg-lime/5"
              >
                <span className="font-display text-5xl text-white/15">?</span>
                <p className="text-sm font-medium text-white/40">Could be you</p>
                <Link to="/about/careers" className="text-xs font-semibold text-lime hover:underline">
                  Join us →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT FLEWOPS */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-magenta" /> Life at FlewOps
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Great work comes from a great workplace.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              At FlewOps, we blend innovation, fun, and flexibility to empower
              our team every day.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl border border-white/10 bg-ink-2 p-7 transition-colors hover:border-white/25"
              >
                <span className="text-4xl">{p.emoji}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-lime/20 to-transparent p-8 text-center sm:p-12">
            <Quote className="mx-auto h-10 w-10 text-lime" />
            <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed text-white/90 sm:text-3xl">
              "Build a team so strong that no one from outside can tell who the boss is!"
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Want to join the team?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
              We're always looking for talented, hardworking people.
            </p>
            <Link
              to="/about/careers"
              className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              View open roles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
