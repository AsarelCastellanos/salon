module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // Adding DaisyUI Plugin
  plugins: [require("daisyui")],
  // Adding Custom DaisyUI Configurations
  daisyui: {
    styled: true,
    themes: [
      {
        salon: {
          primary: "#31583B",

          secondary: "#6C8D5E",

          accent: "#687B71",

          neutral: "#193226",

          "base-100": "#9BB0A5",

          info: "#8DCEF8",

          success: "#CEFBE3",

          warning: "#F9F871",

          error: "#F87272",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "salon",
  },
};
