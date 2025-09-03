/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-spiral': 'float-spiral 12s linear infinite',
        'float-up': 'float-up 10s linear infinite',
        'spin-slow': 'spin-slow 25s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'glow-delayed': 'glow-delayed 3.5s ease-in-out infinite',
      },
      fontFamily: {
        'romantic': ['Georgia', 'serif'],
      },
      // Optimizaciones de escala para el corazón 3D
      scale: {
        '175': '1.75',
        '200': '2.00',
      },
      // Optimizaciones de perspectiva para efectos 3D
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
  // Optimizaciones de rendimiento
  corePlugins: {
    // Deshabilitar plugins que no usamos para reducir el CSS
    container: false,
    accessibility: false,
  },
  // Reducir el tamaño del CSS final
  future: {
    hoverOnlyWhenSupported: true,
  },
}