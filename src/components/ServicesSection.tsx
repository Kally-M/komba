
import { Truck, Ship, Plane, Package, MapPin, BarChart3 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: 'Ground Freight',
      description: 'Reliable ground transportation services for regional and national deliveries.',
      features: ['Door-to-door delivery', 'Real-time tracking', 'Flexible scheduling']
    },
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Cost-effective ocean shipping solutions for international cargo transportation.',
      features: ['FCL & LCL options', 'Port-to-port service', 'Customs clearance']
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and secure air cargo services for time-sensitive shipments worldwide.',
      features: ['Express delivery', 'Temperature controlled', 'Dangerous goods certified']
    },
    {
      icon: Package,
      title: 'Warehousing',
      description: 'Secure storage and distribution centers with advanced inventory management.',
      features: ['Climate controlled', '24/7 security', 'Inventory management']
    },
    {
      icon: MapPin,
      title: 'Last Mile Delivery',
      description: 'Efficient final delivery solutions to ensure your packages reach their destination.',
      features: ['Same-day delivery', 'Signature required', 'Photo confirmation']
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization and management services.',
      features: ['Analytics & reporting', 'Route optimization', 'Cost reduction']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-freight-black mb-6">
            Our <span className="text-freight-gold">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business needs with precision and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-freight-gold rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-freight-black" />
                </div>
                <h3 className="text-2xl font-bold text-freight-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-freight-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
