import { Wrench, CheckCircle2, ArrowRight, Phone, ClipboardCheck, Droplets, FlaskConical, Snowflake, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaterFlowAnimation from '../../components/WaterFlowAnimation';

const ServiceMaintainInspect = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-white">
      {/* Hero Image Section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <img
          src="https://ik.imagekit.io/xpwuob8jo/Images/Rainwater%20Harvesting%20System%20Service%20and%20Maintenance.png"
          alt="Service, Maintenance & Inspection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 md:px-6 max-w-4xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
              <Wrench className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Professional Care for Your Systems</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Service, Maintenance & Inspection
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              Comprehensive maintenance solutions to ensure the longevity and optimal performance of your water conservation systems
            </p>
          </div>
        </div>
      </section>

      {/* Water Flow Animation */}
      <WaterFlowAnimation color="rgba(168, 85, 247, 0.5)" />

      {/* Introduction Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Protecting Your Investment
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We provide comprehensive maintenance, inspection, and testing services designed to complement our installation systems and help diagnose issues with your existing water conservation infrastructure. Our goal is to ensure the longevity of your rainwater collection or graywater reuse system and safeguard your investment—whether we installed it or another contractor did.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <ClipboardCheck className="h-8 w-8" />, title: "System Assessment Inspections", desc: "Comprehensive evaluation of system health" },
              { icon: <Wrench className="h-8 w-8" />, title: "Individual Maintenance Visits", desc: "On-demand service appointments" },
              { icon: <CheckCircle2 className="h-8 w-8" />, title: "Annual Maintenance Contracts", desc: "Auto-pilot system care programs" },
              { icon: <Droplets className="h-8 w-8" />, title: "Tank Cleaning", desc: "Specialized cistern debris removal" },
              { icon: <Settings className="h-8 w-8" />, title: "Upgrades and Repairs", desc: "Component replacement and system improvements" },
              { icon: <FlaskConical className="h-8 w-8" />, title: "Rainwater Quality Testing", desc: "Water analysis for potable use" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-400">
                <div className="bg-gradient-to-br from-purple-500 to-violet-400 w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Options */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Service & Maintenance Options
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored solutions to keep your water conservation systems in peak condition
            </p>
          </div>

          {/* System Assessment Inspection */}
          <div className="mb-12 bg-white rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-100 p-4 rounded-lg">
                <ClipboardCheck className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  System Assessment Inspection
                </h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive inspection service evaluates your water conservation system's current condition and identifies necessary maintenance requirements.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Rainwater Harvesting Systems</h4>
                <p className="text-sm text-gray-600">Complete evaluation from roof to storage</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Graywater Reuse Systems</h4>
                <p className="text-sm text-gray-600">Treatment and distribution assessment</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Drainage Systems</h4>
                <p className="text-sm text-gray-600">Flow and efficiency analysis</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              We provide a detailed report documenting the system's current state and maintenance requirements. Additionally, we offer a system demonstration to help you understand your infrastructure better.
            </p>
          </div>

          {/* Service Appointment */}
          <div className="mb-12 bg-white rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-violet-100 p-4 rounded-lg">
                <Wrench className="h-8 w-8 text-violet-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Service Appointment
                </h3>
                <p className="text-gray-600 mb-4">
                  If you suspect something isn't functioning correctly, our service appointment is designed for you. We perform thorough diagnostics and repairs to restore optimal performance.
                </p>
              </div>
            </div>
            
            <div className="bg-violet-50 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">What We Do:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-point system inspection from top to bottom</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive cleaning of all components</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Component repair or replacement as needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Performance testing and optimization</span>
                </li>
              </ul>
            </div>
            
            <p className="text-sm text-gray-600">
              Available for rainwater harvesting and graywater reuse systems
            </p>
          </div>

          {/* Maintenance Contract */}
          <div className="mb-12 bg-white rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-100 p-4 rounded-lg">
                <CheckCircle2 className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Annual Maintenance Contract
                </h3>
                <p className="text-gray-600 mb-4">
                  For those who want their potable rainwater system maintained on auto-pilot, our annual maintenance service provides peace of mind with regular scheduled care.
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">Each Visit Includes:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-point system inspection starting at the roof</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cleaning of all system components</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Filter replacement as required</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">UV bulb replacement when needed</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Early detection of potential issues</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Prevention of expensive repairs</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700">
              This program ensures your system stays in working order and catches any issues before they become costly problems.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Additional Testing & Service Options
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Water Testing */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-blue-100 p-4 rounded-lg inline-block mb-6">
                <FlaskConical className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Water Testing & Analysis
              </h3>
              <p className="text-gray-700 mb-6">
                We provide comprehensive water testing and analysis for rainwater systems used for potable purposes. Our testing ranges from simple bacterial presence checks to full chemical composition analysis, tailored to your specific needs.
              </p>
              <div className="bg-white/50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Testing Options:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5"></div>
                    <span>Bacterial presence and contamination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5"></div>
                    <span>Chemical composition analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5"></div>
                    <span>pH and mineral content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5"></div>
                    <span>Potability compliance verification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tank Cleaning */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-100 p-4 rounded-lg inline-block mb-6">
                <Droplets className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rainwater Tank Cleaning
              </h3>
              <p className="text-gray-700 mb-6">
                This specialized service removes debris accumulated at the bottom of your rainwater collection tank. Depending on your system configuration, this service may only be required every 10 years or more.
              </p>
              <div className="bg-white/50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Service Includes:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Complete cistern debris removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Tank sanitization and disinfection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>System upgrade recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Debris prevention solutions</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                We also provide options for upgrading your system to reduce debris infiltration.
              </p>
            </div>

            {/* Winterization */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg md:col-span-2">
              <div className="max-w-3xl mx-auto">
                <div className="bg-cyan-100 p-4 rounded-lg inline-block mb-6">
                  <Snowflake className="h-10 w-10 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Winterization Contract
                </h3>
                <p className="text-gray-700 mb-6">
                  Avoid costly damage from freezing temperatures. Our winterization service protects your rainwater collection and graywater reuse systems during cold weather months.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Before Winter:</h4>
                    <p className="text-sm text-gray-700">We safely decommission your system before freezing weather arrives, protecting pipes, pumps, and components from damage.</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">After Winter:</h4>
                    <p className="text-sm text-gray-700">Once freezing forecasts have ended, we return to restart your system and ensure everything is functioning properly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Maintenance */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Expert Rainwater Harvesting System Care
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Professional maintenance ensures your system operates effectively and efficiently, prolonging its lifespan and optimizing water savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Importance of Regular Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Rainwater collection systems range from simple to highly complex, depending on design and components. Regular servicing and maintenance are essential to ensure optimal operation and efficiency, preventing system degradation over time.
              </p>
              <p className="text-gray-700">
                These mechanical systems have moving parts that require attention. An effective maintenance schedule—including filter cleaning, pump servicing, and equipment calibration—ensures your system continues to deliver maximum municipal water savings.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Expertise</h3>
              <p className="text-gray-700 mb-4">
                Maxima Water is a professional engineering company specializing in rainwater harvesting system design and construction. We have designed and installed systems ranging from simple residential setups to complex commercial installations.
              </p>
              <p className="text-gray-700">
                From this extensive expertise, we've developed an industry-leading service and maintenance program. Our service technicians are trained on all types of systems and designs, ensuring your system stays in optimum condition regardless of size or scale.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Keep Your System Running at Peak Performance
            </h3>
            <p className="text-purple-100 mb-6">
              No matter the size or complexity of your rainwater harvesting system, we ensure it stays in optimal condition so you continue to save water, money, and do your part for the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Wrench className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 text-purple-100" />
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Schedule Your Service Today
          </h2>
          <p className="text-base md:text-xl text-purple-100 mb-8 md:mb-10 leading-relaxed">
            Whether you need a one-time inspection, regular maintenance, or specialized testing, our expert team is ready to help. Protect your investment and ensure optimal system performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-purple-600 px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Book Free Site Visit
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-purple-500/20 backdrop-blur-sm text-white px-8 md:px-10 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg hover:bg-purple-500/30 transition-all border-2 border-white/30">
              <Phone className="h-5 w-5 md:h-6 md:w-6 mr-2" />
              Call Now: +91 6300 225 335
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
              <div className="text-sm md:text-base text-purple-100">Systems Maintained</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base text-purple-100">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base text-purple-100">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceMaintainInspect;
