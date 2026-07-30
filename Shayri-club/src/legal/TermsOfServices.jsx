import React, { useEffect, useRef, useState } from "react";

/**
 * Alfaz — Terms of Service
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
const TERMS_SECTIONS = [
  {
    id: "t-welcome",
    label: "Welcome",
    number: null,
    title: "Welcome to Alfaz",
    intro: true,
    blocks: [
      {
        type: "principle",
        text: "Words have the power to inspire, comfort, challenge, and connect people across cultures and generations.",
      },
      {
        type: "p",
        text: "Alfaz was created to give writers, poets, readers, and storytellers a place where creativity is respected, original work is protected, and meaningful conversations can flourish.",
      },
      {
        type: "p",
        text: "These Terms of Service explain how Alfaz operates, what you can expect from us, and what we expect from everyone who uses our Services. While some sections contain legal language because they form a binding agreement between you and Alfaz, we have written them with clarity and transparency in mind.",
      },
      {
        type: "p",
        text: "Whether you are here to publish your first Kalam, discover new voices, or simply appreciate beautiful words, thank you for being part of Alfaz.",
      },
    ],
  },
  {
    id: "t-summary",
    label: "Plain English Summary",
    number: null,
    title: "Plain English Summary",
    blocks: [
      {
        type: "p",
        text: "This summary is provided for convenience only and does not replace the legally binding Terms below.",
      },
      {
        type: "p",
        text: "By using Alfaz, you agree to follow these Terms of Service, our Privacy Policy, Community Guidelines, and any other policies that apply to the Services. In simple terms:",
      },
      {
        type: "ul",
        items: [
          "You keep ownership of the original content you create.",
          "You give Alfaz permission to host and display your content so the platform can operate.",
          "You are responsible for the content you publish.",
          "You must respect the rights, privacy, and creativity of others.",
          "Harassment, hate speech, plagiarism, impersonation, illegal content, and other prohibited activities are not allowed.",
          "We may remove content or restrict accounts when necessary to protect users, creators, or the platform.",
          "We will strive to enforce our rules fairly, transparently, and consistently.",
          "Your privacy matters to us, and we explain how your information is handled in our Privacy Policy.",
        ],
      },
    ],
  },
  {
    id: "t-1",
    number: 1,
    title: "Introduction",
    blocks: [
      { type: "p", text: "Welcome to Alfaz." },
      {
        type: "p",
        text: 'These Terms of Service ("Terms") govern your access to and use of the Alfaz website, applications, and all related services (collectively, the "Services").',
      },
      {
        type: "p",
        text: "By creating an account, accessing, or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.",
      },
      { type: "p", text: "If you do not agree with these Terms, you must not access or use the Services." },
    ],
  },
  {
    id: "t-2",
    number: 2,
    title: "About Alfaz",
    blocks: [
      {
        type: "p",
        text: "Alfaz is a creator-focused social platform that enables people to write, publish, discover, discuss, and share poetry, shayari, quotes, and other creative literary works while connecting with fellow creators through community features and private messaging.",
      },
      {
        type: "p",
        text: "Our mission is to foster a respectful, inclusive, and inspiring environment where creativity can flourish and original work is valued.",
      },
    ],
  },
  {
    id: "t-3",
    number: 3,
    title: "Definitions",
    blocks: [
      { type: "p", text: "For the purposes of these Terms:" },
      {
        type: "term",
        label: '"Alfaz," "we," "our," or "us"',
        text: "means the Alfaz platform and the individual or legal entity operating it.",
      },
      {
        type: "term",
        label: '"Services"',
        text: "means the Alfaz website, future mobile applications, and all features, functionality, and related services we provide.",
      },
      {
        type: "term",
        label: '"User," "you," or "your"',
        text: "means any individual who accesses or uses the Services.",
      },
      { type: "term", label: '"Creator"', text: "means a User who publishes original creative content on the Services." },
      { type: "term", label: '"Content"', text: "includes, but is not limited to:" },
      {
        type: "ul",
        items: [
          "Poems (Kalams)",
          "Shayari",
          "Quotes",
          "Images",
          "Audio",
          "Comments",
          "Messages",
          "Profile information",
          "Any other material uploaded, submitted, or shared through the Services",
        ],
      },
      {
        type: "term",
        label: '"Community Guidelines"',
        text: "means the rules governing acceptable behavior and content on Alfaz.",
      },
    ],
  },
  {
    id: "t-4",
    number: 4,
    title: "Acceptance of These Terms",
    blocks: [
      { type: "p", text: "By using Alfaz, you confirm that:" },
      {
        type: "ul",
        items: [
          "You have the legal capacity to enter into this agreement.",
          "You will comply with these Terms and all applicable laws.",
          "You will use the Services responsibly and respectfully.",
          "The information you provide to Alfaz is accurate to the best of your knowledge.",
        ],
      },
      {
        type: "p",
        text: "If you are using Alfaz on behalf of an organization or other legal entity, you represent that you have authority to bind that organization to these Terms.",
      },
    ],
  },
  {
    id: "t-5",
    number: 5,
    title: "Eligibility",
    blocks: [
      { type: "h4", text: "5.1 Minimum age" },
      { type: "p", text: "You must be at least 16 years of age to create an account or use the Services." },
      {
        type: "p",
        text: "By creating an account or using Alfaz, you represent and warrant that you meet this minimum age requirement.",
      },
      {
        type: "p",
        text: "If the laws applicable to you require a higher minimum age or additional legal requirements for using online services, you are responsible for complying with those laws.",
      },
      {
        type: "p",
        text: "Alfaz reserves the right to suspend or terminate accounts that are found to have been created in violation of this minimum age requirement or through the use of false or misleading information.",
      },
      { type: "h4", text: "5.2 Legal capacity" },
      {
        type: "p",
        text: "By using the Services, you confirm that you have the legal capacity to enter into this agreement under the laws applicable to you.",
      },
      { type: "h4", text: "5.3 Restricted access" },
      { type: "p", text: "You may not use the Services if:" },
      {
        type: "ul",
        items: [
          "Your use would violate applicable laws or regulations.",
          "Your account has been permanently suspended or terminated by Alfaz.",
          "You attempt to access the Services by circumventing restrictions imposed by Alfaz.",
        ],
      },
    ],
  },
  {
    id: "t-6",
    number: 6,
    title: "Account registration",
    blocks: [
      { type: "h4", text: "6.1 Creating an account" },
      {
        type: "p",
        text: "To access certain features of the Services, including publishing content, commenting, following other users, and using messaging features, you must create an Alfaz account.",
      },
      { type: "p", text: "During registration, you may be asked to provide information such as:" },
      { type: "ul", items: ["Name", "Username", "Email address", "Password", "Date of Birth", "Gender", "Profile Picture", "Bio", "Country"] },
      {
        type: "p",
        text: "You agree to provide information that is accurate and, where applicable, keep it reasonably up to date.",
      },
      { type: "h4", text: "6.2 Username" },
      { type: "p", text: "Your username is your public identity on Alfaz." },
      { type: "p", text: "Usernames must not:" },
      {
        type: "ul",
        items: [
          "Impersonate another person or organization.",
          "Intentionally mislead other users.",
          "Contain offensive, hateful, or unlawful language.",
          "Infringe another person's intellectual property rights.",
          "Violate these Terms or the Community Guidelines.",
        ],
      },
      { type: "p", text: "Alfaz may require you to change a username that violates these rules." },
      { type: "h4", text: "6.3 Email verification" },
      {
        type: "p",
        text: "To help maintain the integrity and security of the community, certain features, including publishing content, may require you to verify your email address.",
      },
      { type: "p", text: "Alfaz reserves the right to limit access to specific features until verification has been completed." },
      { type: "h4", text: "6.4 One account per person" },
      { type: "p", text: "Unless expressly permitted by Alfaz, you should maintain only one personal account." },
      {
        type: "p",
        text: "Creating multiple accounts to evade restrictions, manipulate platform features, or engage in abusive behavior is prohibited.",
      },
      { type: "h4", text: "6.5 Account responsibility" },
      {
        type: "p",
        text: "You are responsible for all activity that occurs under your account unless you promptly notify Alfaz of unauthorized access.",
      },
      {
        type: "p",
        text: "You are responsible for ensuring that the information associated with your account remains reasonably accurate and up to date.",
      },
    ],
  },
  {
    id: "t-7",
    number: 7,
    title: "Account security",
    blocks: [
      { type: "h4", text: "7.1 Password security" },
      { type: "p", text: "You are responsible for maintaining the confidentiality of your password and account credentials." },
      { type: "p", text: "You should choose a strong password and should not share your login credentials with anyone." },
      { type: "h4", text: "7.2 Unauthorized access" },
      {
        type: "p",
        text: "If you believe your account has been accessed without your authorization, you should notify Alfaz as soon as reasonably possible using the contact information provided by the platform.",
      },
      { type: "h4", text: "7.3 Security measures" },
      {
        type: "p",
        text: "Alfaz implements reasonable technical and organizational measures designed to help protect user accounts and personal information.",
      },
      {
        type: "p",
        text: "However, no online service or method of electronic storage can be guaranteed to be completely secure. You acknowledge that you use the Services at your own risk and are responsible for taking appropriate precautions to protect your account.",
      },
      { type: "h4", text: "7.4 Security cooperation" },
      { type: "p", text: "You agree not to:" },
      {
        type: "ul",
        items: [
          "Attempt to gain unauthorized access to any account or system.",
          "Circumvent security features.",
          "Interfere with the operation of the Services.",
          "Test or probe the security of the Services without prior written authorization from Alfaz.",
        ],
      },
    ],
  },
  {
    id: "t-8",
    number: 8,
    title: "Your responsibilities",
    blocks: [
      { type: "p", text: "By using Alfaz, you agree to:" },
      {
        type: "ul",
        items: [
          "Use the Services lawfully and responsibly.",
          "Respect the rights, privacy, and creativity of other users.",
          "Publish only content that you have the legal right to publish.",
          "Keep your account credentials secure.",
          "Comply with these Terms, the Community Guidelines, and other applicable platform policies.",
          "Promptly report security issues, bugs, or unauthorized account access that may affect the safety or integrity of the platform.",
        ],
      },
      {
        type: "p",
        text: "You agree not to use the Services in any manner intended to disrupt, damage, misuse, or interfere with the normal operation of Alfaz or the experience of other users.",
      },
    ],
  },
  {
    id: "t-9",
    number: 9,
    title: "User content",
    blocks: [
      { type: "principle", text: "Your words remain yours." },
      {
        type: "p",
        text: "Alfaz is built around creativity, expression, and sharing ideas. We believe creators should maintain ownership and control over their original work.",
      },
      { type: "h4", text: "9.1 Ownership of your content" },
      { type: "p", text: "You retain ownership of the original content that you create and publish on Alfaz." },
      { type: "p", text: "This includes, but is not limited to:" },
      { type: "ul", items: ["Poems and Kalams", "Shayari", "Quotes", "Written works", "Images", "Audio recordings", "Other creative material that you create and share through the Services"] },
      {
        type: "p",
        text: "Publishing content on Alfaz does not transfer ownership, copyright, or any other intellectual property rights to Alfaz.",
      },
      { type: "h4", text: "9.2 Responsibility for your content" },
      { type: "p", text: "You are responsible for the content you publish on Alfaz." },
      { type: "p", text: "By posting Content, you represent that:" },
      { type: "ul", items: ["You own the rights to the Content, or", "You have obtained all necessary permissions to publish it, or", "Your use of the Content is legally permitted."] },
      {
        type: "p",
        text: "You must not publish content that infringes another person's intellectual property rights, privacy rights, or other legal rights.",
      },
    ],
  },
  {
    id: "t-10",
    number: 10,
    title: "License granted to Alfaz",
    blocks: [
      { type: "principle", text: "Alfaz receives permission to provide the service, not ownership of your work." },
      { type: "p", text: "To operate, improve, secure, and promote Alfaz, you grant us a limited license to use the Content you publish." },
      { type: "p", text: "This license is:" },
      {
        type: "ul",
        items: [
          "Worldwide, because Alfaz is available internationally.",
          "Non-exclusive, you remain free to use your Content elsewhere.",
          "Royalty-free, Alfaz does not owe payment simply for hosting your Content.",
          "Limited, only for purposes related to operating and improving Alfaz.",
        ],
      },
      { type: "h4", text: "10.1 What this license allows" },
      { type: "p", text: "This license allows Alfaz to:" },
      {
        type: "ul",
        items: [
          "Store and display your Content.",
          "Make your Content available to other users according to your privacy and visibility settings.",
          "Format, resize, compress, or technically modify Content where necessary for platform functionality.",
          "Create backups for reliability and security.",
          "Use Content to operate features such as discovery, recommendations, and search.",
          "Promote Alfaz and its community by featuring Content through platform-related channels.",
        ],
      },
      { type: "h4", text: "10.2 What this license does not allow" },
      { type: "p", text: "This license does not allow Alfaz to:" },
      {
        type: "ul",
        items: [
          "Claim ownership of your Content.",
          "Sell your Content to third parties.",
          "Use your Content for unrelated commercial purposes without your permission.",
          "Prevent you from using your Content elsewhere.",
        ],
      },
      { type: "h4", text: "10.3 Featured content" },
      { type: "p", text: "From time to time, Alfaz may highlight creative works through features such as:" },
      { type: "ul", items: ["Featured Kalams", "Creator showcases", "Community collections", "Promotional materials for Alfaz"] },
      { type: "p", text: "When we feature your Content, you continue to own it." },
      { type: "p", text: "If additional rights are required beyond this license, we will seek appropriate permission where necessary." },
    ],
  },
  {
    id: "t-11",
    number: 11,
    title: "Content visibility and sharing",
    blocks: [
      { type: "principle", text: "Sharing creativity requires respecting creators." },
      { type: "p", text: "Depending on the features available on Alfaz, Content may be visible to other users." },
      { type: "p", text: "You understand that:" },
      {
        type: "ul",
        items: [
          "Public Content may be viewed, shared, or discovered by others.",
          "Other users may interact with your Content through platform features.",
          "Removing Content does not guarantee immediate removal from every backup, cache, or system where retention is necessary for technical, legal, security, or moderation purposes.",
        ],
      },
    ],
  },
  {
    id: "t-12",
    number: 12,
    title: "Downloading and use of other users' content",
    blocks: [
      { type: "p", text: "Alfaz may allow users to download certain Content, including creative works and associated media." },
      { type: "p", text: "Downloading Content does not grant ownership or unrestricted rights to use that Content." },
      { type: "p", text: "Unless you have permission from the creator or applicable law allows it, you must not:" },
      {
        type: "ul",
        items: [
          "Claim another person's work as your own.",
          "Republish another user's Content.",
          "Modify and distribute another user's Content.",
          "Use another user's Content commercially.",
          "Remove attribution or creator identification.",
        ],
      },
      { type: "p", text: "Respecting creators' rights is a fundamental part of the Alfaz community." },
    ],
  },
  {
    id: "t-13",
    number: 13,
    title: "Editing and deleting content",
    blocks: [
      { type: "p", text: "Creators may edit or delete their Content where such features are available." },
      { type: "p", text: "When you delete Content:" },
      {
        type: "ul",
        items: [
          "It may be removed from public access.",
          "Copies may continue to exist temporarily in backups, security systems, moderation records, or where retention is required by law.",
          "Alfaz may retain limited information necessary to prevent abuse, enforce policies, resolve disputes, or comply with legal obligations.",
        ],
      },
    ],
  },
  {
    id: "t-14",
    number: 14,
    title: "Copyright and originality requirements",
    blocks: [
      { type: "principle", text: "Creativity deserves respect." },
      { type: "p", text: "You may only publish Content that you have the right to share." },
      { type: "p", text: "You must not upload:" },
      {
        type: "ul",
        items: [
          "Copyrighted works without permission.",
          "Another person's poems or Kalams while claiming them as your own.",
          "Content obtained through unauthorized sources.",
          "Content intended to deceive users about its creator.",
        ],
      },
      {
        type: "p",
        text: "If you publish works from other poets or authors, you must ensure that the work is legally permitted to be shared, such as works that are in the public domain or otherwise available for lawful use.",
      },
    ],
  },
  {
    id: "t-15",
    number: 15,
    title: "AI-assisted and third-party content",
    blocks: [
      { type: "p", text: "You remain responsible for any Content you publish on Alfaz, regardless of how it was created." },
      { type: "p", text: "This includes Content created:" },
      { type: "ul", items: ["Entirely by you.", "With the assistance of AI tools.", "Through collaboration with others.", "Using third-party creative tools."] },
      { type: "p", text: "You must ensure that your Content complies with these Terms, Community Guidelines, and applicable laws." },
      { type: "p", text: "Alfaz may introduce additional rules regarding AI-generated or AI-assisted Content in the future." },
    ],
  },
  {
    id: "t-16",
    number: 16,
    title: "Community standards",
    blocks: [
      { type: "principle", text: "Creativity flourishes where people feel safe, respected, and heard." },
      {
        type: "p",
        text: "Alfaz is a community built around poetry, literature, creativity, and meaningful conversations. Every user contributes to the culture of the platform.",
      },
      {
        type: "p",
        text: "By using the Services, you agree to interact with others respectfully and to help maintain a welcoming environment for creators and readers alike.",
      },
      {
        type: "p",
        text: "Our Community Guidelines provide additional details about acceptable behavior and are incorporated into these Terms by reference.",
      },
    ],
  },
  {
    id: "t-17",
    number: 17,
    title: "Respectful conduct",
    blocks: [
      { type: "p", text: "You agree to use Alfaz responsibly and respectfully." },
      { type: "p", text: "You must not engage in behavior that interferes with another person's ability to safely use or enjoy the Services." },
      { type: "p", text: "Examples include:" },
      {
        type: "ul",
        items: [
          "Harassing or bullying other users.",
          "Targeted abuse or intimidation.",
          "Threatening violence or encouraging harm.",
          "Deliberately provoking or disrupting communities.",
          "Impersonating another person or organization.",
          "Creating fake accounts for deceptive purposes.",
        ],
      },
    ],
  },
  {
    id: "t-18",
    number: 18,
    title: "Prohibited content",
    blocks: [
      { type: "p", text: "The following types of content are prohibited on Alfaz, including but not limited to:" },
      { type: "h4", text: "18.1 Violence and harm" },
      { type: "p", text: "Content that:" },
      {
        type: "ul",
        items: [
          "Promotes terrorism or extremist organizations.",
          "Encourages violence.",
          "Incites criminal activity.",
          "Promotes or encourages self-harm or suicide.",
          "Contains credible threats against individuals or groups.",
        ],
      },
      { type: "h4", text: "18.2 Hate and harassment" },
      { type: "p", text: "Content that:" },
      {
        type: "ul",
        items: [
          "Promotes hatred or discrimination against protected groups.",
          "Contains targeted harassment.",
          "Encourages abuse based on identity or personal characteristics.",
          "Uses hateful or degrading language intended to harm others.",
        ],
      },
      { type: "h4", text: "18.3 Sexual or explicit content" },
      { type: "p", text: "Content that includes:" },
      { type: "ul", items: ["Pornographic material.", "Sexually explicit material prohibited by applicable law.", "Content intended primarily for sexual exploitation."] },
      { type: "h4", text: "18.4 Illegal content" },
      { type: "p", text: "Content that:" },
      { type: "ul", items: ["Violates applicable laws.", "Promotes illegal activities.", "Facilitates criminal conduct.", "Is subject to a valid legal removal request."] },
      { type: "h4", text: "18.5 Intellectual property violations" },
      { type: "p", text: "Content that:" },
      { type: "ul", items: ["Infringes copyrights.", "Misappropriates another person's creative work.", "Plagiarizes another creator.", "Uses another creator's work without permission where permission is required."] },
      { type: "h4", text: "18.6 Spam and platform abuse" },
      { type: "p", text: "Including:" },
      { type: "ul", items: ["Spam.", "Fraud.", "Scams.", "Phishing.", "Artificial engagement.", "Malicious software or harmful links.", "Attempts to manipulate platform systems."] },
    ],
  },
  {
    id: "t-19",
    number: 19,
    title: "Reporting content",
    blocks: [
      { type: "principle", text: "Every user helps protect the community." },
      {
        type: "p",
        text: "Users may report content, accounts, comments, messages, or other activity that they believe violates these Terms or the Community Guidelines.",
      },
      { type: "p", text: "Reports should be made in good faith." },
      { type: "p", text: "Knowingly submitting false or abusive reports may itself violate these Terms." },
    ],
  },
  {
    id: "t-20",
    number: 20,
    title: "Content review",
    blocks: [
      { type: "p", text: "When content is reported or otherwise brought to our attention, Alfaz may review it using a combination of:" },
      { type: "ul", items: ["Automated detection systems.", "Human moderation.", "Information provided by users.", "Other reasonable review methods."] },
      {
        type: "p",
        text: "Moderation decisions are made based on these Terms, the Community Guidelines, applicable law, and the context available at the time of review.",
      },
    ],
  },
  {
    id: "t-21",
    number: 21,
    title: "Enforcement actions",
    blocks: [
      { type: "principle", text: "Enforcement should be fair, proportionate, and consistent." },
      { type: "p", text: "Depending on the nature and severity of a violation, Alfaz may take one or more of the following actions:" },
      {
        type: "ul",
        items: [
          "Remove or restrict access to content.",
          "Issue a warning.",
          "Limit access to certain features.",
          "Temporarily suspend an account.",
          "Permanently suspend or terminate an account.",
          "Take any other reasonable action necessary to protect users, creators, or the Services.",
        ],
      },
      {
        type: "p",
        text: "Not every violation will result in every enforcement step, and severe violations may result in immediate action without prior warning.",
      },
    ],
  },
  {
    id: "t-22",
    number: 22,
    title: "Warning system",
    blocks: [
      {
        type: "p",
        text: "Where appropriate, Alfaz may notify users of policy violations and provide an opportunity to correct their behavior before stronger enforcement measures are applied.",
      },
      { type: "p", text: "Warnings are not guaranteed and may be omitted where immediate action is necessary to:" },
      { type: "ul", items: ["Protect users.", "Protect creators.", "Comply with legal obligations.", "Address serious or repeated violations.", "Prevent abuse of the Services."] },
    ],
  },
  {
    id: "t-23",
    number: 23,
    title: "Permanent suspension",
    blocks: [
      { type: "p", text: "Accounts may be permanently suspended or terminated for reasons including, but not limited to:" },
      {
        type: "ul",
        items: [
          "Repeated violations of these Terms.",
          "Serious violations of the Community Guidelines.",
          "Illegal activity.",
          "Copyright infringement.",
          "Ban evasion.",
          "Impersonation.",
          "Threats or violence.",
          "Platform manipulation.",
          "Other conduct that poses a significant risk to users, creators, or the integrity of Alfaz.",
        ],
      },
    ],
  },
  {
    id: "t-24",
    number: 24,
    title: "Ban evasion",
    blocks: [
      { type: "p", text: "Creating or using another account to circumvent a suspension, restriction, or permanent ban is prohibited." },
      { type: "p", text: "Alfaz may suspend or terminate any account reasonably believed to be used for ban evasion." },
    ],
  },
  {
    id: "t-25",
    number: 25,
    title: "Appeals",
    blocks: [
      { type: "principle", text: "Fairness includes the opportunity for review." },
      { type: "p", text: "Users may request a review of certain moderation decisions through the appeal process made available by Alfaz." },
      { type: "p", text: "Submitting an appeal does not guarantee that the original decision will be changed." },
      { type: "p", text: "Appeals should include accurate information and should be submitted respectfully." },
      { type: "p", text: "Alfaz will review appeals in good faith and make reasonable efforts to respond within an appropriate timeframe." },
    ],
  },
  {
    id: "t-26",
    number: 26,
    title: "Transparency",
    blocks: [
      {
        type: "p",
        text: "Where reasonably practicable, Alfaz aims to provide users with information about significant moderation actions affecting their accounts or content.",
      },
      {
        type: "p",
        text: "In certain circumstances, including legal restrictions, security concerns, abuse prevention, or ongoing investigations, Alfaz may be unable to provide detailed explanations.",
      },
    ],
  },
  {
    id: "t-27",
    number: 27,
    title: "Intellectual property",
    blocks: [
      { type: "principle", text: "Creativity deserves protection, and so does the platform that makes creativity possible." },
      { type: "p", text: "Alfaz respects intellectual property rights and expects every user to do the same." },
      { type: "p", text: "These Terms distinguish between:" },
      { type: "ul", items: ["Creator Content, which belongs to its respective creator; and", "Platform Intellectual Property, which belongs to Alfaz or its licensors."] },
    ],
  },
  {
    id: "t-28",
    number: 28,
    title: "Creator copyright",
    blocks: [
      { type: "p", text: "Original creative works published on Alfaz remain the property of their respective creators." },
      { type: "p", text: "Uploading Content to Alfaz does not transfer copyright or ownership to Alfaz." },
      { type: "p", text: "Creators remain free to:" },
      {
        type: "ul",
        items: [
          "Publish their work elsewhere.",
          "License their work to others.",
          "Remove their work from Alfaz (subject to limited retention described in these Terms).",
          "Exercise any other rights available under applicable intellectual property laws.",
        ],
      },
    ],
  },
  {
    id: "t-29",
    number: 29,
    title: "Copyright complaint and takedown procedure",
    blocks: [
      { type: "principle", text: "We take copyright concerns seriously." },
      {
        type: "p",
        text: "If you believe that Content available on Alfaz infringes your copyright or other intellectual property rights, you may submit a copyright complaint.",
      },
      { type: "p", text: "A complaint should include, where applicable:" },
      {
        type: "ul",
        items: [
          "Identification of the copyrighted work.",
          "Identification of the allegedly infringing Content.",
          "Information reasonably sufficient to locate the Content.",
          "Your contact information.",
          "A statement that you have a good-faith belief that the use is unauthorized.",
          "A statement that the information provided is accurate and that you are authorized to act on behalf of the rights holder.",
        ],
      },
      { type: "p", text: "Alfaz may:" },
      {
        type: "ul",
        items: [
          "Review the complaint.",
          "Request additional information.",
          "Temporarily restrict access to the reported Content.",
          "Remove infringing Content.",
          "Take action against repeat infringers where appropriate.",
        ],
      },
      { type: "p", text: "Submitting knowingly false copyright complaints may result in enforcement action." },
    ],
  },
  {
    id: "t-30",
    number: 30,
    title: "Public domain and lawfully shared works",
    blocks: [
      { type: "p", text: "Users may publish literary works that are:" },
      { type: "ul", items: ["In the public domain.", "Distributed under licenses permitting such use.", "Otherwise lawfully available for publication."] },
      { type: "p", text: "Users remain responsible for ensuring they have the legal right to publish such material." },
      { type: "p", text: "Where appropriate, creators and original authors should be properly credited." },
    ],
  },
  {
    id: "t-31",
    number: 31,
    title: "Alfaz intellectual property",
    blocks: [
      { type: "p", text: "Unless otherwise stated, the following are owned by or licensed to Alfaz:" },
      {
        type: "ul",
        items: [
          "The Alfaz name.",
          "Logos.",
          "Branding.",
          "Website and application design.",
          "Source code.",
          "Platform features.",
          "User interface.",
          "Graphics.",
          "Databases (excluding user-owned content).",
          "Documentation.",
          "Other proprietary materials.",
        ],
      },
      { type: "p", text: "These assets are protected by applicable intellectual property laws." },
      { type: "p", text: "Nothing in these Terms transfers ownership of Alfaz's intellectual property to users." },
    ],
  },
  {
    id: "t-32",
    number: 32,
    title: "Restrictions on platform intellectual property",
    blocks: [
      { type: "p", text: "Except where permitted by applicable law or with Alfaz's prior written permission, you may not:" },
      {
        type: "ul",
        items: [
          "Copy or reproduce significant portions of the Services.",
          "Reverse engineer or attempt to extract source code.",
          "Create confusingly similar branding.",
          "Misrepresent an affiliation with Alfaz.",
          "Use Alfaz's trademarks or branding in a misleading manner.",
          "Remove copyright or proprietary notices.",
        ],
      },
      { type: "p", text: "These restrictions do not limit rights that cannot legally be restricted under applicable law." },
    ],
  },
  {
    id: "t-33",
    number: 33,
    title: "Feedback and suggestions",
    blocks: [
      { type: "p", text: "We welcome ideas, suggestions, feature requests, and other feedback from our community." },
      {
        type: "p",
        text: "If you voluntarily provide feedback to Alfaz, you agree that we may use, evaluate, modify, and incorporate that feedback into the Services without any obligation to compensate you.",
      },
      { type: "p", text: "This section applies only to feedback about the Services and does not affect ownership of your original creative Content." },
    ],
  },
  {
    id: "t-34",
    number: 34,
    title: "Third-party services",
    blocks: [
      { type: "p", text: "Alfaz relies on certain third-party service providers to operate the Services." },
      { type: "p", text: "These providers may include services for:" },
      { type: "ul", items: ["Cloud storage.", "Image hosting.", "Analytics.", "Notifications.", "Security.", "Infrastructure.", "Authentication.", "Other operational functions."] },
      { type: "p", text: "Your use of certain features may also be subject to the terms and policies of those third-party providers." },
      {
        type: "p",
        text: "Alfaz is not responsible for the availability, content, or practices of independent third-party services that are outside our reasonable control.",
      },
    ],
  },
  {
    id: "t-35",
    number: 35,
    title: "Creator respect commitment",
    blocks: [
      { type: "principle", text: "Behind every poem is a person." },
      { type: "p", text: "Alfaz was built to celebrate creativity and the people who create it." },
      { type: "p", text: "We recognize that poems, stories, shayari, quotes, and other creative works often carry personal meaning and artistic value." },
      { type: "p", text: "Our goal is to provide a platform where creators can confidently share their work, knowing that:" },
      {
        type: "ul",
        items: [
          "Their ownership is respected.",
          "Their creativity is valued.",
          "Their rights are taken seriously.",
          "Their work will not become the property of Alfaz simply because it is shared here.",
        ],
      },
      {
        type: "p",
        text: "This commitment reflects the values of Alfaz and complements, but does not replace, the legally binding provisions of these Terms.",
      },
    ],
  },
  {
    id: "t-36",
    number: 36,
    title: "Service availability",
    blocks: [
      { type: "principle", text: "We strive for reliability, but no online service can guarantee uninterrupted operation." },
      { type: "p", text: "Alfaz aims to provide a reliable and enjoyable experience for creators and readers." },
      { type: "p", text: "However, the Services may occasionally be unavailable, interrupted, delayed, or limited due to factors including:" },
      {
        type: "ul",
        items: [
          "Maintenance activities.",
          "Software updates.",
          "Infrastructure issues.",
          "Security incidents.",
          "Third-party service disruptions.",
          "Network failures.",
          "Events beyond our reasonable control.",
        ],
      },
      { type: "p", text: "While we work to minimize disruptions, Alfaz does not guarantee uninterrupted or error-free operation of the Services." },
    ],
  },
  {
    id: "t-37",
    number: 37,
    title: "Product evolution",
    blocks: [
      { type: "principle", text: "Alfaz is an evolving platform." },
      { type: "p", text: "Alfaz continuously develops and improves its Services to better serve creators, readers, and the broader community." },
      { type: "p", text: "As a result:" },
      {
        type: "ul",
        items: [
          "Features may be added, modified, replaced, or removed.",
          "User interfaces may change.",
          "Functionality may evolve over time.",
          "New services may be introduced.",
          "Existing services may be discontinued.",
        ],
      },
      { type: "p", text: "We may make these changes at our discretion, subject to applicable laws and any commitments expressly made to users." },
    ],
  },
  {
    id: "t-38",
    number: 38,
    title: "Changes to the Services",
    blocks: [
      { type: "p", text: "We reserve the right to modify, improve, suspend, replace, or discontinue portions of the Services." },
      {
        type: "p",
        text: "Where a change is reasonably expected to materially affect users, Alfaz will make reasonable efforts to provide advance notice through appropriate channels.",
      },
      { type: "p", text: "Advance notice may not be possible when immediate action is necessary for:" },
      { type: "ul", items: ["Security reasons.", "Legal compliance.", "Abuse prevention.", "Emergency maintenance.", "Technical stability."] },
    ],
  },
  {
    id: "t-39",
    number: 39,
    title: "Updates and improvements",
    blocks: [
      { type: "p", text: "From time to time, Alfaz may release updates, improvements, bug fixes, security enhancements, and new functionality." },
      { type: "p", text: "These updates may:" },
      { type: "ul", items: ["Improve existing features.", "Introduce new features.", "Modify how certain features operate.", "Address security or performance issues."] },
      {
        type: "p",
        text: "Continued use of the Services after such updates may require acceptance of updated Terms, policies, or technical requirements where permitted by law.",
      },
    ],
  },
  {
    id: "t-40",
    number: 40,
    title: "Beta and experimental features",
    blocks: [
      { type: "principle", text: "Innovation sometimes requires experimentation." },
      { type: "p", text: "Alfaz may offer certain features as:" },
      { type: "ul", items: ["Beta features.", "Experimental features.", "Early access programs.", "Preview releases."] },
      { type: "p", text: "Such features may:" },
      { type: "ul", items: ["Be incomplete.", "Change significantly over time.", "Contain bugs or errors.", "Be discontinued without notice."] },
      {
        type: "p",
        text: 'Beta and experimental features are provided on an "as available" basis and may not be supported to the same extent as generally available features.',
      },
      { type: "p", text: "We welcome feedback regarding these features and may use such feedback in accordance with these Terms." },
    ],
  },
  {
    id: "t-41",
    number: 41,
    title: "Future paid features",
    blocks: [
      { type: "p", text: "At launch, Alfaz is intended to be available as a free service." },
      { type: "p", text: "In the future, Alfaz may introduce paid offerings, including but not limited to:" },
      { type: "ul", items: ["Premium memberships.", "Creator subscriptions.", "Premium themes.", "Enhanced platform features.", "Other optional paid services."] },
      {
        type: "p",
        text: "The introduction of paid features will not automatically require existing users to purchase them in order to continue using the free portions of the Services, unless otherwise disclosed.",
      },
    ],
  },
  {
    id: "t-42",
    number: 42,
    title: "Payments and billing",
    blocks: [
      { type: "p", text: "If Alfaz introduces paid products or services in the future:" },
      {
        type: "ul",
        items: [
          "Applicable pricing will be disclosed before purchase.",
          "Users will be informed of the relevant terms before completing a transaction.",
          "Additional terms may apply to specific products or services.",
          "Users will not be charged without their consent.",
        ],
      },
      {
        type: "p",
        text: "Where required by law, users may also be informed of applicable taxes, fees, renewal terms, refund rights, or cancellation procedures.",
      },
    ],
  },
  {
    id: "t-43",
    number: 43,
    title: "Promotions and limited-time offers",
    blocks: [
      { type: "p", text: "From time to time, Alfaz may offer:" },
      { type: "ul", items: ["Promotions.", "Discounts.", "Trial periods.", "Early access programs.", "Limited-time benefits."] },
      {
        type: "p",
        text: "Such offers may be subject to additional terms and may be modified, suspended, or withdrawn in accordance with those terms and applicable law.",
      },
    ],
  },
  {
    id: "t-44",
    number: 44,
    title: "Maintenance",
    blocks: [
      { type: "p", text: "To maintain the security, stability, and performance of the Services, Alfaz may perform:" },
      { type: "ul", items: ["Scheduled maintenance.", "Emergency maintenance.", "Infrastructure upgrades.", "Security updates."] },
      { type: "p", text: "Maintenance activities may temporarily affect the availability of some features or portions of the Services." },
      { type: "p", text: "Where reasonably practicable, advance notice may be provided for planned maintenance." },
    ],
  },
  {
    id: "t-45",
    number: 45,
    title: "Third-party dependencies",
    blocks: [
      {
        type: "p",
        text: "Certain aspects of the Services depend on third-party providers, including infrastructure, cloud storage, analytics, notifications, media hosting, and other technical services.",
      },
      { type: "p", text: "Interruptions, limitations, or failures affecting those providers may impact the availability or functionality of Alfaz." },
      {
        type: "p",
        text: "While Alfaz works to select reliable providers, we cannot guarantee the uninterrupted availability of third-party services outside our reasonable control.",
      },
    ],
  },
  {
    id: "t-46",
    number: 46,
    title: "Service retirement",
    blocks: [
      {
        type: "p",
        text: "In the event that Alfaz permanently discontinues a significant portion of the Services, we will make reasonable efforts to provide notice to affected users where practicable.",
      },
      { type: "p", text: "Nothing in this section obligates Alfaz to continue offering any specific feature, product, or service indefinitely." },
    ],
  },
  {
    id: "t-47",
    number: 47,
    title: "Privacy",
    blocks: [
      { type: "principle", text: "Respecting your privacy is fundamental to earning your trust." },
      { type: "p", text: "Your privacy is important to us." },
      {
        type: "p",
        text: "Our collection, use, storage, sharing, and protection of personal information are governed by our Privacy Policy, which forms an integral part of these Terms.",
      },
      { type: "p", text: "By using the Services, you acknowledge that your personal information may be processed as described in the Privacy Policy." },
      {
        type: "p",
        text: "If there is any conflict between these Terms and the Privacy Policy regarding the handling of personal information, the Privacy Policy will govern those matters.",
      },
    ],
  },
  {
    id: "t-48",
    number: 48,
    title: "Electronic communications",
    blocks: [
      { type: "p", text: "By creating an account or using the Services, you agree to receive electronic communications from Alfaz." },
      { type: "p", text: "These communications may include:" },
      {
        type: "ul",
        items: [
          "Account verification emails.",
          "Security notifications.",
          "Password reset emails.",
          "Service announcements.",
          "Important legal or policy updates.",
          "Moderation-related communications.",
          "Responses to support requests.",
        ],
      },
      { type: "p", text: "Where required by applicable law, you may also receive communications regarding your rights or obligations as a user." },
      {
        type: "p",
        text: "Promotional or marketing communications will be provided in accordance with applicable law and, where required, may be subject to your consent or opt-out preferences.",
      },
    ],
  },
  {
    id: "t-49",
    number: 49,
    title: "Security notifications",
    blocks: [
      { type: "p", text: "Protecting user accounts is an important part of operating Alfaz." },
      { type: "p", text: "When appropriate, Alfaz may notify users regarding:" },
      { type: "ul", items: ["Suspicious login activity.", "Security-related account changes.", "Password changes.", "Important security updates.", "Potential security incidents affecting user accounts."] },
      { type: "p", text: "Users are responsible for ensuring that the email address associated with their account remains accurate and accessible." },
    ],
  },
  {
    id: "t-50",
    number: 50,
    title: "No professional advice",
    blocks: [
      { type: "p", text: "The content available through Alfaz is provided by users and other contributors." },
      { type: "p", text: "Unless expressly stated otherwise, content on Alfaz is provided for informational, educational, creative, or entertainment purposes only." },
      { type: "p", text: "Nothing available through the Services should be considered legal, medical, financial, psychological, or other professional advice." },
      { type: "p", text: "Users should seek qualified professional advice where appropriate." },
    ],
  },
  {
    id: "t-51",
    number: 51,
    title: "User-generated content",
    blocks: [
      { type: "p", text: "Alfaz hosts content created by its users." },
      {
        type: "p",
        text: "Views, opinions, creative expression, and statements published by users belong to those users and do not necessarily reflect the views or opinions of Alfaz.",
      },
      {
        type: "p",
        text: "While Alfaz moderates content in accordance with these Terms and the Community Guidelines, we cannot guarantee the accuracy, completeness, legality, or reliability of every piece of user-generated content.",
      },
      { type: "p", text: "Users should exercise their own judgment when interacting with content published by others." },
    ],
  },
  {
    id: "t-52",
    number: 52,
    title: "Disclaimer of warranties",
    blocks: [
      { type: "principle", text: "We strive to provide a reliable platform, but no online service can promise perfection." },
      { type: "p", text: 'To the fullest extent permitted by applicable law, the Services are provided on an "as is" and "as available" basis.' },
      { type: "p", text: "Alfaz does not warrant or guarantee that:" },
      {
        type: "ul",
        items: [
          "The Services will always be available.",
          "The Services will be uninterrupted or error-free.",
          "All defects will be corrected immediately.",
          "The Services will always be secure against every possible threat.",
          "User-generated content will always be accurate, complete, or lawful.",
          "The Services will meet every user's individual expectations or requirements.",
        ],
      },
      { type: "p", text: "Nothing in these Terms excludes warranties that cannot legally be excluded under applicable law." },
    ],
  },
  {
    id: "t-53",
    number: 53,
    title: "Third-party links and services",
    blocks: [
      { type: "p", text: "The Services may contain links to, integrate with, or rely upon third-party websites, applications, or services." },
      { type: "p", text: "Those third-party services operate independently from Alfaz and may have their own terms, privacy policies, and practices." },
      { type: "p", text: "Alfaz does not control and is not responsible for third-party content, products, services, or websites that are outside our reasonable control." },
      { type: "p", text: "Users interact with third-party services at their own discretion and subject to the applicable third-party terms." },
    ],
  },
  {
    id: "t-54",
    number: 54,
    title: "Service integrity",
    blocks: [
      { type: "p", text: "Users must not attempt to misuse the Services by:" },
      { type: "ul", items: ["Introducing malicious software.", "Interfering with platform operations.", "Circumventing security measures.", "Attempting unauthorized access.", "Disrupting other users' access to the Services."] },
      { type: "p", text: "Alfaz reserves the right to investigate and respond to activities that threaten the security, stability, or integrity of the platform." },
    ],
  },
  {
    id: "t-55",
    number: 55,
    title: "Reservation of rights",
    blocks: [
      {
        type: "p",
        text: "Except where these Terms expressly grant rights to users, Alfaz reserves all rights relating to the Services, including the right to improve, modify, suspend, or discontinue features in accordance with these Terms and applicable law.",
      },
    ],
  },
  {
    id: "t-56",
    number: 56,
    title: "Limitation of liability",
    blocks: [
      { type: "principle", text: "Alfaz provides the platform, while users remain responsible for their own actions." },
      {
        type: "p",
        text: "To the maximum extent permitted by applicable law, Alfaz and its operators, affiliates, employees, partners, and service providers will not be liable for losses arising from circumstances beyond reasonable control or from the actions of users and third parties.",
      },
      { type: "p", text: "Alfaz shall not be responsible for:" },
      {
        type: "ul",
        items: [
          "User-generated content.",
          "Interactions between users.",
          "Decisions made by users based on content available on the platform.",
          "Unauthorized access caused by factors outside Alfaz's reasonable control.",
          "Interruptions caused by third-party providers.",
          "Losses resulting from misuse of the Services.",
        ],
      },
    ],
  },
  {
    id: "t-57",
    number: 57,
    title: "Exclusion of certain damages",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent permitted by applicable law, Alfaz shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from:",
      },
      {
        type: "ul",
        items: [
          "Your access to or use of the Services.",
          "Your inability to access the Services.",
          "Content posted by users.",
          "Actions taken by other users.",
          "Changes, suspension, or termination of features.",
        ],
      },
      { type: "p", text: "Nothing in these Terms limits liability that cannot legally be limited under applicable law." },
    ],
  },
  {
    id: "t-58",
    number: 58,
    title: "Indemnification",
    blocks: [
      { type: "principle", text: "Users are responsible for the content and actions they bring to the platform." },
      {
        type: "p",
        text: "You agree to defend, indemnify, and hold harmless Alfaz, its operators, affiliates, employees, and service providers from claims, damages, losses, liabilities, and expenses arising from:",
      },
      {
        type: "ul",
        items: [
          "Your violation of these Terms.",
          "Your violation of applicable laws.",
          "Content you publish on Alfaz.",
          "Your infringement of another person's rights.",
          "Your misuse of the Services.",
          "Your interactions with other users.",
        ],
      },
      { type: "p", text: "This obligation does not apply to the extent that a claim results solely from Alfaz's own unlawful conduct." },
    ],
  },
  {
    id: "t-59",
    number: 59,
    title: "Dispute resolution",
    blocks: [
      { type: "principle", text: "We encourage respectful resolution." },
      {
        type: "p",
        text: "If you have a concern, dispute, or issue regarding Alfaz, we encourage you to first contact us so we can attempt to resolve the matter informally. You may contact Alfaz using:",
      },
      { type: "contact", email: "shadaan@alfaz.live" },
      { type: "p", text: "We will make reasonable efforts to review and respond to legitimate concerns." },
    ],
  },
  {
    id: "t-60",
    number: 60,
    title: "Governing law",
    blocks: [
      { type: "p", text: "These Terms and your use of the Services shall be governed by and interpreted in accordance with the laws of India." },
      {
        type: "p",
        text: "This applies regardless of where you access the Services from, except where mandatory consumer protection laws in your jurisdiction provide otherwise.",
      },
    ],
  },
  {
    id: "t-61",
    number: 61,
    title: "Jurisdiction",
    blocks: [
      {
        type: "p",
        text: "Subject to applicable law, disputes arising from these Terms or your use of the Services shall be subject to the jurisdiction of the appropriate courts located in India.",
      },
      { type: "p", text: "The specific jurisdiction may depend on Alfaz's principal place of operation at the relevant time." },
    ],
  },
  {
    id: "t-62",
    number: 62,
    title: "International users",
    blocks: [
      { type: "p", text: "Alfaz is intended to be accessible worldwide." },
      { type: "p", text: "Users accessing Alfaz from outside India remain responsible for complying with the laws applicable in their own jurisdiction." },
      { type: "p", text: "Nothing in these Terms removes rights that users may have under mandatory laws applicable to them." },
    ],
  },
  {
    id: "t-63",
    number: 63,
    title: "Force majeure",
    blocks: [
      { type: "p", text: "Alfaz will not be responsible for delays, failures, or interruptions caused by circumstances beyond our reasonable control." },
      { type: "p", text: "Such circumstances may include:" },
      { type: "ul", items: ["Natural disasters.", "Government actions.", "Internet failures.", "Cybersecurity incidents.", "Infrastructure failures.", "Third-party service disruptions.", "Other events outside reasonable control."] },
    ],
  },
  {
    id: "t-64",
    number: 64,
    title: "Changes to these Terms",
    blocks: [
      { type: "principle", text: "As Alfaz evolves, these Terms may evolve with it." },
      { type: "p", text: "We may update these Terms from time to time to reflect:" },
      {
        type: "ul",
        items: [
          "Changes to the Services.",
          "New features or functionality.",
          "Changes in applicable laws or regulations.",
          "Security improvements.",
          "Operational requirements.",
          "Other legitimate business or legal reasons.",
        ],
      },
      {
        type: "p",
        text: "When changes are material, Alfaz will make reasonable efforts to notify users through appropriate channels, such as the website, application, or email where appropriate.",
      },
      { type: "p", text: 'The "Last Updated" date at the beginning of these Terms will always indicate the latest revision.' },
      {
        type: "p",
        text: "Continued use of the Services after updated Terms become effective constitutes acceptance of the revised Terms, except where applicable law requires additional consent.",
      },
    ],
  },
  {
    id: "t-65",
    number: 65,
    title: "Severability",
    blocks: [
      {
        type: "p",
        text: "If any provision of these Terms is found to be invalid, unlawful, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect to the maximum extent permitted by law.",
      },
    ],
  },
  {
    id: "t-66",
    number: 66,
    title: "Waiver",
    blocks: [
      {
        type: "p",
        text: "If Alfaz chooses not to enforce a particular provision of these Terms on one occasion, that decision does not waive our right to enforce the same or any other provision in the future.",
      },
    ],
  },
  {
    id: "t-67",
    number: 67,
    title: "Entire agreement",
    blocks: [
      {
        type: "p",
        text: "These Terms, together with the Privacy Policy, Community Guidelines, Cookie Policy, and any additional policies expressly incorporated by reference, constitute the entire agreement between you and Alfaz regarding your use of the Services.",
      },
      { type: "p", text: "They supersede any prior understandings or agreements relating to the same subject matter." },
    ],
  },
  {
    id: "t-68",
    number: 68,
    title: "Assignment",
    blocks: [
      { type: "p", text: "You may not transfer or assign your rights or obligations under these Terms without Alfaz's prior written consent." },
      {
        type: "p",
        text: "Alfaz may assign or transfer its rights and obligations under these Terms as part of a merger, acquisition, corporate restructuring, sale of assets, or other lawful business transaction, provided that doing so does not reduce any rights you are entitled to under applicable law.",
      },
    ],
  },
  {
    id: "t-69",
    number: 69,
    title: "No partnership or employment relationship",
    blocks: [
      { type: "p", text: "Your use of Alfaz does not create any partnership, joint venture, employment, agency, or fiduciary relationship between you and Alfaz." },
    ],
  },
  {
    id: "t-70",
    number: 70,
    title: "Contact information",
    blocks: [
      {
        type: "p",
        text: "If you have questions about these Terms or wish to contact Alfaz regarding legal, policy, copyright, privacy, moderation, or account-related matters, you may contact us at:",
      },
      { type: "contact", email: "shadaan@alfaz.live" },
      { type: "p", text: "As Alfaz grows, additional contact methods may be made available through the Services." },
    ],
  },
  {
    id: "t-71",
    number: 71,
    title: "Effective date",
    blocks: [
      { type: "p", text: "These Terms become effective on the date specified as the Effective Date at the beginning of this document." },
      { type: "p", text: "They remain in effect until replaced by a newer version." },
    ],
  },
  {
    id: "t-72",
    number: 72,
    title: "A final note to our community",
    blocks: [
      { type: "p", text: "Thank you for choosing Alfaz." },
      { type: "p", text: "Every poem, every Kalam, every thoughtful comment, and every meaningful conversation helps shape this community." },
      { type: "p", text: "Alfaz exists because creators choose to share their words and readers choose to value them." },
      { type: "p", text: "We are committed to:" },
      { type: "ul", items: ["Respecting your creativity.", "Protecting your privacy.", "Maintaining a fair and welcoming community.", "Continuously improving the platform.", "Earning your trust every day."] },
      { type: "p", text: "Thank you for being part of the Alfaz journey." },
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

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(TERMS_SECTIONS[0].id);
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
              const isActive = d.id === "terms";
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
              {TERMS_SECTIONS.map((s) => {
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
            <span>Last updated: "To be announced upon launch"</span>
            <span aria-hidden="true">·</span>
            <span>Operated from India</span>
          </div>
          <h1
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-[38px] sm:text-[44px] leading-[1.05] font-medium tracking-tight text-[#221E19] [text-wrap:balance]"
          >
            Terms of Service
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="mt-3 text-[14px] text-[#7a6f52] max-w-[52ch] [text-wrap:pretty]">
            "The agreement between you and Alfaz — how the platform works, what you can expect from us, and what we expect from everyone who uses it."
          </p>

          <div className="mt-10 space-y-14">
            {TERMS_SECTIONS.map((s) => (
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