/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'noir': ['"acier-bat-noir"'],
        'acier': ['"Author"']
      }
    },
  },

  daisyui: {
    themes: [
      {
        mainTheme: {
          "primary": "#ffffff",
                    
          "secondary": "#4b5563",
                    
          "accent": "#1acb49",
                    
          "neutral": "#1c1917",
                    
          "base-100": "#181818",
                    
          "info": "#00b6ff",
                    
          "success": "#00a96e",
                    
          "warning": "#ffbe00",
                    
          "error": "#ff5861",
          },
        },
      ],
    },

  plugins: [require('daisyui')],
}

