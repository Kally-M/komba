import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.partners': 'Partners',
    'nav.getQuote': 'Get Quote',
    
    // Hero Section
    'hero.title': 'Professional Freight Solutions for Your Business',
    'hero.subtitle': 'Fast, reliable, and secure logistics services that keep your business moving forward. We deliver excellence across every mile.',
    'hero.getStarted': 'Get Started',
    'hero.learnMore': 'Learn More',
    'hero.stats.deliveries': 'Deliveries',
    'hero.stats.support': 'Support',
    'hero.stats.countries': 'Countries',
    'hero.features.secure.title': 'Secure Transport',
    'hero.features.secure.description': 'Your cargo is protected with our advanced security systems and insurance coverage.',
    'hero.features.onTime.title': 'On-Time Delivery',
    'hero.features.onTime.description': 'Reliable scheduling and real-time tracking ensure your shipments arrive when expected.',
    'hero.features.global.title': 'Global Network',
    'hero.features.global.description': 'Extensive worldwide coverage with local expertise in every major market.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive logistics solutions tailored to meet your business needs with precision and reliability.',
    'services.ground.title': 'Ground Freight',
    'services.ground.description': 'Reliable ground transportation services for regional and national deliveries.',
    'services.ground.feature1': 'Door-to-door delivery',
    'services.ground.feature2': 'Real-time tracking',
    'services.ground.feature3': 'Flexible scheduling',
    'services.ocean.title': 'Ocean Freight',
    'services.ocean.description': 'Cost-effective ocean shipping solutions for international cargo transportation.',
    'services.ocean.feature1': 'FCL & LCL options',
    'services.ocean.feature2': 'Port-to-port service',
    'services.ocean.feature3': 'Customs clearance',
    'services.air.title': 'Air Freight',
    'services.air.description': 'Fast and secure air cargo services for time-sensitive shipments worldwide.',
    'services.air.feature1': 'Express delivery',
    'services.air.feature2': 'Temperature controlled',
    'services.air.feature3': 'Dangerous goods certified',
    'services.warehousing.title': 'Warehousing',
    'services.warehousing.description': 'Secure storage and distribution centers with advanced inventory management.',
    'services.warehousing.feature1': 'Climate controlled',
    'services.warehousing.feature2': '24/7 security',
    'services.warehousing.feature3': 'Inventory management',
    'services.lastMile.title': 'Last Mile Delivery',
    'services.lastMile.description': 'Efficient final delivery solutions to ensure your packages reach their destination.',
    'services.lastMile.feature1': 'Same-day delivery',
    'services.lastMile.feature2': 'Signature required',
    'services.lastMile.feature3': 'Photo confirmation',
    'services.supply.title': 'Supply Chain Management',
    'services.supply.description': 'End-to-end supply chain optimization and management services.',
    'services.supply.feature1': 'Analytics & reporting',
    'services.supply.feature2': 'Route optimization',
    'services.supply.feature3': 'Cost reduction',
    
    // Partners
    'partners.title': "Our Team",
    'partners.subtitle': "Meet the dedicated professionals who make our freight solutions possible",
    
    // About
    'about.title': 'About Our Company',
    'about.subtitle': 'With over 15 years of experience in the logistics industry, Business Freight Solution has established itself as a trusted partner for businesses worldwide.',
    'about.stats.experience': 'Years Experience',
    'about.stats.clients': 'Happy Clients',
    'about.stats.shipments': 'Shipments Delivered',
    'about.stats.onTime': 'On-Time Delivery',
    'about.leading.title': 'Leading the Future of Logistics',
    'about.leading.paragraph1': 'Founded with a vision to revolutionize the freight industry, we combine traditional logistics expertise with innovative technology solutions to deliver unparalleled service.',
    'about.leading.paragraph2': 'Our commitment to excellence has earned us the trust of businesses across various industries, from small startups to Fortune 500 companies. We understand that every shipment is critical to your success.',
    'about.leading.paragraph3': 'Today, we operate a global network spanning over 50 countries, with state-of-the-art facilities and a team of logistics professionals dedicated to your success.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To provide innovative, reliable, and cost-effective freight solutions that empower businesses to grow and succeed in the global marketplace.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To be the world\'s most trusted logistics partner, setting new standards for excellence in freight transportation and supply chain management.',
    'about.values.title': 'Our Core Values',
    'about.values.reliability.title': 'Reliability',
    'about.values.reliability.description': 'We deliver on our promises with consistent, dependable service that you can count on.',
    'about.values.efficiency.title': 'Efficiency',
    'about.values.efficiency.description': 'Streamlined processes and cutting-edge technology ensure fast, cost-effective solutions.',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.description': 'We strive for the highest standards in every aspect of our freight and logistics services.',
    'about.values.partnership.title': 'Partnership',
    'about.values.partnership.description': 'We build lasting relationships with our clients, becoming an extension of their business.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to streamline your logistics? Contact us today for a customized freight solution.',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Address',
    'contact.info.hours': 'Business Hours',
    'contact.info.hours.weekdays': 'Monday - Friday: 8:00 AM - 6:00 PM',
    'contact.info.hours.emergency': 'Emergency Support: 24/7',
    'contact.emergency.title': 'Need Immediate Assistance?',
    'contact.emergency.description': 'Our emergency support team is available 24/7 for urgent shipments and critical logistics needs.',
    'contact.emergency.button': 'Call Emergency Line',
    'contact.form.title': 'Request a Quote',
    'contact.form.description': 'Get a personalized quote for your shipping needs. Our team will provide you with competitive rates and tailored solutions.',
    'contact.form.requestQuote': 'Request a Quote',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company Name',
    'contact.form.service': 'Service Needed',
    'contact.form.service.select': 'Select a service',
    'contact.form.service.ground': 'Ground Freight',
    'contact.form.service.ocean': 'Ocean Freight',
    'contact.form.service.air': 'Air Freight',
    'contact.form.service.warehousing': 'Warehousing',
    'contact.form.service.lastmile': 'Last Mile Delivery',
    'contact.form.service.supply': 'Supply Chain Management',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us about your shipping needs...',
    'contact.form.submit': 'Send Message',
    'contact.form.required': '*',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.company.about': 'About Us',
    'footer.company.team': 'Our Team',
    'footer.company.careers': 'Careers',
    'footer.company.news': 'News & Updates',
    'footer.company.privacy': 'Privacy Policy',
    'footer.company.terms': 'Terms of Service',
    'footer.contact': 'Contact Info',
    'footer.copyright': '© 2024 Business Freight Solution. All rights reserved.',
    'footer.links.privacy': 'Privacy',
    'footer.links.terms': 'Terms',
    'footer.links.sitemap': 'Sitemap',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.partners': 'Partenaires',
    'nav.getQuote': 'Devis',
    
    // Hero Section
    'hero.title': 'Solutions de Fret Professionnelles pour Votre Entreprise',
    'hero.subtitle': 'Services logistiques rapides, fiables et sécurisés qui maintiennent votre entreprise en mouvement. Nous offrons l\'excellence à chaque kilomètre.',
    'hero.getStarted': 'Commencer',
    'hero.learnMore': 'En savoir plus',
    'hero.stats.deliveries': 'Livraisons',
    'hero.stats.support': 'Support',
    'hero.stats.countries': 'Pays',
    'hero.features.secure.title': 'Transport Sécurisé',
    'hero.features.secure.description': 'Votre cargaison est protégée par nos systèmes de sécurité avancés et notre couverture d\'assurance.',
    'hero.features.onTime.title': 'Livraison Ponctuelle',
    'hero.features.onTime.description': 'Une planification fiable et un suivi en temps réel garantissent que vos expéditions arrivent à l\'heure prévue.',
    'hero.features.global.title': 'Réseau Mondial',
    'hero.features.global.description': 'Couverture mondiale étendue avec une expertise locale sur chaque marché majeur.',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions logistiques complètes adaptées à vos besoins d\'entreprise avec précision et fiabilité.',
    'services.ground.title': 'Fret Terrestre',
    'services.ground.description': 'Services de transport terrestre fiables pour les livraisons régionales et nationales.',
    'services.ground.feature1': 'Livraison porte-à-porte',
    'services.ground.feature2': 'Suivi en temps réel',
    'services.ground.feature3': 'Planification flexible',
    'services.ocean.title': 'Fret Maritime',
    'services.ocean.description': 'Solutions d\'expédition maritime rentables pour le transport de marchandises internationales.',
    'services.ocean.feature1': 'Options FCL et LCL',
    'services.ocean.feature2': 'Service port-à-port',
    'services.ocean.feature3': 'Dédouanement',
    'services.air.title': 'Fret Aérien',
    'services.air.description': 'Services de fret aérien rapides et sécurisés pour les expéditions urgentes dans le monde entier.',
    'services.air.feature1': 'Livraison express',
    'services.air.feature2': 'Température contrôlée',
    'services.air.feature3': 'Marchandises dangereuses certifiées',
    'services.warehousing.title': 'Entreposage',
    'services.warehousing.description': 'Centres de stockage et de distribution sécurisés avec gestion avancée des stocks.',
    'services.warehousing.feature1': 'Climatisé',
    'services.warehousing.feature2': 'Sécurité 24/7',
    'services.warehousing.feature3': 'Gestion des stocks',
    'services.lastMile.title': 'Livraison Dernier Kilomètre',
    'services.lastMile.description': 'Solutions de livraison finale efficaces pour garantir que vos colis atteignent leur destination.',
    'services.lastMile.feature1': 'Livraison le jour même',
    'services.lastMile.feature2': 'Signature requise',
    'services.lastMile.feature3': 'Confirmation photo',
    'services.supply.title': 'Gestion de la Chaîne d\'Approvisionnement',
    'services.supply.description': 'Services d\'optimisation et de gestion de bout en bout de la chaîne d\'approvisionnement.',
    'services.supply.feature1': 'Analyses et rapports',
    'services.supply.feature2': 'Optimisation des itinéraires',
    'services.supply.feature3': 'Réduction des coûts',
    
    // Partners
    'partners.title': "Notre Équipe",
    'partners.subtitle': "Rencontrez les professionnels dévoués qui rendent nos solutions de fret possibles",
    
    // About
    'about.title': 'À Propos de Notre Entreprise',
    'about.subtitle': 'Avec plus de 15 ans d\'expérience dans l\'industrie logistique, Business Freight Solution s\'est établie comme un partenaire de confiance pour les entreprises du monde entier.',
    'about.stats.experience': 'Années d\'Expérience',
    'about.stats.clients': 'Clients Satisfaits',
    'about.stats.shipments': 'Expéditions Livrées',
    'about.stats.onTime': 'Livraison Ponctuelle',
    'about.leading.title': 'Leader de l\'Avenir de la Logistique',
    'about.leading.paragraph1': 'Fondée avec la vision de révolutionner l\'industrie du fret, nous combinons l\'expertise logistique traditionnelle avec des solutions technologiques innovantes pour offrir un service inégalé.',
    'about.leading.paragraph2': 'Notre engagement envers l\'excellence nous a valu la confiance d\'entreprises de diverses industries, des petites startups aux entreprises Fortune 500. Nous comprenons que chaque expédition est critique pour votre succès.',
    'about.leading.paragraph3': 'Aujourd\'hui, nous exploitons un réseau mondial couvrant plus de 50 pays, avec des installations de pointe et une équipe de professionnels de la logistique dédiés à votre succès.',
    'about.mission.title': 'Notre Mission',
    'about.mission.description': 'Fournir des solutions de fret innovantes, fiables et rentables qui permettent aux entreprises de croître et de réussir sur le marché mondial.',
    'about.vision.title': 'Notre Vision',
    'about.vision.description': 'Être le partenaire logistique le plus fiable au monde, établissant de nouvelles normes d\'excellence dans le transport de marchandises et la gestion de la chaîne d\'approvisionnement.',
    'about.values.title': 'Nos Valeurs Fondamentales',
    'about.values.reliability.title': 'Fiabilité',
    'about.values.reliability.description': 'Nous tenons nos promesses avec un service cohérent et fiable sur lequel vous pouvez compter.',
    'about.values.efficiency.title': 'Efficacité',
    'about.values.efficiency.description': 'Des processus rationalisés et une technologie de pointe garantissent des solutions rapides et rentables.',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.description': 'Nous nous efforçons d\'atteindre les plus hauts standards dans tous les aspects de nos services de fret et de logistique.',
    'about.values.partnership.title': 'Partenariat',
    'about.values.partnership.description': 'Nous construisons des relations durables avec nos clients, devenant une extension de leur entreprise.',
    
    // Contact
    'contact.title': 'Entrer en Contact',
    'contact.subtitle': 'Prêt à rationaliser votre logistique ? Contactez-nous dès aujourd\'hui pour une solution de fret personnalisée.',
    'contact.info.title': 'Informations de Contact',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Adresse',
    'contact.info.hours': 'Heures d\'Ouverture',
    'contact.info.hours.weekdays': 'Lundi - Vendredi : 8h00 - 18h00',
    'contact.info.hours.emergency': 'Support d\'Urgence : 24/7',
    'contact.emergency.title': 'Besoin d\'Assistance Immédiate ?',
    'contact.emergency.description': 'Notre équipe de support d\'urgence est disponible 24/7 pour les expéditions urgentes et les besoins logistiques critiques.',
    'contact.emergency.button': 'Appeler la Ligne d\'Urgence',
    'contact.form.title': 'Demander un Devis',
    'contact.form.description': 'Obtenez un devis personnalisé pour vos besoins d\'expédition. Notre équipe vous fournira des tarifs compétitifs et des solutions sur mesure.',
    'contact.form.requestQuote': 'Demander un Devis',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.phone': 'Numéro de Téléphone',
    'contact.form.company': 'Nom de l\'Entreprise',
    'contact.form.service': 'Service Requis',
    'contact.form.service.select': 'Sélectionner un service',
    'contact.form.service.ground': 'Fret Terrestre',
    'contact.form.service.ocean': 'Fret Maritime',
    'contact.form.service.air': 'Fret Aérien',
    'contact.form.service.warehousing': 'Entreposage',
    'contact.form.service.lastmile': 'Livraison Dernier Kilomètre',
    'contact.form.service.supply': 'Gestion de la Chaîne d\'Approvisionnement',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Parlez-nous de vos besoins d\'expédition...',
    'contact.form.submit': 'Envoyer le Message',
    'contact.form.required': '*',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.company.about': 'À Propos',
    'footer.company.team': 'Notre Équipe',
    'footer.company.careers': 'Carrières',
    'footer.company.news': 'Nouvelles et Mises à Jour',
    'footer.company.privacy': 'Politique de Confidentialité',
    'footer.company.terms': 'Conditions de Service',
    'footer.contact': 'Infos Contact',
    'footer.copyright': '© 2024 Business Freight Solution. Tous droits réservés.',
    'footer.links.privacy': 'Confidentialité',
    'footer.links.terms': 'Conditions',
    'footer.links.sitemap': 'Plan du site',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};