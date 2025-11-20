import { useState } from 'react';
import { 
  Calculator as CalcIcon,
  Home,
  Users,
  Droplets,
  TrendingDown,
  IndianRupee,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const Calculator = () => {
  const [formData, setFormData] = useState({
    propertyType: 'apartment',
    roofArea: '',
    residents: '',
    waterUsage: '',
    currentBill: '',
    city: 'bangalore',
  });

  const [results, setResults] = useState(null);

  const cities = [
    { name: 'Bangalore', rainfall: 970 },
    { name: 'Mumbai', rainfall: 2167 },
    { name: 'Chennai', rainfall: 1400 },
    { name: 'Hyderabad', rainfall: 812 },
    { name: 'Pune', rainfall: 722 },
    { name: 'Delhi', rainfall: 611 },
    { name: 'Kolkata', rainfall: 1582 },
    { name: 'Ahmedabad', rainfall: 803 },
    { name: 'Jaipur', rainfall: 650 },
    { name: 'Kochi', rainfall: 3169 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateSavings = () => {
    const roofArea = parseFloat(formData.roofArea) || 0;
    const residents = parseInt(formData.residents) || 0;
    const currentBill = parseFloat(formData.currentBill) || 0;
    
    const selectedCity = cities.find(c => c.name.toLowerCase() === formData.city);
    const annualRainfall = selectedCity ? selectedCity.rainfall : 800;

    // Calculations
    const collectionEfficiency = 0.85; // 85% efficiency
    const annualCollection = (roofArea * annualRainfall * collectionEfficiency) / 1000; // in cubic meters
    const annualCollectionLiters = annualCollection * 1000;

    // Average water usage per person per day in liters (India)
    const waterUsagePerPerson = 135;
    const totalDailyUsage = residents * waterUsagePerPerson;
    const annualUsageLiters = totalDailyUsage * 365;

    // Percentage of water needs met by rainwater
    const percentageMet = Math.min((annualCollectionLiters / annualUsageLiters) * 100, 100);

    // Cost savings
    const avgWaterCostPerLiter = currentBill / totalDailyUsage / 30; // per liter
    const annualSavings = annualCollectionLiters * avgWaterCostPerLiter;

    // Installation costs (estimated)
    let installationCost = 0;
    if (formData.propertyType === 'house') {
      installationCost = roofArea < 100 ? 80000 : 120000;
    } else if (formData.propertyType === 'apartment') {
      installationCost = roofArea < 500 ? 250000 : 400000;
    } else {
      installationCost = 500000;
    }

    // Government subsidy (example: 50% for residential, 30% for commercial)
    const subsidyPercent = formData.propertyType === 'commercial' ? 0.3 : 0.5;
    const subsidyAmount = installationCost * subsidyPercent;
    const netInstallationCost = installationCost - subsidyAmount;

    // ROI calculation
    const roiYears = netInstallationCost / annualSavings;

    setResults({
      annualCollectionLiters: Math.round(annualCollectionLiters),
      annualUsageLiters: Math.round(annualUsageLiters),
      percentageMet: Math.round(percentageMet),
      annualSavings: Math.round(annualSavings),
      installationCost,
      subsidyAmount: Math.round(subsidyAmount),
      netInstallationCost: Math.round(netInstallationCost),
      roiYears: roiYears.toFixed(1),
      monthlyBillReduction: Math.round(annualSavings / 12),
      cityRainfall: annualRainfall,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CalcIcon className="h-16 w-16 mx-auto mb-6 text-cyan-200" />
          <h1 className="text-2xl md:text-5xl font-bold mb-6">
            Savings <span className="text-cyan-200">Calculator</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-100 max-w-3xl mx-auto">
            Calculate how much you can save with rainwater harvesting
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-6">Enter Your Details</h2>

            <div className="space-y-6">
              {/* Property Type */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-water-dark focus:outline-none"
                >
                  <option value="house">Individual House</option>
                  <option value="apartment">Apartment Complex</option>
                  <option value="commercial">Commercial Building</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-water-dark focus:outline-none"
                >
                  {cities.map(city => (
                    <option key={city.name} value={city.name.toLowerCase()}>
                      {city.name} ({city.rainfall}mm/year)
                    </option>
                  ))}
                </select>
              </div>

              {/* Roof Area */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  <Home className="inline h-4 w-4 mr-1" />
                  Roof/Collection Area (sq ft)
                </label>
                <input
                  type="number"
                  name="roofArea"
                  value={formData.roofArea}
                  onChange={handleChange}
                  placeholder="e.g., 2000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-water-dark focus:outline-none"
                />
              </div>

              {/* Number of Residents */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Number of Residents
                </label>
                <input
                  type="number"
                  name="residents"
                  value={formData.residents}
                  onChange={handleChange}
                  placeholder="e.g., 4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-water-dark focus:outline-none"
                />
              </div>

              {/* Current Monthly Bill */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  <IndianRupee className="inline h-4 w-4 mr-1" />
                  Current Monthly Water Bill (₹)
                </label>
                <input
                  type="number"
                  name="currentBill"
                  value={formData.currentBill}
                  onChange={handleChange}
                  placeholder="e.g., 1500"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-water-dark focus:outline-none"
                />
              </div>

              <button
                onClick={calculateSavings}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg font-bold text-sm md:text-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg"
              >
                Calculate Savings
              </button>
            </div>
          </div>

          {/* Results */}
          <div>
            {results ? (
              <div className="space-y-6">
                {/* Annual Collection */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-2xl text-white shadow-xl">
                  <Droplets className="h-12 w-12 mb-4 text-cyan-200" />
                  <h3 className="text-xl font-semibold mb-2">Annual Rainwater Collection</h3>
                  <p className="text-2xl md:text-4xl font-bold">{results.annualCollectionLiters.toLocaleString()} L</p>
                  <p className="text-xs md:text-sm text-gray-100 mt-2">Based on {results.cityRainfall}mm annual rainfall</p>
                </div>

                {/* Water Needs Met */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200">
                  <TrendingDown className="h-12 w-12 mb-4 text-water-dark" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Needs Met</h3>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl md:text-4xl font-bold text-water-dark">{results.percentageMet}%</p>
                    <p className="text-gray-600">of annual usage</p>
                  </div>
                  <div className="mt-4 bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${results.percentageMet}%` }}
                    ></div>
                  </div>
                </div>

                {/* Cost Savings */}
                <div className="bg-gradient-to-br from-green-600 to-emerald-500 p-8 rounded-2xl text-white shadow-xl">
                  <IndianRupee className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Annual Savings</h3>
                  <p className="text-2xl md:text-4xl font-bold">₹{results.annualSavings.toLocaleString()}</p>
                  <p className="text-xs md:text-sm text-gray-100 mt-2">
                    ₹{results.monthlyBillReduction.toLocaleString()} saved per month
                  </p>
                </div>

                {/* Installation Cost */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Installation Cost:</span>
                      <span className="font-bold text-gray-900">₹{results.installationCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Government Subsidy:</span>
                      <span className="font-bold">- ₹{results.subsidyAmount.toLocaleString()}</span>
                    </div>
                    <div className="border-t-2 border-gray-200 pt-3 flex justify-between">
                      <span className="font-semibold text-gray-900">Net Cost:</span>
                      <span className="font-bold text-xl text-water-dark">₹{results.netInstallationCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-8 rounded-2xl text-white shadow-xl">
                  <CheckCircle2 className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Return on Investment</h3>
                  <p className="text-2xl md:text-4xl font-bold">{results.roiYears} years</p>
                  <p className="text-xs md:text-sm text-gray-100 mt-2">Payback period for your investment</p>
                </div>

                {/* Info Note */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs md:text-sm text-gray-700">
                        <strong>Note:</strong> Calculations are estimates based on average values. 
                        Actual savings may vary based on rainfall patterns, water usage, and system efficiency. 
                        Contact us for a detailed customized assessment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-12 rounded-2xl text-center h-full flex flex-col items-center justify-center">
                <CalcIcon className="h-24 w-24 text-gray-300 mb-6" />
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Ready to Calculate?</h3>
                <p className="text-gray-600">
                  Fill in your details on the left and click "Calculate Savings" to see your potential benefits
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl md:text-4xl mb-3">💰</div>
            <h3 className="font-bold text-gray-900 mb-2">Government Subsidy</h3>
            <p className="text-sm text-gray-600">
              Get up to 50% subsidy on installation costs under various government schemes
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl md:text-4xl mb-3">📊</div>
            <h3 className="font-bold text-gray-900 mb-2">Free Site Assessment</h3>
            <p className="text-sm text-gray-600">
              Our engineers will visit and provide accurate calculations for your property
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl md:text-4xl mb-3">✅</div>
            <h3 className="font-bold text-gray-900 mb-2">Instant Quote</h3>
            <p className="text-sm text-gray-600">
              Get a detailed quotation within 24 hours of site visit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
