import { Grid3x3, CheckCircle2, ArrowRight, Phone, Wrench, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const DrainageSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-gray-700 to-slate-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
                <Grid3x3 className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                <span className="text-xs md:text-sm font-medium">Professional Drainage Systems</span>
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Drainage Solutions
              </h1>
              <p className="text-base md:text-xl text-slate-100 mb-6 md:mb-8 leading-relaxed">
                Comprehensive drainage systems to prevent waterlogging, manage stormwater, and protect your property from water damage. From design to installation and maintenance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="tel:+916300225335"
                  className="inline-flex items-center justify-center bg-white text-slate-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  +91 6300 225 335
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-slate-600/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-slate-600/30 transition-all border border-white/20"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-6">Drainage Issues We Solve</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-slate-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Waterlogging Prevention</p>
                      <p className="text-sm text-slate-100">Eliminate standing water issues</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-slate-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Stormwater Management</p>
                      <p className="text-sm text-slate-100">Handle heavy rainfall effectively</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-slate-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Foundation Protection</p>
                      <p className="text-sm text-slate-100">Prevent structural damage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drainage Types */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Complete Drainage Solutions
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Customized drainage systems for every requirement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Surface Drainage",
                description: "Channel grates, trench drains, and catch basins to remove surface water quickly",
                features: ["Linear drainage channels", "Grated covers", "High flow capacity", "Debris collection"]
              },
              {
                title: "Subsurface Drainage",
                description: "Underground perforated pipes and French drains to manage groundwater levels",
                features: ["Perforated pipe network", "Gravel-filled trenches", "Filter fabric", "Sump connections"]
              },
              {
                title: "Roof & Terrace Drainage",
                description: "Downspouts, scuppers, and roof drains for effective rainwater discharge",
                features: ["Parapet outlets", "Internal drainage", "Overflow systems", "Leaf guards"]
              },
              {
                title: "Parking & Driveway Drainage",
                description: "Specialized systems for paved areas to prevent water accumulation",
                features: ["Slot drains", "Point drains", "Permeable paving", "Oil/grease separators"]
              },
              {
                title: "Garden & Landscape Drainage",
                description: "Keep lawns and gardens dry while protecting plant roots",
                features: ["Area drains", "Dry wells", "Swales", "Rain gardens"]
              },
              {
                title: "Sewage & Wastewater Lines",
                description: "Proper slope and sizing for efficient wastewater removal",
                features: ["Gravity flow design", "Inspection chambers", "Ventilation", "Clean-out access"]
              }
            ].map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-slate-600 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Site Survey", desc: "Analyze terrain, slope, and water flow patterns" },
              { step: "02", title: "Custom Design", desc: "Engineer drainage layout with optimal gradients" },
              { step: "03", title: "Installation", desc: "Professional excavation and pipe laying" },
              { step: "04", title: "Testing", desc: "Flow testing and quality assurance" }
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="h-8 w-8" />, title: "Property Protection", desc: "Prevent water damage and erosion" },
              { icon: <Wrench className="h-8 w-8" />, title: "Low Maintenance", desc: "Durable systems built to last" },
              { icon: <CheckCircle2 className="h-8 w-8" />, title: "Compliance", desc: "Meet building code requirements" },
              { icon: <Grid3x3 className="h-8 w-8" />, title: "Custom Solutions", desc: "Tailored to your property needs" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-slate-600 to-gray-700 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-700 via-gray-700 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Solve Your Drainage Problems
          </h2>
          <p className="text-base md:text-xl text-slate-100 mb-6 md:mb-10 max-w-2xl mx-auto">
            Get expert drainage solutions designed for your property. Contact us today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-slate-700 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Request Site Survey
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a
              href="tel:+916300225335"
              className="inline-flex items-center justify-center bg-slate-600/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-slate-600/30 transition-all border border-white/20"
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

export default DrainageSolutions;
