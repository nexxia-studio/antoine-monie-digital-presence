import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap } from "lucide-react";

const certs = [
  { year: "2021", en: "Blockchain Specialization — University at Buffalo", fr: "Spécialisation Blockchain — University at Buffalo" },
  { year: "2021", en: "Web Developer & Business Intelligence — Technofutur TIC (Power BI, Qlikview)", fr: "Développeur Web & Business Intelligence — Technofutur TIC (Power BI, Qlikview)" },
  { year: "2021", en: "WebiMarathon Certificate — Binance", fr: "Certificat WebiMarathon — Binance" },
  { year: "2016", en: "Advanced English Training — The Language Gallery, Toronto", fr: "Formation avancée en anglais — The Language Gallery, Toronto" },
  { year: "2010–2013", en: "Bachelor's in Education — Haute École de la Province de Liège", fr: "Baccalauréat en Éducation — Haute École de la Province de Liège" },
];

export default function CertificationsSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="certifications" className="py-24 px-4">
      <div className="max-w-4xl mx-auto section-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">{t("cert.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
              <GraduationCap size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs font-semibold text-primary">{cert.year}</span>
                <p className="text-sm text-foreground mt-1">{lang === "fr" ? cert.fr : cert.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
