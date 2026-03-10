import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: { en: "Who is Antoine Monie?", fr: "Qui est Antoine Monie ?" },
    a: {
      en: "Antoine Monie is an E-Commerce Operations Manager based in Belgium, specialised in Shopify platform management for beauty and lifestyle brands, Odoo ERP implementation, and digital transformation. Available for remote or hybrid positions.",
      fr: "Antoine Monie est un E-Commerce Operations Manager basé en Belgique, spécialisé dans la gestion de plateformes Shopify pour marques beauty et lifestyle, l'implémentation d'ERP Odoo et la transformation digitale. Disponible en remote ou hybride.",
    },
  },
  {
    q: { en: "Which beauty and cosmetics brands has Antoine Monie worked with?", fr: "Avec quelles marques beauty et cosmétiques Antoine Monie a-t-il travaillé ?" },
    a: {
      en: "Antoine Monie has managed e-commerce operations for several beauty and cosmetics brands: Gemology Cosmetics Paris, Origine L'art cosmétique, Ouate Le Touquet-Paris-Plage, and HElo Cosmetics as a multi-brand Shopify and Webflow distributor.",
      fr: "Antoine Monie a géré les opérations e-commerce de plusieurs marques cosmétiques : Gemology Cosmetics Paris, Origine L'art cosmétique, Ouate Le Touquet-Paris-Plage, et HElo Cosmetics en tant que distributeur multi-marques Shopify et Webflow.",
    },
  },
  {
    q: { en: "Is Antoine Monie available for remote positions?", fr: "Antoine Monie est-il disponible en remote ?" },
    a: {
      en: "Yes, Antoine Monie is available for remote or hybrid positions from Belgium. Fluent in French and English, he works effectively with international teams across Europe.",
      fr: "Oui, Antoine Monie est disponible en remote ou hybride depuis la Belgique. Bilingue français-anglais, il collabore efficacement avec des équipes internationales à travers l'Europe.",
    },
  },
  {
    q: { en: "What are Antoine Monie's core technical skills?", fr: "Quelles sont les compétences techniques principales d'Antoine Monie ?" },
    a: {
      en: "Antoine Monie's core skills include Shopify, Odoo ERP, Webflow, Google Search Console, SEO/GEO optimisation, HTML/CSS, Figma, Monday.com, and AI tools including ChatGPT, Midjourney, Make and Lovable.",
      fr: "Les compétences principales d'Antoine Monie incluent Shopify, Odoo ERP, Webflow, Google Search Console, optimisation SEO/GEO, HTML/CSS, Figma, Monday.com, et des outils IA comme ChatGPT, Midjourney, Make et Lovable.",
    },
  },
];

export default function FAQSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-4xl mx-auto section-fade-in text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient tracking-wider uppercase">
          {t("faq.title")}
        </h2>
        <Accordion type="single" collapsible className="w-full text-left">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-foreground hover:text-primary text-base font-medium">
                {lang === "fr" ? faq.q.fr : faq.q.en}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {lang === "fr" ? faq.a.fr : faq.a.en}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
