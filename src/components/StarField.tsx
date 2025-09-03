import React, { useMemo, useCallback } from 'react';

const StarField: React.FC = () => {
  // Memoizar las estrellas para evitar recrearlas en cada render
  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 3}s`,
      opacity: 0.3 + Math.random() * 0.7,
    }));
  }, []);

  const largeStars = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
  }, []);

  const renderStar = useCallback((star: any) => (
    <div
      key={star.id}
      className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
      style={{
        left: star.left,
        top: star.top,
        animationDelay: star.delay,
        animationDuration: star.duration,
        opacity: star.opacity,
      }}
    />
  ), []);

  const renderLargeStar = useCallback((star: any) => (
    <div
      key={`large-${star.id}`}
      className="absolute w-2 h-2 bg-pink-200 rounded-full animate-ping"
      style={{
        left: star.left,
        top: star.top,
        animationDelay: star.delay,
        animationDuration: star.duration,
      }}
    />
  ), []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Animated stars */}
      {stars.map(renderStar)}
      
      {/* Larger twinkling stars */}
      {largeStars.map(renderLargeStar)}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/10 to-black/30" />
    </div>
  );
};

export default React.memo(StarField);