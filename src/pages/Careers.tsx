import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Upload, CheckCircle2, Briefcase, ArrowDown } from "lucide-react";
import SEO from "../components/SEO";
import { collectionPageSchema, breadcrumbSchema, speakableSchema } from "../lib/structuredData";
import { contact, perks } from "../lib/data";

const APPLY_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzWpiFuFTSeo0fbe0ATv9aUeL4Ih0OTiuQnPf4BqlqHPbKQMI7595q6CbrDTesWH65y/exec";

const openRoles = [
  { title: "Full-Stack Developer", dept: "Engineering", type: "Full-time", location: "Remote / Hybrid" },
  { title: "Security Engineer", dept: "Engineering", type: "Full-time", location: "Hybrid" },
  { title: "ERP Solutions Architect", dept: "Product", type: "Full-time", location: "On-site" },
  { title: "UI/UX Designer", dept: "Design", type: "Full-time", location: "Remote / Hybrid" },
  { title: "DevOps Engineer", dept: "Engineering", type: "Full-time", location: "Remote" },
  { title: "Network Engineer", dept: "Engineering", type: "Full-time", location: "Hybrid" },
];

export default function Careers() {
  const [form, setForm] = useState({ fullName: "", email: "", phoneNumber: "" });
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "missing-resume" | "error">("idle");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const applyRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleClick = (title: string) => {
    setSelectedRole(title);
    applyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resume) {
      setStatus("missing-resume");
      return;
    }

    setStatus("submitting");

    try {
      const fileBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result as string); // <-- DO NOT split(",")

        reader.onerror = reject;

        reader.readAsDataURL(resume);
      });

      const payload = {
        fullName: form.fullName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        role: selectedRole ?? "",
        file: fileBase64,
        fileName: resume.name,
      };

      // no-cors gives an opaque response, so this only throws on network failure
      await fetch(APPLY_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      setStatus("success");
      setForm({
        fullName: "",
        email: "",
        phoneNumber: "",
      });
      setResume(null);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <SEO
        title="Careers at FlewOps Global — Join Our Engineering Team"
        description="Build your career at FlewOps Global. We're hiring full-stack developers, AI/ML engineers, security engineers, designers, and more. Enjoy flexible hours, wellness programs, and professional growth."
        keywords="careers at FlewOps, software engineering jobs, AI ML engineer jobs, security engineer jobs, devops jobs, UI UX designer jobs, tech careers India, remote tech jobs"
        path="/about/careers"
        jsonLd={[
          collectionPageSchema(
            "Careers at FlewOps Global",
            "Build your career at FlewOps Global. We're hiring full-stack developers, AI/ML engineers, security engineers, designers, and more.",
            "/about/careers"
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about/company" },
            { name: "Careers", path: "/about/careers" },
          ]),
          speakableSchema("/about/careers"),
        ]}
      />

      {/* HEADER */}
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-magenta/20 blur-3xl animate-blob" />
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-lime/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <Briefcase className="h-3.5 w-3.5 text-lime" /> Careers
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
              Join Our{" "}
              <span className="bg-gradient-to-r from-lime via-cyan to-violet bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              We value talented and hardworking people. Our team is our biggest
              strength, and we create a friendly workplace where everyone can
              grow. If you're looking for a great career, we have opportunities
              for you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Open positions
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {openRoles.map((r, i) => (
              <motion.button
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => handleRoleClick(r.title)}
                className={`group flex cursor-pointer flex-col rounded-3xl border bg-ink-2 p-6 text-left transition-all hover:border-lime/40 hover:bg-lime/5 ${
                  selectedRole === r.title ? "border-lime/60 bg-lime/10" : "border-white/10"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-lime">{r.dept}</span>
                  <ArrowDown className="h-5 w-5 text-white/30 transition-all group-hover:translate-y-0.5 group-hover:text-lime" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{r.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/50">
                  <span className="rounded-md bg-white/5 px-2 py-1">{r.type}</span>
                  <span className="rounded-md bg-white/5 px-2 py-1">{r.location}</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-lime opacity-0 transition-opacity group-hover:opacity-100">
                  Click to apply <ArrowUpRight className="h-3 w-3" />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Why work with us
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-ink-2 p-6">
                <span className="text-3xl">{p.emoji}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div ref={applyRef} className="scroll-mt-24 rounded-3xl border border-white/10 bg-ink-2 p-8 sm:p-12">
            <h2 className="font-display text-3xl font-bold tracking-tight">Apply now</h2>
            <p className="mt-2 text-sm text-white/60">
              Fill out the form below to apply for a position with us. Our team
              will contact you soon!
            </p>

            {selectedRole && (
              <div className="mt-4 flex items-center justify-between rounded-xl border border-lime/30 bg-lime/10 px-4 py-3">
                <span className="text-sm font-medium text-lime">
                  Applying for: {selectedRole}
                </span>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="text-xs text-white/50 hover:text-white"
                >
                  Clear
                </button>
              </div>
            )}

            {status === "success" && (
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-lime/30 bg-lime/10 px-4 py-3 text-sm text-lime">
                <CheckCircle2 className="h-5 w-5" /> Application submitted successfully! 🎉
              </div>
            )}
            {(status === "missing-resume" || status === "error") && (
              <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {status === "missing-resume"
                  ? "Please upload a resume."
                  : `Something went wrong. Please try again, or email your resume to ${contact.email}.`}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">Full Name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-lime/60"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-lime/60"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="tel"
                  pattern="[0-9]{10}"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="9876543210"
                  className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-lime/60"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">Upload Resume</label>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/20 bg-ink/60 px-4 py-4 text-sm text-white/50 transition-colors hover:border-lime/50 hover:text-white/70">
                  <Upload className="h-5 w-5 text-lime" />
                  {resume ? resume.name : "Click to upload your resume (PDF/DOC)"}
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setResume(e.target.files?.[0] || null)}
                    className="hidden"
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-lime to-cyan px-6 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : "Submit Application"}
                {status !== "submitting" && <ArrowUpRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
