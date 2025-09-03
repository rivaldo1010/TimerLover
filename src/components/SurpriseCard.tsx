import React, { useState } from 'react';

const SurpriseCard: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div 
      className="relative bg-gradient-to-br from-purple-300 to-pink-400 rounded-lg shadow-xl cursor-pointer flex items-center justify-center text-center p-4 transition-all duration-500 transform hover:scale-105 z-50"
      onClick={toggleMessage}
    >
      {!showMessage ? (
        <div className="text-white text-4xl font-bold animate-pulse">
          💌
        </div>
      ) : (
        <p className="text-white text-sm font-medium leading-relaxed">
        El tiempo vuela, pero cada segundo a tu lado es un tesoro. Gracias por este viaje, por cada risa, cada recuerdo y por el amor que hemos construido. Eres mi lugar favorito el tiempo contigo no se cuenta, se vive. Gracias por cada momento, por cada risa, por el mejor tiempo juntos.
        </p>
      )}
    </div>
  );
};

export default SurpriseCard;
