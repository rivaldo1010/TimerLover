import React from 'react';

const LanguageSpiral: React.FC = () => {
  const languages = [
    { text: 'Te amo', lang: 'Español' },
    { text: 'I love you', lang: 'English' },
    { text: 'Je t\'aime', lang: 'Français' },
    { text: 'Ti amo', lang: 'Italiano' },
    { text: 'Ich liebe dich', lang: 'Deutsch' },
    { text: 'Eu te amo', lang: 'Português' },
    { text: '愛してる', lang: '日本語' },
    { text: '사랑해', lang: '한국어' },
    { text: 'Σ\'αγαπώ', lang: 'Ελληνικά' },
    { text: 'Я тебя люблю', lang: 'Русский' },
    { text: 'أحبك', lang: 'العربية' },
    { text: 'मैं तुमसे प्यार करता हूँ', lang: 'हिन्दी' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Multiple spirals at different positions and sizes */}
      {[...Array(4)].map((_, spiralIndex) => (
        <div
          key={spiralIndex}
          className="absolute"
          style={{
            left: `${20 + spiralIndex * 20}%`,
            top: `${10 + spiralIndex * 20}%`,
            width: `${300 + spiralIndex * 100}px`,
            height: `${300 + spiralIndex * 100}px`,
          }}
        >
          {languages.map((item, index) => {
            const angle = (index * 360) / languages.length + spiralIndex * 45;
            const radius = 120 + spiralIndex * 40;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={`${spiralIndex}-${index}`}
                className="absolute text-pink-200 text-lg md:text-xl lg:text-2xl font-medium animate-spin-slow transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  animationDelay: `${(index + spiralIndex * 2) * 0.3}s`,
                  animationDuration: `${20 + spiralIndex * 5}s`,
                  textShadow: '0 0 8px rgba(255, 20, 147, 0.4), 0 0 16px rgba(255, 105, 180, 0.3), 0 0 24px rgba(255, 182, 193, 0.2)',
                  opacity: 0.4 + spiralIndex * 0.05,
                }}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      ))}
      
      {/* Floating individual words throughout the screen */}
      {languages.map((item, index) => (
        <div
          key={`floating-${index}`}
          className="absolute text-pink-300 text-base md:text-lg font-normal animate-float-up opacity-30"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
            textShadow: '0 0 6px rgba(255, 20, 147, 0.3), 0 0 12px rgba(255, 105, 180, 0.2)',
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default LanguageSpiral;