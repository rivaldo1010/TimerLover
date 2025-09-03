import React, { useState } from 'react';
import userImage from '../assets/imagen.jpg';
import ChronogramDisplay from './ChronogramDisplay';
// Removed SurpriseCard import

interface PhotoProps {
  timeDiff: { months: number; days: number; hours: number; minutes: number; };
  // Removed isAnniversaryDay prop
}

const Photo: React.FC<PhotoProps> = ({ timeDiff }) => { // Removed isAnniversaryDay from props
  const [showChronogram, setShowChronogram] = useState(false);

  const toggleChronogram = () => {
    setShowChronogram(!showChronogram);
  };

  return (
    <div 
      className="relative flex flex-row items-center justify-center mb-12 cursor-pointer space-x-4"
      onClick={toggleChronogram}
    >
      <img 
        src={userImage} 
        alt="User provided" 
        className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full shadow-2xl"
      />
      {showChronogram && <ChronogramDisplay timeDiff={timeDiff} />} {/* Pass timeDiff */}
      {/* Removed conditional rendering of SurpriseCard */}
    </div>
  );
};

export default React.memo(Photo);
