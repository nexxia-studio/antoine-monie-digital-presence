import { useLanguage } from "@/contexts/LanguageContext";
import { ShoppingCart, RefreshCw, Bot, MapPin, Globe, Briefcase } from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

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

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto section-fade-in text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient tracking-wider uppercase">{t("about.title")}</h2>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
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
            <div key={key} className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-sm font-medium text-foreground">
              <Icon size={18} className="text-primary" />
              {t(key)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
