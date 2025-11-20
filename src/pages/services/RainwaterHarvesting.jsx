import { Droplets, CheckCircle2, ArrowRight, Phone, Shield, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const RainwaterHarvesting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
                <Droplets className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                <span className="text-xs md:text-sm font-medium">Comprehensive RWH Solutions</span>
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Rainwater Harvesting Systems
              </h1>
              <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                Transform rainwater into a valuable resource for your property. Our advanced rainwater harvesting systems capture, filter, and store rainwater for various applications, reducing dependence on municipal water supply.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="tel:+916300225335"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  +91 6300 225 335
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-blue-500/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-500/30 transition-all border border-white/20"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-6">Why Choose RWH?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Save Up to 60% on Water Bills</p>
                      <p className="text-sm text-blue-100">Reduce municipal water consumption significantly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Eco-Friendly Solution</p>
                      <p className="text-sm text-blue-100">Conserve water and reduce carbon footprint</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Government Subsidies Available</p>
                      <p className="text-sm text-blue-100">Get up to 50% subsidy on installation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Complete System Components
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our rainwater harvesting systems include all necessary components for optimal performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Roof Catchment System",
                description: "Optimized gutter and downpipe installation for maximum water collection from your roof area",
                features: ["Corrosion-resistant gutters", "Leaf guards included", "Multiple discharge points"]
              },
              {
                title: "First Flush Diverter",
                description: "Automatically diverts initial dirty water, ensuring only clean rainwater enters your storage",
                features: ["Self-cleaning mechanism", "Adjustable diversion volume", "Low maintenance"]
              },
              {
                title: "Multi-Stage Filtration",
                description: "Advanced filtration system removes debris, sediments, and contaminants from collected water",
                features: ["Mesh filter (1mm)", "Sand filter", "Carbon filter (optional)"]
              },
              {
                title: "Storage Tanks",
                description: "Food-grade, UV-resistant storage tanks available in various capacities (500L to 10,000L+)",
                features: ["Underground/overhead options", "Level indicators", "Overflow management"]
              },
              {
                title: "Automatic Pump System",
                description: "Energy-efficient pumps with automatic switching between rainwater and municipal supply",
                features: ["Pressure-controlled", "Dry-run protection", "Silent operation"]
              },
              {
                title: "Recharge Pit/Well",
                description: "Groundwater recharge system to replenish aquifers with excess harvested water",
                features: ["Percolation chambers", "Filter media layers", "Inspection access"]
              }
            ].map((component, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{component.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{component.description}</p>
                <ul className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Benefits of Rainwater Harvesting
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <TrendingUp className="h-8 w-8" />, title: "Cost Savings", desc: "Save 40-60% on water bills annually" },
              { icon: <Droplets className="h-8 w-8" />, title: "Water Security", desc: "Ensure water availability during shortages" },
              { icon: <Shield className="h-8 w-8" />, title: "Soft Water Quality", desc: "Naturally soft, ideal for washing & bathing" },
              { icon: <Users className="h-8 w-8" />, title: "Community Impact", desc: "Reduce strain on municipal infrastructure" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Installation Process
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Professional installation completed in 3-7 days
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 md:gap-6">
            {[
              { step: "01", title: "Site Inspection", desc: "Free assessment of roof area and feasibility" },
              { step: "02", title: "System Design", desc: "Custom design based on your requirements" },
              { step: "03", title: "Installation", desc: "Expert installation of all components" },
              { step: "04", title: "Testing", desc: "System testing and water quality checks" },
              { step: "05", title: "Training", desc: "Operation training and documentation" }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    {process.step}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-xs text-gray-600">{process.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-blue-400" />
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
            Ready to Install Rainwater Harvesting?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-10 max-w-2xl mx-auto">
            Get a free site inspection and detailed quote. Start saving water and money today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Schedule Free Inspection
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
        </div>
      </section>
    </div>
  );
};

export default RainwaterHarvesting;
