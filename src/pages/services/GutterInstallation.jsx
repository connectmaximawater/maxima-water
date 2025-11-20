import { useState, useEffect } from 'react';
import { ArrowDown, CheckCircle2, ArrowRight, Phone, Shield, ChevronLeft, ChevronRight, Home, Wrench, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaterFlowAnimation from '../../components/WaterFlowAnimation';

const GutterInstallation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Gutter.png",
      title: "Professional Gutter Installation",
      subtitle: "Protecting Your Home from the Top Down"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Gutter%20Installation.png",
      title: "Expert Installation Services",
      subtitle: "Custom Water Management Solutions"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/K%20style%20Gutter.png",
      title: "K-Style Gutters",
      subtitle: "Modern, Decorative Crown-Molding Look"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Round%20Gutter.png",
      title: "Half-Round Gutters",
      subtitle: "Classic, Traditional Elegance"
    },
    {
      image: "https://ik.imagekit.io/xpwuob8jo/Images/Boxed%20Gutter.png",
      title: "Boxed Gutters",
      subtitle: "High-Capacity Commercial Solutions"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white">
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
              <ArrowDown className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Professional Gutter Systems</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight transition-all duration-500">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed transition-all duration-500">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Request Free Estimate
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-orange-600/90 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-orange-600 transition-all border border-white/20">
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
      <WaterFlowAnimation color="rgba(251, 146, 60, 0.5)" />

      {/* Why Gutters Are Essential */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Gutters Are Essential
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              And Why Choosing Maxima Water Matters
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <div className="bg-orange-100 p-4 rounded-lg inline-block mb-6">
                <Home className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Protecting Your Biggest Investment
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Your home is your biggest investment, and an effective gutter system is the shield that protects it. Without properly installed gutters, rainwater can erode landscaping, damage your foundation, and cause costly water intrusion in your basement or walls.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We don't just hang gutters; we provide a complete, custom water management solution designed to protect your property for decades.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Without Proper Gutters, You Risk:</h4>
              <ul className="space-y-3">
                {[
                  "Foundation damage from water pooling",
                  "Basement flooding and water intrusion",
                  "Landscape erosion and soil degradation",
                  "Fascia and soffit rot",
                  "Mold and mildew growth",
                  "Stained siding and exterior damage"
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <div className="bg-orange-100 p-4 rounded-lg inline-block mb-4">
              <Wrench className="h-10 w-10 text-orange-600" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Seamless Gutter Installation Process
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Professional, efficient, and meticulous installation that guarantees a perfect fit and long-lasting performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation & Inspection",
                desc: "We start with a thorough on-site assessment. We measure your roofline, evaluate the pitch, and discuss your home's unique needs (including local rainfall and architecture) to determine the best gutter size and style."
              },
              {
                step: "2",
                title: "Material & Style Selection",
                desc: "We guide you through choosing the ideal material (Aluminum, Copper, Steel) and style (K-Style, Half-Round, Box) that balances your budget, aesthetics, and durability requirements."
              },
              {
                step: "3",
                title: "On-Site Custom Fabrication",
                desc: "For seamless gutters, we bring our specialized machine to your location. This allows us to custom-roll the gutter in one continuous piece, eliminating unnecessary seams and drastically reducing the risk of leaks."
              },
              {
                step: "4",
                title: "Precision Installation",
                desc: "Our trained technicians use high-quality, hidden hangers and screws (not nails) to securely fasten the gutters. We ensure the correct slope (pitch) to guarantee proper water flow toward the downspouts."
              },
              {
                step: "5",
                title: "Downspout Installation & Optimization",
                desc: "We strategically place and size the downspouts to handle the expected water volume efficiently, directing water safely away from your foundation."
              },
              {
                step: "6",
                title: "Final Cleanup & Inspection",
                desc: "We clean the work area thoroughly, remove all old materials, and walk you through the installed system to ensure your complete satisfaction."
              }
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-amber-400 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gutter Types Comparison */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Gutter Types & Materials We Offer
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              A full range of options to match any home style or performance need
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-left font-bold">K-Style Gutters</th>
                  <th className="px-6 py-4 text-left font-bold">Half-Round Gutters</th>
                  <th className="px-6 py-4 text-left font-bold">Seamless Aluminum</th>
                  <th className="px-6 py-4 text-left font-bold">Copper Gutters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Style</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Most popular, decorative crown-molding look</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Classic, rounded, traditional look</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Modern, custom-fit, lowest leak risk</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Premium, extremely durable, develops beautiful patina</td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Aesthetics</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Contemporary</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Traditional/Historic</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Sleek & Clean</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">High-End & Timeless</td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Best For</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">High water volume, modern homes</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Older or classic homes</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Maximum leak protection</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Lifelong investment, unique curb appeal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Maxima Water */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <div className="bg-orange-100 p-4 rounded-lg inline-block mb-4">
              <Award className="h-10 w-10 text-orange-600" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Choose Maxima Water
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              The difference that sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench className="h-8 w-8" />,
                title: "Custom Seamless Gutter Specialists",
                desc: "We specialize in on-site seamless fabrication, which means fewer leaks and a cleaner aesthetic for your home."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Quality Materials Guaranteed",
                desc: "We use only the highest-grade, rust-resistant materials and durable hardware to ensure longevity."
              },
              {
                icon: <CheckCircle2 className="h-8 w-8" />,
                title: "Licensed & Insured",
                desc: "You get peace of mind knowing all our work is performed by certified professionals who are fully covered."
              },
              {
                icon: <ArrowDown className="h-8 w-8" />,
                title: "Focus on Water Flow",
                desc: "We calculate the optimal size and pitch required to handle the heaviest rainfalls in Nellore region."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Guaranteed Workmanship",
                desc: "We stand behind our installation with a comprehensive labor warranty for your peace of mind."
              },
              {
                icon: <Home className="h-8 w-8" />,
                title: "Complete Water Management",
                desc: "Gutters integrated with rainwater harvesting and drainage systems for maximum efficiency."
              }
            ].map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-amber-400 w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Shield className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 text-orange-100" />
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Protect Your Home?
          </h2>
          <p className="text-base md:text-xl text-orange-100 mb-8 md:mb-10 leading-relaxed">
            Don't wait until water damage strikes. Invest in a superior gutter system today and protect your property for decades to come.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-orange-600 px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Request Free Estimate
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-orange-500/20 backdrop-blur-sm text-white px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg hover:bg-orange-500/30 transition-all border-2 border-white/30">
              <Phone className="h-5 w-5 md:h-6 md:w-6 mr-2" />
              Call: +91 6300 225 335
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base text-orange-100">Gutters Installed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm md:text-base text-orange-100">Satisfaction Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">10 Years</div>
              <div className="text-sm md:text-base text-orange-100">Warranty</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GutterInstallation;
