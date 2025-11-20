import { Droplet, CheckCircle2, ArrowRight, Phone, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const IrrigationSystems = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-white">
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
              <Droplet className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Smart Irrigation Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Irrigation Systems
            </h1>
            <p className="text-base md:text-xl text-teal-100 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              Efficient irrigation systems for gardens, lawns, farms, and landscapes. Save water with drip irrigation, sprinklers, and automated watering solutions using harvested rainwater or municipal supply.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-white text-teal-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                +91 6300 225 335
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center bg-teal-500/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-teal-500/30 transition-all border border-white/20">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Drip Irrigation", desc: "Water-efficient system delivering water directly to plant roots", savings: "Save 50-70% water", features: ["Inline drippers", "Adjustable emitters", "Pressure regulators", "Filter systems"] },
              { title: "Sprinkler Systems", desc: "Automated pop-up and rotating sprinklers for lawns and gardens", savings: "Uniform coverage", features: ["Pop-up sprinklers", "Rotary heads", "Timer controls", "Rain sensors"] },
              { title: "Micro-Irrigation", desc: "Precise watering for flower beds, pots, and small gardens", savings: "Zero wastage", features: ["Micro-sprayers", "Foggers & misters", "Adjustable stakes", "Flexible tubing"] }
            ].map((system, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{system.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{system.desc}</p>
                <p className="text-lg font-bold text-teal-600 mb-4">{system.savings}</p>
                <ul className="space-y-2">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Smart Irrigation for Healthier Plants
          </h2>
          <p className="text-base md:text-xl text-teal-100 mb-6 md:mb-10">
            Install an efficient irrigation system and reduce water wastage by up to 70%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-teal-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Get Free Design
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-teal-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-teal-500/30 transition-all border border-white/20">
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IrrigationSystems;
