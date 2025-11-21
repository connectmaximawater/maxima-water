import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Leaf, 
  TrendingDown, 
  Shield, 
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  ChevronLeft,
  ChevronRight,
  Recycle,
  Home as HomeIcon,
  Building,
  Settings,
  Sprout,
  Wrench,
  CloudRain,
  Users,
  DollarSign,
  Zap
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Maxima%20Water%20Images.png",
      title: "Rainwater Harvesting Systems",
      subtitle: "Save 40-60% on Water Bills | Secure Your Water Future",
      description: "Professional rainwater harvesting solutions for homes, apartments, and commercial buildings",
      link: "/services/rainwater-harvesting"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Graywater%20Reuse%20Systems.png",
      title: "Graywater Reuse Systems",
      subtitle: "Recycle 50% of Your Household Water",
      description: "Capture water from showers, sinks, and washing machines for outdoor irrigation",
      link: "/services/graywater-reuse"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Drip%20Irrigation.png",
      title: "Smart Irrigation Systems",
      subtitle: "Save 50-70% Water with Precision Irrigation",
      description: "Drip, sprinkle, and micro irrigation solutions for efficient water management",
      link: "/services/irrigation-systems"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Design%20Garden%20an%20planning.png",
      title: "Landscape Installation",
      subtitle: "Transform Your Outdoor Spaces",
      description: "Complete landscaping services from design to installation with sustainable practices",
      link: "/services/landscape-installation"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Rainwater%20Harvesting%20System%20Service%20and%20Maintenance.png",
      title: "Service & Maintenance",
      subtitle: "Keep Your Water Systems Running Perfectly",
      description: "Comprehensive inspection, maintenance, and repair services for all water systems",
      link: "/services/service-maintain-inspect"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const services = [
    {
      icon: <Droplets className="h-10 w-10" />,
      title: "Rainwater Harvesting",
      description: "Capture rainfall from rooftops for storage and reuse. Save 40-60% on water bills annually.",
      benefits: ["56,000+ gallons/year potential", "10-year system warranty", "ROI in 3-7 years"],
      link: "/services/rainwater-harvesting",
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Maxima%20Water%20Images.png"
    },
    {
      icon: <Recycle className="h-10 w-10" />,
      title: "Graywater Reuse",
      description: "Recycle water from showers, sinks, and washing machines for outdoor irrigation use.",
      benefits: ["50% water recovery", "Climate-independent source", "5-year typical ROI"],
      link: "/services/graywater-reuse",
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Graywater%20Reuse%20Systems.png"
    },
    {
      icon: <Sprout className="h-10 w-10" />,
      title: "Irrigation Systems",
      description: "Precision drip, sprinkle, and micro irrigation for gardens, lawns, and landscapes.",
      benefits: ["50-70% water savings", "Automated control systems", "Healthier plant growth"],
      link: "/services/irrigation-systems",
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Drip%20Irrigation.png"
    },
    {
      icon: <HomeIcon className="h-10 w-10" />,
      title: "Landscape Installation",
      description: "Complete landscaping from garden design, lawn installation, to hardscaping projects.",
      benefits: ["Custom design plans", "Native plant selection", "5-year warranty"],
      link: "/services/landscape-installation",
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Design%20Garden%20an%20planning.png"
    },
    {
      icon: <CloudRain className="h-10 w-10" />,
      title: "Gutter Installation",
      description: "Seamless custom gutter systems for optimal water collection and property protection.",
      benefits: ["Custom fabrication", "10-year warranty", "Leak-proof design"],
      link: "/services/gutter-installation",
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Hardscaping.png"
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Service & Maintenance",
      description: "Comprehensive inspection, maintenance, and repair services for all water systems.",
      benefits: ["24/7 support available", "Annual maintenance contracts", "98% client satisfaction"],
      link: "/services/service-maintain-inspect",
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Rainwater%20Harvesting%20System%20Service%20and%20Maintenance.png"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "300+ Systems Installed",
      description: "Proven track record across residential and commercial projects in Nellore region"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Quality Guarantee",
      description: "Premium materials with comprehensive warranties on all installations"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Licensed engineers and certified installation professionals"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Transparent Pricing",
      description: "No hidden costs, clear upfront quotes, competitive market rates"
    }
  ];

  const benefits = [
    {
      icon: <TrendingDown className="h-12 w-12" />,
      title: "Massive Water Savings",
      stat: "40-60%",
      description: "Reduce water bills and consumption significantly"
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Environmental Impact",
      stat: "50%",
      description: "Lower your environmental water footprint"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Quick ROI Period",
      stat: "3-7 Years",
      description: "System investment pays for itself"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Water Security",
      stat: "365 Days",
      description: "Year-round reliable water availability"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Slider */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
            </div>
          ))}
        </div>

        {/* Slider Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 max-w-5xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight transition-all duration-500">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-cyan-200 mb-2 sm:mb-3 md:mb-4 font-semibold transition-all duration-500">
              {heroSlides[currentSlide].subtitle}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-500">
              {heroSlides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                to={heroSlides[currentSlide].link}
                className="inline-flex items-center justify-center bg-white text-blue-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-blue-600/90 backdrop-blur-sm text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-600 transition-all border border-white/20"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Book Free Site Visit
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all border border-white/20"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all border border-white/20"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8 md:w-12' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Choose Water Conservation?
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Make the smart investment in sustainable water management today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all text-center">
                <div className="text-blue-600 flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Water Management Services
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for residential, commercial, and industrial water needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Maxima Water */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Choose Maxima Water?
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for water conservation in Nellore, India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all text-center">
                <div className="text-blue-600 flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Maxima Water Brief */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                About Maxima Water
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Maxima Water is Nellore's premier water management solutions provider, specializing in rainwater harvesting, graywater reuse, irrigation systems, and complete landscaping services.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                With over 300 successful installations across residential and commercial projects, we deliver sustainable water solutions that reduce costs, conserve resources, and ensure year-round water availability.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Licensed engineers and certified professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Complete design, installation, and maintenance services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Premium quality materials with comprehensive warranties</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Transparent pricing and 24/7 customer support</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://ik.imagekit.io/xpwuob8jo/Images/Lawn%20Installation.png"
                alt="Landscape Services"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://ik.imagekit.io/xpwuob8jo/Images/Rain%20Garden.png"
                alt="Rain Gardens"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img 
                src="https://ik.imagekit.io/xpwuob8jo/Images/Sprinkle%20Irrigation.png"
                alt="Irrigation Systems"
                className="rounded-xl shadow-lg w-full h-48 object-cover -mt-8"
              />
              <img 
                src="https://ik.imagekit.io/xpwuob8jo/Images/Outdoor%20lighting.png"
                alt="Outdoor Lighting"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Start Saving Water & Money?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            Get a free site inspection and discover how much you can save with our water management solutions. Our team will design a custom system tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Free Site Visit
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a
              href="tel:+916300225335"
              className="inline-flex items-center justify-center bg-blue-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-blue-500/30 transition-all border border-white/20"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now: +91 6300 225 335
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">300+</p>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">100%</p>
              <p className="text-blue-100">Quality Guaranteed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">24/7</p>
              <p className="text-blue-100">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
