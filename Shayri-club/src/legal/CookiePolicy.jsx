import React, { useEffect, useRef, useState } from "react";

/**
 * Alfaz — Cookie Policy
 * Design: "Ink & Parchment" — a reading room for a poetry platform's legal
 * documents. Warm manuscript paper, indigo ink for structure, a single
 * wax-seal red reserved for the document's authority marks (stamp, active
 * section rule). Body text set in a literary serif since these are documents
 * people are meant to actually read, not skim past.
 *
 * Standalone page component — drop into a React app (Tailwind required).
 * The top nav links to the sibling legal pages by path (/privacy, /terms,
 * /cookies, /community); update those hrefs to match your router.
 * Swap FONT_LINK's href for a local font pipeline if you don't want a
 * Google Fonts request.
 */

const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600&display=swap";
const COOKIE_SECTIONS = [
  {
    id: "c-welcome",
    label: "Welcome",
    number: null,
    title: "Welcome to Alfaz",
    intro: true,
    blocks: [
      {
        type: "p",
        text: "This Cookie Policy explains how Alfaz uses cookies and similar technologies when you visit or use our Services.",
      },
      {
        type: "p",
        text: "Our goal is to be transparent about the technologies that help keep Alfaz secure, reliable, and easy to use.",
      },
      { type: "p", text: "This Policy should be read together with our Privacy Policy and Terms of Service." },
    ],
  },
  {
    id: "c-1",
    number: 1,
    title: "Scope",
    blocks: [
      { type: "p", text: "This Cookie Policy applies to:" },
      { type: "ul", items: ["The Alfaz website.", "The Alfaz web application.", "Related services that reference this Policy."] },
      {
        type: "p",
        text: "By continuing to use our Services, you acknowledge that cookies and similar technologies may be used as described in this Policy, subject to your choices and applicable law.",
      },
    ],
  },
  {
    id: "c-2",
    number: 2,
    title: "What are cookies?",
    blocks: [
      { type: "p", text: "Cookies are small text files that websites place on your browser or device." },
      { type: "p", text: "They help websites remember information such as:" },
      { type: "ul", items: ["Whether you are signed in.", "Your preferences.", "Security-related information.", "Website functionality.", "Performance information."] },
      {
        type: "p",
        text: "Cookies generally do not contain information that directly identifies you on their own, but they may be associated with your account or device.",
      },
    ],
  },
  {
    id: "c-3",
    number: 3,
    title: "What are similar technologies?",
    blocks: [
      { type: "p", text: "In addition to cookies, Alfaz may use technologies that perform similar functions, including:" },
      { type: "ul", items: ["Browser Local Storage.", "Session Storage.", "Device identifiers.", "Push notification tokens.", "Other technologies that help provide or improve the Services."] },
      { type: "p", text: 'Throughout this Policy, references to "cookies" may also include these similar technologies where appropriate.' },
    ],
  },
  {
    id: "c-4",
    number: 4,
    title: "Why we use cookies",
    blocks: [
      { type: "p", text: "Cookies and similar technologies help us:" },
      {
        type: "ul",
        items: [
          "Keep your account secure.",
          "Maintain your signed-in session.",
          "Remember your preferences.",
          "Improve website performance.",
          "Understand how Alfaz is used.",
          "Diagnose technical problems.",
          "Improve reliability and user experience.",
        ],
      },
      { type: "p", text: "We do not use cookies to sell your personal information." },
    ],
  },
  {
    id: "c-5",
    number: 5,
    title: "Essential cookies",
    blocks: [
      { type: "principle", text: "These cookies are necessary for Alfaz to function." },
      {
        type: "p",
        text: "Essential cookies help provide the core features of the Services and cannot reasonably be disabled without affecting functionality or security.",
      },
      { type: "p", text: "These cookies or similar technologies may be used to:" },
      {
        type: "ul",
        items: [
          "Keep you signed in after authentication.",
          "Maintain secure sessions.",
          "Protect against unauthorized access.",
          "Help prevent fraud and abuse.",
          "Remember security-related settings.",
          "Support essential website functionality.",
        ],
      },
      { type: "p", text: "If these cookies are disabled, some parts of Alfaz may not function correctly." },
    ],
  },
  {
    id: "c-6",
    number: 6,
    title: "Functional cookies",
    blocks: [
      { type: "p", text: "Functional cookies help improve your experience by remembering choices and preferences." },
      { type: "p", text: "Depending on the features available, they may be used to remember:" },
      { type: "ul", items: ["Language preferences.", "Theme preferences (such as light or dark mode).", "Interface settings.", "Other user preferences that improve usability."] },
      { type: "p", text: "These cookies are intended to make Alfaz more convenient and personalized." },
    ],
  },
  {
    id: "c-7",
    number: 7,
    title: "Analytics cookies",
    blocks: [
      { type: "p", text: "Analytics cookies help us understand how people use Alfaz." },
      { type: "p", text: "They may collect information such as:" },
      {
        type: "ul",
        items: [
          "Pages visited.",
          "Features used.",
          "Time spent on different areas of the Services.",
          "General interaction patterns.",
          "Browser and device characteristics.",
          "Approximate geographic region, such as country or city derived from IP address by analytics providers, not precise GPS location.",
        ],
      },
      { type: "p", text: "This information helps us:" },
      { type: "ul", items: ["Improve usability.", "Identify popular features.", "Detect technical issues.", "Plan future improvements."] },
      { type: "p", text: "Where reasonably possible, analytics information is aggregated or de-identified before being used for analysis." },
    ],
  },
  {
    id: "c-8",
    number: 8,
    title: "Performance and diagnostic technologies",
    blocks: [
      { type: "p", text: "Alfaz uses performance monitoring and diagnostic technologies to help maintain a stable and reliable platform." },
      { type: "p", text: "These technologies may collect technical information such as:" },
      { type: "ul", items: ["Application errors.", "Crash reports.", "Performance metrics.", "Service health information.", "Technical logs."] },
      { type: "p", text: "This information helps us:" },
      { type: "ul", items: ["Detect service interruptions.", "Diagnose software issues.", "Improve application performance.", "Maintain platform reliability."] },
      { type: "p", text: "These technologies are used to improve the Services and are not intended to monitor users' personal activities." },
    ],
  },
  {
    id: "c-9",
    number: 9,
    title: "Advertising cookies",
    blocks: [
      { type: "principle", text: "At the time of this version of this Policy, Alfaz does not use advertising or behavioral advertising cookies." },
      { type: "p", text: "We do not currently use cookies to:" },
      {
        type: "ul",
        items: [
          "Build advertising profiles.",
          "Deliver personalized advertising.",
          "Track users across unrelated websites for advertising purposes.",
          "Sell advertising data to third parties.",
        ],
      },
      {
        type: "p",
        text: "If Alfaz introduces advertising or advertising-supported features in the future, this Cookie Policy will be updated before those changes take effect where required by applicable law.",
      },
    ],
  },
  {
    id: "c-10",
    number: 10,
    title: "Future technologies",
    blocks: [
      {
        type: "p",
        text: "As Alfaz grows, we may introduce additional technologies that improve functionality, accessibility, security, or user experience.",
      },
      {
        type: "p",
        text: "If those technologies materially change how information is collected or processed, we will update this Cookie Policy and, where required by law, provide appropriate notice or obtain your consent.",
      },
    ],
  },
  {
    id: "c-11",
    number: 11,
    title: "Third-party services",
    blocks: [
      { type: "p", text: "To operate and improve Alfaz, we rely on trusted third-party service providers." },
      { type: "p", text: "Some of these providers may use cookies or similar technologies as part of delivering their services." },
      {
        type: "p",
        text: "These providers process information according to their own privacy practices as well as any contractual obligations they have with Alfaz.",
      },
      { type: "h4", text: "11.1 Google Analytics" },
      { type: "p", text: "Alfaz uses Google Analytics to better understand how the Services are used." },
      { type: "p", text: "Google Analytics may use cookies or similar technologies to help us measure information such as:" },
      { type: "ul", items: ["Website traffic.", "Feature usage.", "General user engagement.", "Performance trends.", "Technical information about browsers and devices."] },
      { type: "p", text: "This information helps us improve the reliability, usability, and performance of Alfaz." },
      { type: "h4", text: "11.2 Firebase Cloud Messaging (FCM)" },
      { type: "p", text: "If you choose to enable push notifications, Alfaz may use Firebase Cloud Messaging (FCM) to deliver them." },
      {
        type: "p",
        text: "FCM generally relies on browser or device notification technologies, including notification tokens, rather than traditional browser cookies.",
      },
      { type: "p", text: "These technologies are used solely to deliver notifications that you have chosen to receive." },
      { type: "h4", text: "11.3 Cloudinary" },
      { type: "p", text: "Alfaz uses Cloudinary to store, optimize, and deliver uploaded media such as images and other supported content." },
      {
        type: "p",
        text: "Depending on how media is delivered, Cloudinary or its content delivery infrastructure may use cookies or similar technologies to improve performance, security, and content delivery.",
      },
      { type: "h4", text: "11.4 MongoDB Atlas" },
      { type: "p", text: "Alfaz uses MongoDB Atlas for secure database hosting." },
      {
        type: "p",
        text: "MongoDB Atlas stores application data on the server and does not place browser cookies on users' devices as part of providing database services.",
      },
      { type: "h4", text: "11.5 OpenTelemetry and SigNoz" },
      { type: "p", text: "Alfaz uses OpenTelemetry and SigNoz to monitor application performance, diagnose technical issues, and improve platform reliability." },
      { type: "p", text: "These technologies help us understand:" },
      { type: "ul", items: ["Application performance.", "System health.", "Error reporting.", "Technical diagnostics."] },
      { type: "p", text: "They are intended to improve the quality and stability of the Services and are not used for advertising or behavioral profiling." },
      { type: "h4", text: "11.6 Future service providers" },
      { type: "p", text: "As Alfaz grows, we may introduce additional service providers to support new features or improve the Services." },
      { type: "p", text: "Examples may include providers for:" },
      { type: "ul", items: ["Authentication.", "Payments.", "Customer support.", "Security.", "Infrastructure.", "Performance monitoring."] },
      {
        type: "p",
        text: "Where those providers materially change how cookies or similar technologies are used, we will update this Cookie Policy and, where required by law, provide appropriate notice or obtain consent.",
      },
    ],
  },
  {
    id: "c-12",
    number: 12,
    title: "Third-party websites",
    blocks: [
      { type: "p", text: "Alfaz may contain links to third-party websites or services." },
      { type: "p", text: "Those websites operate independently and may use their own cookies or similar technologies." },
      {
        type: "p",
        text: "This Cookie Policy does not apply to third-party websites, and we encourage you to review their privacy and cookie policies before providing personal information or enabling optional cookies.",
      },
    ],
  },
  {
    id: "c-13",
    number: 13,
    title: "Managing your cookie preferences",
    blocks: [
      { type: "p", text: "You have control over many cookies and similar technologies used when accessing Alfaz." },
      { type: "p", text: "Depending on your browser, device, and applicable laws, you may be able to:" },
      {
        type: "ul",
        items: [
          "Accept or reject certain non-essential cookies.",
          "Delete cookies that have already been stored.",
          "Configure your browser to block some or all cookies.",
          "Clear local storage and other website data.",
          "Manage notification permissions through your browser or device settings.",
        ],
      },
      {
        type: "p",
        text: "Please note that disabling certain cookies or similar technologies may affect the functionality, security, or performance of the Services.",
      },
      { type: "h4", text: "13.1 Cookie consent" },
      {
        type: "p",
        text: "Where required by applicable law, Alfaz will request your consent before using non-essential cookies or similar technologies.",
      },
      {
        type: "p",
        text: "Essential cookies that are necessary for the operation, security, or functionality of the Services may continue to be used without additional consent where permitted by law.",
      },
      {
        type: "p",
        text: "You may withdraw or modify your cookie preferences at any time through the cookie settings made available by Alfaz, where such functionality is provided.",
      },
      { type: "h4", text: "13.2 Browser controls" },
      { type: "p", text: "Most modern web browsers allow you to manage cookies through their settings." },
      { type: "p", text: "Depending on your browser, you may be able to:" },
      { type: "ul", items: ["View stored cookies.", "Delete existing cookies.", "Block future cookies.", "Configure cookie permissions for individual websites."] },
      { type: "p", text: "Please refer to your browser's documentation for instructions specific to your device or browser." },
      { type: "h4", text: "13.3 Similar technologies" },
      {
        type: "p",
        text: "Some technologies used by Alfaz, such as local storage, session storage, or push notification tokens, are managed differently from traditional cookies.",
      },
      {
        type: "p",
        text: "Where applicable, you may control these technologies through your browser settings, device settings, or by adjusting your preferences within the Services.",
      },
    ],
  },
  {
    id: "c-14",
    number: 14,
    title: "Changes to this Cookie Policy",
    blocks: [
      { type: "p", text: "As Alfaz evolves, we may update this Cookie Policy to reflect:" },
      {
        type: "ul",
        items: [
          "New features or services.",
          "Changes in technology.",
          "Updates to our service providers.",
          "Legal or regulatory requirements.",
          "Improvements to our privacy practices.",
        ],
      },
      {
        type: "p",
        text: "When changes are material, we will make reasonable efforts to notify users through appropriate channels, such as the website, application, or email where appropriate.",
      },
      { type: "p", text: 'The "Last Updated" date at the beginning of this Cookie Policy will always indicate the latest version.' },
    ],
  },
  {
    id: "c-15",
    number: 15,
    title: "Contact us",
    blocks: [
      {
        type: "p",
        text: "If you have any questions about this Cookie Policy or how Alfaz uses cookies and similar technologies, you may contact us at:",
      },
      { type: "contact", email: "shadaan@alfaz.live" },
      { type: "p", text: "We will make reasonable efforts to respond to legitimate inquiries." },
    ],
  },
  {
    id: "c-16",
    number: 16,
    title: "Effective date",
    blocks: [
      {
        type: "p",
        text: "This Cookie Policy becomes effective on the Effective Date specified at the beginning of this document and remains in effect until replaced by a newer version.",
      },
    ],
  },
  {
    id: "c-17",
    number: 17,
    title: "Our commitment to transparency",
    blocks: [
      { type: "p", text: "At Alfaz, we believe that transparency builds trust." },
      {
        type: "p",
        text: "Cookies and similar technologies help us provide a secure, reliable, and enjoyable experience, but they should never be used in ways that surprise or mislead our users.",
      },
      {
        type: "p",
        text: "As our platform grows, we remain committed to explaining how these technologies are used, giving users meaningful choices where appropriate, and continuously improving our privacy practices.",
      },
      { type: "p", text: "Thank you for being part of the Alfaz community." },
    ],
  },
];

