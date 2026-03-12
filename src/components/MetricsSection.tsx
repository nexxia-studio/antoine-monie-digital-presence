import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { ShoppingBag, Sparkles, Settings2, TrendingUp } from "lucide-react";

const metrics = [
  { value: 12, suffix: "", icon: ShoppingBag, labelKey: "metrics.1" },
  { value: 6, suffix: "", icon: Sparkles, labelKey: "metrics.2" },
  { value: 4, suffix: "", icon: Settings2, labelKey: "metrics.3" },
  { value: 8, suffix: "+", icon: TrendingUp, labelKey: "metrics.4" },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.max(16, duration / target);
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
}

export default function MetricsSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="metrics" className="py-24 px-4">
      <div ref={ref} className="max-w-5xl mx-auto section-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient tracking-wider uppercase">
          {theme === "luxury" ? (t("metrics.title.luxury")) : (t("metrics.title.tech"))}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map(({ value, suffix, icon: Icon, labelKey }) => (
            <div key={labelKey} className="rounded-xl border border-border bg-card p-6 text-center">
              <Icon size={24} className="text-primary mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedNumber target={value} suffix={suffix} inView={inView} />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{t(labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
