export default {
    theme: {
      extend: {
        animation: {
          "fade-in-up": "fadeInUp 0.6s ease-out",
          "progress-ring": "progressRing 5s linear",
        },
        keyframes: {
          fadeInUp: {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          progressRing: {
            "0%": { width: "0%", height: "0%" },
            "100%": { width: "100%", height: "100%" },
          },
        },
      },
    },
    plugins: [],
  };
  