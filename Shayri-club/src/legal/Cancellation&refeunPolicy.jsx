import React, { useEffect, useRef, useState } from "react";

/**
 * Alfaz — Refund and Cancellation Policy
 * Design: "Ink & Parchment" — same reading-room theme as the Privacy Policy.
 * Warm manuscript paper, indigo ink for structure, a single wax-seal red
 * reserved for authority marks (seal, section numbers, active rule).
 *
 * Standalone page component — drop into a React app (Tailwind required).
 * Nav hrefs match the sibling legal pages; /refundpolicy is new, update it
 * to match your router.
 */

const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600&display=swap";

const LAST_UPDATED = "4 November 2026";

const REFUND_SECTIONS = [
  {
    id: "welcome",
    number: null,
    title: "Welcome to Alfaz",
    intro: true,
    blocks: [
      {
        type: "p",
        text: "At Alfaz, we want every user to have a clear understanding of our paid services and the terms that apply to payments, subscriptions, cancellations, and refunds.",
      },
      {
        type: "p",
        text: "This policy explains how these matters are handled when you purchase an Alfaz premium membership or any other paid feature offered on our platform.",
      },
      {
        type: "p",
        text: "By making a purchase on Alfaz, you acknowledge that you have read and understood this policy.",
      },
    ],
  },
  {
    id: "sec-1",
    number: 1,
    title: "Free services",
    blocks: [
      { type: "p", text: "Alfaz provides access to its core platform features without requiring payment." },
      { type: "p", text: "Free services do not involve a purchase and are therefore not eligible for refunds." },
    ],
  },
  {
    id: "sec-2",
    number: 2,
    title: "Premium membership and included benefits",
    blocks: [
      {
        type: "p",
        text: "Alfaz may offer optional paid memberships that provide additional features and privileges to subscribers.",
      },
      { type: "p", text: "Depending on the selected plan, premium benefits may include:" },
      { type: "h4", text: "a. Unlimited Kalams" },
      {
        type: "p",
        text: "Publish ghazals, nazms, ruba'iyat, and other supported literary works without the daily publishing limits applicable to free accounts.",
      },
      { type: "h4", text: "b. Boosted Kalam reach" },
      {
        type: "p",
        text: "Receive enhanced visibility opportunities and priority consideration for curation in weekly Diwan newsletters and Baithak spotlights.",
      },
      {
        type: "principle",
        text: "This benefit is intended to improve opportunities for discovery and exposure. It does not guarantee a specific number of views, readers, followers, or interactions.",
      },
      { type: "h4", text: "c. Gilded Quill and Takhallus Crest" },
      {
        type: "p",
        text: "Access exclusive golden insignia and visual enhancements for your profile and couplets.",
      },
      { type: "h4", text: "d. No watermark on Kalam shares" },
      {
        type: "p",
        text: "Export and share your eligible Kalams without Alfaz branding or watermarks.",
      },
      { type: "h4", text: "e. VIP Concierge and priority support" },
      {
        type: "p",
        text: "Receive access to a priority support channel for disputes, manuscript guidance, profile verification requests, and literary concierge assistance.",
      },
      {
        type: "p",
        text: "The advertised availability and scope of support will be subject to the applicable plan and service terms. Any stated 24/7 availability will apply to the designated support channel, subject to exceptional service interruptions.",
      },
      {
        type: "p",
        text: "The applicable price, subscription duration, billing frequency, and benefits will be displayed before you complete your purchase.",
      },
    ],
  },
  {
    id: "sec-3",
    number: 3,
    title: "Subscription cancellation",
    blocks: [
      { type: "p", text: "You may cancel your premium membership at any time." },
      { type: "p", text: "When you cancel a recurring subscription:" },
      {
        type: "ul",
        items: [
          "Future subscription renewals will be stopped.",
          "You will generally retain access to your premium benefits until the end of the already-paid billing period.",
          "No further recurring charges should be made after cancellation takes effect.",
        ],
      },
      {
        type: "principle",
        text: "Cancellation does not automatically result in a refund for a payment that has already been processed.",
      },
      { type: "p", text: "If you cannot cancel your subscription through your account, contact us for assistance:" },
      { type: "contact", email: "alfaz.platform@gmail.com" },
    ],
  },
  {
    id: "sec-4",
    number: 4,
    title: "Refund eligibility",
    blocks: [
      {
        type: "p",
        text: "Since premium memberships provide access to digital services and features, payments are generally non-refundable once the purchased benefits have been made available.",
      },
      { type: "p", text: "However, you may request a refund in the following circumstances:" },
      { type: "h4", text: "a. Duplicate payments" },
      {
        type: "p",
        text: "If you are charged more than once for the same subscription or transaction, the duplicate payment may be eligible for a refund after verification.",
      },
      { type: "h4", text: "b. Failed transactions" },
      {
        type: "p",
        text: "If your payment was deducted but the transaction failed and your premium benefits were not activated, contact us for verification and resolution.",
      },
      {
        type: "p",
        text: "If the payment was successfully captured but the purchased service was not provided, an appropriate refund will be processed.",
      },
      { type: "h4", text: "c. Technical issues" },
      {
        type: "p",
        text: "If a technical issue attributable to Alfaz prevents you from accessing a paid feature for a significant period, you may contact us.",
      },
      {
        type: "p",
        text: "We will review the issue and determine an appropriate resolution, which may include restoring access, extending your subscription, or issuing a refund where applicable.",
      },
      { type: "h4", text: "d. Unauthorized transactions" },
      {
        type: "p",
        text: "If you believe a payment was made without your authorization, contact us immediately. We will investigate the transaction and take appropriate action in accordance with applicable laws and payment provider requirements.",
      },
      { type: "h4", text: "e. Other legally required refunds" },
      {
        type: "p",
        text: "Refunds will also be provided wherever required under applicable laws and regulations.",
      },
    ],
  },
  {
    id: "sec-5",
    number: 5,
    title: "Non-refundable circumstances",
    blocks: [
      {
        type: "p",
        text: "Except where required by applicable law or where a refund is otherwise approved under this policy, refunds will generally not be provided for:",
      },
      {
        type: "ul",
        items: [
          "Change of mind after purchasing a premium membership.",
          "Failure to use the premium features during the subscription period.",
          "Cancellation after a subscription has already been renewed.",
          "Account suspension or restriction resulting from violations of Alfaz's Terms of Service.",
          "Not receiving a particular number of views, followers, readers, or interactions.",
          "Not being selected for a particular newsletter, Diwan, or Baithak curation opportunity.",
        ],
      },
    ],
  },
  {
    id: "sec-6",
    number: 6,
    title: "How to request a refund",
    blocks: [
      { type: "p", text: "To request a refund, contact our support team using the email address below:" },
      {
        type: "kv",
        items: [
          ["Email", "alfaz.platform@gmail.com"],
          ["Subject", "Refund Request – Alfaz"],
        ],
      },
      { type: "p", text: "Please include the following information:" },
      {
        type: "ul",
        items: [
          "Your Alfaz username.",
          "Registered email address.",
          "Transaction ID or payment reference.",
          "Date and amount of the payment.",
          "A brief explanation of the issue.",
        ],
      },
      { type: "p", text: "We may request additional information where necessary to verify the transaction." },
      { type: "contact", email: "alfaz.platform@gmail.com" },
    ],
  },
  {
    id: "sec-7",
    number: 7,
    title: "Refund processing",
    blocks: [
      { type: "p", text: "Once a refund request has been reviewed and approved:" },
      {
        type: "ul",
        items: [
          "We will initiate the refund through the original payment method wherever possible.",
          "The time taken for the refunded amount to appear in your account may depend on your bank, card issuer, or payment service provider.",
          "We will communicate the outcome of your refund request through your registered email address or the contact details provided.",
        ],
      },
      {
        type: "p",
        text: "Alfaz cannot control the processing time of banks and payment providers.",
      },
    ],
  },
  {
    id: "sec-8",
    number: 8,
    title: "Subscription renewals",
    blocks: [
      {
        type: "p",
        text: "If a premium membership is offered on a recurring basis, its renewal frequency and applicable charges will be disclosed before purchase.",
      },
      {
        type: "p",
        text: "Where automatic renewal is enabled, the subscription may renew automatically unless cancelled before the next billing date.",
      },
      {
        type: "principle",
        text: "You are responsible for cancelling your subscription before its renewal date if you do not wish to continue.",
      },
    ],
  },
  {
    id: "sec-9",
    number: 9,
    title: "Changes to this policy",
    blocks: [
      {
        type: "p",
        text: "Alfaz reserves the right to update or modify this Refund and Cancellation Policy when necessary.",
      },
      {
        type: "p",
        text: "Any changes will be published on this page along with an updated revision date. Changes will not affect refund rights that have already accrued under applicable law.",
      },
    ],
  },
  {
    id: "sec-10",
    number: 10,
    title: "Contact us",
    blocks: [
      {
        type: "p",
        text: "If you have questions or concerns regarding payments, refunds, or subscription cancellations, please contact us:",
      },
      {
        type: "kv",
        items: [
          ["Name", "Alfaz"],
          ["Website", "https://alfaz.live"],
        ],
      },
      { type: "contact", email: "alfaz.platform@gmail.com" },
      { type: "p", text: "We will make reasonable efforts to review and respond to your request." },
    ],
  },
];

