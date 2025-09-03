import React, { useMemo, useEffect, useState } from 'react';

const Heart: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoizar las partículas para evitar recrearlas en cada render
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${3 + Math.random() * 3}s`,
      size: Math.random() * 2 + 1,
    }));
  }, []);

  // Optimizar el renderizado con useCallback
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className="relative flex items-center justify-center mb-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Heart Container */}
      <div className="relative perspective-1000">
        {/* Main 3D Heart */}
        <div className={`relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 transform-gpu transition-all duration-500 ${
          isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
        }`}>
          {/* Heart base with enhanced 3D effect */}
          <div className="absolute inset-0 transform rotate-45">
            {/* Left lobe with enhanced 3D gradient */}
            <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-br from-pink-300 via-pink-500 to-pink-700 rounded-full transform -translate-x-1/2 shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-br from-pink-200 to-pink-400 rounded-full opacity-60" />
              <div className="absolute top-1 left-1 w-4 h-4 bg-pink-100 rounded-full opacity-80 blur-sm" />
              {/* Inner highlight */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full opacity-90 blur-sm" />
            </div>
            
            {/* Right lobe with enhanced 3D gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink-300 via-pink-500 to-pink-700 rounded-full shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-bl from-pink-200 to-pink-400 rounded-full opacity-60" />
              <div className="absolute top-1 right-1 w-4 h-4 bg-pink-100 rounded-full opacity-80 blur-sm" />
              {/* Inner highlight */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-90 blur-sm" />
            </div>
            
            {/* Bottom point with enhanced 3D effect */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-700 via-pink-500 to-pink-300 transform origin-top rotate-45 shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-t from-pink-600 to-pink-300 opacity-60" />
              {/* Bottom highlight */}
              <div className="absolute bottom-2 left-1/2 w-3 h-3 bg-pink-200 rounded-full opacity-70 blur-sm transform -translate-x-1/2" />
            </div>
          </div>

          {/* Enhanced 3D depth layers */}
          <div className="absolute inset-0 transform rotate-45 translate-x-1 translate-y-1 opacity-40">
            <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-pink-800 rounded-full transform -translate-x-1/2" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-800 rounded-full" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-pink-800 transform origin-top rotate-45" />
          </div>

          {/* Enhanced inner glow */}
          <div className="absolute inset-4 transform rotate-45">
            <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-pink-200 rounded-full transform -translate-x-1/2 opacity-50 blur-md" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-200 rounded-full opacity-50 blur-md" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-pink-200 transform origin-top rotate-45 opacity-50 blur-md" />
          </div>

          {/* Pulsing core glow */}
          <div className={`absolute inset-8 transform rotate-45 bg-pink-300 rounded-full opacity-30 blur-lg transition-all duration-500 ${
            isHovered ? 'scale-125 opacity-50' : 'scale-100 opacity-30'
          }`} />
        </div>

        {/* Optimized floating particles around heart */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-pink-300 rounded-full animate-float opacity-70"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}

        {/* Enhanced outer glow effects */}
        <div className={`absolute inset-0 bg-pink-500 rounded-full blur-3xl opacity-25 transition-all duration-500 ${
          isHovered ? 'scale-175 opacity-40' : 'scale-150 opacity-25'
        }`} />
        <div className={`absolute inset-0 bg-pink-400 rounded-full blur-2xl opacity-20 transition-all duration-500 ${
          isHovered ? 'scale-150 opacity-30' : 'scale-125 opacity-20'
        }`} />
        
        {/* Hover effect glow */}
        {isHovered && (
          <div className="absolute inset-0 bg-pink-300 rounded-full blur-xl opacity-15 scale-200 animate-pulse" />
        )}
      </div>

      {/* Interactive feedback text */}
      {isHovered && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-pink-300 text-sm font-medium opacity-80 animate-pulse">
          ♥ Te amo ♥
        </div>
      )}
    </div>
  );
};

export default React.memo(Heart);