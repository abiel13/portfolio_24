import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-10%)" },
        },
        movedown: {
          "0%": { transform: "translateY(13%)" },
          "100%": { transform: "translateY(15px)" },
        },
        moveleft: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(30px)" },
        },
      },
      animation: {
        move: "move 1s linear alternate infinite",
        movedown: "movedown 1s linear alternate infinite",
        moveleft: "moveleft 1s linear alternate infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // ...
  ],
};
export default config;
