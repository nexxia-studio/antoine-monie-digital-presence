import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { ShoppingCart, RefreshCw, Bot, MapPin, Globe, Briefcase } from "lucide-react";

export default function AboutSection() {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();

  const badges = [
    { icon: ShoppingCart, key: "about.badge1" },
    { icon: RefreshCw, key: "about.badge2" },
    { icon: Bot, key: "about.badge3" },
  ];

  const infoLines = [
    { icon: MapPin, key: "about.info1" },
    { icon: Globe, key: "about.info2" },
    { icon: Briefcase, key: "about.info3" },
  ];

  const luxuryP1FR = "Spécialiste des opérations e-commerce pour marques beauty et lifestyle, avec une expérience concrète sur des enseignes cosmétiques (Gemology Cosmetics Paris, Origine L'art cosmétique, Ouate Le Touquet-Paris-Plage) et le distributeur HElo Cosmetics (Belgique & Luxembourg).";
  const luxuryP2FR = "Profil hybride operations/tech, capable de gérer une plateforme Shopify de A à Z, d'implémenter un ERP Odoo et d'optimiser la visibilité organique (SEO/GEO) d'une marque premium. Multilingue, remote-ready, sensible aux codes du secteur luxe et cosmétique.";

  const aboutP1EN = "E-commerce operations specialist for beauty and lifestyle brands, with hands-on experience managing cosmetics brands (Gemology Cosmetics Paris, Origine L'art cosmétique, Ouate Le Touquet-Paris-Plage) and the distributor HElo Cosmetics (Belgium & Luxembourg).";
  const aboutP2EN = "A hybrid operations/tech profile capable of managing a Shopify platform end-to-end, implementing Odoo ERP, and optimizing organic visibility (SEO/GEO) for premium brands. Multilingual, remote-ready, with a deep sensitivity to the luxury and cosmetics sector.";

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto section-fade-in text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient tracking-wider uppercase">{t("about.title")}</h2>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          {theme === "luxury" ? (
            <>
              <p>{lang === "fr" ? luxuryP1FR : aboutP1EN}</p>
              <p className="mt-6">{lang === "fr" ? luxuryP2FR : aboutP2EN}</p>
            </>
          ) : (
            <>
              <p>{t("about.p1")}</p>
              <p className="mt-6">{t("about.p2")}</p>
            </>
          )}
        </div>

        {/* Info lines */}
        <div className="flex flex-col items-center gap-3 mt-10">
          {infoLines.map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-center gap-2 text-sm text-foreground">
              <Icon size={16} className="text-primary" />
              {t(key)}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          {badges.map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-sm font-medium text-foreground tag-luxury">
              <Icon size={18} className="text-primary" />
              {t(key)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
