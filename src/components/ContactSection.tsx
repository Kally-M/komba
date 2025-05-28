
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-freight-black mb-6">
            Get In <span className="text-freight-gold">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to streamline your logistics? Contact us today for a customized freight solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-freight-black mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-freight-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-freight-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-freight-black mb-1">Phone</h4>
                  <p className="text-gray-600">+27 (61) 053 0106</p>
                  <p className="text-gray-600">+243 (97) 060 8284</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-freight-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-freight-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-freight-black mb-1">Email</h4>
                  <p className="text-gray-600">cedrickkomba51@gmail.com.com</p>
                  <p className="text-gray-600">kombalajoie@businessfreight.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-freight-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-freight-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-freight-black mb-1">Address</h4>
                  <p className="text-gray-600">123 Logistics Boulevard</p>
                  <p className="text-gray-600">Benoni, Johannesburg. South Africa</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-freight-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-freight-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-freight-black mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Emergency Support: 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-freight-black rounded-xl p-8">
              <h4 className="text-xl font-bold text-freight-gold mb-4">Need Immediate Assistance?</h4>
              <p className="text-gray-300 mb-6">
                Our emergency support team is available 24/7 for urgent shipments and critical logistics needs.
              </p>
              <button className="bg-freight-gold text-freight-black px-6 py-3 rounded-lg font-semibold hover:bg-freight-gold-light transition-colors duration-300">
                Call Emergency Line
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-freight-black mb-8">Request a Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-freight-black font-semibold mb-2">Full Name *</label>
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
                    <label className="block text-freight-black font-semibold mb-2">Email Address *</label>
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
                    <label className="block text-freight-black font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freight-gold focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-freight-black font-semibold mb-2">Company Name</label>
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
                  <label className="block text-freight-black font-semibold mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freight-gold focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="ground">Ground Freight</option>
                    <option value="ocean">Ocean Freight</option>
                    <option value="air">Air Freight</option>
                    <option value="warehousing">Warehousing</option>
                    <option value="supply-chain">Supply Chain Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-freight-black font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freight-gold focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your shipping needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-freight-gold text-freight-black py-4 rounded-lg font-semibold text-lg hover:bg-freight-gold-light transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
