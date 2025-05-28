
import { useState } from 'react';
import { Menu, X, Truck, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-freight-black/95 backdrop-blur-sm z-50 border-b border-freight-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-freight-gold rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-freight-black" />
            </div>
            <span className="text-freight-gold font-bold text-xl">Business Freight Solution</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-freight-gold transition-colors duration-300">Home</a>
            <a href="#services" className="text-white hover:text-freight-gold transition-colors duration-300">Services</a>
            <a href="#about" className="text-white hover:text-freight-gold transition-colors duration-300">About</a>
            <a href="#contact" className="text-white hover:text-freight-gold transition-colors duration-300">Contact</a>
            <button className="bg-freight-gold text-freight-black px-6 py-2 rounded-lg font-semibold hover:bg-freight-gold-light transition-colors duration-300">
              Get Quote
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
              <a href="#home" className="block px-3 py-2 text-white hover:text-freight-gold transition-colors duration-300">Home</a>
              <a href="#services" className="block px-3 py-2 text-white hover:text-freight-gold transition-colors duration-300">Services</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-freight-gold transition-colors duration-300">About</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-freight-gold transition-colors duration-300">Contact</a>
              <button className="w-full mt-2 bg-freight-gold text-freight-black px-6 py-2 rounded-lg font-semibold hover:bg-freight-gold-light transition-colors duration-300">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
