import { useLanguage } from "@/contexts/LanguageContext";
import { ShoppingCart, RefreshCw, Bot } from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

  const badges = [
    { icon: ShoppingCart, key: "about.badge1" },
    { icon: RefreshCw, key: "about.badge2" },
    { icon: Bot, key: "about.badge3" },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto section-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">{t("about.title")}</h2>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p className="font-medium text-foreground">{t("about.p4")}</p>
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
