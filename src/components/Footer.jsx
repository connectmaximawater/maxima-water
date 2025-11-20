import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../assets/Logo-w.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="Maxima Water Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
            <p className="text-gray-300 text-xs md:text-sm">
              Leading the way in sustainable rainwater harvesting solutions. Conserving water for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-water-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-water-light transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-water-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-water-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-water-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-water-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-water-light transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-water-light transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-water-light transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-water-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-xs md:text-sm">
              <li>Rainwater Harvesting Systems</li>
              <li>System Design & Installation</li>
              <li>Maintenance & Support</li>
              <li>Water Quality Testing</li>
              <li>Consultation Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-water-light mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-xs md:text-sm">
                  Janasakthi Nagar, Vedayapalem, Nellore
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-water-light flex-shrink-0" />
                <span className="text-gray-300 text-xs md:text-sm">+91 6300 225 335 (24/7)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-water-light flex-shrink-0" />
                <span className="text-gray-300 text-xs md:text-sm">connect.maximawater@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Maxima Water. All rights reserved. | Saving Water, Securing Future</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
