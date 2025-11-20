import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Leaf, 
  TrendingDown, 
  Shield, 
  Award,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  Phone,
  Calculator,
  ThumbsUp,
  Users,
  Settings
} from 'lucide-react';

const Home = () => {
  const benefits = [
    {
      icon: <TrendingDown className="h-10 w-10" />,
      title: 'Save 30-60% Water Bills',
      description: 'Reduce dependency on municipal water and cut costs significantly.',
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: '24/7 Water Availability',
      description: 'Never worry about water shortages with automatic dual-source switching.',
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: 'Eco-Friendly Solution',
      description: 'Sustainable, low maintenance, and environmentally responsible.',
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: 'Government Incentives',
      description: 'Qualify for subsidies and comply with regulations.',
    },
  ];

  const solutions = [
    {
      title: 'Apartment Rainwater Harvesting',
      description: 'Complete RWH systems for multi-story residential buildings',
      image: '🏢',
    },
    {
      title: 'Individual House System',
      description: 'Customized solutions for independent homes and villas',
      image: '🏠',
    },
    {
      title: 'Automatic Flush Switching',
      description: 'Smart auto-switch between rainwater and municipal supply',
      image: '⚡',
    },
    {
      title: 'Water Quality Filtration',
      description: 'Advanced filtration for safe, clean water usage',
      image: '💧',
    },
  ];

  const whyChooseUs = [
    'Government-approved methods and compliance',
    '100% quality materials with warranty',
    'Expert installation by certified professionals',
    '24/7 customer support and maintenance',
    'Free site inspection and consultation',
    'Transparent pricing with no hidden costs',
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Green Valley Apartments, Bangalore',
      text: 'Our water bills dropped by 45% after installation. The automatic switching works perfectly!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      location: 'Villa Owner, Hyderabad',
      text: 'Professional service from start to finish. We now have water even during summer months.',
      rating: 5,
    },
    {
      name: 'Apartment Association',
      location: 'Palm Residency, Chennai',
      text: 'Best investment for our 120-unit complex. Residents are extremely satisfied.',
      rating: 5,
    },
  ];

  const howItWorksSteps = [
    { step: 'Collect', icon: '☔', desc: 'Rainwater from rooftop' },
    { step: 'Filter', icon: '🔄', desc: 'Remove debris & impurities' },
    { step: 'Store', icon: '🪣', desc: 'In underground/overhead tank' },
    { step: 'Auto Switch', icon: '⚙️', desc: 'Smart valve control' },
    { step: 'Use', icon: '💦', desc: 'For flush, gardening, etc.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div>
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 text-shadow">
              Smart Rainwater Harvesting
              <br />
              <span className="text-cyan-200">for Apartments & Homes</span>
            </h1>
            <p className="text-base md:text-2xl text-gray-100 mb-4 font-semibold">
              Save 30–60% on Water Bills
            </p>
            <p className="text-sm md:text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              Automatic switching between rainwater & normal water supply. Never run out of water again!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-cyan-200 transition-all duration-300 shadow-lg flex items-center group"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Get Free Site Inspection
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              {/* <Link
                to="/calculator"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg flex items-center"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Savings
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
              Why Rainwater <span className="text-water-dark">Harvesting?</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of sustainable water management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-water-light group"
              >
                <div className="text-water-dark mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Short Graphic */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
              How It <span className="text-water-dark">Works</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600">Simple, automated, and efficient</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {howItWorksSteps.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="bg-white rounded-full w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center shadow-lg border-2 md:border-4 border-water-light">
                    <div className="text-4xl md:text-5xl mb-2">{item.icon}</div>
                    <div className="text-xs md:text-sm font-bold text-gray-900">{item.step}</div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-[120px]">{item.desc}</p>
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-water-dark mx-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-water-dark font-semibold text-sm md:text-lg hover:text-water-light transition-colors"
            >
              Learn More About The Process
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
              Solutions We <span className="text-water-dark">Offer</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-2xl mx-auto">
              Tailored rainwater harvesting systems for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-5xl md:text-6xl mb-4 text-center">{solution.image}</div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-3 text-center">{solution.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 text-center">{solution.description}</p>
                <div className="mt-6 text-center">
                  <Link
                    to="/solutions"
                    className="text-water-dark font-semibold hover:text-water-light transition-colors inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-semibold mb-4">
              Why Choose <span className="text-cyan-200">Maxima Water?</span>
            </h2>
            <p className="text-xs md:text-base text-gray-100 max-w-2xl mx-auto">
              Your trusted partner in water conservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 md:space-x-4 bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl"
              >
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-cyan-200 flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm text-gray-100">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
              What Our <span className="text-water-dark">Clients Say</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600">Real experiences from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl md:text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-xl md:text-4xl font-semibold text-white mb-6">
              Ready to Save Water & Money?
            </h2>
            <p className="text-xs md:text-base text-gray-100 mb-8">
              Book a free on-site visit and get a customized quote today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-cyan-200 transition-all duration-300 shadow-lg group"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Book Free Site Visit
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/916300225335"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-green-600 transition-all duration-300 shadow-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
