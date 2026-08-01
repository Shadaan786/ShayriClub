import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ['Allura'],
        dancingScript: ['Dancing Script'],
        greatVibes: ['Great Vibes'],
        "label-caps": ["DM Sans"],
        "headline-md": ["Playfair Display"],
        "body-md": ["DM Sans"],
        "display-lg": ["Playfair Display"],
        "headline-md-mobile": ["Playfair Display"],
        "display-lg-mobile": ["Playfair Display"],
        "body-lg": ["DM Sans"],
      },
      animation: {
        typewriter: 'typewriter 4s steps(28) forwards',
        caret: 'typewriter 4s steps(28) forwards, blink 2s steps(28) infinite 2s'
      },
      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        typewriter: {
          to: {
            left: '100%'
          }
        },
        blink: {
          '0%': { opacity: '0' },
          '0.1%': { opacity: '1' },
          '50%': { opacity: '1' },
          '50.1%': { opacity: '0' },
          '100%': { opacity: '0' }
        }
      },
      borderRadius: {
        // shadcn radii (CSS-var driven) — kept from original config
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        // // Shayar design tokens
        // DEFAULT: "0.125rem",
        // xl: "0.5rem",
        // full: "0.75rem",
      },
      spacing: {
        "stack-lg": "48px",
        "section-gap": "96px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "stack-sm": "8px",
        "stack-md": "24px",
        gutter: "24px",
        "container-max": "1120px",
      },
      fontSize: {
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "display-lg-mobile": ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
      },
      colors: {
        // shadcn CSS-var colors — kept from original config
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        // Shayar design tokens (Material 3 style)
        "on-surface": "#ebdef1",
        "on-tertiary-fixed-variant": "#4e425a",
        "on-background": "#ebdef1",
        "on-error-container": "#ffdad6",
        outline: "#99907d",
        "primary-container": "#f0c85a",
        "on-secondary-container": "#c9aeff",
        "on-primary-fixed": "#241a00",
        "surface-container": "#241d2a",
        "outline-variant": "#4d4636",
        "surface-dim": "#17111d",
        "tertiary-container": "#d7c6e4",
        "on-surface-variant": "#d0c5b0",
        surface: "#17111d",
        "on-error": "#690005",
        "tertiary-fixed": "#eedcfb",
        "on-secondary-fixed-variant": "#5a00c6",
        "on-tertiary": "#372c43",
        "inverse-on-surface": "#352d3b",
        "primary-fixed-dim": "#eac255",
        error: "#ffb4ab",
        "on-primary-fixed-variant": "#584400",
        tertiary: "#f3e2ff",
        "surface-variant": "#393240",
        "surface-container-high": "#2e2735",
        "on-primary-container": "#6b5300",
        "primary-fixed": "#ffdf90",
        "on-primary": "#3d2e00",
        "surface-tint": "#eac255",
        "on-tertiary-container": "#5e516a",
        "tertiary-fixed-dim": "#d1c0de",
        "inverse-primary": "#755b00",
        "surface-container-lowest": "#120c18",
        "secondary-container": "#6001d1",
        "on-secondary": "#3f008e",
        "on-tertiary-fixed": "#21172d",
        "surface-container-low": "#201926",
        "surface-bright": "#3e3644",
        "on-secondary-fixed": "#25005a",
        "secondary-fixed-dim": "#d2bbff",
        "secondary-fixed": "#eaddff",
        "inverse-surface": "#ebdef1",
        "error-container": "#93000a",
        "surface-container-highest": "#393240",
      },
    }
  },
  plugins: [animate],
}