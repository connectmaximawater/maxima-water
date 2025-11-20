import { 
  Droplets, 
  Home, 
  Building2, 
  Factory, 
  Wrench,
  CheckCircle2,
  ArrowRight,
  Settings,
  ClipboardCheck,
  Beaker,
  MessageSquare,
  TrendingUp,
  Shield
} from 'lucide-react';

const Services = () => {

  const mainServices = [
    {
      icon: <Home className="h-16 w-16" />,
      title: 'Residential Solutions',
      description: 'Custom rainwater harvesting systems designed for homes and apartments',
      features: [
        'Rooftop rainwater collection',
        'Underground storage tanks',
        'Filtration and purification systems',
        'Automated irrigation setup',
        'Overflow management',
      ],
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: <Building2 className="h-16 w-16" />,
      title: 'Commercial Systems',
      description: 'Large-scale solutions for offices, shopping centers, and institutions',
      features: [
        'High-capacity storage systems',
        'Multi-building integration',
        'Advanced filtration technology',
        'Water recycling systems',
        'Real-time monitoring',
      ],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <Factory className="h-16 w-16" />,
      title: 'Industrial Applications',
      description: 'Heavy-duty systems for manufacturing and industrial facilities',
      features: [
        'Massive storage capacity',
        'Process water treatment',
        'Cooling water recycling',
        'Compliance management',
        'Industrial-grade components',
      ],
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  const additionalServices = [
    {
      icon: <Settings className="h-12 w-12" />,
      title: 'System Design & Installation',
      description: 'Professional design and seamless installation by certified experts',
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: 'Maintenance & Repair',
      description: 'Regular maintenance and 24/7 repair services to ensure optimal performance',
    },
    {
      icon: <Beaker className="h-12 w-12" />,
      title: 'Water Quality Testing',
      description: 'Comprehensive water quality analysis and treatment recommendations',
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: 'Consultation Services',
      description: 'Expert advice on water conservation and system optimization',
    },
    {
      icon: <ClipboardCheck className="h-12 w-12" />,
      title: 'Compliance Support',
      description: 'Help with regulatory compliance and certification processes',
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'System Upgrades',
      description: 'Modernize existing systems with latest technology and efficiency improvements',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Free site assessment and requirement analysis',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Custom system design tailored to your needs',
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Professional installation by certified technicians',
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Comprehensive testing and quality assurance',
    },
    {
      number: '05',
      title: 'Support',
      description: 'Ongoing maintenance and customer support',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
        <div className="absolute inset-0 opacity-10">
          <Droplets className="absolute top-10 right-20 h-32 w-32 text-white animate-float" />
          <Droplets className="absolute bottom-20 left-20 h-24 w-24 text-white animate-float animation-delay-2000" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Our <span className="text-cyan-200">Services</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Comprehensive rainwater harvesting solutions for every need
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete <span className="text-water-dark">Water Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From residential to industrial, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-water-light">
                  <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white`}>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-100">{service.description}</p>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-water-dark flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 w-full bg-water-dark text-white px-6 py-3 rounded-full hover:bg-water-light transition-all duration-300 flex items-center justify-center group">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Additional <span className="text-water-dark">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supporting you at every step of your water conservation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-water-dark mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-cyan-200">Process</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              A seamless journey from consultation to installation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-5xl font-bold text-water-dark mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our <span className="text-water-dark">Services?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-water-light/20 p-3 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-water-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Professionals</h3>
                    <p className="text-gray-600">Our team consists of certified engineers and technicians with years of experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-water-light/20 p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-water-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                    <p className="text-gray-600">We use only premium materials and provide comprehensive warranties on all installations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-water-light/20 p-3 rounded-full flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-water-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">Over 500 successful projects with measurable water and cost savings.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-water-light to-water-dark rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-8">Service Highlights</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">✓</div>
                    <div>
                      <div className="font-semibold text-xl">Free Consultation</div>
                      <div className="text-gray-100">No obligation site assessment</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">✓</div>
                    <div>
                      <div className="font-semibold text-xl">24/7 Support</div>
                      <div className="text-gray-100">Always here when you need us</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">✓</div>
                    <div>
                      <div className="font-semibold text-xl">Warranty Coverage</div>
                      <div className="text-gray-100">5-year comprehensive warranty</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">✓</div>
                    <div>
                      <div className="font-semibold text-xl">Flexible Financing</div>
                      <div className="text-gray-100">Affordable payment plans available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-200 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
