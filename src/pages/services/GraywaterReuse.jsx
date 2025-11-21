import { 
  Recycle, CheckCircle2, ArrowRight, Phone, Leaf, Droplets, TrendingDown, 
  Home, Building, Shield, Award, Sprout, DollarSign, Zap, Users, Settings, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import WaterFlowAnimation from '../../components/WaterFlowAnimation';

const GraywaterReuse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      {/* Hero Image Section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <img
          src="https://ik.imagekit.io/xpwuob8jo/Images/Graywater%20Reuse%20Systems.png"
          alt="Graywater Reuse System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center text-white">
            <div className="inline-flex items-center bg-green-600/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-green-400/30">
              <Recycle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Sustainable Water Recycling</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Graywater Reuse Systems
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Capture and recycle water from showers, sinks, and washing machines for outdoor irrigation. Save up to 50% of your household water consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Water Flow Animation */}
      <WaterFlowAnimation color="rgba(52, 211, 153, 0.5)" />

      {/* Next Opportunity Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              The Next Frontier in Water Conservation
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg">
              Graywater recovery represents the most significant opportunity for water conservation gains available to modern households and buildings. No other technology can match the potential water savings that graywater reuse delivers. These systems capture water discharged from showers, bathtubs, bathroom sinks, and clothes washers—then redirect it for outdoor irrigation purposes, effectively replacing expensive municipal potable water.
            </p>
            
            <p className="text-base md:text-lg">
              If you're constructing a new home or planning a renovation, incorporating a graywater reuse system could be one of the smartest investments you make. Here's why: once your plumbing is installed with conventional single-pipe drainage, retrofitting a graywater system becomes extraordinarily difficult and costly. The window of opportunity is during construction or major remodeling—miss it, and you likely won't have another chance.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 my-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                How Much Water Could You Actually Save?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In a standard residential property, graywater accounts for approximately 50% of total indoor water consumption. Imagine having all that water available for landscape irrigation instead of sending it directly into the sewer system. That's thousands of gallons monthly that could sustain your gardens, lawns, and outdoor landscaping.
              </p>
              <div className="bg-green-600 text-white rounded-xl p-6 text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">~50%</p>
                <p className="text-lg">of indoor water use can be recovered as graywater</p>
              </div>
            </div>

            <p className="text-base md:text-lg">
              At Maxima Water, we function as both engineering consultants and complete system contractors for graywater reuse installations. While regulations governing graywater systems are gradually becoming more practical, current codes still contain complexities and nuances. You need experienced professionals who understand these regulations thoroughly and can navigate them on your behalf—ensuring your system is both code-compliant and optimized for performance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Graywater Services */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Graywater Reuse Services
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              How may we best serve you?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Design & Consulting */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="bg-green-100 p-4 rounded-lg inline-block mb-4">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Design & Consulting
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our engineering team creates customized graywater system designs that comply with local regulations while maximizing water recovery potential. We provide comprehensive technical specifications, plumbing layouts, and implementation guidance for your contractors.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Site evaluation & feasibility analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Custom system design & sizing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Regulatory compliance documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Material specifications & sourcing</span>
                </li>
              </ul>
            </div>

            {/* Residential Installation */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="bg-emerald-100 p-4 rounded-lg inline-block mb-4">
                <Home className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Residential Installation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We handle complete residential graywater system installations from concept through commissioning. Whether you're building new or retrofitting an existing home, we manage every aspect—plumbing modifications, filtration installation, distribution systems, and final testing.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Turnkey installation services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Dual plumbing system setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Irrigation distribution networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>System training & documentation</span>
                </li>
              </ul>
            </div>

            {/* Service & Maintenance */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="bg-green-100 p-4 rounded-lg inline-block mb-4">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Inspection, Service & Maintenance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Graywater systems require periodic maintenance to function optimally. We service all systems regardless of who installed them. Our comprehensive maintenance programs include filter cleaning, component inspection, system optimization, and troubleshooting to ensure long-term reliability.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Pre-purchase system inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Filter replacement & cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Performance testing & optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Annual maintenance contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Graywater Reuse */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              What Are the Benefits of Reusing Graywater?
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why graywater reuse makes environmental and economic sense
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <DollarSign className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Reduced Water Bills
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dramatically lower your water expenses by replacing costly municipal water for landscaping needs with graywater you've already paid for. The savings compound monthly and grow as water rates increase over time.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <TrendingDown className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Exceptional Return on Investment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Since you're reusing water already purchased, graywater systems deliver outstanding ROI. Most residential installations pay for themselves within 3-5 years, then continue delivering value for decades with minimal maintenance costs.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Droplets className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Climate-Independent Water Source
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike rainwater harvesting, which depends on rainfall patterns, graywater is produced daily regardless of climate or drought conditions. Your household generates this water every single day through normal activities.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <Shield className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Minimal Treatment Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Graywater requires only basic filtration compared to blackwater (sewage) treatment. Simple mesh filters and settling tanks make it safe for irrigation use, keeping system costs and complexity low.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Sprout className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Reduced Potable Water Demand
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Graywater effectively offsets municipal potable water usage for landscape irrigation and can even be used for toilet flushing in some configurations, preserving drinking-quality water for essential uses.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <Home className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Foundation Moisture Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Graywater can be strategically applied around your foundation to maintain consistent soil moisture levels, preventing soil movement and foundation cracking—particularly important in clay-rich soils.
              </p>
            </div>

            {/* Benefit 7 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Leaf className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Smaller Environmental Footprint
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By reducing total municipal water consumption, you decrease the energy required for water treatment and distribution while minimizing your environmental impact. Every gallon of graywater reused is one less gallon that needs processing.
              </p>
            </div>

            {/* Benefit 8 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <Recycle className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Extended Septic System Life
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Diverting graywater reduces wastewater volume entering your septic system, extending its useful capacity and lifespan. This postpones expensive septic upgrades or replacements.
              </p>
            </div>

            {/* Benefit 9 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Users className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Reduced Wastewater Treatment Load
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Less wastewater volume means lower energy consumption, reduced pumping costs, and decreased loading on municipal sewer infrastructure. This collective benefit can delay expensive sewer system expansions.
              </p>
            </div>

            {/* Benefit 10 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <Sprout className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Nutrient-Rich for Plant Growth
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Graywater contains nitrogen and phosphorus from soaps and detergents—the same components found in fertilizers. This provides supplemental nutrients that benefit plant health and vigor.
              </p>
            </div>

            {/* Benefit 11 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Award className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Personal Environmental Contribution
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Knowing you're minimizing municipal water consumption and maximizing resource efficiency provides genuine satisfaction. You're actively participating in sustainable water management solutions.
              </p>
            </div>

            {/* Benefit 12 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <Shield className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Drought-Resilient Landscaping
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Maintain gardens and landscaping even during drought periods and water restrictions. Since graywater is generated daily from household use, your outdoor spaces remain vibrant regardless of municipal water limitations.
              </p>
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

      {/* Vital Role in Water Resources */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Graywater Reuse: A Vital Role in Our Water Future
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                Water is the foundation of thriving communities—essential for our quality of life and economic prosperity. Yet local water resources face relentless pressure from population growth, recurring droughts, and environmental contamination. We know you care deeply about environmental stewardship and want to contribute meaningfully to water conservation efforts.
              </p>

              <p className="text-base md:text-lg">
                A graywater reuse system empowers you to do exactly that. Recovering graywater isn't just good practice—it's an opportunity we can no longer afford to overlook or postpone.
              </p>

              <div className="bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl p-6 md:p-8 text-white my-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Consider This Reality
                </h3>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Water from your showers, bathtubs, bathroom sinks, and washing machines contains virtually no bacterial contamination. It requires only minimal treatment to be safely applied outdoors as irrigation, replacing expensive municipal potable water.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  In typical households, approximately 50% of indoor water consumption qualifies as graywater. Without reuse, you're literally flushing away this valuable resource. Graywater systems are investments in our collective future—delivering returns for years, even decades. Delaying installation only postpones these benefits while costs continue rising.
                </p>
              </div>

              <p className="text-base md:text-lg font-semibold text-green-600">
                Every day you wait is another day of wasted water and missed savings. Start your graywater journey today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Graywater Systems */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Residential Graywater Reuse Systems
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  We believe graywater recovery represents the next major advancement in water conservation for urban households. Every home has this untapped resource flowing continuously into sewer systems. A properly designed graywater system captures this resource and redirects it beneficially on your property.
                </p>
                <p className="text-base md:text-lg">
                  By doing so, you replace municipal water usage with graywater that you've already paid for—essentially getting double value from every gallon.
                </p>
                <p className="text-base md:text-lg">
                  The beauty of graywater is its constant availability. You generate it every single day through normal household activities, eliminating the need for large storage infrastructure. This minimal investment requirement, combined with reusing water already purchased, creates an exceptional return on investment.
                </p>
                <p className="text-base md:text-lg font-semibold text-green-600">
                  The main considerations are cost-effective installation feasibility and strict compliance with local and state regulations—areas where our expertise ensures success.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="Beautiful landscape irrigated with graywater"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <p className="text-center text-gray-700 italic">
                Imagine maintaining vibrant landscaping with just graywater
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Graywater Systems */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Substantial municipal water cost reductions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Enhanced sustainability credentials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multi-building system integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Customized irrigation distribution networks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Long-term operational savings</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Commercial Graywater Recovery Systems
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  We design and install comprehensive graywater recovery systems for commercial buildings. Graywater reuse in commercial settings offers tremendous potential to reduce municipal water consumption while lowering operational expenses.
                </p>
                <p className="text-base md:text-lg">
                  Commercial projects present unique challenges. Graywater may originate from multiple fixtures across different building areas, creating system complexity that demands careful engineering. Improper design leads to long-term maintenance headaches and system failures.
                </p>
                <p className="text-base md:text-lg">
                  Additionally, commercial properties typically have numerous landscape zones requiring irrigation coverage. We create detailed water budgets and graywater irrigation plans ensuring optimal distribution across all designated areas.
                </p>
                <p className="text-base md:text-lg font-semibold text-green-600">
                  With properly engineered graywater systems, you'll enjoy years of reduced water costs, thriving landscaping, and minimal maintenance requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Start Recycling Water?
          </h2>
          <p className="text-base md:text-xl text-green-100 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop wasting valuable water down the drain. Install a graywater reuse system and transform your water management. Our expert team handles design, installation, and ongoing maintenance—ensuring your system delivers maximum performance for decades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-green-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Free Site Visit
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a
              href="tel:+916300225335"
              className="inline-flex items-center justify-center bg-green-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-green-500/30 transition-all border border-white/20"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now: +91 6300 225 335
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">150+</p>
              <p className="text-green-100">Graywater Systems Installed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">50%</p>
              <p className="text-green-100">Average Water Savings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">5 Years</p>
              <p className="text-green-100">Typical ROI Period</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraywaterReuse;
