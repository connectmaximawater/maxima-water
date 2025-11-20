const WaterFlowAnimation = ({ color = "rgba(147, 197, 253, 0.5)" }) => {
  return (
    <>
      <style jsx>{`
        @keyframes waterFlow1 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25%) translateY(-5%); }
        }
        @keyframes waterFlow2 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-15%) translateY(5%); }
        }
        @keyframes waterFlow3 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-20%) translateY(-3%); }
        }
        @keyframes dropletFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.8; }
        }
      `}</style>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <svg
          className="absolute bottom-0 left-0 w-full h-48"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          
          {/* Wave 1 */}
          <path
            d="M0,60 C300,100 600,20 900,60 C1200,100 1200,120 0,120 Z"
            fill="url(#waterGradient)"
            style={{
              animation: 'waterFlow1 8s ease-in-out infinite'
            }}
          />
          
          {/* Wave 2 */}
          <path
            d="M0,80 C300,50 600,110 900,80 C1200,50 1200,120 0,120 Z"
            fill="url(#waterGradient)"
            opacity="0.5"
            style={{
              animation: 'waterFlow2 10s ease-in-out infinite'
            }}
          />
          
          {/* Wave 3 */}
          <path
            d="M0,95 C300,85 600,105 900,95 C1200,85 1200,120 0,120 Z"
            fill="url(#waterGradient)"
            opacity="0.3"
            style={{
              animation: 'waterFlow3 12s ease-in-out infinite'
            }}
          />
        </svg>
        
        {/* Floating Droplets */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              backgroundColor: color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80 + 10}%`,
              animation: `dropletFloat ${Math.random() * 2 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default WaterFlowAnimation;
