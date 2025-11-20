import { 
  Cloud,
  Filter,
  Database,
  Zap,
  Droplets,
  CheckCircle2,
  AlertCircle,
  Settings,
  Wrench,
  Shield
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Collection',
      icon: <Cloud className="h-12 w-12" />,
      description: 'Rainwater is collected from rooftops through gutters and downpipes',
      details: [
        'Gutter system installed along roof edges',
        'Downpipes direct water flow',
        'Collection area = Roof area × Rainfall',
        'Typical rooftop yields 80-90% efficiency'
      ],
    },
    {
      number: 2,
      title: 'First Flush',
      icon: <AlertCircle className="h-12 w-12" />,
      description: 'Initial dirty rainwater (first 2-3mm) is automatically diverted and discarded',
      details: [
        'Removes dust, bird droppings, debris',
        'Auto-resets after rainfall stops',
        'Typically diverts first 20-30 liters',
        'Critical for water quality'
      ],
    },
    {
      number: 3,
      title: 'Filtration',
      icon: <Filter className="h-12 w-12" />,
      description: 'Multi-stage filtration ensures clean, usable water',
      details: [
        'Stage 1: Mesh filter (removes leaves, insects)',
        'Stage 2: Sand filter (removes fine particles)',
        'Stage 3: Carbon filter (removes odor, color)',
        'Optional: UV sterilization for drinking water'
      ],
    },
    {
      number: 4,
      title: 'Storage',
      icon: <Database className="h-12 w-12" />,
      description: 'Clean water is stored in underground or overhead tanks',
      details: [
        'Underground tanks: Cooler, space-saving',
        'Overhead tanks: Better pressure',
        'Tank capacity: 3-6 months usage',
        'Food-grade materials used'
      ],
    },
    {
      number: 5,
      title: 'Auto Switching',
      icon: <Zap className="h-12 w-12" />,
      description: 'Smart system automatically switches between rainwater and municipal supply',
      details: [
        'Float sensors monitor tank levels',
        'Solenoid valves control water source',
        'When rainwater low: Auto switch to municipal',
        'When rainwater available: Auto revert',
        'Zero manual intervention needed'
      ],
      highlight: true,
    },
    {
      number: 6,
      title: 'Usage',
      icon: <Droplets className="h-12 w-12" />,
      description: 'Clean rainwater supplied for all household needs',
      details: [
        'Toilets & bathrooms',
        'Kitchen & washing',
        'Garden & car wash',
        'Saves 30-60% on water bills'
      ],
    },
  ];

  const components = [
    {
      name: 'Gutters & Downpipes',
      specs: 'PVC/GI, 4-6 inch diameter',
      function: 'Channel rainwater from roof to collection point',
    },
    {
      name: 'First Flush Diverter',
      specs: '20-50L capacity, auto-reset',
      function: 'Remove initial dirty water',
    },
    {
      name: 'Mesh Filter',
      specs: '1-5mm mesh size',
      function: 'Remove leaves, debris, insects',
    },
    {
      name: 'Sand Filter',
      specs: 'Multi-layer gravel & sand',
      function: 'Remove fine particles, turbidity',
    },
    {
      name: 'Carbon Filter',
      specs: 'Activated charcoal',
      function: 'Remove odor, color, chemicals',
    },
    {
      name: 'Storage Tank',
      specs: '5,000L - 50,000L capacity',
      function: 'Store filtered rainwater',
    },
    {
      name: 'Float Sensors',
      specs: 'Automatic level detection',
      function: 'Monitor water levels',
    },
    {
      name: 'Solenoid Valves',
      specs: 'Electric actuated',
      function: 'Control water source switching',
    },
    {
      name: 'Pump System',
      specs: '0.5-2 HP, pressure booster',
      function: 'Maintain water pressure',
    },
    {
      name: 'Controller Unit',
      specs: 'PLC/microcontroller based',
      function: 'Automated system control',
    },
  ];

  const maintenanceSteps = [
    {
      frequency: 'Monthly',
      tasks: ['Check gutters & remove debris', 'Inspect first flush chamber', 'Clean mesh filters'],
    },
    {
      frequency: 'Quarterly',
      tasks: ['Backwash sand filter', 'Check pump operation', 'Inspect tank for algae'],
    },
    {
      frequency: 'Annually',
      tasks: ['Replace carbon filter', 'Deep clean storage tank', 'Service pumps & valves', 'Test water quality'],
    },
  ];

  const safetyFeatures = [
    'Overflow protection prevents tank damage',
    'Dry-run protection for pumps',
    'Automatic disinfection with chlorination',
    'Tank ventilation prevents anaerobic conditions',
    'Sealed tanks prevent mosquito breeding',
    'Emergency manual override available',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-6">
            How It <span className="text-cyan-200">Works</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-100 max-w-3xl mx-auto">
            Understanding the complete rainwater harvesting process - from rooftop to your tap
          </p>
        </div>
      </section>

      {/* Step-by-Step Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-semibold text-gray-900 mb-4">
              The <span className="text-water-dark">Process</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600">6 steps to water independence</p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  step.highlight ? 'bg-gradient-to-r from-water-light to-blue-50 p-8 rounded-2xl border-4 border-water-dark' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold ${
                    step.highlight 
                      ? 'bg-water-dark text-white' 
                      : 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white'
                  }`}>
                    {step.number}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={step.highlight ? 'text-water-dark' : 'text-blue-600'}>
                      {step.icon}
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">{step.title}</h3>
                    {step.highlight && (
                      <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                        ⭐ SIGNATURE FEATURE
                      </span>
                    )}
                  </div>
                  <p className="text-sm md:text-lg text-gray-700 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 ${step.highlight ? 'text-water-dark' : 'text-blue-600'}`} />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {index < steps.length - 1 && !step.highlight && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              System <span className="text-water-dark">Components</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600">Technical specifications of each component</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-3 mb-3">
                  <Settings className="h-6 w-6 text-water-dark flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1">{component.name}</h3>
                    <p className="text-xs md:text-sm text-water-dark font-semibold">{component.specs}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">{component.function}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety & <span className="text-water-dark">Quality</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600">Built-in safety mechanisms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-50 p-6 rounded-xl">
                <Shield className="h-6 w-6 text-water-dark flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Maintenance <span className="text-cyan-200">Schedule</span>
            </h2>
            <p className="text-xl text-gray-200">Simple upkeep for optimal performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenanceSteps.map((schedule, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="h-8 w-8 text-cyan-200" />
                  <h3 className="text-lg md:text-2xl font-bold">{schedule.frequency}</h3>
                </div>
                <ul className="space-y-3">
                  {schedule.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-cyan-200 flex-shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-200 text-sm md:text-lg mb-6">
              💡 We provide Annual Maintenance Contracts (AMC) for hassle-free operation
            </p>
            <button className="bg-cyan-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition-colors">
              Learn About AMC Plans
            </button>
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Watch How It <span className="text-water-dark">Works</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600">Video demonstration of our complete system</p>
          </div>

          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-water-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-sm md:text-lg">System Installation & Operation Video</p>
              <p className="text-xs md:text-sm text-gray-400 mt-2">(Video coming soon)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
