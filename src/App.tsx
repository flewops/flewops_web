import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutCompany from "./pages/AboutCompany";
import AboutTeam from "./pages/AboutTeam";
import Careers from "./pages/Careers";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-ink text-white">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(196,255,0,0.10),transparent),radial-gradient(40%_40%_at_100%_100%,rgba(255,45,155,0.08),transparent)]" />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/company" element={<AboutCompany />} />
            <Route path="/about/team" element={<AboutTeam />} />
            <Route path="/about/careers" element={<Careers />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
