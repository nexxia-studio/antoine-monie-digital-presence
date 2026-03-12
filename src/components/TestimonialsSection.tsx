import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const testimonials = [
  {
    textKey: "testimonial.1.text",
    name: "Elodie",
    roleKey: "testimonial.1.role",
  },
  {
    textKey: "testimonial.2.text",
    name: "Sophie M.",
    roleKey: "testimonial.2.role",
  },
  {
    textKey: "testimonial.3.text",
    name: "Thomas V.",
    roleKey: "testimonial.3.role",
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto section-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient tracking-wider uppercase">
          {t("testimonials.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t_item, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-border bg-card p-6 pl-8 border-l-[3px] border-l-primary flex flex-col h-full"
            >
              {/* Decorative quote */}
              <span className="absolute top-4 left-4 text-5xl text-primary/20 leading-none select-none pointer-events-none font-serif">
                "
              </span>
              <p
                className={`text-sm text-muted-foreground leading-relaxed mt-6 mb-4 flex-1 ${
                  theme === "luxury" ? "italic font-light" : ""
                }`}
                style={theme === "luxury" ? { fontFamily: "'Cormorant Garamond', serif" } : undefined}
              >
                {t(t_item.textKey)}
              </p>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{t_item.name}</p>
                <p className="text-xs text-muted-foreground italic">{t(t_item.roleKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
