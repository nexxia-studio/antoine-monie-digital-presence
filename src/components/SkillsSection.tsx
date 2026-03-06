import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  level: number; // out of 5
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
      { name: "Shopify Plus", level: 4 },
      { name: "Odoo ERP", level: 4 },
      { name: "Webflow", level: 3 },
      { name: "Framer", level: 3 },
      { name: "Lovable", level: 4 },
      { name: "WooCommerce", level: 2 },
    ],
  },
  {
    titleKey: "skills.ai",
    skills: [
      { name: "Lovable (AI)", level: 4 },
      { name: "Claude API", level: 3 },
      { name: "Google Search Console", level: 5 },
      { name: "Google Merchant Center", level: 4 },
      { name: "Make (Integromat)", level: 3 },
      { name: "Zapier", level: 3 },
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
      { name: "HTML/CSS", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "React", level: 3 },
      { name: "Figma", level: 4 },
      { name: "UX Audit", level: 4 },
      { name: "SEO/CRO", level: 4 },
    ],
  },
  {
    titleKey: "skills.data",
    skills: [
      { name: "Google Analytics 4", level: 4 },
      { name: "Power BI", level: 3 },
      { name: "Hotjar", level: 3 },
      { name: "Qlikview", level: 3 },
    ],
  },
  {
    titleKey: "skills.languages",
    skills: [
      { name: "🇫🇷 French — Native", level: 5 },
      { name: "🇬🇧 English — Professional", level: 4 },
      { name: "🇩🇪 German — Intermediate", level: 3 },
      { name: "🇳🇱 Dutch — Basic", level: 2 },
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
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto section-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">{t("skills.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.titleKey} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{t(group.titleKey)}</h3>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{skill.name}</span>
                    <Dots level={skill.level} />
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
