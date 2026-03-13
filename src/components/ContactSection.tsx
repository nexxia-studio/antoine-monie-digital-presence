import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle, Globe } from "lucide-react";

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      _gotcha: (form.elements.namedItem("_gotcha") as HTMLInputElement).value,
    };

    // Honeypot check
    if (data._gotcha) {
      setSubmitted(true);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/mzdjbebn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
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
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {lang === "fr" ? (
                <>
                  Ouvert à de nouvelles opportunités<br />
                  Postes en agence Shopify, opérations e-commerce, ou missions BA Odoo.<br />
                  Remote prioritaire, basé en Belgique.
                </>
              ) : (
                <>
                  Open to new opportunities<br />
                  Shopify agency roles, e-commerce ops positions, or Odoo BA mandates.<br />
                  Remote-first, Belgium-based.
                </>
              )}
            </p>
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
              <a href="https://github.com/nexxia-studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span className="text-sm">github.com/nexxia-studio</span>
              </a>
              <a href="https://www.nexxia.pro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Globe size={18} className="text-primary" />
                <span className="text-sm">Nexxia.pro</span>
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
            <form onSubmit={handleSubmit} className="space-y-5 w-[90%] mx-auto lg:w-full">
              {/* Honeypot */}
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
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
