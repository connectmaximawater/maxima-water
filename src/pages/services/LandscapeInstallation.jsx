import { useState, useEffect } from 'react';
import { Leaf, CheckCircle2, ArrowRight, Phone, Trees, Lightbulb, Droplets, Flower2, Mountain, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaterFlowAnimation from '../../components/WaterFlowAnimation';

const LandscapeInstallation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Design%20Garden%20an%20planning.png",
      title: "Garden Design & Planning",
      subtitle: "Transform Your Outdoor Space into a Personalized Sanctuary"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Lawn%20Installation.png",
      title: "Lawn Installation",
      subtitle: "Achieve the Lush, Vibrant Lawn You've Always Desired"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Rain%20Garden.png",
      title: "Rain Gardens",
      subtitle: "Beautiful & Functional Sustainable Landscaping"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Trees%20and%20shurbs%20planting.png",
      title: "Tree & Shrub Planting",
      subtitle: "Enhance Beauty, Shade, and Privacy of Your Landscape"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Outdoor%20lighting.png",
      title: "Outdoor Lighting",
      subtitle: "Illuminate Your Landscape with Energy-Efficient Solutions"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Hardscaping.png",
      title: "Hardscaping",
      subtitle: "Define and Enhance Your Outdoor Living Areas"
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
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-white">
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
              <Leaf className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Professional Landscaping</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight transition-all duration-500">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed transition-all duration-500">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-lime-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-lime-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-lime-600/90 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-lime-600 transition-all border border-white/20">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                +91 6300 225 335
              </a>
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
      <WaterFlowAnimation color="rgba(132, 204, 22, 0.5)" />

      {/* Detailed Services */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Landscape Installation Services
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive landscaping solutions to transform your outdoor spaces
            </p>
          </div>

          {/* Garden Design & Planning */}
          <div className="mb-16 md:mb-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-lime-100 p-3 rounded-lg">
                    <Flower2 className="h-8 w-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Garden Design & Planning
                  </h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Transform your outdoor space into a personalized sanctuary with our expert garden design and planning services. We craft custom landscape designs that reflect your unique style and preferences, ensuring every detail contributes to a cohesive and beautiful environment. From initial concepts to final execution, we guide you through the process, bringing your dream garden to life.
                </p>
                
                <div className="bg-lime-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-lime-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">3D Visualizations</h5>
                        <p className="text-sm text-gray-600">See your garden come to life before installation with realistic 3D renderings</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-lime-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Plant Selection</h5>
                        <p className="text-sm text-gray-600">Expert guidance in choosing the perfect plants for your climate, soil, and aesthetic</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-lime-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Hardscape Integration</h5>
                        <p className="text-sm text-gray-600">Seamless incorporation of patios, pathways, and other structural elements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-lime-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Sustainable Design</h5>
                        <p className="text-sm text-gray-600">Eco-friendly solutions that enhance beauty while conserving resources</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-lime-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Comprehensive Planning</h5>
                        <p className="text-sm text-gray-600">Detailed plans covering all aspects from layout to material selection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://ik.imagekit.io/xpwuob8jo/Images/Design%20Garden%20an%20planning.png" 
                  alt="Garden Design & Planning"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>

          {/* Lawn Installation */}
          <div className="mb-16 md:mb-24 bg-gradient-to-br from-green-50 to-lime-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://ik.imagekit.io/xpwuob8jo/Images/Lawn%20Installation.png" 
                  alt="Lawn Installation"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Trees className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Lawn Installation
                  </h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Achieve the lush, vibrant lawn you've always desired with our professional lawn installation services. We specialize in creating healthy, beautiful turf that enhances your property's curb appeal. Our comprehensive approach ensures proper soil preparation, premium grass selection, and expert installation techniques for a resilient and stunning green space.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Soil Testing & Amendments</h5>
                        <p className="text-sm text-gray-600">Optimizing your soil for the best possible growth</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Premium Grass Varieties</h5>
                        <p className="text-sm text-gray-600">Selection of high-quality, durable grass types suited to your region</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Leveling & Grading</h5>
                        <p className="text-sm text-gray-600">Ensuring proper drainage and a smooth, even surface</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Fertilization Program</h5>
                        <p className="text-sm text-gray-600">Initial nutrient application for strong establishment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Sod & Seeding Options</h5>
                        <p className="text-sm text-gray-600">Flexible solutions to meet your specific needs and budget</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rain Gardens */}
          <div className="mb-16 md:mb-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Droplets className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Rain Gardens
                  </h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Embrace sustainable landscaping with our beautiful and functional rain gardens. Designed to naturally manage stormwater runoff, rain gardens are an eco-friendly solution that beautifies your property while protecting local waterways. We create stunning bio-retention areas filled with native plants that absorb excess water, reduce erosion, and provide vital habitats for wildlife.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Native Plants</h5>
                        <p className="text-sm text-gray-600">Utilizing species that thrive in your local ecosystem, requiring less maintenance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Bio-retention Design</h5>
                        <p className="text-sm text-gray-600">Engineered to effectively capture and filter rainwater</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Water Absorption</h5>
                        <p className="text-sm text-gray-600">Significantly reduces stormwater runoff and replenishes groundwater</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Wildlife Friendly</h5>
                        <p className="text-sm text-gray-600">Attracts beneficial insects, birds, and other local fauna</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Erosion Control</h5>
                        <p className="text-sm text-gray-600">Prevents soil degradation and nutrient loss</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://ik.imagekit.io/xpwuob8jo/Images/Rain%20Garden.png" 
                  alt="Rain Gardens"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>

          {/* Tree & Shrub Planting */}
          <div className="mb-16 md:mb-24 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://ik.imagekit.io/xpwuob8jo/Images/Trees%20and%20shurbs%20planting.png" 
                  alt="Tree & Shrub Planting"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Trees className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Tree & Shrub Planting
                  </h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Enhance the beauty, shade, and privacy of your landscape with our expert tree and shrub planting services. We focus on strategic placement and proper care to ensure your new plantings thrive for years to come. From selecting the right species to meticulous installation, we provide everything needed for healthy, long-lasting trees and shrubs.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Native Species</h5>
                        <p className="text-sm text-gray-600">Promoting ecological balance and resilience with local plant selections</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Proper Spacing</h5>
                        <p className="text-sm text-gray-600">Ensuring adequate room for growth and air circulation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Root Ball Care</h5>
                        <p className="text-sm text-gray-600">Gentle handling and correct planting depth for optimal health</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Staking Support</h5>
                        <p className="text-sm text-gray-600">Providing stability for young trees in their initial growth phase</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Post-Planting Guidance</h5>
                        <p className="text-sm text-gray-600">Advice on watering, pruning, and long-term care</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outdoor Lighting */}
          <div className="mb-16 md:mb-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Lightbulb className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Outdoor Lighting
                  </h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Illuminate your landscape and extend the enjoyment of your outdoor spaces with our energy-efficient outdoor lighting solutions. We design and install sophisticated lighting systems that enhance ambiance, improve safety, and highlight the architectural features of your home and garden. From subtle pathway lighting to dramatic accent illumination, we bring your nights to life.
                </p>
                
                <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">LED Fixtures</h5>
                        <p className="text-sm text-gray-600">Durable, energy-saving, and long-lasting lighting options</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Solar Options</h5>
                        <p className="text-sm text-gray-600">Eco-friendly, wire-free solutions for sustainable illumination</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Pathway Lighting</h5>
                        <p className="text-sm text-gray-600">Enhancing safety and navigation along walkways</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Accent Lighting</h5>
                        <p className="text-sm text-gray-600">Highlighting trees, shrubs, and architectural details</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Smart Control Systems</h5>
                        <p className="text-sm text-gray-600">Convenient control over brightness, timing, and zones</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://ik.imagekit.io/xpwuob8jo/Images/Outdoor%20lighting.png" 
                  alt="Outdoor Lighting"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>

          {/* Hardscaping */}
          <div className="mb-12 bg-gradient-to-br from-stone-50 to-gray-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://ik.imagekit.io/xpwuob8jo/Images/Hardscaping.png" 
                  alt="Hardscaping"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-stone-100 p-3 rounded-lg">
                    <Mountain className="h-8 w-8 text-stone-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Hardscaping
                  </h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Define and enhance your outdoor living areas with our exceptional hardscaping services. We specialize in creating durable and beautiful patios, walkways, retaining walls, and decorative features that perfectly complement your landscape. From natural stone to pavers, our craftsmanship ensures lasting beauty and functionality, transforming ordinary spaces into extraordinary destinations.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-stone-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Paver Installation</h5>
                        <p className="text-sm text-gray-600">Versatile and durable options for patios, driveways, and walkways</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-stone-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Stone Work</h5>
                        <p className="text-sm text-gray-600">Elegant and timeless natural stone features and walls</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-stone-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Pergolas & Arbors</h5>
                        <p className="text-sm text-gray-600">Adding structural beauty, shade, and vertical interest</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-stone-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Water Features</h5>
                        <p className="text-sm text-gray-600">Creating serene and focal points with ponds, fountains, and cascades</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-stone-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Retaining Walls</h5>
                        <p className="text-sm text-gray-600">Functional and aesthetic solutions for sloped terrains and garden beds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-lime-600 via-green-600 to-lime-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Leaf className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 text-lime-100" />
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Create Your Dream Landscape
          </h2>
          <p className="text-base md:text-xl text-lime-100 mb-8 md:mb-10 leading-relaxed">
            Get a free consultation and customized landscape design for your property. Our experts will transform your outdoor space into a beautiful, sustainable sanctuary that enhances your lifestyle and property value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-lime-700 px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg hover:bg-lime-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-lime-500/20 backdrop-blur-sm text-white px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg hover:bg-lime-500/30 transition-all border-2 border-white/30">
              <Phone className="h-5 w-5 md:h-6 md:w-6 mr-2" />
              Call Now: +91 6300 225 335
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-sm md:text-base text-lime-100">Landscapes Designed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm md:text-base text-lime-100">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">5 Years</div>
              <div className="text-sm md:text-base text-lime-100">Warranty</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandscapeInstallation;
