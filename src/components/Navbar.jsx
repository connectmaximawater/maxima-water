import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'How It Works', path: '/how-it-works' },
    // { name: 'Calculator', path: '/calculator' },
    // { name: 'FAQ', path: '/faq' },
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
