import { useScrollFade } from "@/hooks/useScrollFade";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import MetricsSection from "@/components/MetricsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import Particles from "@/components/Particles";
import { Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  useScrollFade();
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background relative">
      <div className="abstract-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles />
      </div>
      <div className="relative z-10">
        <ScrollProgressBar />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <MetricsSection />
        <TestimonialsSection />
        <ProjectsSection />
        <CertificationsSection />
        <FAQSection />
        <ContactSection />
        <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border space-y-2">
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/antoine-monie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} Antoine Monie</span>
            <span>·</span>
            <Link to="/legal" className="hover:text-primary transition-colors">
              {lang === "fr" ? "Mentions légales" : "Legal Notice"}
            </Link>
            <span>·</span>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              {lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
            </Link>
          </div>
        </footer>
      </div>
      <ScrollToTop />
    </div>
  );
}
