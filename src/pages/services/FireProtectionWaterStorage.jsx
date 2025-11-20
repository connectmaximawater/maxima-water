import { Flame, CheckCircle2, ArrowRight, Phone, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FireProtectionWaterStorage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-white">
      <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
              <Flame className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Fire Safety Compliance</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Fire Protection Water Storage
            </h1>
            <p className="text-base md:text-xl text-red-100 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              NBC-compliant fire fighting water storage systems with dedicated tanks, pumps, hydrants, and sprinkler systems. Ensure safety and meet legal requirements for commercial and residential buildings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-white text-red-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                +91 6300 225 335
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center bg-red-500/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-red-500/30 transition-all border border-white/20">
                Get Compliance Quote
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Fire Protection System Components
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Complete NBC-compliant fire fighting infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fire Water Storage Tanks",
                desc: "Dedicated fire reserve tanks as per NBC requirements (based on building height)",
                features: ["Capacity: 5,000L - 1,00,000L", "Underground/overhead", "Always full reserve", "Separate from potable water"]
              },
              {
                title: "Fire Pumps & Jockey Pumps",
                desc: "High-pressure pumps to deliver water through hydrants and sprinklers",
                features: ["Diesel/electric pumps", "Automatic starting", "Pressure maintenance", "Backup power"]
              },
              {
                title: "Fire Hydrant Systems",
                desc: "Internal/external hydrants with hose reels for manual fire fighting",
                features: ["Landing valves (63mm)", "Hose reels & nozzles", "Cabinet installation", "Strategic placement"]
              },
              {
                title: "Sprinkler Systems",
                desc: "Automatic sprinklers that activate during fire for immediate response",
                features: ["Heat-sensitive heads", "Wet/dry pipe systems", "Zone control", "Alarm integration"]
              },
              {
                title: "Fire Piping Network",
                desc: "MS pipes with red color coding running throughout the building",
                features: ["GI/MS pipes", "Proper sizing (100-150mm)", "Isolation valves", "Pressure testing"]
              },
              {
                title: "Compliance & Testing",
                desc: "NOC from fire department and regular system testing",
                features: ["Fire NOC assistance", "Hydraulic calculations", "Quarterly testing", "Maintenance AMC"]
              }
            ].map((component, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{component.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{component.desc}</p>
                <ul className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Fire Protection Water Storage?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="h-10 w-10" />, title: "Legal Requirement", desc: "Mandatory for buildings over 15m height as per NBC" },
              { icon: <AlertTriangle className="h-10 w-10" />, title: "Life Safety", desc: "Critical for occupant safety during emergencies" },
              { icon: <CheckCircle2 className="h-10 w-10" />, title: "Insurance Benefits", desc: "Lower premiums with proper fire systems" },
              { icon: <Flame className="h-10 w-10" />, title: "Property Protection", desc: "Minimize fire damage to your investment" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-gradient-to-br from-red-500 to-orange-400 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Ensure Fire Safety Compliance
          </h2>
          <p className="text-base md:text-xl text-red-100 mb-6 md:mb-10">
            Get NBC-compliant fire protection water storage systems installed by experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-red-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Request Fire NOC Support
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-red-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-red-500/30 transition-all border border-white/20">
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FireProtectionWaterStorage;
