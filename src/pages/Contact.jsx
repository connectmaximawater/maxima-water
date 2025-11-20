import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  Droplets,
  MessageSquare,
  User,
  Building2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Phone',
      details: ['+91 6300 225 335', '24/7 Service Available'],
      action: 'tel:+916300225335',
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email',
      details: ['connect.maximawater@gmail.com'],
      action: 'mailto:connect.maximawater@gmail.com',
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Address',
      details: ['Janasakthi Nagar, Vedayapalem', 'Nellore, Andhra Pradesh'],
      action: '#',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Service Hours',
      details: ['24/7 Available', 'Emergency Support'],
      action: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
        <div className="absolute inset-0 opacity-10">
          <Droplets className="absolute top-10 left-20 h-32 w-32 text-white" />
          <Droplets className="absolute bottom-20 right-20 h-24 w-24 text-white" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-200">Touch</span>
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            We're here to help you with all your rainwater harvesting needs
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-2xl p-6 z-1"
              >
                <div className="text-water-dark mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a <span className="text-water-dark">Message</span>
                </h2>
                
                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">Your message has been sent successfully. We'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                          <User className="h-4 w-4 inline mr-2" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-water-dark focus:ring-2 focus:ring-water-light/50 outline-none transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                          <Mail className="h-4 w-4 inline mr-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-water-dark focus:ring-2 focus:ring-water-light/50 outline-none transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                          <Phone className="h-4 w-4 inline mr-2" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-water-dark focus:ring-2 focus:ring-water-light/50 outline-none transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="company">
                          <Building2 className="h-4 w-4 inline mr-2" />
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-water-dark focus:ring-2 focus:ring-water-light/50 outline-none transition-all duration-300"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                        <MessageSquare className="h-4 w-4 inline mr-2" />
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-water-dark focus:ring-2 focus:ring-water-light/50 outline-none transition-all duration-300"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                        <MessageSquare className="h-4 w-4 inline mr-2" />
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-water-dark focus:ring-2 focus:ring-water-light/50 outline-none transition-all duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-water-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-water-light transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center group"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why <span className="text-water-dark">Contact Us?</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-water-light/20 p-3 rounded-full flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-water-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Free Consultation</h3>
                      <p className="text-gray-600">Get expert advice at no cost. We assess your needs and provide tailored solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-water-light/20 p-3 rounded-full flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-water-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Quick Response</h3>
                      <p className="text-gray-600">We respond to all inquiries within 24 hours, ensuring you get the help you need promptly.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-water-light/20 p-3 rounded-full flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-water-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Detailed Quotes</h3>
                      <p className="text-gray-600">Receive transparent, itemized quotes with no hidden fees or surprises.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-water-light to-water-dark rounded-2xl p-8 shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
                <div className="bg-white/10 rounded-xl p-8 mb-4 backdrop-blur-sm">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-cyan-200" />
                  <p className="text-center text-lg">
                    Janasakthi Nagar, Vedayapalem<br />
                    Nellore, Andhra Pradesh<br />
                    India
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white text-water-dark px-6 py-3 rounded-full font-semibold hover:bg-cyan-200 transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Frequently Asked <span className="text-water-dark">Questions</span>
            </h2>
            <p className="text-base text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does installation take?',
                a: 'Most residential installations are completed within 2-3 days, depending on the system complexity.',
              },
              {
                q: 'Do you offer financing options?',
                a: 'Yes, we offer flexible financing plans to make our services accessible to everyone.',
              },
              {
                q: 'What maintenance is required?',
                a: 'We recommend annual maintenance checks. Our team provides comprehensive maintenance services.',
              },
              {
                q: 'Is rainwater safe for drinking?',
                a: 'With proper filtration and treatment systems, rainwater can be safe for all uses including drinking.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Prefer to Talk?
            </h2>
            <p className="text-base text-gray-100 mb-8">
              Give us a call and speak with our experts directly
            </p>
            <a
              href="tel:+916300225335"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-200 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              +91 6300 225 335
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
