
import { Users, Award, Zap, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '15+', label: t('about.stats.experience') },
    { number: '500+', label: t('about.stats.clients') },
    { number: '10K+', label: t('about.stats.shipments') },
    { number: '99.9%', label: t('about.stats.onTime') }
  ];

  const values = [
    {
      icon: Target,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description')
    },
    {
      icon: Zap,
      title: t('about.values.efficiency.title'),
      description: t('about.values.efficiency.description')
    },
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: Users,
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.description')
    }
  ];

  return (
    <section id="about" className="py-20 bg-freight-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
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
              {t('about.leading.title')}
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>{t('about.leading.paragraph1')}</p>
              <p>{t('about.leading.paragraph2')}</p>
              <p>{t('about.leading.paragraph3')}</p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-freight-gold/10 backdrop-blur-sm border border-freight-gold/20 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-freight-gold mb-6">{t('about.mission.title')}</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('about.mission.description')}
              </p>
              <h4 className="text-2xl font-bold text-freight-gold mb-6">{t('about.vision.title')}</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">{t('about.values.title')}</h3>
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