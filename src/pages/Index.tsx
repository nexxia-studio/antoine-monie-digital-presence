import { useScrollFade } from "@/hooks/useScrollFade";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import Particles from "@/components/Particles";

export default function Index() {
  useScrollFade();

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
        <ProjectsSection />
        <CertificationsSection />
        <FAQSection />
        <ContactSection />
        <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
          © {new Date().getFullYear()} Antoine Monie. All rights reserved.
        </footer>
      </div>
      <ScrollToTop />
    </div>
  );
}
