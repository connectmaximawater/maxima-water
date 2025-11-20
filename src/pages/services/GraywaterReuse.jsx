import { Recycle, CheckCircle2, ArrowRight, Phone, Leaf, Droplets, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraywaterReuse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
                <Recycle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                <span className="text-xs md:text-sm font-medium">Sustainable Water Recycling</span>
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Graywater Reuse Systems
              </h1>
              <p className="text-base md:text-xl text-green-100 mb-6 md:mb-8 leading-relaxed">
                Recycle water from sinks, showers, washing machines, and ACs for non-potable uses. Reduce freshwater consumption by up to 50% while maintaining a sustainable water cycle in your property.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="tel:+916300225335"
                  className="inline-flex items-center justify-center bg-white text-green-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  +91 6300 225 335
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-green-500/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-green-500/30 transition-all border border-white/20"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-6">Graywater Applications</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Toilet Flushing</p>
                      <p className="text-sm text-green-100">Save 30% of household water use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Garden Irrigation</p>
                      <p className="text-sm text-green-100">Eco-friendly watering solution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Car Washing & Cleaning</p>
                      <p className="text-sm text-green-100">Perfect for non-potable uses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graywater Sources */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Graywater Sources We Recycle
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              We collect and treat water from multiple sources in your property
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bathroom Sinks & Showers", percent: "30%", desc: "Largest source of graywater" },
              { title: "Washing Machines", percent: "25%", desc: "Laundry water recycling" },
              { title: "AC Condensate", percent: "15%", desc: "Pure distilled water" },
              { title: "Kitchen Sinks (Optional)", percent: "20%", desc: "Requires extra filtration" }
            ].map((source, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-green-600 mb-2">{source.percent}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{source.title}</h3>
                <p className="text-sm text-gray-600">{source.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Multi-Stage Treatment Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Primary Filtration",
                description: "Removes solid particles, hair, lint, and debris through mesh filters",
                features: ["200-micron filter", "Self-cleaning option", "Low maintenance"]
              },
              {
                title: "Biological Treatment",
                description: "Natural bacterial process breaks down organic matter and detergents",
                features: ["Aerobic digestion", "Odor elimination", "Chemical-free"]
              },
              {
                title: "Final Disinfection",
                description: "UV sterilization or chlorination ensures safe water for reuse",
                features: ["99.9% pathogen removal", "Safe for irrigation", "Automated dosing"]
              }
            ].map((stage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{stage.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{stage.description}</p>
                <ul className="space-y-2">
                  {stage.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <TrendingDown className="h-8 w-8" />, title: "50% Water Savings", desc: "Reduce freshwater consumption significantly" },
              { icon: <Leaf className="h-8 w-8" />, title: "Eco-Friendly", desc: "Minimize environmental impact" },
              { icon: <Droplets className="h-8 w-8" />, title: "Lower Bills", desc: "Save on both water and sewage costs" },
              { icon: <Recycle className="h-8 w-8" />, title: "Circular Economy", desc: "Sustainable water management" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-400 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Start Recycling Water Today
          </h2>
          <p className="text-base md:text-xl text-green-100 mb-6 md:mb-10 max-w-2xl mx-auto">
            Install a graywater reuse system and contribute to water conservation while saving money.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-green-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a
              href="tel:+916300225335"
              className="inline-flex items-center justify-center bg-green-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-green-500/30 transition-all border border-white/20"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraywaterReuse;
