module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
      },

      colors: {
        primary: "hsl(220, 98%, 61%)",
        "grad-start": "hsl(192, 100%, 67%)",
        "grad-stop": " hsl(280, 87%, 65%)",
        "lm-bg": "hsl(0, 0%, 98%)",
        "dm-bg": "hsl(235, 21%, 11%)",
        "lm-secondry": "#fff",
        "dm-secondary": "hsl(235, 24%, 19%)",
        "lm-line": "hsl(236, 33%, 92%)",
        "dm-line": "hsl(233, 14%, 35%)",
        "lm-text": "hsl(235, 19%, 35%)",
        "lm-text-fade": "hsl(236, 9%, 61%)",
        "lm-text-hover": "hsl(236, 9%, 61%)",
        "dm-text": "hsl(234, 39%, 85%)",
        "dm-text-hover": "hsl(236, 33%, 92%)",
        "dm-text-fade": "hsl(234, 11%, 52%)",
      },

      backgroundImage: {
        "lm-mobile": "url('../images/bg-mobile-light.jpg')",
        "dm-mobile": "url('../images/bg-mobile-dark.jpg')",
        "lm-desktop": "url('../images/bg-desktop-light.jpg')",
        "dm-desktop": "url('../images/bg-desktop-dark.jpg')",
      },

      fontSize: {
        tiny: "9px",
      },
    },
  },

  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },

  plugins: [],
};
