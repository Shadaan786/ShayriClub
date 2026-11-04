import React from "react";
import logo from "../../public/logo2.svg"

/* Page-level CSS (fonts, scoped main rules, icon font). Tokens live in alfaz-about.theme.js */
const PAGE_CSS = `
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap");

.alfaz-about main > :first-child { margin-top: 0 !important; }
.alfaz-about main > :last-child { margin-bottom: 0 !important; }

.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
`;


const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida/AEtjO1V2L5A0fnHYooI0GnHa_Tkw2Z9ceU_RP9yrnrqan-KkqIysxDfeYl0LrCTBfj4rTOSyzd3pP62-8jaWFW80Jroar2jKKKxw9bNnQjg9IH2_hd0f9s5IFLSHcnV8QQaboBD7ikiYZphsh90ekN_HzKaXnbuFL1poO0plndt0AVS-V4yTZMfqFYX3uqEZ8b2T40ii8olRvyTXMjPMRJ3XKy2nHgaUeHyWuAVjusFiwXQ";

const STORY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBGuDHciiofeVEHQZFF4Aocp_Qyk9znWACVFdKQ2WpIJ-gUW1Rkvw3psGa2kUacDCbRwfLy-bJ-9jhl6XXktG8GuSwZItCpy2L1LbyCjw1BWUrGeNY7pyMUAtzwhK_uI638q9n0KS6tPr-qnvUGcKT7CNTG1hPhr6wr0tQrNggkrSCZ_PBQ_qSOrKHQ-rs8uegd9-11AeKChJlG6s6Ha7_UfYloem1vLrmmgx5JwAs";

const NAV_LINKS = [
  { path: "explore", label: "Explore" },
  { path: "writers", label: "Writers" },
  { path: "shayari-and-poems", label: "Shayari & Poems" },
  { path: "collections", label: "Collections" },
  { path: "about-us", label: "About Us" },
];

const STORY_PARAGRAPHS = [
  "Alfaz began with a simple idea: to bring writers, readers, and poetry enthusiasts together through a shared appreciation of literature.",
  "We wanted to create a digital space where people could publish their own work, explore writings from other creators, and connect with others who appreciate the written word.",
  "What started as an idea gradually developed into a platform designed to make sharing and discovering poetry more accessible.",
];

const CAPABILITIES = [
  {
    n: "01",
    icon: "edit_note",
    title: "Publish creative work",
    text: "Share original poetry, Shayari, quotes, thoughts, poems, and other forms of literary expression.",
    tag: "Literary Canvas",
  },
  {
    n: "02",
    icon: "auto_stories",
    title: "Discover writers and their work",
    text: "Explore content from different creators and discover new perspectives, styles, and voices.",
    tag: "Archival Exploration",
  },
  {
    n: "03",
    icon: "forum",
    title: "Connect through literature",
    text: "Follow other writers and interact with their published work through platform features.",
    tag: "Writer Connections",
  },
  {
    n: "04",
    icon: "collections_bookmark",
    title: "Organise creative collections",
    text: "Arrange published writings into albums and keep related creations together.",
    tag: "Albums & collections",
  },
  {
    n: "05",
    icon: "palette",
    title: "Personalise their expression",
    text: "Present their writing through available content formats and customisation options.",
    tag: "Format & Composition",
    wide: true,
  },
];

const BELIEFS = [
  ["I.", "Expression matters.", "Everyone should have the opportunity to express their thoughts, emotions, and experiences."],
  ["II.", "Creativity deserves respect.", "Original writing and creative contributions deserve appreciation and recognition."],
  ["III.", "Words bring people together.", "Literature can create connections across languages, cultures, and distances."],
  ["IV.", "A welcoming environment matters.", "Respectful interactions and thoughtful participation help creative communities grow."],
  ["V.", "Every voice has value.", "Whether someone writes a single couplet or an entire poem, their expression deserves a place."],
];

