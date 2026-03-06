import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzdjbebn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto section-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient tracking-wider uppercase">{t("contact.title")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="text-center lg:text-left">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t("contact.intro")}</p>
            <div className="space-y-4 inline-flex flex-col items-start">
              <a href="mailto:monie.ant@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" />
                <span className="text-sm">monie.ant@gmail.com</span>
              </a>
              <a href="tel:+32495935963" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Phone size={18} className="text-primary" />
                <span className="text-sm">+32 495 93 59 63</span>
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin size={18} className="text-primary" />
                <span className="text-sm">Welkenraedt, Belgium</span>
              </div>
              <a href="https://linkedin.com/in/antoine-monie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Linkedin size={18} className="text-primary" />
                <span className="text-sm">linkedin.com/in/antoine-monie</span>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          {submitted ? (
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-primary font-medium text-lg">
                <CheckCircle size={22} />
                {t("contact.success")}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="_replyto" />
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.name")}</label>
                <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.email")}</label>
                <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.subject")}</label>
                <select name="subject" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">{t("contact.subject")}...</option>
                  <option value="job">{t("contact.job")}</option>
                  <option value="freelance">{t("contact.freelance")}</option>
                  <option value="other">{t("contact.other")}</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.message")}</label>
                <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              </div>
              {error && (
                <div className="flex items-center gap-2 text-destructive font-medium text-sm">
                  <AlertCircle size={16} />
                  {t("contact.error")}
                </div>
              )}
              <button type="submit" disabled={loading} className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60">
                <Send size={16} />
                {loading ? "..." : t("contact.send")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
