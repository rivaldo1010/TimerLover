import React from 'react';

interface NeonTextProps {
  timeDiff: { months: number; days: number; hours: number; minutes: number; };
  isNearAnniversaryDay: boolean; // New prop
}

const NeonText: React.FC<NeonTextProps> = ({ timeDiff, isNearAnniversaryDay }) => { // Accept new prop
  const { months } = timeDiff; // Removed days

  const monthText = months === 1 ? 'mes' : 'meses';
  // Removed dayText

  const dynamicText = `Feliz ${months} ${monthText}, Mi Vida Romi❤️`;

  return (
    <div className="relative z-20 text-center">
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 animate-glow relative">
        <span className="relative inline-block">
          {dynamicText}
          <span className="absolute inset-0 text-pink-200 blur-sm animate-pulse opacity-95">
            {dynamicText}
          </span>
          <span className="absolute inset-0 text-pink-400 blur-md animate-pulse opacity-80">
            {dynamicText}
          </span>
          <span className="absolute inset-0 text-pink-600 blur-lg animate-pulse opacity-60">
            {dynamicText}
          </span>
          <span className="absolute inset-0 text-white blur-xl animate-pulse opacity-30">
            {dynamicText}
          </span>
        </span>
      </h1>
      
      {/* Additional neon glow effects */}
      <div className="absolute inset-0 text-5xl md:text-7xl lg:text-9xl font-bold text-pink-400 opacity-40 blur-2xl animate-pulse">
        {dynamicText}
      </div>
      <div className="absolute inset-0 text-5xl md:text-7xl lg:text-9xl font-bold text-pink-600 opacity-25 blur-3xl animate-pulse">
        {dynamicText}
      </div>

      {isNearAnniversaryDay && ( // Conditionally render near anniversary message
        <p className="text-white text-lg mt-4 animate-pulse">
          Ya casi es nuestro día especial, la espera casi termina mi amor. Pronto es 6, un día más cerca de ti.
        </p>
      )}
    </div>
  );
};

export default NeonText;