export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Optimizaciones adicionales para mejor rendimiento
    cssnano: process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
        colormin: true,
        minifyFontValues: true,
        minifySelectors: true,
      }]
    } : false,
  },
}