const NAV_LINKS = [
  { id: "privacy", label: "Privacy Policy", href: "/privacypolicy", available: true },
  { id: "terms", label: "Terms of Service", href: "/termsofservices", available: true },
  { id: "cookies", label: "Cookie Policy", href: "/cookiepolicy", available: true },
  { id: "community", label: "Community Guidelines", href: "/communityguidelines", available: true },
];

function SealMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="19" stroke="#7A2130" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="15.5" stroke="#7A2130" strokeWidth="0.6" />
      <path
        d="M13 24c1.8-6 4-9 7-9s5.2 3 7 9"
        stroke="#7A2130"
        strokeWidth="1.1"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="20" cy="14.5" r="1.3" fill="#7A2130" />
    </svg>
  );
}

function QuoteMark() {
  return (
    <span
      aria-hidden="true"
      style={{ fontFamily: "'Fraunces', serif" }}
      className="block text-[64px] leading-[0.6] text-[#c7a25f] select-none -ml-1 mb-1"
    >
      "
    </span>
  );
}

export default function CookiePolicy() {
  const [activeSection, setActiveSection] = useState(COOKIE_SECTIONS[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "#F4EFE2", fontFamily: "'Source Serif 4', serif", color: "#221E19" }}
    >
      <link rel="stylesheet" href={FONT_LINK} />

      {/* Header */}
      <header
        className="sticky top-0 z-30 border-b"
        style={{ background: "#F4EFE2ee", borderColor: "#DCD2B8", backdropFilter: "blur(6px)" }}
      >
        <div className="ml-0 mr-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SealMark size={30} />
            <div>
              <div
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-[19px] font-medium tracking-tight leading-none"
              >
                Alfaz
              </div>
              <div
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-[11px] uppercase tracking-[0.16em] text-[#8a7d5c] mt-0.5"
              >
                Legal center
              </div>
            </div>
          </div>
          <nav style={{ fontFamily: "'Inter', sans-serif" }} className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map((d) => {
              const isActive = d.id === "cookies";
              return (
                <a
                  key={d.id}
                  href={d.available ? d.href : undefined}
                  aria-disabled={!d.available}
                  className="px-3 py-1.5 text-[13px] rounded-full transition-colors"
                  style={{
                    color: isActive ? "#F4EFE2" : d.available ? "#3B3527" : "#B4A98A",
                    background: isActive ? "#2F3B73" : "transparent",
                    cursor: d.available ? "pointer" : "default",
                    pointerEvents: d.available ? "auto" : "none",
                  }}
                  title={d.available ? undefined : "Coming soon"}
                >
                  {d.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <div className="ml-0 mr-auto max-w-6xl px-6 py-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
        {/* Sidebar TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div style={{ fontFamily: "'Inter', sans-serif" }} className="text-[11px] uppercase tracking-[0.16em] text-[#8a7d5c] mb-3">
              On this page
            </div>
            <ol className="space-y-0.5 border-l" style={{ borderColor: "#DCD2B8" }}>
              {COOKIE_SECTIONS.map((s) => {
                const isActive = activeSection === s.id;
                return (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        borderColor: isActive ? "#7A2130" : "transparent",
                        color: isActive ? "#221E19" : "#8a7d5c",
                      }}
                      className="text-left w-full pl-4 -ml-px py-1.5 text-[13px] leading-snug border-l-2 transition-colors hover:text-[#221E19] [text-wrap:pretty]"
                    >
                      {s.number ? `${s.number}. ` : ""}
                      {s.title}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>

        {/* Content */}
        <main className="max-w-[680px] min-w-0">
          <div style={{ fontFamily: "'Inter', sans-serif" }} className="flex items-center gap-2 text-[12px] text-[#8a7d5c] mb-3">
            <span>Last updated: "Insert Date"</span>
            <span aria-hidden="true">·</span>
            <span>Operated from India</span>
          </div>
          <h1
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-[38px] sm:text-[44px] leading-[1.05] font-medium tracking-tight text-[#221E19] [text-wrap:balance]"
          >
            Cookie Policy
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="mt-3 text-[14px] text-[#7a6f52] max-w-[52ch] [text-wrap:pretty]">
            "How Alfaz uses cookies and similar technologies to keep the platform secure, reliable, and easy to use."
          </p>

          <div className="mt-10 space-y-14">
            {COOKIE_SECTIONS.map((s) => (
              <section key={s.id} id={s.id} ref={(el) => (sectionRefs.current[s.id] = el)} className="scroll-mt-28">
                {s.intro ? (
                  <>
                    <QuoteMark />
                    <h2 style={{ fontFamily: "'Fraunces', serif" }} className="text-[26px] font-medium text-[#221E19] mb-4 [text-wrap:balance]">
                      {s.title}
                    </h2>
                  </>
                ) : (
                  <div className="flex items-baseline gap-3 mb-4">
                    <span
                      style={{ fontFamily: "'Inter', sans-serif", color: "#7A2130" }}
                      className="text-[13px] font-medium tabular-nums shrink-0"
                    >
                      {String(s.number).padStart(2, "0")}
                    </span>
                    <h2 style={{ fontFamily: "'Fraunces', serif" }} className="text-[24px] font-medium text-[#221E19] [text-wrap:balance]">
                      {s.title}
                    </h2>
                  </div>
                )}

                <div className="space-y-4 text-[15.5px] leading-[1.75] text-[#3B3527] [text-wrap:pretty]">
                  {s.blocks.map((b, i) => {
                    if (b.type === "p") return <p key={i} className="[text-wrap:pretty]">{b.text}</p>;
                    if (b.type === "h4")
                      return (
                        <h3
                          key={i}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          className="pt-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#7A2130]"
                        >
                          {b.text}
                        </h3>
                      );
                    if (b.type === "ul")
                      return (
                        <ul key={i} className="space-y-1.5 pl-1">
                          {b.items.map((item, j) => (
                            <li key={j} className="flex gap-2.5">
                              <span aria-hidden="true" className="mt-[10px] h-[3px] w-[3px] rounded-full bg-[#B08C4F] shrink-0" />
                              <span className="[text-wrap:pretty]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    if (b.type === "kv")
                      return (
                        <dl key={i} className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5">
                          {b.items.map(([k, v], j) => (
                            <React.Fragment key={j}>
                              <dt style={{ fontFamily: "'Inter', sans-serif" }} className="text-[13px] text-[#8a7d5c]">
                                {k}
                              </dt>
                              <dd>{v}</dd>
                            </React.Fragment>
                          ))}
                        </dl>
                      );
                    if (b.type === "term")
                      return (
                        <p key={i} className="[text-wrap:pretty]">
                          <strong className="text-[#221E19] font-semibold">{b.label}</strong> {b.text}
                        </p>
                      );
                    if (b.type === "principle")
                      return (
                        <div
                          key={i}
                          style={{ borderColor: "#7A2130" }}
                          className="border-l-2 pl-4 py-0.5 my-5 italic text-[#221E19] [text-wrap:pretty]"
                        >
                          {b.text}
                        </div>
                      );
                    if (b.type === "contact")
                      return (
                        <div
                          key={i}
                          style={{ background: "#EEE7D3", fontFamily: "'Inter', sans-serif" }}
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13.5px]"
                        >
                          <SealMark size={16} />
                          <a href={`mailto:${b.email}`} className="text-[#2F3B73] font-medium">
                            {b.email}
                          </a>
                        </div>
                      );
                    return null;
                  })}
                </div>
              </section>
            ))}
          </div>

          <footer
            style={{ borderColor: "#DCD2B8", fontFamily: "'Inter', sans-serif" }}
            className="mt-16 pt-6 border-t text-[12.5px] text-[#8a7d5c] flex items-center gap-2"
          >
            <SealMark size={18} />
            <span>Alfaz · alfaz.live · shadaan@alfaz.live</span>
          </footer>
        </main>
      </div>
    </div>
  );
}