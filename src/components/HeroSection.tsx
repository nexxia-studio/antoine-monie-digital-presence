import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Download, ArrowDown } from "lucide-react";
import photoUrl from "@/assets/antoine-photo.jpg";

const subtitlesEN = [
  "E-Commerce Operations Manager",
  "Shopify Project Manager",
  "Business Analyst — Odoo & ERP",
  "Digital Transformation Specialist",
];
const subtitlesFR = [
  "Ops Manager E-Commerce",
  "Chef de Projet Shopify",
  "Business Analyst — Odoo & ERP",
  "Spécialiste Transformation Digitale",
];

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const subtitles = lang === "fr" ? subtitlesFR : subtitlesEN;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting" | "pause">("typing");

  useEffect(() => {
    const current = subtitles[currentIndex];

    if (phase === "typing") {
      if (displayText.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setPhase("waiting");
      }
    }

    if (phase === "waiting") {
      const timeout = setTimeout(() => setPhase("deleting"), 2000);
      return () => clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setPhase("pause");
      }
    }

    if (phase === "pause") {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % subtitles.length);
        setPhase("typing");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [displayText, phase, currentIndex, subtitles]);

  // Reset when language changes
  useEffect(() => {
    setDisplayText("");
    setPhase("typing");
    setCurrentIndex(0);
  }, [lang]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-wider mb-4 text-foreground uppercase">
            Antoine <span className="text-gradient">Monie</span>
          </h1>
          <div className="h-10 mb-6">
            <span className="text-xl md:text-2xl font-subheading font-semibold text-primary">
              {displayText}
            </span>
            <span className="cursor-blink text-primary text-2xl">|</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 mx-auto lg:mx-0">
            {t("hero.tagline")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <ArrowDown size={18} />
              {t("hero.viewProjects")}
            </button>
            <a
              href="/Antoine_Monie_CV_EN.pdf"
              download
              className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              {t("hero.downloadCV")}
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">{t("hero.location")}</span>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden glow-border border-4 border-primary/30">
            <img
              src={photoUrl}
              alt="Antoine Monie"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
