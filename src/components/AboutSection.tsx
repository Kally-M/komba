
import { Users, Award, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '10K+', label: 'Shipments Delivered' },
    { number: '99.9%', label: 'On-Time Delivery' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Reliability',
      description: 'We deliver on our promises with consistent, dependable service that you can count on.'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Streamlined processes and cutting-edge technology ensure fast, cost-effective solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in every aspect of our freight and logistics services.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, becoming an extension of their business.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-freight-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-freight-gold">Our Company</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience in the logistics industry, Komba LaJoie Business Freight Solution 
            has established itself as a trusted partner for businesses worldwide. connecting South Africa and Democratic Republic of Congo.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-freight-gold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-white mb-6">
              Leading the Future of Logistics
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded with a vision to revolutionize the freight industry, we combine traditional 
                logistics expertise with innovative technology solutions to deliver unparalleled service.
              </p>
              <p>
                Our commitment to excellence has earned us the trust of businesses across various 
                industries, from small startups to Fortune 500 companies. We understand that every 
                shipment is critical to your success.
              </p>
              <p>
                Today, we operate a global network spanning over 17 countries, with state-of-the-art 
                facilities and a team of logistics professionals dedicated to your success.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-freight-gold/10 backdrop-blur-sm border border-freight-gold/20 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-freight-gold mb-6">Our Mission</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To provide innovative, reliable, and cost-effective freight solutions that empower 
                businesses to grow and succeed in the global marketplace.
              </p>
              <h4 className="text-2xl font-bold text-freight-gold mb-6">Our Vision</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the world's most trusted logistics partner, setting new standards for 
                excellence in freight transportation and supply chain management.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-freight-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-freight-black" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
