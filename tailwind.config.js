/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },

    extend: {
      colors: {
        white_text: "#FFFFFF",
        blue_dark: "#003957",
        blue_base: "#0284c7",
        color_text_form: "#5A5A5A",
        bg_form1: "rgba(242, 242, 242, 0.2",
        bg_form2: "rgba(255, 255, 255, 0.95)",
        text_form: "rgba(112, 112, 112, 1)",
        blue_light: "#d5f0ff",
        red_base: "#FF3D60",
        red_fog: "rgba(255, 61, 96, 0.15)",
        green_base: "#40C79A",
        green_fog: "rgba(64, 199, 154, 0.15)",
        green_state_background: "#E3F7F0",
        yellow_base: "#FBBF24",
        yellow_fog: "rgba(251, 191, 36, 0.15)",
        yellow_state_background: "#FFF6DE",
        color_hr: "rgba(0, 57, 87, 1)",
        green_state: "#00C886",
        green_accept_background: "#E3F7F0",
        red_state: "#FF3D60",
        red_reject_background: "#FFE2E7",
        gray_background: "rgba(183, 183, 183, 0.2)",
        gray_background_05: "rgba(183, 183, 183, 0.5)",
        gray_word: "rgba(112, 112, 112, 1)",
        gray_report: "rgba(183, 183, 183, 1)",
        green_form_reason: "rgba(64, 199, 154, 0.5)",
      },
      fontFamily: {
        baloo2: ['"Baloo Bhai 2"'],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "bungee-inline": ["Bungee inline", "sans-serif"],
      },
      boxShadow: {
        "3xl": "35px 35px 35px rgba(112, 112, 112, 1)",
        "5xl": "1px 3px 5px 1px rgba(64, 199, 154, 1)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
};
