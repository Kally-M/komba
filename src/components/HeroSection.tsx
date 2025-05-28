
import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-freight-black via-freight-black-light to-freight-black flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="text-freight-gold block">Freight Solutions</span>
              for Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Fast, reliable, and secure logistics services that keep your business moving forward. 
              We deliver excellence across every mile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-freight-gold text-freight-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-freight-gold-light transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-freight-gold text-freight-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-freight-gold hover:text-freight-black transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-freight-gold mb-2">1000+</div>
                <div className="text-gray-400">Deliveries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-freight-gold mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-freight-gold mb-2">50+</div>
                <div className="text-gray-400">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="animate-slide-in-right">
            <div className="grid gap-6">
              <div className="bg-freight-black-light/50 backdrop-blur-sm border border-freight-gold/20 rounded-xl p-6 hover:border-freight-gold/40 transition-all duration-300 animate-float">
                <Shield className="w-12 h-12 text-freight-gold mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Secure Transport</h3>
                <p className="text-gray-300">Your cargo is protected with our advanced security systems and insurance coverage.</p>
              </div>
              
              <div className="bg-freight-black-light/50 backdrop-blur-sm border border-freight-gold/20 rounded-xl p-6 hover:border-freight-gold/40 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <Clock className="w-12 h-12 text-freight-gold mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">On-Time Delivery</h3>
                <p className="text-gray-300">Reliable scheduling and real-time tracking ensure your shipments arrive when expected.</p>
              </div>
              
              <div className="bg-freight-black-light/50 backdrop-blur-sm border border-freight-gold/20 rounded-xl p-6 hover:border-freight-gold/40 transition-all duration-300 animate-float" style={{ animationDelay: '2s' }}>
                <Globe className="w-12 h-12 text-freight-gold mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
                <p className="text-gray-300">Extensive worldwide coverage with local expertise in every major market.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
