import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "fr";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.about": { en: "About", fr: "À propos" },
  "nav.skills": { en: "Skills", fr: "Compétences" },
  "nav.experience": { en: "Experience", fr: "Expérience" },
  "nav.projects": { en: "Projects", fr: "Projets" },
  "nav.certifications": { en: "Certifications", fr: "Certifications" },
  "nav.contact": { en: "Contact", fr: "Contact" },

  // Hero
  "hero.tagline": {
    en: "Bridging operations, tech, and UX to deliver high-performing e-commerce products.",
    fr: "À l'interface des opérations, de la tech et de l'UX pour livrer des produits e-commerce performants.",
  },
  "hero.viewProjects": { en: "View Projects", fr: "Voir les Projets" },
  "hero.downloadCV": { en: "Download CV (PDF)", fr: "Télécharger CV (PDF)" },
  "hero.location": { en: "Belgium — Open to Remote", fr: "Belgique — Ouvert au Remote" },

  // About
  "about.title": { en: "About Me", fr: "À propos" },
  "about.p1": {
    en: "5+ years of experience managing e-commerce operations and digital projects across multi-brand Shopify environments, Odoo ERP implementations, and B2C e-commerce platforms.",
    fr: "Plus de 5 ans d'expérience dans la gestion d'opérations e-commerce et de projets digitaux : environnements Shopify multi-marques, implémentations Odoo ERP et plateformes e-commerce B2C.",
  },
  "about.p2": {
    en: "I bring a rare combination: a technical background in front-end development and UX/UI, hands-on ops experience, and a structured analytical mindset built during years as an Air Traffic Controller.",
    fr: "J'apporte une combinaison rare : un bagage technique en développement front-end et UX/UI, une expérience concrète en opérations, et un esprit analytique structuré forgé durant mes années de contrôle aérien.",
  },
  "about.info1": { en: "Based in Belgium", fr: "Basé en Belgique" },
  "about.info2": { en: "FR — EN", fr: "FR — EN" },
  "about.info3": { en: "Open to remote or hybrid positions in Belgium", fr: "Disponible en remote ou hybride en Belgique" },
  "about.badge1": { en: "Shopify Multi-Brand Expert", fr: "Expert Shopify Multi-Marques" },
  "about.badge2": { en: "Odoo ERP Implementation", fr: "Implémentation Odoo ERP" },
  "about.badge3": { en: "AI-Augmented Workflows", fr: "Workflows Augmentés par l'IA" },

  // Skills
  "skills.title": { en: "Tech Stack & Tools", fr: "Stack Technique & Outils" },
  "skills.ecommerce": { en: "E-Commerce & Platforms", fr: "E-Commerce & Plateformes" },
  "skills.seo": { en: "SEO, GEO & Search Visibility", fr: "SEO, GEO & Visibilité" },
  "skills.ai": { en: "AI Tools & Integrations", fr: "Outils IA & Intégrations" },
  "skills.project": { en: "Project & Ops Management", fr: "Gestion de Projet & Ops" },
  "skills.frontend": { en: "Front-End & UX/UI", fr: "Front-End & UX/UI" },
  "skills.languages": { en: "Languages", fr: "Langues" },

  // Experience
  "exp.title": { en: "Experience", fr: "Expérience" },
  "exp.1.role": { en: "Operations Specialist & Website Operations Lead", fr: "Spécialiste Opérations & Responsable Opérations Web" },
  "exp.1.company": { en: "Trustup — B2C Construction Marketplace", fr: "Trustup — Marketplace B2C Construction" },
  "exp.1.period": { en: "July 2024 → Present", fr: "Juillet 2024 → Aujourd'hui" },
  "exp.1.location": { en: "Liège, Belgium", fr: "Liège, Belgique" },
  "exp.1.b1": { en: "Managed post-production website modifications for construction professionals on a B2C marketplace connecting tradespeople with private clients", fr: "Gestion des modifications post-production de sites web pour des professionnels du bâtiment sur une marketplace B2C mettant en relation artisans et particuliers" },
  "exp.1.b2": { en: "Contributed to operational process definition, improvement and digitalization (contract digitalization, ticketing systems via Monday)", fr: "Contribution à la définition, amélioration et digitalisation des processus opérationnels (digitalisation des contrats, ticketing via Monday)" },
  "exp.1.b3": { en: "Built and deployed client intake forms using Lovable and structured AI prompting workflows", fr: "Création et déploiement de formulaires d'intégration client via Lovable et workflows IA structurés" },
  "exp.1.b4": { en: "Coordinated cross-functional alignment between Marketing, Tech, and Support teams", fr: "Coordination transversale entre les équipes Marketing, Tech et Support" },
  "exp.1.b5": { en: "Created daily operational reports for leadership", fr: "Création de rapports opérationnels quotidiens pour la direction" },

  "exp.2.role": { en: "Digital Transformation & E-Commerce Manager", fr: "Responsable Transformation Digitale & E-Commerce" },
  "exp.2.company": { en: "HElo Cosmetics / Nexxia (Freelance)", fr: "HElo Cosmetics / Nexxia (Freelance)" },
  "exp.2.period": { en: "March 2022 → Present", fr: "Mars 2022 → Aujourd'hui" },
  "exp.2.location": { en: "Full Remote", fr: "Full Remote" },
  "exp.2.b1": { en: "Led end-to-end e-commerce operations across 4 Shopify brands: helocosmetics.com | gemology.be | origine-spa.be | ouate-paris.be", fr: "Direction des opérations e-commerce de bout en bout sur 4 marques Shopify : helocosmetics.com | gemology.be | origine-spa.be | ouate-paris.be" },
  "exp.2.b2": { en: "Implemented and administered Odoo ERP: CRM, inventory, invoicing modules configuration and user training", fr: "Implémentation et administration Odoo ERP : configuration CRM, inventaire, facturation et formation utilisateurs" },
  "exp.2.b3": { en: "Managed SEO/UX optimization, module integrations, and third-party app configuration on Shopify", fr: "Gestion de l'optimisation SEO/UX, intégrations de modules et configuration d'apps tierces sur Shopify" },
  "exp.2.b4": { en: "Developed and executed digital strategies: SEA, email marketing (Mailchimp), social media, and performance tracking", fr: "Développement et exécution de stratégies digitales : SEA, email marketing (Mailchimp), réseaux sociaux et suivi de performance" },
  "exp.2.b5": { en: "Coordinated external vendors and developers for project delivery", fr: "Coordination des prestataires externes et développeurs pour la livraison de projets" },

  "exp.3.role": { en: "QA Engineer & DApp Product Tester", fr: "Ingénieur QA & Testeur de Produits Web3" },
  "exp.3.company": { en: "zkSync (Freelance)", fr: "zkSync (Freelance)" },
  "exp.3.period": { en: "April 2023 → June 2024", fr: "Avril 2023 → Juin 2024" },
  "exp.3.location": { en: "Full Remote", fr: "Full Remote" },
  "exp.3.b1": { en: "Functional testing on DeFi platforms and wallets built on Ethereum Layer 2 (zkSync Era Mainnet & Testnet)", fr: "Tests fonctionnels sur plateformes DeFi et wallets construits sur Ethereum Layer 2 (zkSync Era Mainnet & Testnet)" },
  "exp.3.b2": { en: "Tested DEX, lending/borrowing protocols (SyncSwap, Nexon Finance, Spacefi), and NFT platforms (MintSquare, Goal3)", fr: "Tests de DEX, protocoles de prêt/emprunt (SyncSwap, Nexon Finance, Spacefi) et plateformes NFT (MintSquare, Goal3)" },
  "exp.3.b3": { en: "Documented bugs and collaborated with dev teams for resolution", fr: "Documentation de bugs et collaboration avec les équipes de développement pour résolution" },
  "exp.3.b4": { en: "Contributed to UX improvements across Web3 applications", fr: "Contribution aux améliorations UX sur les applications Web3" },

  "exp.4.role": { en: "Digital Project Coordinator & JavaScript Developer", fr: "Coordinateur de Projets Digitaux & Développeur JavaScript" },
  "exp.4.company": { en: "TechnoBel", fr: "TechnoBel" },
  "exp.4.period": { en: "2022–2023", fr: "2022–2023" },
  "exp.4.location": { en: "Ciney, Belgium", fr: "Ciney, Belgique" },
  "exp.4.b1": { en: "Intensive web development training: JavaScript, React, Angular, NodeJS", fr: "Formation intensive en développement web : JavaScript, React, Angular, NodeJS" },
  "exp.4.b2": { en: "Functional analysis: translated user requirements into specifications", fr: "Analyse fonctionnelle : traduction des besoins utilisateurs en spécifications" },
  "exp.4.b3": { en: "UX/UI optimization across digital projects", fr: "Optimisation UX/UI sur les projets digitaux" },

  "exp.5.role": { en: "Air Traffic Controller & Dispatcher", fr: "Contrôleur Aérien & Dispatcher" },
  "exp.5.company": { en: "OCTA+ | Skeyes | Belgian Air Forces", fr: "OCTA+ | Skeyes | Forces Aériennes Belges" },
  "exp.5.period": { en: "August 2016 → March 2020", fr: "Août 2016 → Mars 2020" },
  "exp.5.location": { en: "Liège – Brussels, Belgium", fr: "Liège – Bruxelles, Belgique" },
  "exp.5.b1": { en: "Coordinated complex aircraft operations in high-stakes, real-time environments — zero margin for error", fr: "Coordination d'opérations aériennes complexes en environnement critique temps réel — zéro marge d'erreur" },
  "exp.5.b2": { en: "Managed logistics for a 15-truck fleet as Dispatcher", fr: "Gestion logistique d'une flotte de 15 camions en tant que Dispatcher" },
  "exp.5.b3": { en: "Fast decision-making based on real-time data analysis", fr: "Prise de décision rapide basée sur l'analyse de données en temps réel" },
  "exp.5.b4": { en: "Multilingual client relations (FR/EN/DE/NL) under pressure → Directly transferable to ops management: SLA ownership, escalation handling, cross-team coordination", fr: "Relations clients multilingues (FR/EN/DE/NL) sous pression → Directement transférable à la gestion des opérations : ownership SLA, gestion des escalades, coordination inter-équipes" },

  "exp.6.role": { en: "Founder & Manager", fr: "Fondateur & Gérant" },
  "exp.6.company": { en: "GoPro Location", fr: "GoPro Location" },
  "exp.6.period": { en: "2014–2020", fr: "2014–2020" },
  "exp.6.location": { en: "Belgium", fr: "Belgique" },
  "exp.6.b1": { en: "Created Belgium's first GoPro camera rental service (B2C & B2B)", fr: "Création du premier service de location de caméras GoPro en Belgique (B2C & B2B)" },
  "exp.6.b2": { en: "Full business management: procurement, scheduling, customer service", fr: "Gestion complète : approvisionnement, planning, service client" },
  "exp.6.b3": { en: "Built and managed website + social media acquisition campaigns", fr: "Création et gestion du site web + campagnes d'acquisition sur les réseaux sociaux" },

  // Projects
  "projects.title": { en: "Selected Projects", fr: "Projets Sélectionnés" },
  "projects.viewLive": { en: "View Live →", fr: "Voir le site →" },
  "projects.caseStudy": { en: "Case Study", fr: "Étude de cas" },
  "projects.comingSoon": { en: "+ More projects coming soon", fr: "+ D'autres projets à venir" },

  "proj.1.name": { en: "HElo Cosmetics", fr: "HElo Cosmetics" },
  "proj.1.desc": {
    en: "Multi-brand e-commerce platform built on Webflow — SEO optimization, UX improvements, and performance monitoring.",
    fr: "Plateforme e-commerce multi-marques développée sur Webflow — optimisation SEO, amélioration UX et suivi des performances.",
  },
  "proj.2.name": { en: "Gemology Belgium", fr: "Gemology Belgium" },
  "proj.2.desc": { en: "Shopify configuration, module integration and e-commerce operations management.", fr: "Configuration Shopify, intégration de modules et gestion des opérations e-commerce." },
  "proj.3.name": { en: "Origine Spa", fr: "Origine Spa" },
  "proj.3.desc": { en: "End-to-end e-commerce project management from specs to deployment.", fr: "Gestion de projet e-commerce de bout en bout, des spécifications au déploiement." },
  "proj.4.name": { en: "Ouate Paris", fr: "Ouate Paris" },
  "proj.4.desc": { en: "Shopify platform optimization, SEO and conversion improvements.", fr: "Optimisation de la plateforme Shopify, améliorations SEO et conversion." },
  "proj.5.name": { en: "Trustup", fr: "Trustup" },
  "proj.5.desc": { en: "B2C marketplace connecting tradespeople with private clients — website management, process digitalization and cross-team coordination.", fr: "Marketplace B2C mettant en relation des professionnels du bâtiment avec des particuliers — gestion de site, digitalisation des processus et coordination inter-équipes." },
  "proj.6.name": { en: "Odoo ERP Implementation", fr: "Implémentation Odoo ERP" },
  "proj.6.desc": { en: "Full Odoo ERP setup: CRM, inventory management and invoicing modules. User training and process documentation.", fr: "Configuration complète Odoo ERP : CRM, gestion des stocks et facturation. Formation utilisateurs et documentation des processus." },

  // Certifications
  "cert.title": { en: "Certifications & Training", fr: "Certifications & Formations" },

  // Contact
  "contact.title": { en: "Let's Connect", fr: "Travaillons Ensemble" },
  "contact.intro": {
    en: "Open to new opportunities — Shopify agency roles, e-commerce ops positions, or Odoo BA mandates. Remote-first, Belgium-based.",
    fr: "Ouvert à de nouvelles opportunités — postes en agence Shopify, opérations e-commerce, ou missions BA Odoo. Remote prioritaire, basé en Belgique.",
  },
  "contact.name": { en: "Name", fr: "Nom" },
  "contact.email": { en: "Email", fr: "Email" },
  "contact.subject": { en: "Subject", fr: "Sujet" },
  "contact.message": { en: "Message", fr: "Message" },
  "contact.send": { en: "Send Message", fr: "Envoyer" },
  "contact.success": { en: "✅ Message sent! I'll get back to you shortly.", fr: "✅ Message envoyé ! Je vous réponds rapidement." },
  "contact.error": { en: "❌ Something went wrong. Please try again or email me directly.", fr: "❌ Une erreur est survenue. Réessayez ou contactez-moi directement." },
  "contact.job": { en: "Job opportunity", fr: "Opportunité d'emploi" },
  "contact.freelance": { en: "Freelance project", fr: "Projet freelance" },
  "contact.other": { en: "Other", fr: "Autre" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "fr" || saved === "en") ? saved : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = (key: string) => translations[key]?.[lang] || key;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
