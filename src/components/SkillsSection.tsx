import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  level: number;
  tooltip?: { en: string; fr: string };
}

interface SkillGroup {
  titleKey: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    titleKey: "skills.ecommerce",
    skills: [
      { name: "Shopify", level: 5 },
      { name: "Shopify Plus", level: 3 },
      { name: "Odoo ERP", level: 4 },
      { name: "Webflow / Framer (No-Code)", level: 3 },
      { name: "Lovable", level: 4 },
    ],
  },
  {
    titleKey: "skills.seo",
    skills: [
      { name: "Google Search Console", level: 5 },
      { name: "Google Merchant Center", level: 4 },
      { name: "Google Analytics 4", level: 4 },
      { name: "SEO (On-page, Technical)", level: 4 },
      {
        name: "GEO — Generative Engine Optimization",
        level: 3,
        tooltip: {
          en: "Optimization for AI search engines (ChatGPT, Perplexity, Gemini)",
          fr: "Référencement sur les moteurs de recherche IA",
        },
      },
      { name: "Hotjar", level: 3 },
    ],
  },
  {
    titleKey: "skills.project",
    skills: [
      { name: "Monday.com", level: 5 },
      { name: "Linear", level: 3 },
      { name: "ClickUp", level: 3 },
      { name: "Agile / Scrum", level: 4 },
      { name: "Notion", level: 3 },
    ],
  },
  {
    titleKey: "skills.frontend",
    skills: [
      { name: "HTML/CSS", level: 5 },
      { name: "JavaScript", level: 3 },
      { name: "React", level: 3 },
      { name: "Figma", level: 4 },
      { name: "UX Audit", level: 4 },
      { name: "SEO/CRO", level: 4 },
    ],
  },
  {
    titleKey: "skills.ai",
    skills: [
      { name: "Lovable (AI)", level: 4 },
      { name: "Claude API", level: 3 },
      { name: "Make (Integromat)", level: 3 },
      { name: "Zapier", level: 3 },
    ],
  },
  {
    titleKey: "skills.languages",
    skills: [
      { name: "🇫🇷 French — Native", level: 5 },
      { name: "🇬🇧 English — Professional", level: 4 },
      { name: "🇩🇪 German — Intermediate", level: 3 },
      { name: "🇳🇱 Dutch — Basic", level: 2 },
      { name: "🇪🇸 Spanish — Basic", level: 1 },
    ],
  },
];

function Dots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${i <= level ? "bg-primary" : "bg-border"}`}
        />
      ))}
    </div>
  );
}

export default function SkillsSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto section-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient tracking-wider uppercase">{t("skills.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {skillGroups.map((group) => (
            <div key={group.titleKey} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{t(group.titleKey)}</h3>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <Dots level={skill.level} />
                    </div>
                    {skill.tooltip && (
                      <p className="text-xs text-muted-foreground mt-0.5 ml-1 italic">
                        {lang === "fr" ? skill.tooltip.fr : skill.tooltip.en}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
