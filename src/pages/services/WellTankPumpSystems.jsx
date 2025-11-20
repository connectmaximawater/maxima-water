import { Database, CheckCircle2, ArrowRight, Phone, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellTankPumpSystems = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
              <Database className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Complete Water Storage Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Well, Tank & Pump Systems
            </h1>
            <p className="text-base md:text-xl text-indigo-100 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              Complete water storage and pumping solutions including borewell drilling, overhead/underground tanks, sump construction, and automated pumping systems for reliable water supply.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-white text-indigo-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                +91 6300 225 335
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center bg-indigo-500/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-indigo-500/30 transition-all border border-white/20">
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
              { title: "Borewell Drilling", desc: "Professional borewell drilling with geological survey and yield testing", features: ["Depth up to 300ft", "6-inch casing pipes", "Water quality testing", "Legal documentation"] },
              { title: "Storage Tanks", desc: "Food-grade water storage tanks in various capacities (500L-50,000L)", features: ["Sintex/Kaveri tanks", "Underground/overhead", "UV resistant", "Level indicators"] },
              { title: "Sump Construction", desc: "RCC/masonry underground sumps with waterproofing and ventilation", features: ["Custom sizes", "Epoxy coating", "Inspection access", "Overflow outlets"] },
              { title: "Submersible Pumps", desc: "Energy-efficient submersible pumps for borewells and sumps", features: ["0.5HP to 10HP", "Stainless steel", "Dry-run protection", "3-year warranty"] },
              { title: "Monoblock Pumps", desc: "Surface-mounted pumps for overhead tank filling and water transfer", features: ["Self-priming", "Pressure control", "Silent operation", "Low maintenance"] },
              { title: "Pressure Boosters", desc: "Automated pressure boosting systems for multi-story buildings", features: ["Variable frequency drive", "Consistent pressure", "Energy saving", "Multi-pump setup"] }
            ].map((system, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{system.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{system.desc}</p>
                <ul className="space-y-2">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Complete Water Infrastructure
          </h2>
          <p className="text-base md:text-xl text-indigo-100 mb-6 md:mb-10">
            From drilling to pumping, we provide end-to-end water storage and supply solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-indigo-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Get Free Assessment
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-indigo-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-indigo-500/30 transition-all border border-white/20">
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellTankPumpSystems;
