import React, { useEffect, useState } from 'react';

interface DeviceCapabilities {
  isMobile: boolean;
  isLowEnd: boolean;
  supportsWebGL: boolean;
  reducedMotion: boolean;
}

const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [deviceCapabilities, setDeviceCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isLowEnd: false,
    supportsWebGL: false,
    reducedMotion: false,
  });

  useEffect(() => {
    // Detectar capacidades del dispositivo
    const detectCapabilities = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : true;
      const supportsWebGL = (() => {
        try {
          const canvas = document.createElement('canvas');
          return !!(window.WebGLRenderingContext && 
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
          return false;
        }
      })();
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setDeviceCapabilities({
        isMobile,
        isLowEnd,
        supportsWebGL,
        reducedMotion,
      });

      // Aplicar optimizaciones basadas en las capacidades
      if (isLowEnd || isMobile) {
        document.documentElement.classList.add('low-performance-mode');
      }
      
      if (reducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      }
    };

    detectCapabilities();

    // Escuchar cambios en las preferencias de movimiento
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Aplicar estilos CSS personalizados basados en las capacidades
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .low-performance-mode .animate-float {
        animation-duration: 6s !important;
      }
      
      .low-performance-mode .animate-float-spiral {
        animation-duration: 18s !important;
      }
      
      .low-performance-mode .animate-float-up {
        animation-duration: 15s !important;
      }
      
      .reduced-motion .animate-float,
      .reduced-motion .animate-float-spiral,
      .reduced-motion .animate-float-up,
      .reduced-motion .animate-spin-slow,
      .reduced-motion .animate-glow,
      .reduced-motion .animate-glow-delayed {
        animation: none !important;
      }
      
      .low-performance-mode .blur-3xl {
        filter: blur(20px) !important;
      }
      
      .low-performance-mode .blur-2xl {
        filter: blur(16px) !important;
      }
      
      .low-performance-mode .blur-xl {
        filter: blur(12px) !important;
      }
    `;
    
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;
