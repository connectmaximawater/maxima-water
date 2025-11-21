import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import HowItWorks from './pages/HowItWorks';
import Calculator from './pages/Calculator';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Services from './pages/Services';
import RainwaterHarvesting from './pages/services/RainwaterHarvesting';
import GraywaterReuse from './pages/services/GraywaterReuse';
import DrainageSolutions from './pages/services/DrainageSolutions';
import GutterInstallation from './pages/services/GutterInstallation';
import ServiceMaintainInspect from './pages/services/ServiceMaintainInspect';
import IrrigationSystems from './pages/services/IrrigationSystems';
import LandscapeInstallation from './pages/services/LandscapeInstallation';
import WellTankPumpSystems from './pages/services/WellTankPumpSystems';
import FireProtectionWaterStorage from './pages/services/FireProtectionWaterStorage';
import NotFound from './pages/NotFound';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <div className="pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/rainwater-harvesting" element={<RainwaterHarvesting />} />
            <Route path="/services/graywater-reuse" element={<GraywaterReuse />} />
            <Route path="/services/drainage-solutions" element={<DrainageSolutions />} />
            <Route path="/services/gutter-installation" element={<GutterInstallation />} />
            <Route path="/services/service-maintain-inspect" element={<ServiceMaintainInspect />} />
            <Route path="/services/irrigation-systems" element={<IrrigationSystems />} />
            <Route path="/services/landscape-installation" element={<LandscapeInstallation />} />
            <Route path="/services/well-tank-pump-systems" element={<WellTankPumpSystems />} />
            <Route path="/services/fire-protection-water-storage" element={<FireProtectionWaterStorage />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;