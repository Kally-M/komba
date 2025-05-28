
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-freight-black border-t border-freight-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-freight-gold rounded-lg flex items-center justify-center">
                <img src="color-freight-craft/public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg" alt="" srcset="" />              </div>
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
            <h3 className="text-freight-gold font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Ground Freight</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Ocean Freight</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Air Freight</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Warehousing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Last Mile Delivery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Supply Chain</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-freight-gold font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">News & Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-freight-gold font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-freight-gold flex-shrink-0" />
                <span className="text-gray-300">+27 61 051 0106 </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-freight-gold flex-shrink-0" />
                <span className="text-gray-300">cedrickkomba51@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-freight-gold flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <div>123 Logistics Boulevard</div>
                  <div>Benoni, Johannesburg. South Africa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-freight-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2025 Komba LaJoie Business Freight Solution. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Terms</a>
              <a href="#" className="text-gray-300 hover:text-freight-gold transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
