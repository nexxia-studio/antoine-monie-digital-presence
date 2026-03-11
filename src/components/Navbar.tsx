import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X, Linkedin } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const sections = ["about", "skills", "experience", "projects", "certifications", "faq", "contact"];

function AMLogoSVG() {
  return (
    <svg viewBox="0 0 80 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 30L14 2H20L32 30H26L23.5 23H10.5L8 30H2ZM12.5 18H21.5L17 6L12.5 18Z"
        fill="currentColor"
        className="text-primary"
      />
      <path
        d="M36 30V4C36 2.9 36.9 2 38 2H40L50 18L60 2H62C63.1 2 64 2.9 64 4V30H58V12L50 26L42 12V30H36Z"
        fill="currentColor"
        className="text-primary"
      />
    </svg>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme } = useTheme();
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex-shrink-0">
          <AMLogoSVG />
        </button>

        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`text-sm font-medium transition-colors hover:text-primary ${active === s ? "text-primary" : "text-muted-foreground"}`}
            >
              {t(`nav.${s}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border overflow-hidden text-xs font-medium">
            <button
              onClick={() => setLang("fr")}
              className={`px-3 py-1.5 transition-colors ${lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
          </div>

          <ThemeToggle />

          <a
            href="https://www.linkedin.com/in/antoine-monie"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary hidden sm:flex"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="flex flex-col p-4 gap-3">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-colors ${active === s ? "text-primary bg-muted" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
              >
                {t(`nav.${s}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