const NAV_LINKS = [
  { id: "privacy", label: "Privacy Policy", href: "/privacypolicy", available: true },
  { id: "terms", label: "Terms of Service", href: "/termsofservices", available: true },
  { id: "cookies", label: "Cookie Policy", href: "/cookiepolicy", available: true },
  { id: "community", label: "Community Guidelines", href: "/communityguidelines", available: true },
  { id: "refund", label: "Cancellation & Refund Policy", available: true },
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
      “
    </span>
  );
}

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState(REFUND_SECTIONS[0].id);
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
              const isActive = d.id === "refund";
              return (
                <a
                  key={d.id}
                  href={d.available ? d.href : undefined}
                  aria-disabled={!d.available}
                  aria-current={isActive ? "page" : undefined}
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
            <div
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-[11px] uppercase tracking-[0.16em] text-[#8a7d5c] mb-3"
            >
              On this page
            </div>
            <ol className="space-y-0.5 border-l" style={{ borderColor: "#DCD2B8" }}>
              {REFUND_SECTIONS.map((s) => {
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
          <div
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="flex items-center gap-2 text-[12px] text-[#8a7d5c] mb-3"
          >
            <span>Last updated: {LAST_UPDATED}</span>
            <span aria-hidden="true">·</span>
            <span>Operated from India</span>
          </div>
          <h1
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-[38px] sm:text-[44px] leading-[1.05] font-medium tracking-tight text-[#221E19] [text-wrap:balance]"
          >
            Cancellation and Refund Policy
          </h1>
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="mt-3 text-[14px] text-[#7a6f52] max-w-[52ch] [text-wrap:pretty]"
          >
            How payments, subscriptions, cancellations, and refunds work for Alfaz premium memberships and other paid
            features.
          </p>

          <div className="mt-10 space-y-14">
            {REFUND_SECTIONS.map((s) => (
              <section key={s.id} id={s.id} ref={(el) => (sectionRefs.current[s.id] = el)} className="scroll-mt-28">
                {s.intro ? (
                  <>
                    <QuoteMark />
                    <h2
                      style={{ fontFamily: "'Fraunces', serif" }}
                      className="text-[26px] font-medium text-[#221E19] mb-4 [text-wrap:balance]"
                    >
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
                    <h2
                      style={{ fontFamily: "'Fraunces', serif" }}
                      className="text-[24px] font-medium text-[#221E19] [text-wrap:balance]"
                    >
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
                              <span
                                aria-hidden="true"
                                className="mt-[10px] h-[3px] w-[3px] rounded-full bg-[#B08C4F] shrink-0"
                              />
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

          <p
            style={{ fontFamily: "'Fraunces', serif" }}
            className="mt-14 text-[18px] italic text-[#221E19] [text-wrap:balance]"
          >
            Alfaz — Where Words Find Their Voice.
          </p>

          <footer
            style={{ borderColor: "#DCD2B8", fontFamily: "'Inter', sans-serif" }}
            className="mt-8 pt-6 border-t text-[12.5px] text-[#8a7d5c] flex items-center gap-2"
          >
            <SealMark size={18} />
            <span>Alfaz · alfaz.live · alfaz.platform@gmail.com</span>
          </footer>
        </main>
      </div>
    </div>
  );
}