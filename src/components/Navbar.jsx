import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets, ChevronDown, Recycle, Grid3x3, ArrowDown, Wrench, Droplet, Leaf, Database, Flame } from 'lucide-react';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const servicesList = [
    { name: 'Rainwater Harvesting Systems', path: '/services/rainwater-harvesting', icon: <Droplets className="h-4 w-4" /> },
    { name: 'Graywater Reuse Systems', path: '/services/graywater-reuse', icon: <Recycle className="h-4 w-4" /> },
    // { name: 'Drainage Solutions', path: '/services/drainage-solutions', icon: <Grid3x3 className="h-4 w-4" /> },
    { name: 'Gutter Installation', path: '/services/gutter-installation', icon: <ArrowDown className="h-4 w-4" /> },
    { name: 'Service, Maintain, Inspect', path: '/services/service-maintain-inspect', icon: <Wrench className="h-4 w-4" /> },
    { name: 'Irrigation Systems', path: '/services/irrigation-systems', icon: <Droplet className="h-4 w-4" /> },
    { name: 'Landscape Installation', path: '/services/landscape-installation', icon: <Leaf className="h-4 w-4" /> },
    // { name: 'Well Tank & Pump Systems', path: '/services/well-tank-pump-systems', icon: <Database className="h-4 w-4" /> },
    // { name: 'Fire Protection Water Storage', path: '/services/fire-protection-water-storage', icon: <Flame className="h-4 w-4" /> },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    // { name: 'Solutions', path: '/solutions' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={Logo} alt="Maxima Water Logo" className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`relative text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                      location.pathname.startsWith('/services/')
                        ? 'text-water-dark font-semibold'
                        : 'text-gray-700 hover:text-water-dark'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-water-dark transform origin-left transition-transform duration-300 ${
                        location.pathname.startsWith('/services/')
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    ></span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                    servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    <div className="p-2">
                      {servicesList.map((service, index) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-water-dark transition-all duration-200 group/item"
                        >
                          <div className="text-water-dark group-hover/item:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <span className="font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white">
                      <p className="text-xs font-semibold mb-1">Need Help Choosing?</p>
                      <Link to="/contact" className="text-xs hover:underline">Contact our experts →</Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-xs md:text-sm font-medium transition-all duration-300 group ${
                    location.pathname === link.path
                      ? 'text-water-dark font-semibold'
                      : 'text-gray-700 hover:text-water-dark'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-water-dark transform origin-left transition-transform duration-300 ${
                      location.pathname === link.path
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="bg-water-dark text-white px-4 lg:px-6 py-2 rounded-full hover:bg-water-light transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs md:text-sm"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 md:hidden z-40 animate-fadeIn"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Mobile Menu Modal */}
          <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl md:hidden z-50 animate-slideInRight">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <img src={Logo} alt="Maxima Water Logo" className="h-10 w-[85%]" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 md:h-7 md:w-7 text-gray-900 font-bold" />
                </button>
              </div>
              
              {/* Mobile Menu Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    link.hasDropdown ? (
                      <div key={link.path}>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm md:text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-water-dark transition-all duration-300"
                        >
                          {link.name}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {servicesOpen && (
                          <div className="ml-4 mt-1 space-y-1">
                            {servicesList.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm text-gray-600 hover:bg-blue-50 hover:text-water-dark transition-all duration-200"
                              >
                                {service.icon}
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                          location.pathname === link.path
                            ? 'bg-water-dark text-white'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-water-dark'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </div>
                
                {/* Mobile CTA Button */}
                <div className="mt-8">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-water-dark text-white px-6 py-2 rounded-full hover:bg-water-light transition-all duration-300 text-center font-semibold"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
              
              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="text-xs md:text-sm text-gray-700 space-y-2">
                  <p className="font-bold text-gray-900 mb-3">Contact Us</p>
                  <p className="flex items-center gap-2">
                    <span className="text-base">📞</span>
                    <span className="font-medium">+91 6300 225 335</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-base">📧</span>
                    <span className="font-medium text-xs break-all">connect.maximawater@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
