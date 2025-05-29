
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-freight-black border-t border-freight-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-freight-gold  flex items-center justify-center">
             
                <img src="public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg" alt="" srcset="" />
              </div>
              <span className="text-freight-gold font-bold text-xl">Komba LaJoie Business Freight Solution</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for professional freight and logistics solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-freight-gold/10 rounded-lg flex items-center justify-center hover:bg-freight-gold hover:text-freight-black transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
           
              <a href="#" className="w-10 h-10 bg-freight-gold/10 rounded-lg flex items-center justify-center hover:bg-freight-gold hover:text-freight-black transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-freight-gold font-bold text-lg mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('services.ground.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('services.ocean.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('services.air.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('services.warehousing.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('services.lastMile.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('services.supply.title')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-freight-gold font-bold text-lg mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('footer.company.about')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('footer.company.team')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('footer.company.careers')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('footer.company.news')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('footer.company.privacy')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('footer.company.terms')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-freight-gold font-bold text-lg mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-freight-gold flex-shrink-0" />
                <span className="text-gray-300">+27 61 053 0106</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-freight-gold flex-shrink-0" />
                <span className="text-gray-300">cedrickkomba51@gmail.com.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-freight-gold flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <div>38 Turvey Street</div>
                  <div>Benoni, JHB. South Africa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-freight-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('footer.links.privacy')}</a>
              <a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('footer.links.terms')}</a>
              <a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">{t('footer.links.sitemap')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;