
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const staff = [
    { 
      name: 'John Smith', 
      position: 'CEO & Founder',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Leading our company with 20+ years of logistics experience'
    },
    { 
      name: 'Sarah Johnson', 
      position: 'Operations Manager',
      photo: 'public/logo/960eccae-deaa-4afc-a754-e7e982680fea.jpg',
      description: 'Ensuring smooth operations and customer satisfaction'
    },
    { 
      name: 'Michael Chen', 
      position: 'Logistics Coordinator',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Coordinating international shipments and customs'
    },
    { 
      name: 'Emily Rodriguez', 
      position: 'Customer Service Lead',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Providing exceptional customer support and solutions'
    },
    { 
      name: 'David Wilson', 
      position: 'Fleet Manager',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      description: 'Managing our transportation fleet and drivers'
    },
    { 
      name: 'Lisa Anderson', 
      position: 'Finance Director',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      description: 'Overseeing financial operations and planning'
    },
    { 
      name: 'Robert Taylor', 
      position: 'Warehouse Supervisor',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
      description: 'Supervising warehouse operations and inventory'
    },
    { 
      name: 'Jennifer Brown', 
      position: 'Safety Coordinator',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
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