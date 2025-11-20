import { Wrench, CheckCircle2, ArrowRight, Phone, Calendar, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceMaintainInspect = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-white">
      <section className="relative bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
              <Wrench className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Professional Maintenance Services</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Service, Maintain & Inspect
            </h1>
            <p className="text-base md:text-xl text-purple-100 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              Keep your rainwater harvesting and water management systems operating at peak efficiency with our comprehensive maintenance and inspection services. Regular servicing extends system life and ensures water quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                +91 6300 225 335
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center bg-purple-500/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-purple-500/30 transition-all border border-white/20">
                Schedule Service
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
              Our Maintenance Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Calendar className="h-12 w-12" />,
                title: "Monthly Maintenance",
                price: "₹1,500/month",
                services: ["Filter cleaning & replacement", "Visual inspection", "Pump testing", "Water quality check", "Minor adjustments", "Service report"]
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Quarterly AMC",
                price: "₹15,000/year",
                services: ["Tank cleaning & sanitization", "All monthly services", "Component replacement", "System optimization", "Emergency support", "Priority response"]
              },
              {
                icon: <Wrench className="h-12 w-12" />,
                title: "Annual Inspection",
                price: "₹5,000/visit",
                services: ["Complete system audit", "Detailed report", "Repair recommendations", "Efficiency analysis", "Compliance check", "Upgrade suggestions"]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-400">
                <div className="bg-gradient-to-br from-purple-500 to-violet-400 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">{plan.title}</h3>
                <p className="text-2xl font-bold text-purple-600 mb-6 text-center">{plan.price}</p>
                <ul className="space-y-3">
                  {plan.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all text-center block">
                  Subscribe Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Regular Maintenance Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Extended Lifespan", desc: "Systems last 20+ years with proper care" },
              { title: "Optimal Performance", desc: "Maintain maximum water collection efficiency" },
              { title: "Water Quality", desc: "Ensure safe, clean harvested water" },
              { title: "Cost Savings", desc: "Prevent expensive repairs and breakdowns" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Keep Your System Running Smoothly
          </h2>
          <p className="text-base md:text-xl text-purple-100 mb-6 md:mb-10">
            Schedule your maintenance service today and enjoy worry-free water management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-purple-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Book Service Now
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-purple-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-purple-500/30 transition-all border border-white/20">
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceMaintainInspect;
