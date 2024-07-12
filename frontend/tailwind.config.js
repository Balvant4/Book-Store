/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Include Flowbite content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    flowbite, // Add Flowbite plugin
  ],
  daisyui: {
    themes: ["teal"], // Add the themes you want to use
  },
};
