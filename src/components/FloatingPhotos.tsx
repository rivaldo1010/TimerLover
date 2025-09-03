import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

const FloatingPhotos: React.FC = () => {
  // Memoizar los elementos flotantes para evitar recrearlos en cada render
  const floatingElements = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      top: `${60 + Math.random() * 30}%`,
      delay: `${i * 0.8}s`,
      duration: `${8 + Math.random() * 4}s`,
    }));
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${80 + Math.random() * 20}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 4}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating elements - reduced count for better performance */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-lg animate-float-spiral flex items-center justify-center"
          style={{
            left: element.left,
            top: element.top,
            animationDelay: element.delay,
            animationDuration: element.duration,
          }}
        >
          {/* Placeholder for partner photos - using heart icons for demo */}
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-pink-300 rounded-lg blur-sm opacity-30 animate-pulse" />
        </div>
      ))}

      {/* Additional floating particles - reduced count */}
      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute w-2 h-2 bg-pink-400 rounded-full animate-float-up"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(FloatingPhotos);