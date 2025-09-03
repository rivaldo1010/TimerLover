import React, { Suspense, lazy, useState, useEffect } from 'react';
import StarField from './components/StarField';
import Photo from './components/Photo';
import NeonText from './components/NeonText';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SurpriseCard from './components/SurpriseCard'; // New import

// Lazy load components that are not immediately visible
const LanguageSpiral = lazy(() => import('./components/LanguageSpiral'));
const FloatingPhotos = lazy(() => import('./components/FloatingPhotos'));

function App() {
  const startDate = '2025-06-06T00:00:00'; // Define start date here
  const [timeDiff, setTimeDiff] = useState({ months: 0, days: 0, hours: 0, minutes: 0 });
  const [isAnniversaryDay, setIsAnniversaryDay] = useState(false); // New state for anniversary day
  const [isNearAnniversaryDay, setIsNearAnniversaryDay] = useState(false); // New state for near anniversary day

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate);
      const now = new Date();

      const diffMs = now.getTime() - start.getTime();

      let months = 0;
      let tempDate = new Date(start);

      while (tempDate.getTime() <= now.getTime()) {
          const nextMonth = new Date(tempDate.getFullYear(), tempDate.getMonth() + 1, tempDate.getDate());
          if (nextMonth.getTime() <= now.getTime()) {
              months++;
              tempDate = nextMonth;
          } else {
              break;
          }
      }

      const remainingDaysMs = now.getTime() - tempDate.getTime();
      const days = Math.floor(remainingDaysMs / (1000 * 60 * 60 * 24));

      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

      setTimeDiff({ months, days, hours, minutes });

      // Check if it's the 6th of the month (0 days remaining from the start date's day)
      setIsAnniversaryDay(days === 0); // Set anniversary day state
      // Check if it's near the 6th of the month (1 to 5 days remaining)
      setIsNearAnniversaryDay(days > 0 && days <= 5); // New state for near anniversary day
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <PerformanceOptimizer>
      <div className="min-h-screen overflow-hidden relative bg-black">
        <StarField />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
          <div className="relative mb-8">
            <Photo timeDiff={timeDiff} /> {/* Removed isAnniversaryDay from Photo */}
            <NeonText timeDiff={timeDiff} isNearAnniversaryDay={isNearAnniversaryDay} /> {/* Pass isNearAnniversaryDay */}
          </div>
        </div>
        
        {/* Conditionally render SurpriseCard directly in App.tsx */}
        {isAnniversaryDay && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <SurpriseCard />
          </div>
        )}

        {/* Lazy loaded components with loading fallback */}
        <Suspense fallback={null}>
          <LanguageSpiral />
        </Suspense>
        
        <Suspense fallback={null}>
          <FloatingPhotos />
        </Suspense>
      </div>
    </PerformanceOptimizer>
  );
}

export default React.memo(App);