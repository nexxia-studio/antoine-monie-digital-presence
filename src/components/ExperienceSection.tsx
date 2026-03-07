import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, MapPin, Calendar } from "lucide-react";

interface ExpEntry {
  roleKey: string;
  companyKey: string;
  periodKey: string;
  locationKey: string;
  tags: string[];
  bulletKeys: string[];
}

const entries: ExpEntry[] = [
  {
    roleKey: "exp.1.role", companyKey: "exp.1.company", periodKey: "exp.1.period", locationKey: "exp.1.location",
    tags: ["Ops", "WebOps", "SEO", "ProcessImprovement", "Monday"],
    bulletKeys: ["exp.1.b1", "exp.1.b2", "exp.1.b3", "exp.1.b4", "exp.1.b5"],
  },
  {
    roleKey: "exp.2.role", companyKey: "exp.2.company", periodKey: "exp.2.period", locationKey: "exp.2.location",
    tags: ["Shopify", "OdooERP", "SEO", "UX", "EcommerceOps"],
    bulletKeys: ["exp.2.b1", "exp.2.b2", "exp.2.b3", "exp.2.b4", "exp.2.b5"],
  },
  {
    roleKey: "exp.3.role", companyKey: "exp.3.company", periodKey: "exp.3.period", locationKey: "exp.3.location",
    tags: ["Web3", "QA", "DeFi", "UX", "Blockchain"],
    bulletKeys: ["exp.3.b1", "exp.3.b2", "exp.3.b3", "exp.3.b4"],
  },
  {
    roleKey: "exp.4.role", companyKey: "exp.4.company", periodKey: "exp.4.period", locationKey: "exp.4.location",
    tags: ["JavaScript", "React", "Angular", "UX", "FunctionalAnalysis"],
    bulletKeys: ["exp.4.b1", "exp.4.b2", "exp.4.b3"],
  },
  {
    roleKey: "exp.5.role", companyKey: "exp.5.company", periodKey: "exp.5.period", locationKey: "exp.5.location",
    tags: ["HighStakes", "DataDriven", "Multilingual", "ProcessManagement"],
    bulletKeys: ["exp.5.b1", "exp.5.b2", "exp.5.b3", "exp.5.b4"],
  },
  {
    roleKey: "exp.6.role", companyKey: "exp.6.company", periodKey: "exp.6.period", locationKey: "exp.6.location",
    tags: ["Entrepreneurship", "B2C", "B2B", "DigitalMarketing"],
    bulletKeys: ["exp.6.b1", "exp.6.b2", "exp.6.b3"],
  },
];

export default function ExperienceSection() {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto section-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient tracking-wider uppercase">{t("exp.title")}</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-6">
            {entries.map((entry, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <div key={i} className="relative pl-12 md:pl-16">
                  <div className="absolute left-2.5 md:left-4.5 top-6 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  <div
                    className="rounded-xl border border-border bg-card p-5 cursor-pointer hover:border-primary/30 transition-colors"
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">{t(entry.roleKey)}</h3>
                        <p className="text-sm font-medium mt-1" style={{ color: "#1E3A5F" }}>{t(entry.companyKey)}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar size={12} />{t(entry.periodKey)}</span>
                          <span className="flex items-center gap-1"><MapPin size={12} />{t(entry.locationKey)}</span>
                        </div>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-muted-foreground transition-transform mt-1 flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/15 text-secondary">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    {isExpanded && (
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground text-left">
                        {entry.bulletKeys.map((bk) => (
                          <li key={bk} className="flex gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{t(bk)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
