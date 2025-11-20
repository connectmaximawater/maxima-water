import { ArrowDown, CheckCircle2, ArrowRight, Phone, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const GutterInstallation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      <section className="relative bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
                <ArrowDown className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                <span className="text-xs md:text-sm font-medium">Professional Gutter Systems</span>
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Gutter Installation
              </h1>
              <p className="text-base md:text-xl text-orange-100 mb-6 md:mb-8 leading-relaxed">
                High-quality gutter and downpipe installation to protect your property from water damage. Essential for effective rainwater harvesting and drainage management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-white text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  +91 6300 225 335
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center bg-orange-500/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-orange-500/30 transition-all border border-white/20">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Gutter System Components
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Seamless Gutters", desc: "Custom-made on-site, leak-proof aluminum gutters in various colors", features: ["No joints or seams", "5-inch & 6-inch profiles", "20+ color options", "Rust-resistant"] },
              { title: "Downpipes & Conductors", desc: "Vertical pipes to efficiently channel water from roof to ground", features: ["Round & rectangular options", "Wall-mounted brackets", "Splash blocks", "Extension outlets"] },
              { title: "Leaf Guards & Screens", desc: "Prevent debris, leaves, and birds from clogging your gutter system", features: ["Mesh filters", "Gutter covers", "Easy cleaning access", "UV resistant"] },
              { title: "Gutter Hangers", desc: "Strong support brackets to hold gutters securely to fascia boards", features: ["Hidden hanger options", "16-inch spacing", "Heavy-duty construction", "Corrosion-proof"] },
              { title: "End Caps & Corners", desc: "Sealed corners and end pieces for leak-proof installations", features: ["Mitred corners", "Left/right end caps", "Watertight seals", "Professional finish"] },
              { title: "Rainwater Outlets", desc: "Connection points to integrate gutters with RWH or drainage systems", features: ["Multiple outlet sizes", "Filter integration", "First flush compatibility", "Easy maintenance"] }
            ].map((component, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{component.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{component.desc}</p>
                <ul className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Protect Your Property with Quality Gutters
          </h2>
          <p className="text-base md:text-xl text-orange-100 mb-6 md:mb-10">
            Expert gutter installation for homes and commercial buildings. Get a free quote today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-orange-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Schedule Installation
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-orange-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-orange-500/30 transition-all border border-white/20">
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GutterInstallation;
