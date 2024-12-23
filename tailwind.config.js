const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: '#FF9900', // Bright orange for highlights and buttons
        secondary: '#0056B3', // Deep blue for headers and important links
        accent: '#FFD700', // Golden yellow for accents and call-to-actions
        background: '#F8F8F8', // Light gray for the overall background
        surface: '#FFFFFF', // White for cards and clean areas
        error: '#FF4C4C', // Bright red for errors or warnings
        success: '#28A745', // Green for success messages or actions

        // Text Colors
        textPrimary: '#333333', // Dark gray for main text
        textSecondary: '#555555', // Medium gray for secondary text
        textMuted: '#888888', // Light gray for muted text

        // Other Utility Colors
        border: '#E2E8F0', // Light blue-gray for borders
        hover: '#FFE4B2', // Soft yellow for hover effects
      },

      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
      },

      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for cards
        hover: '0 6px 16px rgba(0, 0, 0, 0.15)', // Slightly stronger for hover effects
      },

      spacing: {
        18: '4.5rem', // Custom spacing for better layouts
      },

      borderRadius: {
        lg: '12px', // Larger rounded corners
        xl: '24px', // Extra rounded corners for modals or key elements
      },
    },
  },
  plugins: [],
};
