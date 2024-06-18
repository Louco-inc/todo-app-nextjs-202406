import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black": "#1D2543",
        "gray": "#ACB4BE",
        "lightgray": "#F7F8FA",
        "white": "#FFFFFF",
        "blue": "#282F72",
        "status_red": "#FF7E7E",
        "status_green": "#29CC7E",
        "red": "#FF4D4D",
        "background": "#F5F5F5",

      }
    },
  },
  plugins: [],
};
export default config;
