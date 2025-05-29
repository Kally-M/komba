
import { useState } from 'react';
import { Menu, X, Truck, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className="fixed top-0 w-full bg-freight-black/95 backdrop-blur-sm z-50 border-b border-freight-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-freight-gold  flex items-center justify-center">
              <img src="public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg" alt="" srcset="" />
            </div>
            <span className="text-freight-gold font-bold text-xl">Komba LaJoie Business Freight Solution</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-freight-gold transition-colors duration-300">{t('nav.home')}</a>
            <a href="#services" className="text-white hover:text-freight-gold transition-colors duration-300">{t('nav.services')}</a>
            <a href="#about" className="text-white hover:text-freight-gold transition-colors duration-300">{t('nav.about')}</a>
            <a href="#partners" className="text-white hover:text-freight-gold transition-colors duration-300">{t('nav.partners')}</a>
            <a href="#contact" className="text-white hover:text-freight-gold transition-colors duration-300">{t('nav.contact')}</a>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-freight-gold transition-colors duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            
            <button className="bg-freight-gold text-freight-black px-6 py-2 rounded-lg font-semibold hover:bg-freight-gold-light transition-colors duration-300">
              {t('nav.getQuote')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-freight-gold transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-freight-black border-t border-freight-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:text-freight-gold transition-colors duration-300">{t('nav.home')}</a>
              <a href="#services" className="block px-3 py-2 text-white hover:text-freight-gold transition-colors duration-300">{t('nav.services')}</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-freight-gold transition-colors duration-300">{t('nav.about')}</a>
              <a href="#partners" className="block px-3 py-2 text-white hover:text-freight-gold transition-colors duration-300">{t('nav.partners')}</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-freight-gold transition-colors duration-300">{t('nav.contact')}</a>
              
              {/* Language Toggle Mobile */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 text-white hover:text-freight-gold transition-colors duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              
              <button className="w-full mt-2 bg-freight-gold text-freight-black px-6 py-2 rounded-lg font-semibold hover:bg-freight-gold-light transition-colors duration-300">
                {t('nav.getQuote')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;