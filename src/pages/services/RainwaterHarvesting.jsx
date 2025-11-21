import { useState } from 'react';
import { 
  Droplets, CheckCircle2, ArrowRight, Phone, Shield, TrendingUp, Users, Home, Leaf, Calculator,
  Wrench, Settings, Search, Building, Waves, Zap, Sprout, Award, DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import WaterFlowAnimation from '../../components/WaterFlowAnimation';

const RainwaterHarvesting = () => {
  const [roofArea, setRoofArea] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [collectionPotential, setCollectionPotential] = useState(0);

  const calculatePotential = () => {
    if (roofArea && rainfall) {
      // Formula: Roof Area (sq ft) × Rainfall (inches) × 0.623 = Gallons
      const gallons = parseFloat(roofArea) * parseFloat(rainfall) * 0.623;
      setCollectionPotential(Math.round(gallons));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      {/* Hero Image Section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534237886190-ced735ca4b73?w=1920&h=1080&fit=crop"
          alt="Rainwater Harvesting System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 md:px-6 max-w-4xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
              <Droplets className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">Sustainable Water Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Rainwater Harvesting Systems
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              Invest in Your Future with Professional Rainwater Collection Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Water Flow Animation */}
      <WaterFlowAnimation color="rgba(147, 197, 253, 0.5)" />

      {/* Water Flow Animation */}
      <WaterFlowAnimation color="rgba(147, 197, 253, 0.5)" />

      {/* About Our Future Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Simply Put, Rainwater Harvesting Is About Our Future
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg">
              While the origins of rainwater harvesting trace back to ancient civilizations, its value remains undiminished in modern times. A rainwater collection system captures rainfall from impervious surfaces—primarily rooftops—to be stored and utilized later, typically on the same property where it falls. This age-old practice delivers numerous advantages for water conservation and environmental sustainability.
            </p>
            
            <p className="text-base md:text-lg">
              Rainwater systems serve diverse purposes: in urban settings, they commonly supplement irrigation demands, while in rural areas, they often provide complete household drinking water supply. Increasingly, these systems are being deployed as stormwater management solutions, functioning as green infrastructure or low-impact development techniques that reduce runoff and replenish groundwater.
            </p>
            
            <p className="text-base md:text-lg">
              At Maxima Water, we deliver a comprehensive suite of rainwater harvesting services tailored to your specific needs and project phase. As rainwater system engineers, we offer custom system design, but our capabilities extend far beyond—we function as complete rainwater system contractors, coordinating all necessary specialists depending on your system's complexity and scope. From initial concept to final installation, we manage every detail.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 my-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Quality That Defines the System
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Any contractor can connect a downspout to a cistern and call it complete. We believe a true rainwater collection system is defined by meticulous attention to detail. Our systems are engineered to avoid becoming dysfunctional, high-maintenance burdens, or unsightly additions to your property. We design with function, sustainability, and aesthetics in perfect harmony. Quality—both in materials and workmanship—is non-negotiable for us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rainwater Collection Calculator */}
      {/* <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
              <Calculator className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              How Much Rainwater Could You Collect?
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              Get an estimate of your rainwater collection potential
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Enter Your Roof Area <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                    placeholder="e.g., 2000"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    square feet
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Enter Total Annual Rainfall For Your Area <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  For Nellore region, the average annual rainfall is approximately 45 inches (1150 mm)
                </p>
                <div className="relative">
                  <input
                    type="number"
                    value={rainfall}
                    onChange={(e) => setRainfall(e.target.value)}
                    placeholder="e.g., 45"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    inches
                  </span>
                </div>
              </div>

              <button
                onClick={calculatePotential}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
              >
                Calculate Collection Potential
              </button>

              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl p-6 text-white text-center">
                <p className="text-sm font-medium mb-2">Total Rainwater Collection Potential</p>
                <p className="text-4xl md:text-5xl font-bold">{collectionPotential.toLocaleString()}</p>
                <p className="text-sm mt-2">gallons per year</p>
              </div>

              <p className="text-xs text-gray-600 text-center">
                This provides a general rainwater collection potential. You'll receive a detailed collection analysis with your estimate from us.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Rainwater Harvesting Services */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Rainwater Harvesting Services
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive rainwater solutions for every project phase and application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Rainwater System Design */}
            <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Rainwater System Design
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team of engineers and designers creates comprehensive rainwater harvesting system designs tailored to your property requirements, climate conditions, and usage objectives. We provide complete technical documentation, material specifications, and implementation guidelines for contractors to execute.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Site assessment & catchment analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Storage capacity calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>System component selection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Complete construction documentation</span>
                </li>
              </ul>
            </div>

            {/* Residential Installation */}
            <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="bg-cyan-100 p-4 rounded-lg inline-block mb-4">
                <Home className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Residential Installation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We manage complete residential rainwater harvesting installations from initial design consultation to final system commissioning. Our expertise spans both simple barrel setups and sophisticated whole-house water systems. We coordinate all subcontractors and ensure your system meets all performance expectations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Complete turnkey installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Subcontractor coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Irrigation & household systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>System startup & training</span>
                </li>
              </ul>
            </div>

            {/* DIY Support */}
            <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                DIY Support & Guidance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Planning to build your own rainwater system? We offer professional guidance, consulting, and material supply for motivated property owners. We'll help you avoid common mistakes and design a system that performs reliably. From basic rain barrels to advanced installations, we support your self-build journey.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Technical consultation services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Component recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Installation troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Quality materials supply</span>
                </li>
              </ul>
            </div>

            {/* Service & Maintenance */}
            <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="bg-cyan-100 p-4 rounded-lg inline-block mb-4">
                <Settings className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Service & Maintenance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Even well-designed rainwater systems require periodic maintenance to function optimally. We service systems regardless of who installed them. Our maintenance programs include filter replacement, tank cleaning, pump service, and system performance optimization to ensure long-term reliability.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Filter & screen cleaning/replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Tank inspection & cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Pump & control system service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Annual maintenance contracts</span>
                </li>
              </ul>
            </div>

            {/* System Inspection */}
            <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                System Inspection
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Considering a property with an existing rainwater system? We conduct thorough pre-purchase inspections to evaluate system condition, functionality, and compliance. Our detailed reports identify current issues, potential problems, and maintenance needs so you can make informed decisions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Pre-purchase system assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Comprehensive condition reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Code compliance verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Maintenance recommendations</span>
                </li>
              </ul>
            </div>

            {/* Commercial & Municipal */}
            <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="bg-cyan-100 p-4 rounded-lg inline-block mb-4">
                <Building className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Commercial & Municipal
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We deliver large-scale rainwater harvesting solutions for commercial developments, industrial facilities, institutional buildings, and municipal projects. Our team manages complex installations involving multiple catchment surfaces, substantial storage volumes, and advanced treatment systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Large-capacity system design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Stormwater management integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Advanced treatment systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Regulatory compliance support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Component Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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

      {/* Why Harvest Rain - Comprehensive Benefits */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Harvest Rainwater?
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the environmental, economic, and practical advantages of rainwater collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <TrendingUp className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Exceptional Water Savings
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Rainwater harvesting dramatically reduces dependency on municipal water supply or groundwater extraction. In Nellore's climate, a typical 2000 sq ft roof can capture over 56,000 gallons annually—enough to reduce your water bills by 40-60%.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-cyan-100 p-3 rounded-lg inline-block mb-4">
                <Droplets className="h-7 w-7 text-cyan-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Superior Water Quality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Rainwater is naturally soft, free from minerals and chemicals found in municipal supplies. It's ideal for washing, bathing, and irrigation—prolonging the life of appliances, improving plant health, and providing gentler water for your skin and hair.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Shield className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Water Security & Independence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Establish a reliable backup water source independent of municipal infrastructure. During water shortages, supply disruptions, or emergencies, your rainwater system ensures continuity for essential household needs.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-cyan-100 p-3 rounded-lg inline-block mb-4">
                <Users className="h-7 w-7 text-cyan-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Reduced Infrastructure Demand
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By harvesting rainwater, you decrease the burden on aging municipal water systems and reduce energy consumption associated with water treatment and distribution. This collective action strengthens community water resilience.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Leaf className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Stormwater Runoff Reduction
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Rainwater harvesting functions as effective stormwater management—capturing runoff that would otherwise overwhelm drainage systems, cause erosion, and pollute waterways. Each system contributes to flood mitigation.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-cyan-100 p-3 rounded-lg inline-block mb-4">
                <Waves className="h-7 w-7 text-cyan-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Groundwater Recharge
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Integrated recharge systems direct excess harvested water into underground aquifers, replenishing groundwater tables. This sustainable approach combats depletion caused by over-extraction and supports long-term water availability.
              </p>
            </div>

            {/* Benefit 7 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Home className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Enhanced Property Value
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Professionally installed rainwater harvesting systems are attractive to environmentally conscious buyers and demonstrate long-term operational cost savings, making properties more marketable and valuable.
              </p>
            </div>

            {/* Benefit 8 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-cyan-100 p-3 rounded-lg inline-block mb-4">
                <Zap className="h-7 w-7 text-cyan-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Energy Conservation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Municipal water treatment and pumping consumes significant electricity. By using harvested rainwater, you reduce the energy required for water infrastructure—lowering carbon emissions and contributing to climate action.
              </p>
            </div>

            {/* Benefit 9 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Sprout className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Superior for Landscaping
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Chlorine-free rainwater is healthier for gardens, lawns, and ornamental plants. The absence of treatment chemicals supports beneficial soil microorganisms and produces more vibrant, resilient landscapes.
              </p>
            </div>

            {/* Benefit 10 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-cyan-100 p-3 rounded-lg inline-block mb-4">
                <Building className="h-7 w-7 text-cyan-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Regulatory Compliance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Many municipalities now mandate rainwater harvesting for new constructions. Installing a system ensures compliance with building codes, avoids penalties, and positions you ahead of future regulations.
              </p>
            </div>

            {/* Benefit 11 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Environmental Stewardship
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By harvesting rainwater, you actively participate in water conservation, demonstrate environmental responsibility, and contribute to sustainable water management for future generations.
              </p>
            </div>

            {/* Benefit 12 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-cyan-100 p-3 rounded-lg inline-block mb-4">
                <DollarSign className="h-7 w-7 text-cyan-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Strong Return on Investment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                While initial installation costs exist, rainwater systems typically pay for themselves within 3-7 years through reduced water bills. Beyond payback, they continue delivering value for decades with minimal maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Water Resources Importance & Investment Philosophy */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              The Importance of Water Resources Management
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                Water scarcity is no longer a distant concern—it's a present reality affecting communities worldwide. India faces increasing water stress due to population growth, urbanization, climate variability, and over-extraction of groundwater. Rainwater harvesting represents one of the most practical, scalable solutions to this challenge.
              </p>

              <p className="text-base md:text-lg">
                By capturing rainfall where it falls, we reduce pressure on centralized water infrastructure, minimize energy consumption, and build resilience against supply disruptions. Every rainwater system installed is a step toward sustainable water management.
              </p>

              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl p-6 md:p-8 text-white my-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Think of It as an Investment, Not an Expense
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  Many people hesitate to invest in rainwater harvesting because of upfront costs. However, delaying only increases future expenses. Water rates rise annually, and infrastructure becomes more expensive over time. Installing a system now locks in savings for decades and protects against escalating costs.
                </p>
                <p className="text-base md:text-lg leading-relaxed mt-4">
                  Consider the return on investment: reduced utility bills, increased property value, environmental benefits, and peace of mind during water shortages. A rainwater harvesting system isn't just infrastructure—it's a financial asset that pays dividends year after year.
                </p>
              </div>

              <p className="text-base md:text-lg font-semibold text-blue-600">
                Don't delay your investment. Water is becoming more precious, and the time to act is now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications: Urban vs Rural */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Applications of Rainwater Harvesting
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for urban and rural environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Urban Applications */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl p-8 md:p-10 text-white">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg inline-block mb-6">
                <Building className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Urban Settings
              </h3>
              <p className="text-lg mb-6 text-blue-50">
                Primary Focus: Irrigation & Non-Potable Uses
              </p>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  In urban and suburban areas, rainwater harvesting primarily supplements outdoor irrigation needs—gardens, lawns, and landscaping. This dramatically reduces dependence on municipal water for non-essential uses.
                </p>
                <p className="leading-relaxed">
                  Additional urban applications include toilet flushing, vehicle washing, and cooling systems. While potable use is possible with proper treatment, most urban systems focus on reducing overall water consumption and utility costs.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Garden and lawn irrigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Landscape maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Toilet flushing systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Vehicle and surface washing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Stormwater management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Rural Applications */}
            <div className="bg-gradient-to-br from-green-500 to-teal-400 rounded-2xl p-8 md:p-10 text-white">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg inline-block mb-6">
                <Home className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Rural Settings
              </h3>
              <p className="text-lg mb-6 text-green-50">
                Primary Focus: Complete Household Water Supply
              </p>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  In rural areas without municipal water connections, rainwater harvesting often provides the entire household water supply—including drinking water. With proper filtration and treatment, rainwater becomes a safe, reliable primary source.
                </p>
                <p className="leading-relaxed">
                  Rural systems typically feature larger storage capacities to ensure year-round availability, supplemented by groundwater or bore wells during dry seasons. These comprehensive systems deliver complete water independence.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Potable water supply (with treatment)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Cooking and drinking water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Bathing and laundry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Agricultural irrigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Livestock watering</span>
                  </li>
                </ul>
              </div>
            </div>
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

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Start Your Rainwater Harvesting Journey Today
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-10 max-w-3xl mx-auto">
            Don't wait for water scarcity to force your hand. Invest in a rainwater harvesting system now and enjoy decades of savings, sustainability, and water independence. Our team provides comprehensive consultation, custom design, and professional installation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Free Site Visit
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <a
              href="tel:+916300225335"
              className="inline-flex items-center justify-center bg-blue-500/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-blue-500/30 transition-all border border-white/20"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now: +91 6300 225 335
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">300+</p>
              <p className="text-blue-100">Systems Installed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">100%</p>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">10 Years</p>
              <p className="text-blue-100">System Warranty</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RainwaterHarvesting;
