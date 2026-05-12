tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#fd6e0a",
        orangeBg: "#fff8f3",
        textGray: "#757575",
        textDark: "#474747",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeIn: {
          to: { opacity: "1" },
        },
      },
    },
  },
};
