import { useState, useEffect } from 'react';
import { Droplet, CheckCircle2, ArrowRight, Phone, Sprout, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaterFlowAnimation from '../../components/WaterFlowAnimation';

const IrrigationSystems = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Drip%20Irrigation.png",
      title: "Drip Irrigation",
      subtitle: "Precision Water Delivery for Maximum Efficiency"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Sprinkle%20Irrigation.png",
      title: "Sprinkle Irrigation",
      subtitle: "Uniform Coverage for Lush Landscapes"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Micro%20Irrigation.png",
      title: "Micro Irrigation",
      subtitle: "Targeted Watering for Gardens & Pots"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-white">
      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
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
          <div className="text-center text-white px-4 md:px-6 max-w-4xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
              <Droplet className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Smart Irrigation Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight transition-all duration-500">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed transition-all duration-500">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-white text-teal-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                +91 6300 225 335
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center bg-teal-600/90 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-teal-600 transition-all border border-white/20">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all border border-white/20"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all border border-white/20"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
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

      {/* Water Flow Animation */}
      <WaterFlowAnimation color="rgba(20, 184, 166, 0.5)" />

      {/* Water Flow Animation */}
      <WaterFlowAnimation color="rgba(20, 184, 166, 0.5)" />

      {/* Detailed Irrigation Types */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Comprehensive Irrigation Solutions
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of water-efficient irrigation systems designed for every application
            </p>
          </div>

          {/* Drip Irrigation */}
          <div className="mb-16 md:mb-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Most Water Efficient
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  Drip Irrigation Systems
                </h3>
                <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Drip irrigation is the most water-efficient method, delivering water directly to the root zone of plants through a network of pipes, tubes, and emitters. This precision system minimizes evaporation and runoff, making it ideal for water conservation.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Save 50-70% Water</h4>
                      <p className="text-sm text-gray-600">Compared to traditional flood or sprinkler irrigation, drip systems reduce water consumption dramatically</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Healthier Plants</h4>
                      <p className="text-sm text-gray-600">Water is delivered directly to roots, reducing leaf diseases and promoting stronger growth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Reduced Weed Growth</h4>
                      <p className="text-sm text-gray-600">Since only the root zone is watered, weeds between plants receive less moisture</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Perfect For:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      Vegetable Gardens
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      Row Crops
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      Fruit Trees
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      Flower Beds
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      Greenhouses
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      Terrace Gardens
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://ik.imagekit.io/xpwuob8jo/Images/Drip%20Irrigation.png" 
                  alt="Drip Irrigation System"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>

          {/* Sprinkle Irrigation */}
          <div className="mb-16 md:mb-24 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <img 
                  src="https://ik.imagekit.io/xpwuob8jo/Images/Sprinkle%20Irrigation.png" 
                  alt="Sprinkle Irrigation System"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div>
                <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Best for Lawns
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  Sprinkle Irrigation Systems
                </h3>
                <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Sprinkler systems distribute water through the air in a spray pattern, similar to natural rainfall. Ideal for lawns, sports fields, and large garden areas where uniform coverage is essential for lush, healthy grass.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Uniform Coverage</h4>
                      <p className="text-sm text-gray-600">Pop-up and rotary sprinklers ensure every part of your lawn receives equal water distribution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Automated Operation</h4>
                      <p className="text-sm text-gray-600">Timer-based controllers and rain sensors ensure optimal watering schedules without manual intervention</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Hidden Installation</h4>
                      <p className="text-sm text-gray-600">Pop-up sprinkler heads stay hidden when not in use, maintaining aesthetic appeal</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Perfect For:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      Residential Lawns
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      Sports Fields
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      Golf Courses
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      Parks & Gardens
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      Large Landscapes
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      Commercial Areas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Micro Irrigation */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Precision Watering
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  Micro Irrigation Systems
                </h3>
                <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Micro irrigation uses micro-sprayers, foggers, and misters to deliver ultra-precise amounts of water to individual plants or small areas. Perfect for container gardens, balconies, and delicate plantings that require gentle, targeted watering.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Zero Water Wastage</h4>
                      <p className="text-sm text-gray-600">Each plant receives exactly the right amount of water with minimal evaporation or runoff</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Flexible & Customizable</h4>
                      <p className="text-sm text-gray-600">Easily adjust spray patterns, flow rates, and coverage areas for different plant types</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Ideal for Small Spaces</h4>
                      <p className="text-sm text-gray-600">Perfect solution for balconies, terraces, and container gardens where space is limited</p>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Perfect For:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      Container Plants
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      Balcony Gardens
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      Hanging Baskets
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      Flower Pots
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      Terrace Gardens
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      Small Plant Beds
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://ik.imagekit.io/xpwuob8jo/Images/Micro%20Irrigation.png" 
                  alt="Micro Irrigation System"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Sprout className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 text-teal-100" />
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Transform Your Irrigation?
          </h2>
          <p className="text-base md:text-xl text-teal-100 mb-8 md:mb-10 leading-relaxed">
            Get a free consultation and customized irrigation design for your property. Our experts will help you choose the perfect system to save water, reduce costs, and maintain beautiful, healthy landscapes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-teal-600 px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Request Free Quote
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-teal-500/20 backdrop-blur-sm text-white px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg hover:bg-teal-500/30 transition-all border-2 border-white/30">
              <Phone className="h-5 w-5 md:h-6 md:w-6 mr-2" />
              Call: +91 6300 225 335
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">50-70%</div>
              <div className="text-sm md:text-base text-teal-100">Water Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-sm md:text-base text-teal-100">Systems Installed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">5 Years</div>
              <div className="text-sm md:text-base text-teal-100">Warranty</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IrrigationSystems;
