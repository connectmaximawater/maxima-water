import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  Droplets,
  Lightbulb,
  Shield,
  Handshake
} from 'lucide-react';

const About = () => {

  const values = [
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: 'Innovation',
      description: 'Constantly evolving with cutting-edge technology to provide the best water solutions.',
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Quality',
      description: 'Uncompromising standards in every project we undertake.',
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: 'Sustainability',
      description: 'Committed to environmental preservation and sustainable practices.',
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: 'Integrity',
      description: 'Transparent, honest, and ethical in all our business dealings.',
    },
  ];

  const team = [
    {
      name: 'Professional Engineers',
      count: '25+',
      description: 'Certified water management experts',
    },
    {
      name: 'Support Staff',
      count: '50+',
      description: 'Dedicated customer service team',
    },
    {
      name: 'Service Areas',
      count: '100+',
      description: 'Cities and regions covered',
    },
  ];

  const milestones = [
    { year: '2008', event: 'Maxima Water founded with a vision for sustainable water management' },
    { year: '2012', event: 'Reached 100 successful installations across the region' },
    { year: '2016', event: 'Expanded services nationwide and won Best Innovation Award' },
    { year: '2020', event: 'Achieved 500+ projects milestone and ISO certification' },
    { year: '2024', event: 'Leading rainwater harvesting provider with 10M+ liters saved' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
        <div className="absolute inset-0 opacity-10">
          <Droplets className="absolute top-10 left-20 h-32 w-32 text-white animate-float" />
          <Droplets className="absolute bottom-20 right-20 h-24 w-24 text-white animate-float animation-delay-2000" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            About <span className="text-cyan-200">Maxima Water</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto px-4">
            Pioneering sustainable water solutions for over 15 years
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-water-dark">Story</span>
              </h2>
              <div className="space-y-4 text-sm md:text-lg text-gray-700">
                <p>
                  Founded in 2008, Maxima Water emerged from a simple yet powerful vision: to make water 
                  conservation accessible, affordable, and effective for everyone. What started as a small 
                  team of passionate environmentalists has grown into a leading provider of rainwater 
                  harvesting solutions.
                </p>
                <p>
                  Over the years, we've helped hundreds of homes, businesses, and communities reduce their 
                  water footprint while cutting costs. Our commitment to innovation and sustainability has 
                  made us the trusted choice for water conservation.
                </p>
                <p>
                  Today, we're proud to have saved over 10 million liters of water and continue to expand 
                  our impact, one raindrop at a time.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-water-light to-water-dark rounded-3xl p-12 shadow-2xl text-white">
                <div className="space-y-8">
                  {team.map((item, index) => (
                    <div key={index} className="border-b border-white/20 pb-6 last:border-0">
                      <div className="text-3xl md:text-5xl font-bold mb-2">{item.count}</div>
                      <div className="text-xl font-semibold mb-1">{item.name}</div>
                      <div className="text-gray-200">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-water-light/20 p-3 md:p-4 rounded-full mr-3 md:mr-4">
                    <Target className="h-8 w-8 md:h-12 md:w-12 text-water-dark" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                  To provide innovative, sustainable, and cost-effective rainwater harvesting solutions 
                  that empower individuals and communities to conserve water, reduce environmental impact, 
                  and build a more sustainable future for generations to come.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-water-light/20 p-3 md:p-4 rounded-full mr-3 md:mr-4">
                    <Eye className="h-8 w-8 md:h-12 md:w-12 text-water-dark" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                  To become the global leader in water conservation technology, creating a world where 
                  every drop of rainwater is valued and utilized efficiently. We envision a future where 
                  water scarcity is no longer a threat, and sustainable practices are the norm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-water-dark">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-water-light/20 hover:border-water-dark hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-water-dark mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-cyan-200">Journey</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Milestones that shaped our story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-2xl md:text-3xl font-bold text-water-dark mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-cyan-200"></div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <Award className="h-20 w-20 text-water-dark mx-auto mb-6" />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of the water conservation revolution. Let's build a sustainable future together.
            </p>
            <a
              to="/contact"
              className="inline-block bg-water-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-water-light transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
