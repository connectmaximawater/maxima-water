import { 
  Droplets, 
  Wrench, 
  ClipboardCheck, 
  Settings, 
  ShieldCheck, 
  Headphones,
  CheckCircle2,
  ArrowRight,
  Phone,
  Zap,
  TreePine,
  FileText,
  Beaker,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {

  const services = [
    {
      id: 1,
      icon: <ClipboardCheck className="h-10 w-10 md:h-12 md:w-12" />,
      title: "Free Site Inspection & Consultation",
      shortDesc: "Expert assessment of your property's rainwater harvesting potential",
      features: [
        "Comprehensive site survey and analysis",
        "Roof area measurement and catchment calculation",
        "Water demand assessment based on usage patterns",
        "Soil percolation test for recharge systems",
        "Feasibility study and cost-benefit analysis",
        "Customized system recommendations"
      ],
      details: "Our experienced engineers visit your property to conduct a thorough assessment. We analyze your roof structure, available space, water consumption patterns, and local rainfall data to design the most efficient rainwater harvesting system tailored to your specific needs. This service is completely free with no obligations.",
      benefits: [
        "Zero-cost professional assessment",
        "Detailed technical report with drawings",
        "ROI calculation and payback period analysis",
        "Government subsidy eligibility guidance"
      ]
    },
    {
      id: 2,
      icon: <Settings className="h-10 w-10 md:h-12 md:w-12" />,
      title: "System Design & Engineering",
      shortDesc: "Custom-designed RWH systems for optimal performance",
      features: [
        "CAD drawings and 3D system layouts",
        "Hydraulic calculations and pipe sizing",
        "Component specification and selection",
        "Integration with existing plumbing",
        "Compliance with local building codes",
        "Storm water management planning"
      ],
      details: "We design rainwater harvesting systems that maximize water collection while ensuring seamless integration with your property. Our designs comply with all local regulations and building codes. We use advanced software to simulate system performance under various rainfall scenarios.",
      benefits: [
        "Engineered for maximum efficiency",
        "Optimized component selection",
        "Cost-effective material usage",
        "Future expansion capabilities"
      ]
    },
    {
      id: 3,
      icon: <Wrench className="h-10 w-10 md:h-12 md:w-12" />,
      title: "Complete System Installation",
      shortDesc: "Professional installation by certified technicians",
      features: [
        "Roof gutter and downpipe installation",
        "First flush diverter system setup",
        "Multi-stage filtration unit installation",
        "Underground/overhead tank installation",
        "Automatic pump and switching system",
        "Recharge pit/well construction"
      ],
      details: "Our skilled installation team ensures every component is installed correctly and efficiently. We follow strict quality standards and safety protocols throughout the installation process. The work is completed with minimal disruption to your daily activities, typically within 3-7 days depending on system size.",
      benefits: [
        "Certified and experienced installers",
        "Quality materials and workmanship",
        "Minimal disruption during installation",
        "Clean and organized work site"
      ]
    },
    {
      id: 4,
      icon: <Zap className="h-10 w-10 md:h-12 md:w-12" />,
      title: "Automatic Dual-Source Switching",
      shortDesc: "Smart automation for seamless water supply",
      features: [
        "Intelligent water level sensors",
        "Automatic switching between rainwater & municipal supply",
        "Priority given to free rainwater",
        "Manual override option available",
        "Power failure backup mechanism",
        "Real-time system status indicators"
      ],
      details: "Our signature feature ensures you never run out of water. The system automatically uses harvested rainwater as the primary source and seamlessly switches to municipal supply only when rainwater is depleted. This happens automatically without any manual intervention, ensuring 24/7 uninterrupted water availability.",
      benefits: [
        "Zero manual intervention required",
        "Maximum utilization of free rainwater",
        "Continuous water availability",
        "Intelligent resource management"
      ]
    },
    {
      id: 5,
      icon: <Beaker className="h-10 w-10 md:h-12 md:w-12" />,
      title: "Water Quality Testing",
      shortDesc: "Ensuring safe and clean harvested water",
      features: [
        "Pre-installation baseline testing",
        "Post-installation water quality verification",
        "pH, TDS, and turbidity measurement",
        "Bacteriological testing (optional)",
        "Heavy metal analysis (if required)",
        "Compliance certification"
      ],
      details: "We conduct comprehensive water quality tests to ensure your harvested rainwater meets safety standards. Our testing includes physical, chemical, and biological parameters. You receive detailed reports with recommendations for any required water treatment additions.",
      benefits: [
        "Peace of mind about water safety",
        "Scientific testing methods",
        "Detailed analysis reports",
        "Treatment recommendations if needed"
      ]
    },
    {
      id: 6,
      icon: <ShieldCheck className="h-10 w-10 md:h-12 md:w-12" />,
      title: "Maintenance & Support (AMC)",
      shortDesc: "Regular upkeep for optimal system performance",
      features: [
        "Monthly filter cleaning and replacement",
        "Quarterly tank cleaning and sanitization",
        "Annual system inspection and servicing",
        "Pump maintenance and repairs",
        "Sensor calibration and testing",
        "Component replacement as needed"
      ],
      details: "Our Annual Maintenance Contract ensures your rainwater harvesting system operates at peak efficiency year-round. Regular maintenance prevents issues, extends system life, and maintains optimal water quality. We offer flexible AMC packages based on your system size and requirements.",
      benefits: [
        "Extended system lifespan",
        "Consistent water quality",
        "Priority service response",
        "Cost-effective upkeep"
      ]
    },
    {
      id: 7,
      icon: <TreePine className="h-10 w-10 md:h-12 md:w-12" />,
      title: "Groundwater Recharge Systems",
      shortDesc: "Replenishing groundwater for sustainable future",
      features: [
        "Recharge pit construction",
        "Recharge well drilling",
        "Percolation shaft installation",
        "Rain garden development",
        "Infiltration trench systems",
        "Aquifer mapping and monitoring"
      ],
      details: "We design and install groundwater recharge systems that allow excess rainwater to percolate back into the earth, raising the water table. This is especially beneficial in areas with declining groundwater levels. Our recharge systems help restore the natural water cycle.",
      benefits: [
        "Raises groundwater levels",
        "Reduces waterlogging",
        "Improves well yield",
        "Environmental sustainability"
      ]
    },
    {
      id: 8,
      icon: <FileText className="h-10 w-10 md:h-12 md:w-12" />,
      title: "Government Approvals & Documentation",
      shortDesc: "Complete paperwork and compliance support",
      features: [
        "RWH certificate application",
        "Building plan approvals",
        "Subsidy claim assistance",
        "Compliance documentation",
        "NOC from local authorities",
        "Technical specification reports"
      ],
      details: "We handle all the paperwork required for rainwater harvesting system compliance and government subsidies. Our team is well-versed with local regulations and assists you in obtaining all necessary approvals and certificates. We help you claim available government subsidies (up to 50% in some cases).",
      benefits: [
        "Hassle-free documentation",
        "Expert guidance on subsidies",
        "Legal compliance assurance",
        "Time-saving support"
      ]
    },
    {
      id: 9,
      icon: <Award className="h-10 w-10 md:h-12 md:w-12" />,
      title: "Retrofitting & Upgrades",
      shortDesc: "Enhancing existing RWH systems",
      features: [
        "System performance audit",
        "Component upgrades and replacements",
        "Capacity expansion",
        "Automation additions",
        "Filter system improvements",
        "Integration with existing infrastructure"
      ],
      details: "Already have a rainwater harvesting system that's not performing well? We audit existing systems, identify issues, and provide upgrade solutions. We can enhance capacity, add automation, improve filtration, or completely renovate old systems to modern standards.",
      benefits: [
        "Improved system efficiency",
        "Cost-effective upgrades",
        "Modern automation features",
        "Extended system life"
      ]
    },
    {
      id: 10,
      icon: <Headphones className="h-10 w-10 md:h-12 md:w-12" />,
      title: "24/7 Customer Support",
      shortDesc: "Round-the-clock assistance for emergencies",
      features: [
        "24/7 helpline availability",
        "Emergency repair services",
        "Remote troubleshooting support",
        "Spare parts availability",
        "Technical guidance",
        "System operation training"
      ],
      details: "Our customer support team is available 24/7 to address any concerns or emergencies. Whether it's a technical query or an urgent repair requirement, we're just a phone call away. We provide remote support for troubleshooting and dispatch technicians for on-site repairs when needed.",
      benefits: [
        "Always available support",
        "Quick emergency response",
        "Expert technical assistance",
        "Peace of mind"
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'Contact us for a free site inspection and detailed assessment',
    },
    {
      step: 2,
      title: 'Custom Design',
      description: 'Receive a tailored system design with cost estimates and ROI analysis',
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Our certified team installs your system with minimal disruption',
    },
    {
      step: 4,
      title: 'Testing & Training',
      description: 'System testing, water quality verification, and operation training',
    },
    {
      step: 5,
      title: 'Ongoing Support',
      description: '24/7 support, regular maintenance, and lifetime assistance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
            <Droplets className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
            <span className="text-xs md:text-sm font-medium">Comprehensive RWH Solutions</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
            From free consultation to lifetime support, we offer end-to-end rainwater harvesting solutions. 
            Explore our comprehensive range of services designed to meet all your water conservation needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a 
              href="tel:+916300225335"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              +91 6300 225 335
            </a>
            <Link 
              to="/calculator"
              className="inline-flex items-center justify-center bg-blue-500/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-500/30 transition-all border border-white/20"
            >
              Calculate Savings
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Complete Range of Services
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for successful rainwater harvesting, from planning to ongoing maintenance
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:flex`}
              >
                {/* Icon & Title Section */}
                <div className={`lg:w-2/5 p-6 md:p-10 flex flex-col justify-center ${
                  index % 3 === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-400' :
                  index % 3 === 1 ? 'bg-gradient-to-br from-cyan-500 to-blue-600' :
                  'bg-gradient-to-br from-blue-600 to-indigo-600'
                } text-white`}>
                  <div className="bg-white/10 backdrop-blur-sm w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Details Section */}
                <div className="lg:w-3/5 p-6 md:p-10">
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                    {service.details}
                  </p>

                  <div className="mb-4 md:mb-6">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2" />
                      What's Included
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                          <span className="text-xs md:text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                      <Award className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 mr-2" />
                      Key Benefits
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center bg-blue-50 text-blue-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              How We Work
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              A seamless journey from consultation to ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl mx-auto mb-3 md:mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Start Harvesting Rainwater?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-10 max-w-2xl mx-auto">
            Get a free consultation and detailed quote tailored to your needs. Our experts are ready to help you save water and money.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a
              href="tel:+916300225335"
              className="inline-flex items-center justify-center bg-blue-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-blue-500/30 transition-all border border-white/20"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now
            </a>
          </div>

          <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-white/20">
            <p className="text-xs md:text-sm text-blue-200 mb-3 md:mb-4">Our Commitment</p>
            <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                <p className="font-bold text-base md:text-lg mb-1">Free Site Visit</p>
                <p className="text-xs md:text-sm text-blue-100">No charges, no obligations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                <p className="font-bold text-base md:text-lg mb-1">5-Year Warranty</p>
                <p className="text-xs md:text-sm text-blue-100">Comprehensive coverage</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                <p className="font-bold text-base md:text-lg mb-1">24/7 Support</p>
                <p className="text-xs md:text-sm text-blue-100">Always here for you</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
