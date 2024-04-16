const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
        varela: ["Varela", ...defaultTheme.fontFamily.sans],
        khand: ["Khand", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        // #F3C969] via-[#EDFF86] to-[#FFF5B2
        primary: "#EDFF86",
        secondary: "#06A77D",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "#124",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      backgroundPosition: {
        '50-50': '50% 50%',
        '100-100': '100% 100%',
        'inherit': 'inherit',
      }
    }
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
