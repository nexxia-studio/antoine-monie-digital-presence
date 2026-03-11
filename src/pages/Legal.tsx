import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Legal() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16 prose prose-sm text-foreground">
        <h1 className="text-3xl font-bold text-gradient mb-8">
          {lang === "fr" ? "Mentions Légales" : "Legal Notice"}
        </h1>
        <h2 className="text-xl font-semibold mt-6 mb-2">{lang === "fr" ? "Éditeur du site" : "Site Editor"}</h2>
        <p>Antoine Monie<br />Welkenraedt, Belgique<br />Email : monie.ant@gmail.com</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{lang === "fr" ? "Hébergement" : "Hosting"}</h2>
        <p>GitHub Pages — GitHub Inc.<br />88 Colin P Kelly Jr St, San Francisco, CA 94107, USA</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{lang === "fr" ? "Propriété intellectuelle" : "Intellectual Property"}</h2>
        <p>{lang === "fr"
          ? "L'ensemble du contenu de ce site (textes, images, logos, code source) est la propriété exclusive d'Antoine Monie, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable."
          : "All content on this site (text, images, logos, source code) is the exclusive property of Antoine Monie, unless otherwise stated. Any reproduction, even partial, is prohibited without prior authorization."
        }</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{lang === "fr" ? "Loi applicable" : "Applicable Law"}</h2>
        <p>{lang === "fr"
          ? "Le présent site est soumis au droit belge. Tout litige sera de la compétence exclusive des tribunaux belges."
          : "This site is subject to Belgian law. Any dispute shall fall under the exclusive jurisdiction of Belgian courts."
        }</p>
      </div>
      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Antoine Monie
      </footer>
    </div>
  );
}
