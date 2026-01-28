// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         gold: {
//           light: "hsl(var(--gold-light))",
//           DEFAULT: "hsl(var(--gold))",
//           dark: "hsl(var(--gold-dark))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       fontFamily: {
//          mona: [
//     '"Mona Sans"',
//     '"Helvetica Neue"',
//     'Helvetica',
//     'Arial',
//     'sans-serif',
//   ],
//         sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
//         serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
         
//   poppins: [
//     'Poppins',
//     'ui-sans-serif',
//     'system-ui',
//     'sans-serif',
//   ],
//       },
//       keyframes: {
//         "fade-in-up": {
//           "0%": { opacity: "0", transform: "translateY(30px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         "fade-in-down": {
//           "0%": { opacity: "0", transform: "translateY(-30px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         "fade-in": {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         "scale-in": {
//           "0%": { opacity: "0", transform: "scale(0.95)" },
//           "100%": { opacity: "1", transform: "scale(1)" },
//         },
//         "slide-in-left": {
//           "0%": { opacity: "0", transform: "translateX(-50px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         "slide-in-right": {
//           "0%": { opacity: "0", transform: "translateX(50px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         shimmer: {
//           "0%": { backgroundPosition: "-200% 0" },
//           "100%": { backgroundPosition: "200% 0" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-10px)" },
//         },
//         "scroll-indicator": {
//           "0%, 100%": { opacity: "1", transform: "translateY(0)" },
//           "50%": { opacity: "0.5", transform: "translateY(10px)" },
//         },
//       },
//       animation: {
//         "fade-in-up": "fade-in-up 0.8s ease-out forwards",
//         "fade-in-down": "fade-in-down 0.8s ease-out forwards",
//         "fade-in": "fade-in 0.6s ease-out forwards",
//         "scale-in": "scale-in 0.5s ease-out forwards",
//         "slide-in-left": "slide-in-left 0.8s ease-out forwards",
//         "slide-in-right": "slide-in-right 0.8s ease-out forwards",
//         shimmer: "shimmer 2s infinite",
//         float: "float 3s ease-in-out infinite",
//         "scroll-indicator": "scroll-indicator 2s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;


















import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#e3ddd3",
        input: "#e3ddd3",
        ring: "#f4c542",
        background: "#fff",
        white:"#fff",
        foreground: "#1a1f29",
        primary: {
          DEFAULT: "#0284c5",
          foreground: "#1a1f29",
        },
        secondary: {
          DEFAULT: "#293038",
          foreground: "#fafafa",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#fef2f2",
        },
        muted: {
          DEFAULT: "#e8e5e0",
          foreground: "#696e75",
        },
        accent: {
          DEFAULT: "#fffbf0",
          foreground: "#d9a621",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1a1f29",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1a1f29",
        },
        gold: {
          light: "#f4d160",
          DEFAULT: "#f4c542",
          dark: "#d9a621",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        mona: ['"Mona Sans"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scroll-indicator": {
          "0%, 100%": { opacity: "1", transform: "translateY(0)" },
          "50%": { opacity: "0.5", transform: "translateY(10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-down": "fade-in-down 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        float: "float 3s ease-in-out infinite",
        "scroll-indicator": "scroll-indicator 2s ease-in-out infinite",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;