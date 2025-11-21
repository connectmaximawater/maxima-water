import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Droplet, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8 relative">
          <div className="text-[180px] md:text-[250px] font-bold text-blue-100 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Droplet className="h-24 w-24 md:h-32 md:w-32 text-blue-600 animate-bounce" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-base md:text-xl text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
          The page you're looking for seems to have dried up. Let's get you back to flowing waters!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Home className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-50 transition-all shadow-lg border-2 border-blue-600"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-center mb-4">
            <Search className="h-5 w-5 text-blue-600 mr-2" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              Looking for something specific?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <Link
              to="/services/rainwater-harvesting"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Rainwater Harvesting
            </Link>
            <Link
              to="/services/graywater-reuse"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Graywater Reuse
            </Link>
            <Link
              to="/services/irrigation-systems"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Irrigation Systems
            </Link>
            <Link
              to="/services/landscape-installation"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Landscape Installation
            </Link>
            <Link
              to="/services/gutter-installation"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Gutter Installation
            </Link>
            <Link
              to="/services/service-maintain-inspect"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Service & Maintenance
            </Link>
            <Link
              to="/about"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/gallery"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Gallery
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-sm text-gray-500 mt-8">
          If you believe this is an error, please{' '}
          <Link to="/contact" className="text-blue-600 hover:text-blue-700 underline font-medium">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
