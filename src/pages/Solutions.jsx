import { Link } from 'react-router-dom';
import { 
  Building2,
  Home as HomeIcon,
  School,
  Factory,
  Droplets,
  Filter,
  Zap,
  CheckCircle2,
  ArrowRight,
  Shield,
  Settings,
  TrendingDown
} from 'lucide-react';

const Solutions = () => {
  const systemTypes = [
    {
      title: 'Rooftop Rainwater Harvesting',
      description: 'Collect rainwater directly from rooftops - the most common and efficient method',
      icon: <HomeIcon className="h-16 w-16" />,
      features: ['Maximum collection efficiency', 'Minimal land requirement', 'Ideal for all buildings'],
    },
    {
      title: 'Surface Runoff System',
      description: 'Capture water from paved surfaces, roads, and open areas',
      icon: <Droplets className="h-16 w-16" />,
      features: ['Large collection area', 'Flood prevention', 'Groundwater recharge'],
    },
    {
      title: 'Direct Recharge System',
      description: 'Direct feeding of rainwater into underground aquifers',
      icon: <TrendingDown className="h-16 w-16" />,
      features: ['Groundwater enhancement', 'Eco-friendly', 'Long-term benefits'],
    },
    {
      title: 'Storage Tank System',
      description: 'Store harvested rainwater for immediate use',
      icon: <Settings className="h-16 w-16" />,
      features: ['Instant water availability', 'Controlled usage', 'Quality maintenance'],
    },
    {
      title: 'Automatic Dual-Source Switching',
      description: 'Our signature system - automatic switching between rainwater and municipal supply',
      icon: <Zap className="h-16 w-16" />,
      features: ['Zero manual intervention', 'Continuous supply', 'Smart sensors'],
      highlight: true,
    },
  ];

  const packages = [
    {
      name: 'Basic Package',
      price: '₹80,000 - ₹1,50,000',
      suitable: 'Individual Houses (up to 2000 sq ft)',
      includes: [
        'Rooftop collection system',
        'First flush mechanism',
        'Sand & mesh filter',
        '1000L storage tank',
        'Basic piping & installation',
        '1 year warranty',
      ],
    },
    {
      name: 'Standard Package',
      price: '₹2,50,000 - ₹5,00,000',
      suitable: 'Apartments (20-50 units)',
      includes: [
        'Complete rooftop collection',
        'Advanced filtration system',
        'Underground sump (10,000L)',
        'Automatic switching system',
        'Distribution network',
        '2 years warranty',
        'Annual maintenance',
      ],
      popular: true,
    },
    {
      name: 'Premium Package',
      price: '₹8,00,000+',
      suitable: 'Large Apartments & Commercial Buildings',
      includes: [
        'Comprehensive RWH system',
        'Multi-stage filtration',
        'Large capacity storage (25,000L+)',
        'Smart automation & monitoring',
        'Water quality testing unit',
        '5 years comprehensive warranty',
        'Bi-annual maintenance',
        '24/7 technical support',
      ],
    },
  ];

  const clientTypes = [
    {
      title: 'Apartment Complexes',
      icon: '🏢',
      description: 'Complete solutions for multi-unit residential buildings',
      benefits: ['Reduce common area water bills', 'Compliance with regulations', 'Increase property value'],
    },
    {
      title: 'Individual Houses',
      icon: '🏠',
      description: 'Customized systems for independent homes and villas',
      benefits: ['Personal water security', 'Garden & car washing', 'Low maintenance'],
    },
    {
      title: 'Schools & Institutions',
      icon: '🏫',
      description: 'Educational facilities with high water requirements',
      benefits: ['Cost savings', 'Environmental awareness', 'Govt grants available'],
    },
    {
      title: 'Industries & Factories',
      icon: '🏭',
      description: 'Large-scale systems for industrial applications',
      benefits: ['Process water', 'Cooling systems', 'CSR compliance'],
    },
  ];

  const whatsIncluded = [
    { item: 'First Flush System', desc: 'Removes initial dirty water automatically' },
    { item: 'Multi-Stage Filters', desc: 'Mesh, sand, and carbon filtration' },
    { item: 'Storage Tanks', desc: 'Overhead/underground as per requirement' },
    { item: 'Smart Sensors', desc: 'Water level and quality monitoring' },
    { item: 'Pump System', desc: 'Efficient water distribution' },
    { item: 'Complete Plumbing', desc: 'Professional installation' },
    { item: 'Testing & Commissioning', desc: 'Full system verification' },
    { item: 'User Training', desc: 'Operation and maintenance guidance' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-6">
            Rainwater Harvesting <span className="text-cyan-200">Solutions</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-100 max-w-3xl mx-auto">
            Comprehensive systems designed for apartments, houses, schools, and industries
          </p>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Solutions for <span className="text-water-dark">Every Need</span>
            </h2>
            <p className="text-base text-gray-600">Tailored rainwater harvesting systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
                <div className="text-5xl md:text-6xl mb-4 text-center">{client.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{client.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{client.description}</p>
                <ul className="space-y-2">
                  {client.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs md:text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-water-dark flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of <span className="text-water-dark">Systems</span>
            </h2>
            <p className="text-xl text-gray-600">Choose the right technology for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemTypes.map((system, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  system.highlight
                    ? 'bg-gradient-to-br from-water-dark to-blue-700 text-white border-4 border-cyan-400'
                    : 'bg-white hover:-translate-y-1'
                }`}
              >
                {system.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-xs md:text-sm font-bold">
                      ⭐ SIGNATURE SYSTEM
                    </span>
                  </div>
                )}
                <div className={`mb-4 ${system.highlight ? 'text-cyan-200' : 'text-water-dark'}`}>
                  {system.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${system.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {system.title}
                </h3>
                <p className={`mb-4 ${system.highlight ? 'text-gray-100' : 'text-gray-600'}`}>
                  {system.description}
                </p>
                <ul className="space-y-2">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs md:text-sm">
                      <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${system.highlight ? 'text-cyan-200' : 'text-water-dark'}`} />
                      <span className={system.highlight ? 'text-gray-100' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              What's <span className="text-water-dark">Included</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600">Complete end-to-end solution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatsIncluded.map((component, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-water-dark flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{component.item}</h4>
                    <p className="text-xs md:text-sm text-gray-600">{component.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Packages & <span className="text-cyan-200">Pricing</span>
            </h2>
            <p className="text-base md:text-xl text-gray-200">Transparent pricing for every budget</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 transform scale-105 shadow-2xl border-4 border-yellow-400'
                    : 'bg-white/10 backdrop-blur-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-lg md:text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-2xl md:text-3xl font-bold mb-4 text-cyan-200">{pkg.price}</div>
                <p className="text-xs md:text-sm mb-6 text-gray-200">Best for: {pkg.suitable}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-cyan-200 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-200 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 text-xs md:text-sm">* Prices vary based on building size, location, and specific requirements</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Ready to Choose Your Solution?
          </h2>
          <p className="text-base md:text-xl text-gray-100 mb-8">
            Get a customized quote based on your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-cyan-200 transition-colors group"
            >
              Schedule Free Inspection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/calculator"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Calculate Savings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