const FOOTER_COLUMNS = [
  {
    title: "Categories",
    links: [
      ["nazm", "Nazm"],
      ["ghazal", "Ghazal"],
      ["shayari-and-poems", "Shayari"],
      ["micro-tales", "Micro-tales"],
      ["quotes", "Quotes"],
    ],
  },
  {
    title: "Community",
    links: [
      ["writers", "Featured Poets"],
      ["writing-prompts", "Writing Prompts"],
      ["editorial-salon", "Editorial Salon"],
      ["guidelines", "Guidelines"],
    ],
  },
  {
    title: "Company",
    links: [
      ["about-us", "About Us"],
      ["our-story", "Our Story"],
      ["contact", "Contact"],
      ["privacy-policy", "Privacy"],
      ["terms-of-service", "Terms"],
    ],
  },
];

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-ab-surface/90 backdrop-blur-md border-b border-ab-outline-variant/30 shadow-[0_1px_8px_rgba(26,30,41,0.03)]">
    <div className="h-20 max-w-[1180px] mx-auto px-ab-margin-sm lg:px-ab-margin flex items-center justify-between gap-ab-gutter">
      <div className="flex items-center gap-ab-space-lg">
        <a className="flex items-center gap-ab-space-sm group focus:outline-none" data-path="explore" href="#">
          <img alt="Alfaz Brand Wordmark" className="h-8 w-auto object-contain" src={logo} />
          <span className="font-ab-headline-sm text-ab-headline-sm text-ab-primary tracking-tight">Alfaz</span>
        </a>
        <nav className="hidden xl:flex items-center gap-ab-space-lg" data-active-classes="text-ab-secondary border-b border-ab-secondary">
          {NAV_LINKS.map(({ path, label }) => (
            <a
              key={path}
              className="font-ab-body-md text-ab-body-md text-ab-on-surface-variant hover:text-ab-on-surface transition-colors py-1"
              data-path={path}
              href="#"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-ab-space-md">
        <a
          className="hidden sm:inline-flex items-center justify-center px-ab-space-md py-ab-space-sm border border-ab-outline-variant rounded-ab-lg font-ab-label-md text-ab-label-md text-ab-on-surface hover:bg-ab-surface-container hover:text-ab-on-surface transition-all"
          data-path="write-a-piece"
          href="#"
        >
          Write a Piece
        </a>
        <a
          className="inline-flex items-center justify-center px-ab-space-md py-ab-space-sm bg-ab-primary text-ab-on-primary rounded-ab-lg font-ab-label-md text-ab-label-md hover:bg-ab-secondary hover:text-ab-on-secondary transition-all shadow-[0_2px_8px_rgba(2,5,14,0.08)]"
          data-path="login"
          href="/Signup/Login"
        >
          Join Alfaz
        </a>
        <div className="w-8 h-8 rounded-ab-full bg-ab-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-ab-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="w-full bg-ab-surface-container-low border-t border-ab-outline-variant/30 pt-ab-space-2xl pb-ab-space-xl">
    <div className="max-w-[1180px] mx-auto px-ab-margin-sm lg:px-ab-margin">
      <div className="pb-ab-space-xl border-b border-ab-outline-variant/20 mb-ab-space-xl text-center">
        <p className="font-ab-verse-quote text-ab-verse-quote italic text-ab-on-surface-variant max-w-2xl mx-auto">
          “Lafz ruksat hue to khamoshi ne sukhoon likha.”
        </p>
        <span className="block font-ab-label-caps text-ab-label-caps uppercase tracking-wider text-ab-on-tertiary-container mt-ab-space-sm">
          — An Inscription from the Salon —
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-ab-space-lg mb-ab-space-xl">
        <div className="col-span-2 lg:col-span-2 pr-ab-space-md">
          <div className="flex items-center gap-ab-space-sm mb-ab-space-md">
            <img alt="Alfaz Brand Wordmark" className="h-6 w-auto object-contain" src={logo} />
            <span className="font-ab-headline-sm text-ab-headline-sm text-ab-primary">Alfaz</span>
          </div>
          <p className="font-ab-body-sm text-ab-body-sm text-ab-on-surface-variant max-w-sm mb-ab-space-md">
            A platform for poetry, literature, and creative expression. Publish your writings, discover other creators, and find inspiration through the words of others.
          </p>
          <div className="flex items-center gap-ab-space-sm">
            {[
              ["Archive feed", "rss_feed"],
              ["Global anthology", "public"],
              ["Newsletter subscription", "mail"],
            ].map(([label, icon]) => (
              <a
                key={icon}
                aria-label={label}
                className="w-8 h-8 rounded-ab-lg bg-ab-surface flex items-center justify-center text-ab-on-surface-variant hover:text-ab-secondary border border-ab-outline-variant/40 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">{icon}</span>
              </a>
            ))}
          </div>
        </div>
        {FOOTER_COLUMNS.map(({ title, links }) => (
          <div key={title}>
            <h4 className="font-ab-label-caps text-ab-label-caps uppercase text-ab-primary mb-ab-space-md tracking-wider">{title}</h4>
            <ul className="space-y-ab-space-sm">
              {links.map(([path, label]) => (
                <li key={path} className="font-ab-body-sm text-ab-body-sm">
                  <a className="text-ab-on-surface-variant hover:text-ab-secondary transition-colors" data-path={path} href="#">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-ab-space-lg border-t border-ab-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-ab-space-sm text-center md:text-left">
        <p className="font-ab-body-sm text-ab-body-sm text-ab-on-surface-variant">Alfaz © 2025. Where words find their voice.</p>
        <div className="flex items-center gap-ab-space-md font-ab-body-sm text-ab-body-sm text-ab-on-surface-variant">
          <a className="hover:text-ab-on-surface transition-colors" data-path="privacy-policy" href="#">Privacy Policy</a>
          <span className="text-ab-outline-variant">•</span>
          <a className="hover:text-ab-on-surface transition-colors" data-path="terms-of-service" href="#">Terms of Service</a>
          <span className="text-ab-outline-variant">•</span>
          {/* <a className="hover:text-ab-on-surface transition-colors" data-path="archive-index" href="#">Index Folio</a> */}
        </div>
      </div>
    </div>
  </footer>
);

const ChapterTag = ({ chapter, label, labelClass = "tracking-wider", tagClass = "tracking-widest" }) => (
  <>
    <span className={`font-ab-label-caps text-ab-label-caps uppercase ${tagClass} text-ab-on-secondary-container bg-ab-secondary-fixed/50 px-ab-space-sm py-1 rounded-ab`}>
      {chapter}
    </span>
    <span className={`font-ab-label-caps text-ab-label-caps uppercase ${labelClass} text-ab-on-surface-variant`}>{label}</span>
  </>
);

export default function AboutUs() {
  return (
    <div className="alfaz-about bg-ab-surface font-ab-body-md text-ab-on-surface antialiased">
      <style>{PAGE_CSS}</style>
      <Header />

      <main className="w-full pt-20 bg-ab-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* Folio Header / Preamble Screen Banner */}
          <section className="w-full bg-ab-surface py-ab-space-xl lg:py-ab-space-2xl">
            <div className="max-w-[1180px] mx-auto px-ab-margin-sm lg:px-ab-margin">
              <div className="flex flex-wrap items-center justify-between gap-ab-space-sm pb-ab-space-lg mb-ab-space-xl">
                <div className="flex items-center gap-ab-space-sm">
                  <span className="w-2 h-2 rounded-ab-full bg-ab-secondary"></span>
                  <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-widest text-ab-on-surface-variant">About ALFAZ</span>
                  <span className="text-ab-outline-variant">/</span>
                  <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-wider text-ab-secondary">Our Purpose</span>
                </div>
                <div className="flex items-center gap-ab-space-md">
                  <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-wider text-ab-on-surface-variant">Our Platform</span>
                  <span className="font-ab-verse-quote text-ab-body-sm italic text-ab-on-tertiary-container">alfaz.live</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-ab-gutter lg:gap-ab-space-xl items-start">
                <div className="lg:col-span-5">
                  <span className="font-ab-label-caps text-[11px] uppercase tracking-[0.25em] text-ab-secondary font-semibold block mb-ab-space-xs">Our Story</span>
                  <h1 className="font-ab-display-hero text-[52px] lg:text-[60px] leading-[1.08] text-ab-primary tracking-[-0.03em] font-normal">About Us</h1>
                  <div className="w-12 h-0.5 bg-ab-secondary mt-ab-space-md mb-ab-space-lg"></div>
                  <p className="font-ab-verse-quote text-[26px] lg:text-[28px] italic text-ab-secondary leading-[1.38] tracking-[-0.01em]">
                    “Every feeling deserves a voice. Every word deserves a place.”
                  </p>
                </div>
                <div className="lg:col-span-7 bg-ab-surface-container-low p-ab-space-lg lg:p-ab-space-xl rounded-ab-xl shadow-sm border border-ab-outline-variant/20 relative">
                  <div className="relative">
                    <span className="font-ab-display-hero text-[80px] lg:text-[96px] absolute -top-10 -left-4 text-ab-tertiary-fixed-dim/20 pointer-events-none select-none leading-none font-serif">“</span>
                    <p className="font-ab-body-lg text-[17px] lg:text-[18px] text-ab-on-surface leading-[1.72] relative z-10 font-normal">
                      Welcome to Alfaz — a platform created for people who love poetry, literature, and creative expression. We believe words have the power to express emotions, preserve memories, share perspectives, and bring people closer. Sometimes a few lines of poetry can communicate what ordinary conversations cannot. Every poem, couplet, quote, and thought has the potential to mean something to someone. Alfaz was built around this belief: everyone should have a place to express themselves through words and discover the creativity of others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Our Story */}
          <section className="w-full bg-ab-surface-container py-ab-space-xl lg:py-ab-space-2xl">
            <div className="max-w-[1180px] mx-auto px-ab-margin-sm lg:px-ab-margin">
              <div className="flex items-center gap-ab-space-sm mb-ab-space-lg">
                <ChapterTag chapter="Chapter I" label="Genesis & Purpose" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-ab-gutter lg:gap-ab-space-xl items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative group">
                    <div className="bg-ab-surface-container-lowest p-ab-space-md rounded-ab-xl shadow-md">
                      <img
                        className="w-full h-80 lg:h-96 object-cover rounded-ab-lg"
                        data-alt="An atmospheric, intimate desk of a writer with heavy parchment manuscripts, handwritten Urdu and Hindi verses in black ink, an antique fountain pen resting on laid paper, warm diffused ambient study lighting, quiet literary sanctuary aesthetic."
                        alt="A writer's desk with parchment manuscripts and an antique fountain pen"
                        src={STORY_IMG}
                      />
                      <div className="pt-ab-space-md pb-ab-space-xs px-ab-space-xs flex justify-between items-center text-ab-on-surface-variant">
                        <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-wider text-ab-on-surface-variant">The Contemplative Desk</span>
                        <span className="font-ab-verse-quote text-ab-body-sm italic">A Space for verses and words</span>
                      </div>
                    </div>
                    <div className="hidden sm:block absolute -bottom-4 -right-4 w-32 h-32 bg-ab-secondary-fixed/40 rounded-ab-xl -z-10"></div>
                  </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 space-y-ab-space-md">
                  <div className="border-b border-ab-outline-variant/30 pb-ab-space-sm mb-ab-space-sm">
                    <h2 className="font-ab-headline-lg text-[36px] lg:text-[42px] leading-[1.15] text-ab-primary tracking-[-0.02em] font-medium">Our Story</h2>
                  </div>
                  <div className="space-y-ab-space-md font-ab-body-md text-ab-on-surface-variant">
                    {STORY_PARAGRAPHS.map((text) => (
                      <div key={text} className="p-ab-space-md bg-ab-surface-container-lowest rounded-ab-lg shadow-sm border border-ab-outline-variant/20">
                        <p className="font-ab-body-md text-[15px] lg:text-[16px] leading-[1.7] text-ab-on-surface">{text}</p>
                      </div>
                    ))}
                    <div className="p-ab-space-lg bg-ab-primary text-ab-on-primary rounded-ab-lg shadow-md border-l-4 border-ab-secondary">
                      <p className="font-ab-verse-quote text-[20px] lg:text-[23px] text-ab-on-primary italic leading-[1.42] tracking-wide">
                        “Our aim is not simply to provide another place to publish content, but to create an environment where creative expression can be shared, appreciated, and discovered.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: What We Do */}
          <section className="w-full bg-ab-surface py-ab-space-xl lg:py-ab-space-2xl">
            <div className="max-w-[1180px] mx-auto px-ab-margin-sm lg:px-ab-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-ab-space-md mb-ab-space-xl">
                <div>
                  <div className="flex items-center gap-ab-space-sm mb-ab-space-xs">
                    <ChapterTag chapter="Chapter II" label="Functional Foundation" />
                  </div>
                  <h2 className="font-ab-headline-lg text-[36px] lg:text-[40px] leading-[1.15] text-ab-primary tracking-[-0.02em] font-medium">What We Do</h2>
                </div>
                <p className="font-ab-body-sm text-ab-body-sm text-ab-on-surface-variant max-w-md">
                  Alfaz is designed to support both creators who want to share their work and readers who enjoy discovering meaningful words.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-ab-gutter">
                {CAPABILITIES.map(({ n, icon, title, text, tag, wide }) => (
                  <div
                    key={n}
                    className={`bg-ab-surface-container-low p-ab-space-lg rounded-ab-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${wide ? "md:col-span-2 lg:col-span-2 " : ""}border border-ab-outline-variant/20`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-ab-space-md">
                        <span className="w-10 h-10 rounded-ab-lg bg-ab-surface-container flex items-center justify-center text-ab-secondary">
                          <span className="material-symbols-outlined text-[20px]">{icon}</span>
                        </span>
                        <span className="font-ab-verse-quote text-[24px] text-ab-outline-variant font-normal tracking-wider">{n}</span>
                      </div>
                      <h3 className="font-ab-headline-sm text-[21px] leading-[1.3] text-ab-primary mb-ab-space-sm font-semibold tracking-tight">{title}</h3>
                      <p className={`font-ab-body-md text-[14px] leading-[1.65] text-ab-on-surface-variant${wide ? " max-w-xl" : ""}`}>{text}</p>
                    </div>
                    <div className="mt-ab-space-lg pt-ab-space-sm flex items-center gap-2 text-ab-secondary border-t border-ab-outline-variant/20">
                      <span className="font-ab-label-caps text-[11px] uppercase tracking-[0.2em] font-semibold">{tag}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-ab-space-lg p-ab-space-md bg-ab-surface-container-high rounded-ab-lg text-center">
                <p className="font-ab-body-sm text-ab-body-sm text-ab-on-surface">
                  Alfaz is designed to support both creators who want to share their work and readers who enjoy discovering meaningful words.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Our Vision */}
          <section className="w-full bg-ab-surface-container-low py-ab-space-xl lg:py-ab-space-2xl">
            <div className="max-w-[1180px] mx-auto px-ab-margin-sm lg:px-ab-margin">
              <div className="bg-ab-surface-container-lowest p-ab-space-lg lg:p-ab-space-2xl rounded-ab-xl shadow-sm">
                <div className="max-w-3xl mx-auto text-center space-y-ab-space-md">
                  <div className="inline-flex items-center gap-ab-space-sm mx-auto">
                    <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-[0.2em] text-ab-on-secondary-container bg-ab-secondary-fixed/50 px-ab-space-sm py-1 rounded-ab font-semibold">Chapter III</span>
                    <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-[0.18em] text-ab-on-surface-variant font-medium">The Horizon</span>
                  </div>
                  <h2 className="font-ab-headline-lg text-[40px] lg:text-[46px] leading-[1.12] text-ab-primary tracking-[-0.025em] font-normal">Our Vision</h2>
                  <p className="font-ab-verse-quote text-[25px] lg:text-[29px] text-ab-secondary italic leading-[1.38] max-w-2xl mx-auto">
                    “We envision a world where creative expression has no boundaries.”
                  </p>
                  <div className="w-16 h-0.5 bg-ab-secondary mx-auto my-ab-space-md"></div>
                  <p className="font-ab-body-lg text-[16px] lg:text-[18px] text-ab-on-surface-variant leading-[1.75] font-normal">
                    Our goal is to make Alfaz a welcoming destination for people who appreciate poetry and literature, whether they are experienced writers, aspiring poets, or readers who simply enjoy meaningful writing. We want to encourage more people to write, help creative voices reach interested readers, and make discovering literature a natural part of everyday digital life. As Alfaz grows, we aim to continue improving the platform while keeping its central purpose intact: giving words a place to be shared and appreciated.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: What We Believe */}
          <section className="w-full bg-ab-surface py-ab-space-xl lg:py-ab-space-2xl">
            <div className="max-w-[1180px] mx-auto px-ab-margin-sm lg:px-ab-margin">
              <div className="flex items-center gap-ab-space-sm mb-ab-space-xs">
                <ChapterTag chapter="Chapter IV" label="Core Credo" />
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-ab-space-sm mb-ab-space-xl">
                <h2 className="font-ab-headline-lg text-[36px] lg:text-[42px] leading-[1.15] text-ab-primary tracking-[-0.02em] font-medium">What We Believe</h2>
                <span className="font-ab-label-caps text-[11px] uppercase text-ab-on-surface-variant tracking-[0.22em] font-semibold">Our Core Beliefs</span>
              </div>
              <div className="space-y-ab-space-md">
                {BELIEFS.map(([numeral, title, text]) => (
                  <div key={numeral} className="p-ab-space-lg bg-ab-surface-container-low rounded-ab-xl shadow-sm hover:bg-ab-surface-container-high transition-colors border border-ab-outline-variant/20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-ab-space-md items-center">
                      <div className="md:col-span-1 flex items-center">
                        <span className="font-ab-verse-quote text-[28px] text-ab-secondary font-medium tracking-wide">{numeral}</span>
                      </div>
                      <div className="md:col-span-4">
                        <h3 className="font-ab-headline-sm text-[21px] text-ab-primary font-semibold tracking-tight">{title}</h3>
                      </div>
                      <div className="md:col-span-7">
                        <p className="font-ab-body-md text-[15px] leading-[1.68] text-ab-on-surface-variant">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5: Be Part of Alfaz & Factsheet */}
          <section className="w-full bg-ab-surface-container py-ab-space-xl lg:py-ab-space-2xl">
            <div className="max-w-[1180px] mx-auto px-ab-margin-sm lg:px-ab-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-ab-gutter lg:gap-ab-space-xl items-stretch">
                <div className="lg:col-span-7 bg-ab-surface-container-lowest p-ab-space-lg lg:p-ab-space-xl rounded-ab-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-ab-space-sm mb-ab-space-sm">
                      <ChapterTag chapter="Epilogue" label="The Invitation" />
                    </div>
                    <h2 className="font-ab-headline-md text-ab-headline-md text-ab-primary tracking-tight mb-ab-space-md">Be Part of Alfaz</h2>
                    <p className="font-ab-body-md text-ab-body-md text-ab-on-surface-variant leading-relaxed mb-ab-space-lg">
                      Alfaz is built around the people who write, read, share, and appreciate words. Whether you want to publish your first poem, discover new writers, organise your creations, or simply explore literature, Alfaz welcomes you.
                    </p>
                    <div className="bg-ab-surface-container-low p-ab-space-md rounded-ab-lg space-y-ab-space-xs mb-ab-space-lg">
                      <p className="font-ab-verse-quote text-[23px] text-ab-primary italic leading-[1.4]">Write your feelings.</p>
                      <p className="font-ab-verse-quote text-[23px] text-ab-secondary italic leading-[1.4]">Share your thoughts.</p>
                      <p className="font-ab-verse-quote text-[23px] text-ab-primary italic leading-[1.4]">Discover the world of words.</p>
                    </div>
                  </div>
                  <div className="pt-ab-space-md">
                    <p className="font-ab-headline-sm text-ab-headline-sm text-ab-primary mb-1">Welcome to Alfaz. Where words find their voice.</p>
                    <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-widest text-ab-on-tertiary-container">A Space for Creative Expression</span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-ab-primary text-ab-on-primary p-ab-space-lg lg:p-ab-space-xl rounded-ab-xl shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-ab-space-md mb-ab-space-lg">
                      <div className="flex items-center gap-ab-space-sm">
                        <span className="material-symbols-outlined text-ab-secondary text-[22px]">verified</span>
                        <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-widest text-ab-on-primary-container">Platform Factsheet</span>
                      </div>
                      <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-wider text-ab-on-primary-container">Metadata Folio</span>
                    </div>
                    <div className="space-y-ab-space-md">
                      <div>
                        <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-wider text-ab-on-primary-container block mb-1">Platform Name</span>
                        <p className="font-ab-headline-sm text-ab-headline-sm text-ab-on-primary">Alfaz</p>
                      </div>
                      <div>
                        <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-wider text-ab-on-primary-container block mb-1">Website URL</span>
                        <a className="font-ab-body-md text-ab-body-md text-ab-secondary-fixed hover:underline inline-flex items-center gap-1" href="https://alfaz.live" rel="noopener noreferrer" target="_blank">
                          https://alfaz.live
                          <span className="material-symbols-outlined text-[14px]">north_east</span>
                        </a>
                      </div>
                      <div>
                        <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-wider text-ab-on-primary-container block mb-1">Platform Category</span>
                        <p className="font-ab-body-md text-ab-body-md text-ab-on-primary">Poetry, literature, and creative expression</p>
                      </div>
                      <div>
                        <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-wider text-ab-on-primary-container block mb-1">Operated From</span>
                        <div className="flex items-center gap-ab-space-xs">
                          <span className="material-symbols-outlined text-[18px] text-ab-secondary">location_on</span>
                          <p className="font-ab-body-md text-ab-body-md text-ab-on-primary">India</p>
                        </div>
                      </div>
                      <div>
                        <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-wider text-ab-on-primary-container block mb-1">Contact Inquiries</span>
                        <a className="font-ab-body-md text-ab-body-md text-ab-secondary-fixed hover:underline inline-flex items-center gap-1" href="mailto:shadaan@alfaz.live">
                          shadaan@alfaz.live
                          <span className="material-symbols-outlined text-[14px]">mail</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-ab-space-lg pt-ab-space-md text-ab-on-primary-container flex items-center justify-between">
                    <span className="font-ab-label-caps text-ab-label-caps tracking-widest uppercase">Platform Information</span>
                    <span className="font-ab-verse-quote text-ab-body-sm italic">Alfaz</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Colophon */}
          <section className="w-full bg-ab-surface py-ab-space-xl">
            <div className="max-w-[720px] mx-auto px-ab-margin-sm lg:px-ab-margin text-center">
              <div className="w-8 h-8 rounded-ab-full bg-ab-surface-container mx-auto flex items-center justify-center text-ab-secondary mb-ab-space-sm shadow-sm">
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
              </div>
              <p className="font-ab-verse-quote text-ab-verse-quote italic text-ab-on-surface-variant">
                “Giving words a place to be shared and appreciated.”
              </p>
              <span className="font-ab-label-caps text-ab-label-caps uppercase tracking-widest text-ab-on-surface-variant mt-ab-space-xs block">
                Alfaz • Established for Lovers of the Written Word
              </span>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}