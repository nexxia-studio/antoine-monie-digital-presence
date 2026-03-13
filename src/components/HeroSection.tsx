import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { MapPin, Download, ArrowDown, ShoppingBag, Settings2, Globe } from "lucide-react";
import photoUrl from "@/assets/antoine-photo.jpg";

const subtitlesTechEN = [
  "E-Commerce Operations Manager",
  "Shopify Project Manager",
  "Business Analyst — Odoo & ERP",
  "Digital Transformation Specialist",
];
const subtitlesTechFR = [
  "Ops Manager E-Commerce",
  "Chef de Projet Shopify",
  "Business Analyst — Odoo & ERP",
  "Spécialiste Transformation Digitale",
];
const subtitlesLuxuryEN = [
  "E-Commerce Operations Manager",
  "Beauty & Lifestyle Brand Specialist",
  "Shopify Multi-Brand Expert",
  "Digital Operations — Cosmetics & Beauty",
  "Odoo ERP Implementation Lead",
];
const subtitlesLuxuryFR = [
  "Operations Manager E-Commerce",
  "Spécialiste Marques Beauty & Lifestyle",
  "Expert Shopify Multi-Marques",
  "Operations Digitales — Cosmétiques & Beauté",
  "Lead Implémentation Odoo ERP",
];

const valueProps = [
  { icon: ShoppingBag, titleKey: "hero.val1.title", descKey: "hero.val1.desc" },
  { icon: Settings2, titleKey: "hero.val2.title", descKey: "hero.val2.desc" },
  { icon: Globe, titleKey: "hero.val3.title", descKey: "hero.val3.desc" },
];

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const { theme } = useTheme();

  const subtitles = theme === "luxury"
    ? (lang === "fr" ? subtitlesLuxuryFR : subtitlesLuxuryEN)
    : (lang === "fr" ? subtitlesTechFR : subtitlesTechEN);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting" | "pause">("typing");

  useEffect(() => {
    const current = subtitles[currentIndex];
    if (phase === "typing") {
      if (displayText.length < current.length) {
        const timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
        return () => clearTimeout(timeout);
      } else { setPhase("waiting"); }
    }
    if (phase === "waiting") {
      const timeout = setTimeout(() => setPhase("deleting"), 2000);
      return () => clearTimeout(timeout);
    }
    if (phase === "deleting") {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 50);
        return () => clearTimeout(timeout);
      } else { setPhase("pause"); }
    }
    if (phase === "pause") {
      const timeout = setTimeout(() => { setCurrentIndex((prev) => (prev + 1) % subtitles.length); setPhase("typing"); }, 300);
      return () => clearTimeout(timeout);
    }
  }, [displayText, phase, currentIndex, subtitles]);

  useEffect(() => { setDisplayText(""); setPhase("typing"); setCurrentIndex(0); }, [lang, theme]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Top row: Text + Photo side by side on desktop, stacked on mobile */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-wider mb-4 text-foreground uppercase">
            Antoine <span className="text-gradient">Monie</span>
          </h1>
          <h2 className="h-10 mb-4">
            <span className="text-xl md:text-2xl font-subheading font-semibold text-primary">{displayText}</span>
            <span className="cursor-blink text-primary text-2xl">|</span>
          </h2>
          <p className="text-sm md:text-base italic text-muted-foreground/75 max-w-xl mb-6 mx-auto lg:mx-0">
            {theme === "luxury" ? (
              lang === "fr" ? (<>Beauty · Cosmétiques · Fashion<br />une expertise operations taillée pour les marques e-commerce premium.</>) : (<>Beauty · Cosmetics · Fashion<br />operations expertise tailored for premium e-commerce brands.</>)
            ) : (
              lang === "fr" ? (<>Opérations, tech et UX<br />pour livrer des produits e-commerce performants.</>) : (<>Bridging operations, tech, and UX<br />to deliver high-performing e-commerce products.</>)
            )}
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 mx-auto lg:mx-0">{t("hero.tagline")}</p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
              <ArrowDown size={18} />{t("hero.viewProjects")}
            </button>
            <a href="/Antoine_Monie_Resume_2026.pdf" download="Antoine_Monie_Resume_2026.pdf" className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors flex items-center gap-2">
              <Download size={18} />Download CV
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start">
            <MapPin size={16} className="text-primary" /><span className="text-sm">{t("hero.location")}</span>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 relative z-10">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden glow-border border-4 border-primary/30">
            <img src={photoUrl} alt="Antoine Monie" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>

      {/* 3 value cards — always below, never overlapping */}
      <div className="relative z-[5] px-4 pb-12 w-full">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {valueProps.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="glass-card p-4 text-center">
              <Icon size={22} className="text-primary mx-auto mb-2" />
              <h3 className="text-sm font-bold text-foreground mb-1">{t(titleKey)}</h3>
              <p className="text-xs text-muted-foreground">
                {descKey === "hero.val3.desc" ? (
                  lang === "fr" ? (<>FR · EN · DE · NL<br />disponible en remote ou hybride</>) : (<>FR · EN · DE · NL<br />available remote or hybrid</>)
                ) : t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
