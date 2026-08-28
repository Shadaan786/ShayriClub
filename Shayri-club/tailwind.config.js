import animate from "tailwindcss-animate"
// import forms from "@tailwindcss/forms"
// import containerQueries from "@tailwindcss/container-queries"

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

        // --- Blocked Users / Admin Console theme (namespaced "admin-" to
        // avoid colliding with the Shayar tokens above, which reuse the
        // same Material-3-style names with different values) ---
        "admin-headline-sm": ["Geist"],
        "admin-headline-md": ["Geist"],
        "admin-body-lg": ["Inter"],
        "admin-display": ["Geist"],
        "admin-code": ["Geist"],
        "admin-body-md": ["Inter"],
        "admin-label-md": ["Geist"],
        "admin-body-sm": ["Inter"],
        "admin-headline-lg": ["Geist"],
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

        // Blocked Users theme uses 0.25rem/0.5rem/0.75rem for
        // DEFAULT/lg/xl, which are identical to Tailwind's core defaults,
        // so no extra entries are needed here — rounded / rounded-lg /
        // rounded-xl already match without adding anything.
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

        // --- Blocked Users / Admin Console spacing (namespaced) ---
        "admin-md": "16px",
        "admin-sm": "8px",
        "admin-unit": "4px",
        "admin-xs": "4px",
        "admin-xl": "48px",
        "admin-container-max": "1200px",
        "admin-lg": "24px",
        "admin-gutter": "24px",
        "admin-margin-mobile": "16px",
      },
      fontSize: {
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "display-lg-mobile": ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],

        // --- Blocked Users / Admin Console type scale (namespaced) ---
        "admin-headline-sm": ["18px", { lineHeight: "1.4", fontWeight: "600" }],
        "admin-headline-md": ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "admin-body-lg": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "admin-display": ["48px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "admin-code": ["13px", { lineHeight: "1.6", fontWeight: "400" }],
        "admin-body-md": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "admin-label-md": ["12px", { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "600" }],
        "admin-body-sm": ["12px", { lineHeight: "1.5", fontWeight: "400" }],
        "admin-headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
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

        // --- Blocked Users / Admin Console palette (namespaced "admin-")
        // Kept fully separate from the Shayar tokens above so neither
        // theme overwrites the other, even though both use Material-3
        // style names like "surface" / "on-surface" / "primary". ---
        "admin-on-primary-fixed-variant": "#474646",
        "admin-secondary-container": "#454747",
        "admin-on-tertiary-container": "#7c7977",
        "admin-inverse-on-surface": "#313030",
        "admin-border-subtle": "#262626",
        "admin-background": "#141313",
        "admin-inverse-primary": "#5f5e5e",
        "admin-on-background": "#e5e2e1",
        "admin-tertiary-fixed-dim": "#cac6c3",
        "admin-surface-dim": "#141313",
        "admin-on-secondary-fixed-variant": "#454747",
        "admin-on-secondary": "#2f3131",
        "admin-on-tertiary-fixed": "#1d1b1a",
        "admin-border-strong": "#404040",
        "admin-surface-high": "#1e1e1e",
        "admin-danger-container": "#2a0a0a",
        "admin-surface-mid": "#121212",
        "admin-on-primary": "#313030",
        "admin-tertiary-container": "#0b0a09",
        "admin-on-secondary-fixed": "#1a1c1c",
        "admin-danger-accent": "#ff4d4d",
        "admin-secondary": "#c6c6c7",
        "admin-secondary-fixed": "#e2e2e2",
        "admin-primary": "#c9c6c5",
        "admin-tertiary": "#cac6c3",
        "admin-on-error-container": "#ffdad6",
        "admin-on-error": "#690005",
        "admin-surface-container-high": "#2b2a2a",
        "admin-surface-low": "#0a0a0a",
        "admin-primary-fixed": "#e5e2e1",
        "admin-primary-fixed-dim": "#c9c6c5",
        "admin-on-secondary-container": "#b4b5b5",
        "admin-outline": "#8e9192",
        "admin-inverse-surface": "#e5e2e1",
        "admin-surface-variant": "#353434",
        "admin-surface-container-low": "#1c1b1b",
        "admin-on-surface": "#e5e2e1",
        "admin-secondary-fixed-dim": "#c6c6c7",
        "admin-on-surface-variant": "#c4c7c7",
        "admin-on-tertiary": "#32302f",
        "admin-surface-container-lowest": "#0e0e0e",
        "admin-surface": "#141313",
        "admin-surface-bright": "#3a3939",
        "admin-surface-highest": "#2a2a2a",
        "admin-surface-tint": "#c9c6c5",
        "admin-surface-container-highest": "#353434",
        "admin-outline-variant": "#444748",
        "admin-on-primary-container": "#7b7979",
        "admin-on-primary-fixed": "#1c1b1b",
        "admin-on-tertiary-fixed-variant": "#484645",
        "admin-error-container": "#93000a",
        "admin-tertiary-fixed": "#e6e1df",
        "admin-error": "#ffb4ab",
        "admin-surface-lowest": "#000000",
        "admin-primary-container": "#0a0a0a",
        "admin-surface-container": "#201f1f",
      },
    }
  },
  plugins: [animate],
}