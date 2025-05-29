
import { Truck, Ship, Plane, Package, MapPin, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      title: t('services.ground.title'),
      description: t('services.ground.description'),
      features: [t('services.ground.feature1'), t('services.ground.feature2'), t('services.ground.feature3')]
    },
    {
      icon: Ship,
      title: t('services.ocean.title'),
      description: t('services.ocean.description'),
      features: [t('services.ocean.feature1'), t('services.ocean.feature2'), t('services.ocean.feature3')]
    },
    {
      icon: Plane,
      title: t('services.air.title'),
      description: t('services.air.description'),
      features: [t('services.air.feature1'), t('services.air.feature2'), t('services.air.feature3')]
    },
    {
      icon: Package,
      title: t('services.warehousing.title'),
      description: t('services.warehousing.description'),
      features: [t('services.warehousing.feature1'), t('services.warehousing.feature2'), t('services.warehousing.feature3')]
    },
    {
      icon: MapPin,
      title: t('services.lastMile.title'),
      description: t('services.lastMile.description'),
      features: [t('services.lastMile.feature1'), t('services.lastMile.feature2'), t('services.lastMile.feature3')]
    },
    {
      icon: BarChart3,
      title: t('services.supply.title'),
      description: t('services.supply.description'),
      features: [t('services.supply.feature1'), t('services.supply.feature2'), t('services.supply.feature3')]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-freight-black mb-6">
            {t('services.title').split(' ').map((word, index) => 
              word === 'Services' || word === 'Nos' ? (
                <span key={index} className="text-freight-gold">{word} </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
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