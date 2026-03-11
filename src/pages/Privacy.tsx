import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16 prose prose-sm text-foreground">
        <h1 className="text-3xl font-bold text-gradient mb-8">
          {lang === "fr" ? "Politique de Confidentialité" : "Privacy Policy"}
        </h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">{lang === "fr" ? "Données collectées" : "Data Collected"}</h2>
        <p>{lang === "fr"
          ? "Les seules données personnelles collectées le sont via le formulaire de contact : nom, adresse e-mail et message. Ces données sont transmises via Formspree et ne sont pas stockées sur ce site."
          : "The only personal data collected is through the contact form: name, email address and message. This data is transmitted via Formspree and is not stored on this site."
        }</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
        <p>{lang === "fr"
          ? "Ce site n'installe aucun cookie de tracking ou de publicité. Seul le localStorage est utilisé pour mémoriser vos préférences de langue et de thème."
          : "This site does not install any tracking or advertising cookies. Only localStorage is used to remember your language and theme preferences."
        }</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{lang === "fr" ? "Partage des données" : "Data Sharing"}</h2>
        <p>{lang === "fr"
          ? "Aucune donnée personnelle n'est revendue ou partagée avec des tiers, à l'exception de Formspree qui traite les soumissions du formulaire de contact."
          : "No personal data is resold or shared with third parties, except Formspree which processes contact form submissions."
        }</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{lang === "fr" ? "Vos droits (RGPD)" : "Your Rights (GDPR)"}</h2>
        <p>{lang === "fr"
          ? "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez : monie.ant@gmail.com"
          : "Under the GDPR, you have the right to access, rectify and delete your personal data. To exercise these rights, contact: monie.ant@gmail.com"
        }</p>
      </div>
      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Antoine Monie
      </footer>
    </div>
  );
}
