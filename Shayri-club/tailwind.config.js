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
      // ---------------------------------------------------------------------
      // FONT FAMILY  (single block: Help Center "hc-" + Shayar + admin + archival)
      // ---------------------------------------------------------------------
      fontFamily: {
        // --- Alfaz About Us page (namespaced "ab-") ---
        "ab-verse-quote": ["EB Garamond"],
        "ab-headline-md": ["EB Garamond"],
        "ab-headline-lg": ["EB Garamond"],
        "ab-body-md": ["Plus Jakarta Sans"],
        "ab-body-lg": ["Plus Jakarta Sans"],
        "ab-headline-sm": ["EB Garamond"],
        "ab-display-hero": ["EB Garamond"],
        "ab-display-hero-mobile": ["EB Garamond"],
        "ab-body-sm": ["Plus Jakarta Sans"],
        "ab-headline-lg-mobile": ["EB Garamond"],
        "ab-label-md": ["Plus Jakarta Sans"],
        "ab-label-caps": ["Plus Jakarta Sans"],
        // --- Alfaz Help Center (namespaced "hc-") ---
        "hc-label-sm": ["Manrope"],
        "hc-body-sm": ["Manrope"],
        "hc-headline-sm": ["Newsreader"],
        "hc-headline-md": ["Newsreader"],
        "hc-headline-lg": ["Newsreader"],
        "hc-display-lg": ["Newsreader"],
        "hc-body-md": ["Manrope"],
        "hc-display-lg-mobile": ["Newsreader"],
        "hc-body-lg": ["Manrope"],
        "hc-label-md": ["Manrope"],
        "hc-title-md": ["Manrope"],
        "hc-headline-lg-mobile": ["Newsreader"],

        // --- Shayar ---
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
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],

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

        // --- Archival Press & Studio slide (namespaced "archival-" —
        // this is the vinyl/poetry-archive hero slide only; nothing else
        // in the app references these, so default font-serif/font-sans/
        // font-mono elsewhere are untouched) ---
        "archival-serif": ["Cormorant Garamond", "Georgia", "serif"],
        "archival-display": ["Cinzel", "serif"],
        "archival-urdu": ["Noto Nastaliq Urdu", "serif"],
        "archival-sans": ["Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },

      boxShadow: {
        modal: '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), 0 0 35px -5px rgba(225,29,72,0.12)',
        'danger-glow': '0 4px 20px -2px rgba(225,29,72,0.5), 0 2px 6px -1px rgba(225,29,72,0.3)',
      },

      animation: {
        typewriter: 'typewriter 4s steps(28) forwards',
        caret: 'typewriter 4s steps(28) forwards, blink 2s steps(28) infinite 2s',
        'modal-entry': 'modalIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },

      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        // FIX: modalIn was nested inside scrollUp; it must be a sibling.
        modalIn: {
          from: { opacity: 0, transform: 'scale(0.96) translateY(8px)' },
          to: { opacity: 1, transform: 'scale(1) translateY(0)' },
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

        // --- Alfaz About Us page (namespaced "ab-") ---
        "ab": "0.125rem",
        "ab-lg": "0.25rem",
        "ab-xl": "0.5rem",
        "ab-full": "0.75rem",
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

        // --- Alfaz About Us page (namespaced "ab-") ---
        "ab-space-md": "1rem",
        "ab-space-lg": "1.75rem",
        "ab-space-xs": "0.25rem",
        "ab-gutter-sm": "1rem",
        "ab-margin-sm": "1.25rem",
        "ab-margin": "3rem",
        "ab-space-xl": "3rem",
        "ab-space-2xl": "4.5rem",
        "ab-space-sm": "0.5rem",
        "ab-gutter": "1.5rem",
      },

      // ---------------------------------------------------------------------
      // FONT SIZE  (single block: Help Center "hc-" + Shayar + admin)
      // ---------------------------------------------------------------------
      fontSize: {
        // --- Alfaz Help Center (namespaced "hc-") ---
        "hc-label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.03em", fontWeight: "600" }],
        "hc-body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "hc-headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "hc-headline-md": ["26px", { lineHeight: "34px", fontWeight: "500" }],
        "hc-headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.015em", fontWeight: "500" }],
        "hc-display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "500" }],
        "hc-body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "hc-display-lg-mobile": ["34px", { lineHeight: "42px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "hc-body-lg": ["17px", { lineHeight: "28px", fontWeight: "400" }],
        "hc-label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "hc-title-md": ["18px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "hc-headline-lg-mobile": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "500" }],

        // --- Shayar ---
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

        // --- Alfaz About Us page (namespaced "ab-") ---
        "ab-verse-quote": ["24px", { lineHeight: "40px", letterSpacing: "0.01em", fontWeight: "400" }],
        "ab-headline-md": ["28px", { lineHeight: "36px", letterSpacing: "0em", fontWeight: "500" }],
        "ab-headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "ab-body-md": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
        "ab-body-lg": ["18px", { lineHeight: "30px", letterSpacing: "-0.005em", fontWeight: "400" }],
        "ab-headline-sm": ["22px", { lineHeight: "30px", letterSpacing: "0.005em", fontWeight: "600" }],
        "ab-display-hero": ["56px", { lineHeight: "64px", letterSpacing: "-0.015em", fontWeight: "400" }],
        "ab-display-hero-mobile": ["38px", { lineHeight: "46px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "ab-body-sm": ["13px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "400" }],
        "ab-headline-lg-mobile": ["30px", { lineHeight: "38px", letterSpacing: "0em", fontWeight: "400" }],
        "ab-label-md": ["13px", { lineHeight: "18px", letterSpacing: "0.01em", fontWeight: "500" }],
        "ab-label-caps": ["11px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "600" }],
      },

      // ---------------------------------------------------------------------
      // COLORS  (single block: Help Center "hc-" + shadcn + Shayar + admin)
      // ---------------------------------------------------------------------
      colors: {
        // --- Alfaz Help Center (namespaced "hc-") ---
        "hc-on-background": "#1f1b18",
        "hc-on-error-container": "#93000a",
        "hc-outline-variant": "#dec0b7",
        "hc-tertiary-container": "#9f6912",
        "hc-primary-fixed": "#ffdbcf",
        "hc-surface-container-high": "#f0e6e1",
        "hc-background": "#fff8f5",
        "hc-surface-container-low": "#fbf2ec",
        "hc-on-tertiary": "#ffffff",
        "hc-on-primary-fixed": "#390c00",
        "hc-surface": "#fff8f5",
        "hc-on-primary-fixed-variant": "#822801",
        "hc-on-error": "#ffffff",
        "hc-primary-container": "#bf542c",
        "hc-outline": "#8a726a",
        "hc-secondary": "#516169",
        "hc-primary-fixed-dim": "#ffb59c",
        "hc-primary": "#9f3c16",
        "hc-terracotta-soft": "#FDF2EC",
        "hc-surface-bright": "#fff8f5",
        "hc-on-tertiary-fixed-variant": "#643f00",
        "hc-surface-container-lowest": "#ffffff",
        "hc-secondary-fixed": "#d5e5ef",
        "hc-on-secondary": "#ffffff",
        "hc-surface-tint": "#a23e18",
        "hc-on-secondary-fixed": "#0e1d25",
        "hc-surface-container-highest": "#eae1dc",
        "hc-tertiary-fixed-dim": "#fcba5f",
        "hc-tertiary-fixed": "#ffddb5",
        "hc-surface-dim": "#e1d8d3",
        "hc-secondary-fixed-dim": "#b9c9d3",
        "hc-ink-muted": "#8A8177",
        "hc-on-secondary-container": "#55656e",
        "hc-on-secondary-fixed-variant": "#3a4951",
        "hc-border-rule-strong": "#CFC4B4",
        "hc-on-primary": "#ffffff",
        "hc-surface-card": "#FFFFFF",
        "hc-surface-variant": "#eae1dc",
        "hc-inverse-surface": "#342f2c",
        "hc-ink-primary": "#1E1A17",
        "hc-on-primary-container": "#fffbff",
        "hc-on-tertiary-fixed": "#2a1800",
        "hc-inverse-primary": "#ffb59c",
        "hc-on-surface": "#1f1b18",
        "hc-success-sage": "#3B6948",
        "hc-tertiary": "#805200",
        "hc-surface-parchment-warm": "#F3EDE2",
        "hc-on-surface-variant": "#57423b",
        "hc-border-rule": "#E5DCD0",
        "hc-ink-secondary": "#57514C",
        "hc-on-tertiary-container": "#fffbff",
        "hc-error-container": "#ffdad6",
        "hc-secondary-container": "#d2e2ec",
        "hc-danger-crimson": "#B3261E",
        "hc-error": "#ba1a1a",
        "hc-surface-container": "#f5ece7",
        "hc-surface-parchment": "#FAF6F0",
        "hc-inverse-on-surface": "#f8efea",

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

        // --- Alfaz About Us page (namespaced "ab-") ---
        "ab-surface-container-highest": "#e4e2df",
        "ab-on-primary-container": "#828693",
        "ab-primary": "#02050e",
        "ab-outline": "#76777c",
        "ab-tertiary": "#0a0400",
        "ab-on-tertiary-container": "#a67f53",
        "ab-on-error": "#ffffff",
        "ab-on-tertiary-fixed-variant": "#5f401a",
        "ab-inverse-primary": "#c3c6d5",
        "ab-secondary": "#984444",
        "ab-primary-container": "#1a1e29",
        "ab-inverse-on-surface": "#f2f0ed",
        "ab-surface-variant": "#e4e2df",
        "ab-on-tertiary-fixed": "#2b1700",
        "ab-primary-fixed": "#dfe2f1",
        "ab-surface-dim": "#dbdad7",
        "ab-error-container": "#ffdad6",
        "ab-primary-fixed-dim": "#c3c6d5",
        "ab-surface": "#fbf9f6",
        "ab-on-surface-variant": "#46464c",
        "ab-tertiary-fixed-dim": "#ecbe8e",
        "ab-secondary-container": "#ff9693",
        "ab-on-secondary-container": "#782c2d",
        "ab-on-secondary-fixed": "#3f0207",
        "ab-secondary-fixed": "#ffdad8",
        "ab-on-error-container": "#93000a",
        "ab-on-surface": "#1b1c1a",
        "ab-on-tertiary": "#ffffff",
        "ab-on-secondary-fixed-variant": "#7a2d2e",
        "ab-tertiary-container": "#2f1900",
        "ab-surface-container-lowest": "#ffffff",
        "ab-on-secondary": "#ffffff",
        "ab-surface-bright": "#fbf9f6",
        "ab-on-primary": "#ffffff",
        "ab-on-background": "#1b1c1a",
        "ab-surface-container": "#efeeeb",
        "ab-surface-container-high": "#eae8e5",
        "ab-tertiary-fixed": "#ffddba",
        "ab-on-primary-fixed": "#171b26",
        "ab-surface-tint": "#5a5e6b",
        "ab-secondary-fixed-dim": "#ffb3b0",
        "ab-inverse-surface": "#30312f",
        "ab-on-primary-fixed-variant": "#434653",
        "ab-background": "#fbf9f6",
        "ab-outline-variant": "#c6c6cc",
        "ab-error": "#ba1a1a",
        "ab-surface-container-low": "#f5f3f0",
      },
    }
  },
  plugins: [animate],
}