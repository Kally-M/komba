import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmergencyCall = () => {
    // Make the emergency call functional by opening the phone dialer
    window.location.href = 'tel:+27610530106';
    // You can also add logic to handle emergency calls differently if needed
    alert(t('contact.emergency.callAlert'));
    setShowForm(false); // Hide the form if it was open
    // Optionally, you can reset the form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleRequestQuote = () => {
    setShowForm(true);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-freight-black mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className={`grid ${showForm ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-16`}>
          {/* Contact Info */}
          <div className={`animate-slide-in-left ${!showForm ? 'max-w-2xl mx-auto' : ''}`}>
            <h3 className="text-2xl font-bold text-freight-black mb-8">{t('contact.info.title')}</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-freight-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-freight-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-freight-black mb-1">{t('contact.info.phone')}</h4>
                  <p className="text-gray-600">+27 61 053 0106</p>
                  <p className="text-gray-600">+243 97 060 8284</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-freight-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-freight-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-freight-black mb-1">{t('contact.info.email')}</h4>
                  <p className="text-gray-600">cedrickkomba51@gmail.com</p>
                  <p className="text-gray-600">kombalajoie@businessfreight.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-freight-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-freight-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-freight-black mb-1">{t('contact.info.address')}</h4>
                  <p className="text-gray-600">38 Turvey street</p>
                  <p className="text-gray-600">Benoni, JHB. South Africa</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-freight-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-freight-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-freight-black mb-1">{t('contact.info.hours')}</h4>
                  <p className="text-gray-600">{t('contact.info.hours.weekdays')}</p>
                  <p className="text-gray-600">{t('contact.info.hours.emergency')}</p>
                </div>
              </div>
            </div>

            <div className="bg-freight-black rounded-xl p-8">
              <h4 className="text-xl font-bold text-freight-gold mb-4">{t('contact.emergency.title')}</h4>
              <p className="text-gray-300 mb-6">
                {t('contact.emergency.description')}
              </p>
              <button 
                onClick={handleEmergencyCall}
                className="bg-freight-gold text-freight-black px-6 py-3 rounded-lg font-semibold hover:bg-freight-gold-light transition-colors duration-300"
              >
                {t('contact.emergency.button')}
              </button>
            </div>
          </div>

          {/* Contact Form or Request Quote Button */}
          {!showForm ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 text-center animate-slide-in-right">
                <h3 className="text-2xl font-bold text-freight-black mb-6">{t('contact.form.title')}</h3>
                <p className="text-gray-600 mb-8">
                  {t('contact.form.description')}
                </p>
                <button
                  onClick={handleRequestQuote}
                  className="bg-freight-gold text-freight-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-freight-gold-light transition-all duration-300 transform hover:scale-105"
                >
                  {t('contact.form.requestQuote')}
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-freight-black">{t('contact.form.title')}</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-freight-black font-semibold mb-2">
                        {t('contact.form.name')} {t('contact.form.required')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freight-gold focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-freight-black font-semibold mb-2">
                        {t('contact.form.email')} {t('contact.form.required')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freight-gold focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-freight-black font-semibold mb-2">{t('contact.form.phone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freight-gold focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-freight-black font-semibold mb-2">{t('contact.form.company')}</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freight-gold focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-freight-black font-semibold mb-2">{t('contact.form.service')}</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freight-gold focus:border-transparent transition-all duration-300"
                    >
                      <option value="">{t('contact.form.service.select')}</option>
                      <option value="ground">{t('contact.form.service.ground')}</option>
                      <option value="ocean">{t('contact.form.service.ocean')}</option>
                      <option value="air">{t('contact.form.service.air')}</option>
                      <option value="warehousing">{t('contact.form.service.warehousing')}</option>
                      <option value="lastmile">{t('contact.form.service.lastmile')}</option>
                      <option value="supply-chain">{t('contact.form.service.supply')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-freight-black font-semibold mb-2">{t('contact.form.message')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freight-gold focus:border-transparent transition-all duration-300 resize-none"
                      placeholder={t('contact.form.message.placeholder')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-freight-gold text-freight-black py-4 rounded-lg font-semibold text-lg hover:bg-freight-gold-light transition-all duration-300 transform hover:scale-105"
                  >
                    {t('contact.form.submit')}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
