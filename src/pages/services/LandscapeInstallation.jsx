import { Leaf, CheckCircle2, ArrowRight, Phone, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandscapeInstallation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-white">
      <section className="relative bg-gradient-to-br from-lime-600 via-green-600 to-lime-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
              <Leaf className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Professional Landscaping</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Landscape Installation
            </h1>
            <p className="text-base md:text-xl text-lime-100 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your outdoor spaces with beautiful, sustainable landscapes. We integrate water-efficient gardens, native plants, and smart irrigation for eco-friendly, low-maintenance landscapes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-white text-lime-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-lime-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                +91 6300 225 335
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center bg-lime-500/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-lime-500/30 transition-all border border-white/20">
                Get Free Design
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
              { title: "Garden Design & Planning", desc: "Custom landscape designs tailored to your space and preferences", features: ["3D visualizations", "Plant selection", "Hardscape integration", "Sustainable design"] },
              { title: "Lawn Installation", desc: "Lush, healthy lawns with proper soil preparation and grass selection", features: ["Soil testing", "Premium grass varieties", "Leveling & grading", "Fertilization program"] },
              { title: "Rain Gardens", desc: "Beautiful gardens that naturally manage stormwater runoff", features: ["Native plants", "Bio-retention design", "Water absorption", "Wildlife friendly"] },
              { title: "Tree & Shrub Planting", desc: "Strategic placement of trees and shrubs for shade and beauty", features: ["Native species", "Proper spacing", "Root ball care", "Staking support"] },
              { title: "Outdoor Lighting", desc: "Energy-efficient lighting to enhance your landscape at night", features: ["LED fixtures", "Solar options", "Pathway lighting", "Accent lighting"] },
              { title: "Hardscaping", desc: "Patios, walkways, retaining walls, and decorative features", features: ["Paver installation", "Stone work", "Pergolas", "Water features"] }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-lime-600 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-lime-600 via-green-600 to-lime-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Create Your Dream Landscape
          </h2>
          <p className="text-base md:text-xl text-lime-100 mb-6 md:mb-10">
            Professional landscape installation that enhances your property value and sustainability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-lime-700 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-lime-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Request Consultation
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a href="tel:+916300225335" className="inline-flex items-center justify-center bg-lime-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-lime-500/30 transition-all border border-white/20">
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandscapeInstallation;
