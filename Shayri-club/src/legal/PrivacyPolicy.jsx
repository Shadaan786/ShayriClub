import React, { useEffect, useRef, useState } from "react";

/**
 * Alfaz — Privacy Policy
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
const PRIVACY_SECTIONS = [
  {
    id: "welcome",
    label: "Welcome",
    number: null,
    title: "Welcome to Alfaz",
    intro: true,
    blocks: [
      {
        type: "p",
        text: "Alfaz is a platform built for people who love poetry, literature, and creative expression. We provide a space where users can write, publish, discover, discuss, and connect through poems, Shayari, Kalams, quotes, images, audio, and other forms of creative content.",
      },
      {
        type: "p",
        text: "Your trust is important to us. This Privacy Policy explains how Alfaz collects, uses, stores, protects, and handles information when you use our website, application, and related services.",
      },
      {
        type: "p",
        text: "By using Alfaz, you acknowledge the practices described in this Privacy Policy.",
      },
    ],
  },
  {
    id: "sec-1",
    number: 1,
    title: "Our privacy commitment",
    blocks: [
      {
        type: "principle",
        text: "Privacy should never come at the expense of creativity, and creativity should never come at the expense of privacy.",
      },
      { type: "p", text: "At Alfaz, we believe:" },
      {
        type: "ul",
        items: [
          "Creators should have control over their work.",
          "Users should understand how their information is used.",
          "Personal information should be handled responsibly.",
          "Transparency is essential for building trust.",
        ],
      },
      { type: "p", text: "We collect and use information only for purposes necessary to:" },
      {
        type: "ul",
        items: [
          "Provide and improve Alfaz.",
          "Maintain account functionality.",
          "Enable social and creative features.",
          "Protect users and the platform.",
          "Improve security and reliability.",
          "Comply with applicable legal obligations.",
        ],
      },
    ],
  },
  {
    id: "sec-2",
    number: 2,
    title: "Scope of this privacy policy",
    blocks: [
      { type: "p", text: "This Privacy Policy applies to:" },
      {
        type: "ul",
        items: [
          "Alfaz website available through alfaz.live.",
          "Future Alfaz applications.",
          "Related services, features, and products operated by Alfaz.",
        ],
      },
      { type: "p", text: "This Privacy Policy explains:" },
      {
        type: "ul",
        items: [
          "What information we collect.",
          "How we use information.",
          "How information is stored and protected.",
          "When information may be shared.",
          "Your privacy rights and choices.",
          "How to contact us regarding privacy concerns.",
        ],
      },
    ],
  },
  {
    id: "sec-3",
    number: 3,
    title: "About Alfaz",
    blocks: [
      { type: "p", text: "Alfaz is operated by:" },
      {
        type: "kv",
        items: [
          ["Owner", "Individual proprietor (at launch)"],
          ["Country", "India"],
        ],
      },
      {
        type: "p",
        text: "Alfaz is available worldwide and may be accessed by users from different countries. Depending on where you live, additional privacy rights may apply under your local laws.",
      },
    ],
  },
  {
    id: "sec-4",
    number: 4,
    title: "Your acceptance of this policy",
    blocks: [
      {
        type: "p",
        text: "By creating an account, accessing, or using Alfaz, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with the practices described here, you should not use the Services.",
      },
    ],
  },
  {
    id: "sec-5",
    number: 5,
    title: "Changes to this privacy policy",
    blocks: [
      { type: "p", text: "We may update this Privacy Policy from time to time to reflect:" },
      {
        type: "ul",
        items: [
          "Changes in our Services.",
          "New features.",
          "Changes in technology.",
          "Legal or regulatory requirements.",
          "Improvements to privacy practices.",
        ],
      },
      {
        type: "p",
        text: 'When we make significant changes, we will make reasonable efforts to notify users through appropriate channels. The updated version will always include a revised "Last Updated" date.',
      },
    ],
  },
  {
    id: "sec-6",
    number: 6,
    title: "Information you provide",
    blocks: [
      {
        type: "p",
        text: "When you create an account or use the Services, you may provide us with certain information. The information you choose to provide depends on how you use Alfaz and the features you access.",
      },
      { type: "h4", text: "6.1 Account information" },
      { type: "p", text: "When you register for an Alfaz account, we may collect:" },
      {
        type: "ul",
        items: [
          "Name (Display Name)",
          "Username",
          "Email address",
          "Password (stored only as a secure cryptographic hash)",
          "Date of Birth",
          "Gender (if provided)",
          "Country",
        ],
      },
      {
        type: "p",
        text: "This information helps us create and manage your account, verify eligibility, secure access, and provide the Services.",
      },
      { type: "h4", text: "6.2 Profile information" },
      { type: "p", text: "You may also choose to add or update information such as:" },
      {
        type: "ul",
        items: ["Profile picture", "Bio", "Other profile details that become available through the Services"],
      },
      {
        type: "p",
        text: "Most profile information can be updated by you through your account settings.",
      },
      { type: "h4", text: "6.3 Public profile information" },
      {
        type: "p",
        text: "Alfaz is designed to help creators share their work and connect with readers. As a result, user profiles are public by default. The following information may be publicly visible to other users and visitors of the Services:",
      },
      {
        type: "ul",
        items: [
          "Display Name",
          "Username",
          "Profile Picture",
          "Bio",
          "Country (if displayed on your profile)",
          "Published Kalams, poems, Shayari, quotes, images, audio, and other content you choose to publish",
          "Public comments and other public interactions",
        ],
      },
      {
        type: "p",
        text: "Other users may discover your profile by searching for your display name or username.",
      },
      { type: "p", text: "The following information is never publicly visible through your profile:" },
      {
        type: "ul",
        items: [
          "Email address",
          "Password or password hash",
          "Date of Birth",
          "Login history",
          "Device information",
          "FCM notification token",
          "Internal account identifiers",
          "Security-related information",
        ],
      },
      {
        type: "p",
        text: "Future privacy settings may allow you to control the visibility of certain profile information where such options are made available.",
      },
      { type: "h4", text: "6.4 User-generated content" },
      {
        type: "p",
        text: "Alfaz is built around creative expression. When you use the Services, we collect and store the content you choose to create, upload, or publish, including:",
      },
      {
        type: "ul",
        items: [
          "Kalams",
          "Poems",
          "Shayari",
          "Quotes",
          "Images",
          "Audio recordings",
          "Comments",
          "Messages",
          "Other content you voluntarily submit",
        ],
      },
      {
        type: "p",
        text: "You remain the owner of your original creative works as described in our Terms of Service.",
      },
      { type: "h4", text: "6.5 Social activity" },
      {
        type: "p",
        text: "To provide social and community features, we may collect information about how you interact with the Services, including:",
      },
      {
        type: "ul",
        items: [
          "Likes and reactions",
          "Comments",
          "Followers and following relationships",
          "Saved or bookmarked content (if available)",
          "Reports you submit",
          "Communities you join",
          "Participation in discussions",
          "Messages exchanged through the platform",
        ],
      },
      {
        type: "p",
        text: "This information helps us operate social features, improve user experience, and maintain community safety.",
      },
    ],
  },
  {
    id: "sec-7",
    number: 7,
    title: "Information collected automatically",
    blocks: [
      {
        type: "p",
        text: "When you access or use Alfaz, certain technical information may be collected automatically to help us operate, secure, and improve the Services.",
      },
      { type: "h4", text: "7.1 Device information" },
      { type: "p", text: "We may collect limited information about the device you use to access Alfaz, such as:" },
      {
        type: "ul",
        items: [
          "Device type",
          "Operating system",
          "Browser or application version",
          "Device identifiers where necessary for security or functionality",
        ],
      },
      { type: "p", text: "We do not collect your precise GPS location." },
      { type: "h4", text: "7.2 Notification information" },
      {
        type: "p",
        text: "If you enable push notifications, we may collect and store your device's notification token (such as an FCM token) in order to deliver notifications to your device. This token is used solely for notification delivery and related functionality.",
      },
      { type: "h4", text: "7.3 Login history" },
      {
        type: "p",
        text: "To help protect your account and detect unauthorized access, we may maintain records of account sign-ins, including information such as:",
      },
      {
        type: "ul",
        items: [
          "Login date and time",
          "Approximate login location (where derived from network information)",
          "Device or browser information used during login",
        ],
      },
      { type: "p", text: "This information is used for security, fraud prevention, and account protection." },
      { type: "h4", text: "7.4 Analytics and performance information" },
      {
        type: "p",
        text: "We may collect information about how the Services are used in order to understand performance, diagnose issues, and improve user experience. This may include:",
      },
      { type: "ul", items: ["Feature usage", "Performance metrics", "Crash reports", "Error logs", "General usage statistics"] },
      {
        type: "p",
        text: "Analytics information is used to improve the reliability, functionality, and quality of Alfaz.",
      },
      { type: "h4", text: "7.5 Location information" },
      {
        type: "p",
        text: "Alfaz does not collect or track your precise GPS location. The country associated with your profile is information that you choose to provide. For security purposes, limited approximate location information may be inferred from network information (such as IP address) during account access, solely for purposes such as fraud detection, security monitoring, and abuse prevention.",
      },
      { type: "h4", text: "7.6 Cookies and similar technologies" },
      { type: "p", text: "Alfaz may use cookies and similar technologies to:" },
      {
        type: "ul",
        items: [
          "Keep you signed in.",
          "Remember your preferences.",
          "Maintain secure sessions.",
          "Improve website functionality.",
          "Understand how the Services are used.",
        ],
      },
      {
        type: "p",
        text: "Additional information about cookies and similar technologies is available in our Cookie Policy.",
      },
    ],
  },
  {
    id: "sec-8",
    number: 8,
    title: "Why we process your information",
    blocks: [
      {
        type: "principle",
        text: "We collect information only for legitimate purposes related to operating, securing, and improving Alfaz.",
      },
      { type: "h4", text: "8.1 To provide the Services" },
      { type: "p", text: "We use your information to:" },
      {
        type: "ul",
        items: [
          "Create and manage your account.",
          "Authenticate your identity when you sign in.",
          "Display your profile.",
          "Publish the content you choose to share.",
          "Enable social features such as comments, likes, follows, and messaging.",
          "Personalize your experience.",
          "Maintain your account preferences.",
        ],
      },
      { type: "p", text: "Without certain information, many core features of Alfaz would not function." },
      { type: "h4", text: "8.2 To protect your account and the platform" },
      { type: "p", text: "Security is one of our highest priorities. We use information to:" },
      {
        type: "ul",
        items: [
          "Detect suspicious login activity.",
          "Prevent unauthorized account access.",
          "Identify spam, bots, and fraudulent activity.",
          "Protect accounts from abuse.",
          "Investigate security incidents.",
          "Enforce our Terms of Service and Community Guidelines.",
        ],
      },
      {
        type: "p",
        text: "Information such as login history, device information, and security-related records helps us keep the platform secure.",
      },
      { type: "h4", text: "8.3 To deliver notifications and communications" },
      { type: "p", text: "We use your information to send communications related to your account and the Services. These may include:" },
      {
        type: "ul",
        items: [
          "Email verification.",
          "Password reset emails.",
          "Security alerts.",
          "Important service announcements.",
          "Moderation notifications.",
          "Responses to support requests.",
          "Push notifications (where enabled).",
        ],
      },
      {
        type: "p",
        text: "You may be able to manage certain notification preferences through your account settings as those options become available.",
      },
      { type: "h4", text: "8.4 To improve Alfaz" },
      { type: "p", text: "We continually improve Alfaz based on how the Services are used. Information may be used to:" },
      {
        type: "ul",
        items: [
          "Understand feature usage.",
          "Improve performance.",
          "Diagnose technical problems.",
          "Fix bugs.",
          "Improve reliability.",
          "Develop new features.",
          "Enhance the user experience.",
        ],
      },
      { type: "p", text: "Where reasonably possible, we use aggregated or statistical information for these purposes." },
      { type: "h4", text: "8.5 To support the community" },
      { type: "p", text: "We use information to help maintain a respectful and safe environment. This includes:" },
      {
        type: "ul",
        items: [
          "Reviewing reports submitted by users.",
          "Investigating policy violations.",
          "Enforcing Community Guidelines.",
          "Preventing harassment and abuse.",
          "Protecting creators and readers.",
          "Detecting copyright infringement and other misuse.",
        ],
      },
      { type: "h4", text: "8.6 To comply with legal obligations" },
      { type: "p", text: "In certain circumstances, we may process information to:" },
      {
        type: "ul",
        items: [
          "Comply with applicable laws and regulations.",
          "Respond to lawful requests from competent authorities.",
          "Protect the rights, safety, and security of users, Alfaz, and others.",
          "Resolve legal disputes.",
          "Enforce our legal agreements.",
        ],
      },
      { type: "h4", text: "8.7 Research, analytics, and platform development" },
      {
        type: "p",
        text: "We may use analytics and performance information to better understand how Alfaz is used. This information helps us:",
      },
      {
        type: "ul",
        items: [
          "Measure platform performance.",
          "Identify areas for improvement.",
          "Evaluate new features.",
          "Improve accessibility.",
          "Enhance overall platform quality.",
        ],
      },
      { type: "p", text: "Where practical, we use information in aggregated or de-identified form for these purposes." },
      { type: "h4", text: "8.8 Future features" },
      {
        type: "p",
        text: "As Alfaz evolves, we may introduce new features or services that require additional processing of information. If those features materially change how personal information is collected or used, we will update this Privacy Policy and, where required by law, provide appropriate notice or obtain your consent.",
      },
    ],
  },
  {
    id: "sec-9",
    number: 9,
    title: "Our approach to sharing information",
    blocks: [
      {
        type: "principle",
        text: "We share information only when necessary to operate Alfaz, comply with the law, protect our users, or with your direction.",
      },
      {
        type: "p",
        text: "Alfaz does not sell your personal information to third parties. We do not rent personal information or disclose it for unrelated advertising purposes. We share information only in the circumstances described in this Privacy Policy.",
      },
      { type: "h4", text: "9.1 Information shared with other users" },
      {
        type: "p",
        text: "Because Alfaz is a social platform for poetry and literature, certain information is visible to other users by design. This may include:",
      },
      {
        type: "ul",
        items: [
          "Display Name",
          "Username",
          "Profile Picture",
          "Bio",
          "Country (if displayed on your profile)",
          "Published Kalams, poems, Shayari, quotes, images, audio, and other content you choose to publish",
          "Public comments",
          "Public interactions",
          "Public follower and following relationships (where applicable)",
        ],
      },
      {
        type: "p",
        text: "Only information intended to be public is visible to other users. Your email address, password, date of birth, login history, notification tokens, and other private account information are not publicly displayed.",
      },
      { type: "h4", text: "9.2 Service providers" },
      {
        type: "p",
        text: "To operate and improve Alfaz, we use trusted third-party service providers that perform services on our behalf. Depending on the Services you use, these providers may process information for purposes such as:",
      },
      {
        type: "ul",
        items: [
          "Cloud data storage.",
          "Database hosting.",
          "Media storage and delivery.",
          "Push notifications.",
          "Analytics.",
          "Performance monitoring.",
          "Infrastructure and security.",
        ],
      },
      {
        type: "p",
        text: "These providers are permitted to process information only as necessary to provide their services to Alfaz and in accordance with applicable legal and contractual obligations.",
      },
      { type: "h4", text: "9.3 Current service providers" },
      { type: "p", text: "At the time of this version of the Privacy Policy, Alfaz uses services including:" },
      {
        type: "ul",
        items: [
          "MongoDB Atlas for application and database hosting.",
          "Cloudinary for media storage and delivery.",
          "Firebase Cloud Messaging (FCM) for push notifications.",
          "Google Analytics for usage analytics.",
          "OpenTelemetry and SigNoz for monitoring, diagnostics, and performance analysis.",
        ],
      },
      {
        type: "p",
        text: "As Alfaz grows, additional providers may be introduced to support new features or improve the Services. We will update this Privacy Policy where those changes materially affect how personal information is processed.",
      },
      { type: "h4", text: "9.4 Legal requirements" },
      { type: "p", text: "We may disclose information where we reasonably believe doing so is necessary to:" },
      {
        type: "ul",
        items: [
          "Comply with applicable laws.",
          "Respond to valid legal requests or court orders.",
          "Protect the rights, property, or safety of Alfaz, our users, or others.",
          "Investigate fraud, abuse, or unlawful activity.",
          "Enforce our Terms of Service or other policies.",
        ],
      },
      {
        type: "p",
        text: "Where legally permitted and reasonably practicable, we may notify affected users before disclosing their information.",
      },
      { type: "h4", text: "9.5 Business changes" },
      {
        type: "p",
        text: "If Alfaz is involved in a merger, acquisition, investment, reorganization, sale of assets, or similar business transaction, user information may be transferred as part of that transaction. If such a transfer materially affects your privacy rights, we will make reasonable efforts to notify users as required by applicable law.",
      },
      { type: "h4", text: "9.6 With your direction" },
      { type: "p", text: "We may share information when you specifically request or authorize us to do so. Examples include:" },
      {
        type: "ul",
        items: [
          "Connecting with third-party services you choose to use.",
          "Sharing information at your request.",
          "Participating in features that require your consent.",
        ],
      },
      { type: "h4", text: "9.7 What we do not do" },
      { type: "p", text: "To help users clearly understand our privacy practices, Alfaz does not:" },
      {
        type: "ul",
        items: [
          "Sell your personal information.",
          "Sell your email address.",
          "Sell your private messages.",
          "Sell your login history.",
          "Sell your notification tokens.",
          "Publish your password or password hash.",
          "Publicly display your email address or date of birth.",
          "Collect precise GPS location data.",
        ],
      },
      { type: "h4", text: "9.8 International data processing" },
      {
        type: "p",
        text: "Because Alfaz is available worldwide and relies on internationally recognized cloud service providers, your information may be processed in countries other than the one in which you reside. Where required by applicable law, we will take reasonable measures to help ensure that such processing is subject to appropriate safeguards.",
      },
    ],
  },
  {
    id: "sec-10",
    number: 10,
    title: "Protecting your information",
    blocks: [
      { type: "principle", text: "Security is essential to protecting creativity and trust." },
      {
        type: "p",
        text: "Alfaz takes reasonable technical and organizational measures to protect the information entrusted to us. While no online service can guarantee absolute security, we continuously work to reduce risks and protect user information from unauthorized access, misuse, alteration, or disclosure.",
      },
      { type: "h4", text: "10.1 Password security" },
      {
        type: "p",
        text: "Your account password is not stored in readable form. When you create or update your password, it is processed using secure cryptographic hashing methods before being stored. Alfaz does not store or have access to your original password. Because of this:",
      },
      {
        type: "ul",
        items: [
          "We cannot view your password.",
          "We will never ask you to provide your password.",
          "You should keep your login credentials confidential.",
        ],
      },
      { type: "h4", text: "10.2 Account authentication" },
      {
        type: "p",
        text: "Alfaz uses authentication mechanisms designed to securely manage account access. Authentication technologies may include:",
      },
      {
        type: "ul",
        items: ["Secure session management.", "Token-based authentication systems.", "Security checks to help prevent unauthorized access."],
      },
      { type: "p", text: "These systems help ensure that only authorized users can access their accounts." },
      { type: "h4", text: "10.3 Data protection measures" },
      { type: "p", text: "Depending on the nature of the information and the risks involved, Alfaz may use measures such as:" },
      {
        type: "ul",
        items: [
          "Secure data storage practices.",
          "Access controls.",
          "Authentication protections.",
          "Monitoring and logging.",
          "Security updates.",
          "Abuse detection mechanisms.",
          "Technical safeguards provided by trusted infrastructure providers.",
        ],
      },
      { type: "h4", text: "10.4 Infrastructure security" },
      {
        type: "p",
        text: "Alfaz relies on trusted technology providers for certain infrastructure services, including database hosting, media storage, notifications, analytics, and monitoring. These providers maintain their own security practices designed to protect the services they provide. Alfaz works to select reputable providers and configure services responsibly.",
      },
      { type: "h4", text: "10.5 Security monitoring" },
      { type: "p", text: "To maintain reliability and detect issues, Alfaz may use monitoring and diagnostic tools. These may collect technical information such as:" },
      { type: "ul", items: ["Error logs.", "Performance information.", "Application events.", "Service health metrics.", "Crash reports."] },
      { type: "p", text: "This information helps us:" },
      { type: "ul", items: ["Identify technical problems.", "Improve reliability.", "Investigate security issues.", "Maintain platform performance."] },
    ],
  },
  {
    id: "sec-11",
    number: 11,
    title: "Data retention",
    blocks: [
      { type: "principle", text: "We retain information only for as long as necessary for legitimate purposes." },
      { type: "p", text: "The period for which we keep information depends on:" },
      { type: "ul", items: ["The type of information.", "Why it was collected.", "Legal requirements.", "Security needs.", "Operational requirements."] },
      { type: "h4", text: "11.1 Active account information" },
      { type: "p", text: "Information associated with your account may be retained while your account remains active. This includes information such as:" },
      { type: "ul", items: ["Profile information.", "Account details.", "Published content.", "Account settings."] },
      { type: "h4", text: "11.2 Published content" },
      { type: "p", text: "Content you publish on Alfaz may remain available until:" },
      { type: "ul", items: ["You remove it.", "Your account is deleted.", "Alfaz removes it due to policy violations or legal requirements."] },
      { type: "h4", text: "11.3 Deleted content and backups" },
      {
        type: "p",
        text: "When you delete content or your account, removal from public access may occur immediately or within a reasonable timeframe. However, some information may continue to exist temporarily in:",
      },
      { type: "ul", items: ["Backup systems.", "Security records.", "Moderation records.", "Technical logs."] },
      { type: "p", text: "This retention may be necessary for:" },
      { type: "ul", items: ["Recovery purposes.", "Preventing abuse.", "Investigating violations.", "Meeting legal obligations."] },
      { type: "h4", text: "11.4 Abuse prevention and legal records" },
      { type: "p", text: "Alfaz may retain limited information after deletion when reasonably necessary to:" },
      { type: "ul", items: ["Prevent repeated abuse.", "Enforce platform rules.", "Protect users.", "Resolve disputes.", "Comply with legal requirements."] },
      { type: "p", text: "Such information is retained only for as long as reasonably necessary for those purposes." },
      { type: "h4", text: "11.5 Analytics and technical data" },
      { type: "p", text: "Technical information such as performance data, crash reports, and analytics information may be retained for periods necessary to analyze trends, improve the Services, and maintain platform reliability." },
      { type: "h4", text: "11.6 Media storage" },
      {
        type: "p",
        text: "Media files uploaded to Alfaz, such as images or audio associated with Kalams, may be stored through third-party media storage providers. When content is deleted, removal from active systems may occur promptly, while limited copies may remain temporarily in backups or systems where retention is necessary.",
      },
    ],
  },
  {
    id: "sec-12",
    number: 12,
    title: "Your privacy rights",
    blocks: [
      { type: "principle", text: "Your information should remain under your control." },
      {
        type: "p",
        text: "Depending on applicable laws and your location, you may have certain rights regarding your personal information. Alfaz aims to provide reasonable ways for users to access, manage, and control their information.",
      },
      { type: "h4", text: "12.1 Access to your information" },
      { type: "p", text: "You may request information about the personal data associated with your Alfaz account. This may include information such as:" },
      { type: "ul", items: ["Account details.", "Profile information.", "Content associated with your account.", "Certain account activity information."] },
      { type: "p", text: "We may require verification of your identity before processing such requests to protect account security." },
      { type: "h4", text: "12.2 Correcting your information" },
      { type: "p", text: "You may update or correct certain account information through your account settings. This may include:" },
      { type: "ul", items: ["Name.", "Username (where available).", "Profile picture.", "Bio.", "Country.", "Other profile details."] },
      { type: "p", text: "If you are unable to update certain information directly, you may contact Alfaz for assistance." },
      { type: "h4", text: "12.3 Managing your public profile" },
      {
        type: "p",
        text: "Because Alfaz is designed as a creative discovery platform, profiles are public by default. You can control the information you choose to publish through your profile and content settings. You decide:",
      },
      { type: "ul", items: ["What creative works you publish.", "What information you add to your profile.", "Whether to update or remove your published content."] },
      {
        type: "p",
        text: "Information that is intentionally public may remain visible to other users until you remove it or Alfaz takes action according to its policies.",
      },
      { type: "h4", text: "12.4 Managing your content" },
      { type: "p", text: "You maintain control over the content you create and publish on Alfaz. Where available, you may:" },
      { type: "ul", items: ["Edit your Kalams.", "Delete your Kalams.", "Remove uploaded media.", "Manage your creative contributions."] },
      {
        type: "p",
        text: "Deleting content may not immediately remove all copies from backups, security systems, or records retained for legitimate purposes described in this Privacy Policy.",
      },
      { type: "h4", text: "12.5 Account deletion" },
      { type: "p", text: "You may request deletion of your Alfaz account. When an account deletion request is processed, we may:" },
      {
        type: "ul",
        items: [
          "Remove or anonymize personal information where appropriate.",
          "Remove your public profile from active access.",
          "Handle your published content according to your deletion choices and our retention obligations.",
        ],
      },
      { type: "p", text: "Some information may be retained when necessary for:" },
      { type: "ul", items: ["Legal compliance.", "Security purposes.", "Abuse prevention.", "Fraud prevention.", "Resolving disputes."] },
      { type: "h4", text: "12.6 Data export" },
      {
        type: "p",
        text: "Where technically feasible and applicable, you may request a copy of certain personal information associated with your account. The availability and format of exported information may depend on the type of information requested, technical limitations, and applicable legal requirements.",
      },
      { type: "h4", text: "12.7 Communication preferences" },
      { type: "p", text: "You may have choices regarding certain communications from Alfaz. These may include:" },
      { type: "ul", items: ["Notification preferences.", "Marketing communications (where applicable).", "Optional updates."] },
      { type: "p", text: "Certain communications cannot be disabled because they are necessary for operating the account, including:" },
      { type: "ul", items: ["Security alerts.", "Password reset messages.", "Important legal or service notifications."] },
      { type: "h4", text: "12.8 Account security controls" },
      { type: "p", text: "You are responsible for maintaining the security of your account. We recommend that you:" },
      { type: "ul", items: ["Use a strong password.", "Keep your email account secure.", "Do not share login credentials.", "Report suspicious account activity."] },
      { type: "p", text: "If you believe your account has been compromised, contact Alfaz as soon as possible." },
      { type: "h4", text: "12.9 Exercising your rights" },
      { type: "p", text: "To make privacy-related requests, you may contact us at:" },
      { type: "contact", email: "shadaan@alfaz.live" },
      {
        type: "p",
        text: "When submitting a request, please provide enough information for us to verify your identity and understand your request. We aim to respond to legitimate requests within a reasonable timeframe and in accordance with applicable laws.",
      },
      { type: "h4", text: "12.10 Limitations" },
      { type: "p", text: "Certain requests may be limited or declined where permitted by law, including situations where:" },
      {
        type: "ul",
        items: [
          "We cannot verify your identity.",
          "The request affects the rights of others.",
          "We are required to retain information for legal or security reasons.",
          "Processing the request would create an unreasonable burden.",
        ],
      },
    ],
  },
  {
    id: "sec-13",
    number: 13,
    title: "Cookies and similar technologies",
    blocks: [
      {
        type: "principle",
        text: "We use cookies and similar technologies to make Alfaz work better, keep it secure, and understand how it is used.",
      },
      {
        type: "p",
        text: "Cookies are small text files and similar technologies that are stored on or accessed through your device when you use the Services. They help us provide core functionality, improve your experience, and understand how Alfaz is performing. For more detailed information about the cookies and similar technologies we use, please refer to our Cookie Policy.",
      },
      { type: "h4", text: "13.1 Essential cookies" },
      { type: "p", text: "Some cookies are necessary for the operation of Alfaz and cannot reasonably be disabled without affecting core functionality. These cookies may be used to:" },
      {
        type: "ul",
        items: [
          "Keep you signed in.",
          "Maintain secure sessions.",
          "Remember security-related settings.",
          "Help prevent fraudulent activity.",
          "Support core website functionality.",
        ],
      },
      { type: "h4", text: "13.2 Functional cookies" },
      { type: "p", text: "Where applicable, we may use cookies or similar technologies to:" },
      { type: "ul", items: ["Remember your preferences.", "Improve usability.", "Personalize certain aspects of your experience.", "Enhance convenience when using the Services."] },
      { type: "h4", text: "13.3 Analytics technologies" },
      { type: "p", text: "Alfaz uses analytics tools to better understand how users interact with the Services. These tools help us understand information such as:" },
      { type: "ul", items: ["Which features are used most often.", "Overall platform performance.", "General usage trends.", "Error rates.", "Technical performance."] },
      {
        type: "p",
        text: "Analytics information helps us improve reliability, usability, accessibility, and future development. Where reasonably possible, we use aggregated or de-identified information for analytics purposes.",
      },
      { type: "h4", text: "13.4 Performance monitoring" },
      { type: "p", text: "To maintain a reliable platform, Alfaz uses monitoring and diagnostic technologies. These may help us:" },
      {
        type: "ul",
        items: [
          "Detect service disruptions.",
          "Diagnose technical issues.",
          "Improve application stability.",
          "Monitor system health.",
          "Investigate operational incidents.",
        ],
      },
      {
        type: "p",
        text: "These tools are intended to improve the quality and security of the Services rather than to monitor individual users.",
      },
      { type: "h4", text: "13.5 Current analytics and monitoring providers" },
      { type: "p", text: "At the time of this version of the Privacy Policy, Alfaz uses technologies including:" },
      { type: "ul", items: ["Google Analytics", "OpenTelemetry", "SigNoz"] },
      {
        type: "p",
        text: "These services help us understand platform usage, measure performance, detect technical issues, and improve the overall reliability of Alfaz. As our Services evolve, we may change or add analytics and monitoring providers. We will update this Privacy Policy where those changes materially affect how personal information is processed.",
      },
      { type: "h4", text: "13.6 Your choices" },
      { type: "p", text: "Depending on your browser, device, and applicable laws, you may have options to:" },
      { type: "ul", items: ["Control certain cookies.", "Clear stored cookies.", "Manage browser cookie settings.", "Control certain analytics preferences where available."] },
      { type: "p", text: "Please note that disabling essential cookies may affect the functionality or security of the Services." },
      { type: "h4", text: "13.7 Do Not Track" },
      {
        type: "p",
        text: 'Some web browsers offer a "Do Not Track" (DNT) setting. Because there is currently no universally accepted standard for interpreting DNT signals, Alfaz does not currently respond differently to browser-based DNT requests. If this practice changes in the future, we will update this Privacy Policy.',
      },
    ],
  },
  {
    id: "sec-14",
    number: 14,
    title: "International users",
    blocks: [
      {
        type: "p",
        text: "Alfaz is operated from India and is available to users around the world. If you access or use the Services from outside India, you understand that your information may be processed, stored, or transferred to countries where Alfaz or its trusted service providers operate.",
      },
      {
        type: "p",
        text: "Where required by applicable law, Alfaz will take reasonable measures to help ensure that cross-border transfers of personal information are protected by appropriate safeguards. You are responsible for complying with any local laws that apply to your use of the Services.",
      },
    ],
  },
  {
    id: "sec-15",
    number: 15,
    title: "Children's privacy",
    blocks: [
      {
        type: "p",
        text: "Alfaz is intended for users who are 16 years of age or older. We do not knowingly permit individuals under the age of 16 to create an account or use the Services.",
      },
      {
        type: "p",
        text: "If we become aware that personal information has been collected from a person under the minimum age requirement in violation of this Policy, we will take reasonable steps to remove the account and associated personal information, unless retention is required by law.",
      },
      { type: "p", text: "If you believe that someone under the required age has created an account on Alfaz, please contact us so we can investigate." },
    ],
  },
  {
    id: "sec-16",
    number: 16,
    title: "Changes to this privacy policy",
    blocks: [
      { type: "p", text: "As Alfaz grows, we may update this Privacy Policy to reflect:" },
      {
        type: "ul",
        items: [
          "New features and services.",
          "Changes in technology.",
          "Improvements to our privacy practices.",
          "Legal or regulatory requirements.",
          "Operational changes.",
        ],
      },
      {
        type: "p",
        text: 'When changes are material, we will make reasonable efforts to notify users through appropriate channels, such as the website, application, or email where appropriate. The "Last Updated" date at the beginning of this Privacy Policy will always indicate the latest version.',
      },
      {
        type: "p",
        text: "Your continued use of Alfaz after the updated Privacy Policy becomes effective constitutes acceptance of the revised Policy, except where applicable law requires additional notice or consent.",
      },
    ],
  },
  {
    id: "sec-17",
    number: 17,
    title: "Contact us",
    blocks: [
      {
        type: "p",
        text: "If you have questions about this Privacy Policy, your personal information, or your privacy rights, you may contact Alfaz at:",
      },
      { type: "contact", email: "shadaan@alfaz.live" },
      { type: "p", text: "We will make reasonable efforts to respond to legitimate privacy-related requests in accordance with applicable law." },
    ],
  },
  {
    id: "sec-18",
    number: 18,
    title: "Effective date",
    blocks: [
      {
        type: "p",
        text: "This Privacy Policy becomes effective on the Effective Date specified at the beginning of this document. It remains in effect until replaced by a newer version.",
      },
    ],
  },
  {
    id: "sec-19",
    number: 19,
    title: "Our commitment to your privacy",
    blocks: [
      { type: "p", text: "Thank you for trusting Alfaz with your creative journey." },
      {
        type: "p",
        text: "Every poem, every Kalam, every story, and every meaningful interaction contributes to the community we are building together. We believe that creativity flourishes when people feel safe, respected, and informed. Protecting your personal information is an important part of that commitment.",
      },
      {
        type: "p",
        text: "As Alfaz grows, we will continue working to improve our privacy practices, strengthen our security, and communicate openly about how your information is handled.",
      },
      { type: "p", text: "Thank you for being a part of the Alfaz community." },
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

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(PRIVACY_SECTIONS[0].id);
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
              const isActive = d.id === "privacy";
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
              {PRIVACY_SECTIONS.map((s) => {
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
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="mt-3 text-[14px] text-[#7a6f52] max-w-[52ch] [text-wrap:pretty]">
            "How Alfaz collects, uses, stores, protects, and handles your information across our website, application, and related services."
          </p>

          <div className="mt-10 space-y-14">
            {PRIVACY_SECTIONS.map((s) => (
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