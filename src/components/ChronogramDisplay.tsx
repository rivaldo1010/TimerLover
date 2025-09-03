import React from 'react';

interface ChronogramDisplayProps {
  timeDiff: { months: number; days: number; hours: number; minutes: number; };
}

const ChronogramDisplay: React.FC<ChronogramDisplayProps> = ({ timeDiff }) => {

  return (
    <div className="bg-gradient-to-br from-rose-300 to-pink-500 bg-opacity-80
                    text-white p-4 rounded-lg shadow-xl text-center z-30
                    relative overflow-hidden"
    >
      {/* Subtle sparkle elements */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" />
      <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-100" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-200" />


      <p className="text-lg font-semibold tracking-wide mb-1">Tiempo juntos:</p>
      <p className="text-2xl font-light tracking-wider">{timeDiff.months} meses</p>
      <p className="text-2xl font-light tracking-wider">{timeDiff.days} días</p>
      <p className="text-2xl font-light tracking-wider">{timeDiff.hours} horas</p>
      <p className="text-2xl font-light tracking-wider">{timeDiff.minutes} minutos</p>
    </div>
  );
};

export default ChronogramDisplay;
