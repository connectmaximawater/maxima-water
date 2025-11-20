import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Safety & Quality',
      questions: [
        {
          q: 'Is rainwater safe for drinking?',
          a: 'With proper filtration (mesh, sand, carbon filters) and optional UV treatment, rainwater can be made safe for drinking. However, we typically recommend using it for non-potable purposes like toilets, washing, and gardening. For drinking water, additional treatment or boiling is recommended.',
        },
        {
          q: 'Will rainwater smell bad or have mosquitoes?',
          a: 'No. Our systems include: 1) First flush mechanism that removes dirty initial water, 2) Completely sealed tanks preventing mosquito breeding, 3) Proper ventilation to prevent anaerobic conditions, 4) Multi-stage filtration removing odor and impurities. When properly maintained, rainwater is clean and odor-free.',
        },
        {
          q: 'How do I know the water quality is good?',
          a: 'We provide initial water quality testing after installation. The multi-stage filtration (mesh, sand, carbon) ensures clean water. For ongoing monitoring, we offer annual water testing as part of maintenance packages. The water is typically cleaner than municipal supply as it\'s not contaminated during distribution.',
        },
      ],
    },
    {
      category: 'Cost & Installation',
      questions: [
        {
          q: 'How much does a rainwater harvesting system cost?',
          a: 'Costs vary based on property size and requirements: Individual Houses: ₹80,000 - ₹1,50,000 | Apartments (20-50 units): ₹2,50,000 - ₹5,00,000 | Large complexes: ₹8,00,000+. This includes complete installation, filtration, storage, and automatic switching system. Government subsidies of 30-50% are available in most states.',
        },
        {
          q: 'How long does installation take?',
          a: 'Installation timeline depends on property size: Individual houses: 5-7 days | Small apartments: 10-15 days | Large complexes: 3-4 weeks. This includes site assessment, material procurement, installation, testing, and commissioning. We work efficiently to minimize disruption.',
        },
        {
          q: 'Are there government subsidies available?',
          a: 'Yes! Most states offer 30-50% subsidy on installation costs. Residential properties typically get 50% subsidy, commercial properties get 30%. We help you with subsidy applications and documentation. Many cities also make RWH mandatory for buildings above certain sizes.',
        },
        {
          q: 'What is the payback period?',
          a: 'Most systems pay for themselves in 3-5 years through water bill savings. In areas with high water costs or frequent water scarcity, payback can be as quick as 2 years. Use our calculator to estimate your specific savings and ROI.',
        },
      ],
    },
    {
      category: 'Automatic Switching System',
      questions: [
        {
          q: 'How does the automatic switching work?',
          a: 'Our signature feature uses float sensors and solenoid valves: 1) Sensors continuously monitor rainwater tank levels, 2) When rainwater is available, the system uses it automatically, 3) When rainwater runs low (below 20%), system switches to municipal supply, 4) When it rains and tank refills, it switches back to rainwater. Completely automatic - zero manual intervention needed!',
        },
        {
          q: 'What if the automatic system fails?',
          a: 'Multiple safety measures: 1) Manual override valve included for emergency manual control, 2) System alerts via SMS/email when tank is low, 3) Redundant sensors for reliability, 4) Default mode switches to municipal supply in case of any malfunction. We also provide 24/7 technical support and same-day service for any issues.',
        },
        {
          q: 'Can I control which taps use rainwater vs municipal water?',
          a: 'Yes! We can configure the system to: 1) Use rainwater for specific purposes (toilets, washing machines, garden), 2) Keep kitchen tap on municipal water, 3) Mix both sources for certain applications. The automatic switching ensures continuous supply regardless of which source is being used.',
        },
      ],
    },
    {
      category: 'Seasonal & Performance',
      questions: [
        {
          q: 'What happens during summer when there\'s no rain?',
          a: 'The stored rainwater typically lasts 3-6 months depending on tank size and usage. When stored water depletes, the automatic switching system seamlessly switches to municipal supply. You won\'t experience any interruption. The larger your storage capacity, the longer you can use rainwater during dry months.',
        },
        {
          q: 'How much water can I actually harvest?',
          a: 'Formula: Collection (liters) = Roof Area (sq ft) × Annual Rainfall (mm) × 0.85 (efficiency) × 0.0283. Example: For a 2000 sq ft roof in Bangalore (970mm rain): 2000 × 970 × 0.85 × 0.0283 = ~46,000 liters/year. This can meet 30-60% of typical household water needs.',
        },
        {
          q: 'Does it work in low rainfall areas?',
          a: 'Yes, but with reduced collection. Even in low rainfall areas like Rajasthan (400mm/year), a 2000 sq ft roof can collect ~20,000 liters annually. While this may not meet all needs, it still provides significant savings and water security. Larger storage tanks help maximize utility.',
        },
      ],
    },
    {
      category: 'Maintenance & Support',
      questions: [
        {
          q: 'How much maintenance is required?',
          a: 'Very minimal: Monthly (10 mins): Clean roof gutters, check first flush chamber | Quarterly (1 hour): Backwash sand filter, inspect tank | Annually: Replace carbon filter, deep clean tank, test water quality. We offer Annual Maintenance Contracts (AMC) starting at ₹5,000/year to handle everything for you.',
        },
        {
          q: 'What is the warranty period?',
          a: 'Standard warranty: 2 years on equipment and installation | Premium packages: Up to 5 years comprehensive warranty | Pumps & motors: 2 years manufacturer warranty | Tanks: 10 years against leaks and cracks | We also offer extended warranty plans.',
        },
        {
          q: 'Do you provide emergency support?',
          a: 'Yes! 24/7 helpline available at +91 6300 225 335 | Same-day service for critical issues | Annual Maintenance Contract includes priority support | Remote troubleshooting available | Emergency support across Nellore and nearby areas.',
        },
      ],
    },
    {
      category: 'Regulations & Compliance',
      questions: [
        {
          q: 'Is rainwater harvesting mandatory?',
          a: 'In many cities, yes. RWH is mandatory for: Buildings with plot size > 100-200 sq meters (varies by city), All new constructions, Buildings seeking occupancy certificate. We provide all necessary documentation and certification for compliance.',
        },
        {
          q: 'Will I get a compliance certificate?',
          a: 'Yes! We provide: Installation completion certificate, Structural safety certificate (for tank installations), Water quality test report, Maintenance manual, Drawings and as-built plans. These are required for municipal approvals and occupancy certificates.',
        },
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-cyan-200">Questions</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-100 max-w-3xl mx-auto">
            Everything you need to know about rainwater harvesting
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-4 border-water-dark">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="font-semibold text-sm md:text-base text-gray-900 pr-4">
                          {faq.q}
                        </span>
                        <span className="flex-shrink-0 mt-1">
                          {isOpen ? (
                            <Minus className="h-6 w-6 text-water-dark" />
                          ) : (
                            <Plus className="h-6 w-6 text-water-dark" />
                          )}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Our experts are here to help! Get in touch with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-cyan-200 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+916300225335"
              className="inline-block bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              📞 Call: +91 6300 225 335 (24/7)
            </a>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-4xl font-bold text-water-dark mb-2">30-60%</div>
              <div className="text-gray-600">Water Bill Savings</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-water-dark mb-2">3-5 Years</div>
              <div className="text-gray-600">Payback Period</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-water-dark mb-2">50%</div>
              <div className="text-gray-600">Govt Subsidy</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-water-dark mb-2">24/7</div>
              <div className="text-gray-600">Technical Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
