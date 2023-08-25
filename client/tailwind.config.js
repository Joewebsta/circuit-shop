import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
