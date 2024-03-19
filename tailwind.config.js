/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "*.{html, js}"],
  theme: {
    extend: {
      colors: {
        btnColor: '#6082B6',
        midnightBlue: '#4e4ea5',
        skyBlue: '#87CEEB',
        iconColor: '#6b98ec',
        btnColor: '#000435'
      },
      container: {
        padding: {
          DEFAULT: '2.5rem', // Default padding for all screen sizes
          // sm: '1.5rem',    // Small screen padding
          // md: '2rem',      // Medium screen padding
          // lg: '2rem',    // Large screen padding
          // xl: '2rem',      // Extra large screen padding
          // '2xl': '4rem', 
        },
      },
    }, 
  },
  plugins: [],
}

