import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Plus } from "lucide-react";

interface Project {
  nameKey: string;
  descKey: string;
  tags: string[];
  url?: string;
  isCaseStudy?: boolean;
  color: string;
}

const projects: Project[] = [
  { nameKey: "proj.1.name", descKey: "proj.1.desc", tags: ["Webflow", "SEO", "UX", "EcommerceOps"], url: "https://helocosmetics.com", color: "from-primary/20 to-secondary/20" },
  { nameKey: "proj.2.name", descKey: "proj.2.desc", tags: ["Shopify", "Configuration", "ProductManagement"], url: "https://gemology.be", color: "from-secondary/20 to-primary/20" },
  { nameKey: "proj.3.name", descKey: "proj.3.desc", tags: ["Shopify", "ProjectManagement", "UX"], url: "https://origine-spa.be", color: "from-primary/20 to-secondary/10" },
  { nameKey: "proj.4.name", descKey: "proj.4.desc", tags: ["Shopify", "CRO", "SEO"], url: "https://ouate-paris.be", color: "from-secondary/10 to-primary/20" },
  { nameKey: "proj.5.name", descKey: "proj.5.desc", tags: ["Marketplace", "OpsManagement", "B2B", "ProcessImprovement"], url: "https://trustup.be", color: "from-primary/15 to-secondary/15" },
  { nameKey: "proj.6.name", descKey: "proj.6.desc", tags: ["Odoo", "ERP", "BusinessAnalysis", "Implementation"], isCaseStudy: true, color: "from-secondary/20 to-primary/10" },
];

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto section-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient tracking-wider uppercase">{t("projects.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {projects.map((proj) => (
            <div key={proj.nameKey} className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors group">
              <div className={`h-32 bg-gradient-to-br ${proj.color} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-foreground/40">{t(proj.nameKey).charAt(0)}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{t(proj.nameKey)}</h3>
                  {proj.isCaseStudy && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/15 text-secondary">{t("projects.caseStudy")}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{t(proj.descKey)}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground">#{tag}</span>
                  ))}
                </div>
                {proj.url && (
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:underline"
                  >
                    {t("projects.viewLive")} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-dashed border-border bg-card/50 flex items-center justify-center min-h-[280px]">
            <div className="text-center text-muted-foreground">
              <Plus size={32} className="mx-auto mb-2 opacity-40" />
              <p className="text-sm">{t("projects.comingSoon")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
