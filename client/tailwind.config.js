import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans],
      },
      width: {
        product: "calc((var(--app-width) - 100px) * 0.606)",
        cart: "calc((1280px - 100px) * (1 - 0.606))",
      },
    },
  },
  plugins: [],
};
