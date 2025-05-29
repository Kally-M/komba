
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const staff = [
    { 
      name: 'Cedrick Komba', 
      position: 'CEO & Founder',
      photo: 'public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg',
      description: 'Leading our company with 20+ years of logistics experience'
    },
    { 
      name: 'Kally Mukeba', 
      position: 'Operations and IT Manager',
      photo: 'public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg',
      description: 'Ensuring smooth operations and customer satisfaction'
    },
    { 
      name: 'Michael Mabuma', 
      position: 'Logistics Coordinator',
      photo: 'public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg',
      description: 'Coordinating international shipments and customs'
    },
    { 
      name: 'Careine Koma', 
      position: 'Customer Service Lead',
      photo: 'public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg',
      description: 'Providing exceptional customer support and solutions'
    },
    { 
      name: 'Arsene Komba', 
      position: 'Fleet Manager',
      photo: 'public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg',
      description: 'Managing our transportation fleet and drivers'
    },
    { 
      name: 'Ordick Komba', 
      position: 'Finance Director',
      photo: 'public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg',
      description: 'Overseeing financial operations and planning'
    },
    { 
      name: 'Salem', 
      position: 'Warehouse Supervisor',
      photo: 'public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg',
      description: 'Supervising warehouse operations and inventory'
    },
    { 
      name: 'Elianne Komba', 
      position: 'Safety Coordinator',
      photo: 'public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg',
      description: 'Ensuring safety compliance and training programs'
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollWidth - clientWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 20);

    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => {
      const newIntervalId = setInterval(scroll, 20);
      return newIntervalId;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
      const newIntervalId = setInterval(scroll, 20);
    });

    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="partners" className="py-20 bg-freight-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('partners.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden whitespace-nowrap"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate staff array to create seamless loop */}
            {[...staff, ...staff].map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="flex-shrink-0 w-80 bg-freight-black-light rounded-xl p-6 hover:scale-105 transition-transform duration-300 border border-freight-gold/20 hover:border-freight-gold/40"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-3 border-freight-gold">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-freight-gold font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-normal">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;