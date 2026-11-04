/**
 * Alfaz Help Center
 * -----------------------------------------------------------------------------
 * Single-file React component. Content comes from Alfaz_Help_Center2.txt
 * (all articles, FAQs and troubleshooting entries live in the CONTENT section
 * below, so editing the help text means editing plain data, not markup).
 *
 * All Tailwind colors, fonts and font sizes are prefixed with `hc-`
 * (e.g. bg-hc-primary, font-hc-headline-lg, text-hc-body-md) so they never
 * clash with your main Alfaz theme. Add helpcenter-theme.js's values to
 * tailwind.config.js (see your merged config) and render <AlfazHelpCenter />.
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import logo from '../../public/logo2.svg'

const SUPPORT_EMAIL = "alfaz.platform@gmail.com";
const APP_URL = "https://alfaz.live";
const LOGO_URL = logo;

/* -------------------------------------------------------------------------- */
/*  CONTENT  (from Alfaz_Help_Center2.txt)                                     */
/* -------------------------------------------------------------------------- */

// block helpers: paragraph, bullets, numbered steps, callout note, settings path
const P = (v) => ({ t: "p", v });
const UL = (v) => ({ t: "ul", v });
const OL = (v) => ({ t: "ol", v });
const NOTE = (v) => ({ t: "note", v });
const PATH = (v) => ({ t: "path", v });

const NAV = [
  { path: "knowledge-base", label: "Knowledge Base" },
  { path: "privacypolicy", label: "Guides" },
  { path: "communityguidelines", label: "Community Guidelines" },
  { path: "contact-support", label: "Contact Support" },
];

const POPULAR_SEARCHES = [
  "Publishing a Kalam",
  "Verification Email",
  "Background Images",
  "Account Security",
  "Reporting Content",
];

const FIRST_KALAM_STEPS = [
  "Sign in to your Alfaz account.",
  "Visit the Kalam page.",
  "Give your Kalam a title using the title field.",
  "Write your poem, Shayari, quote, story, or other literary work using the content field.",
  "Apply as many styles as you like. You can also take the Kalam tour to get an idea of every feature.",
  "Choose a background (if available).",
  "See how your Kalam looks in the preview box.",
  "When you're ready, select Publish.",
];

const SECTIONS = [
  /* ---------------------------------------------------------------- 1 --- */
  {
    id: "getting-started",
    icon: "person_celebrate",
    title: "Getting Started",
    short: "Getting Started",
    description:
      "What Alfaz is, creating your account, choosing a username, verifying your email and logging in.",
    articles: [
      {
        id: "what-is-alfaz",
        title: "What is Alfaz?",
        blocks: [
          P("Alfaz is a social platform for poetry and literature."),
          P("It allows people to:"),
          UL([
            "Write and publish original poems, Shayari, Kalams, quotes, and other literary works.",
            "Discover creators from around the world.",
            "Follow writers they enjoy.",
            "Join conversations through comments and messages.",
            "Become part of a community that celebrates creativity and meaningful expression.",
          ]),
          P(
            "Whether you're an experienced poet or someone sharing your first few lines, Alfaz is a place where your words can find an audience."
          ),
        ],
      },
      {
        id: "create-account",
        title: "Creating an Account",
        blocks: [
          P("Creating an Alfaz account is simple."),
          OL([
            "Open alfaz.live.",
            "Select Create Account.",
            "Enter your name, email address, and password.",
            "Verify your email address.",
            "Complete your profile (optional but recommended).",
            "Start exploring the community.",
          ]),
        ],
      },
      {
        id: "who-can-use",
        title: "Who Can Use Alfaz?",
        blocks: [
          P("To create an Alfaz account, you must be at least 18 years old."),
          NOTE(
            "If you are under the minimum required age, you may not create or use an Alfaz account."
          ),
        ],
      },
      {
        id: "username",
        title: "Choosing a Username",
        blocks: [
          P("Your username helps other people find and recognize you."),
          P("A good username should:"),
          UL([
            "Be unique.",
            "Be easy to remember.",
            "Respect the rights of others.",
            "Avoid impersonating another person or organization.",
            "Follow the Community Guidelines.",
          ]),
          P(
            "If your preferred username is already taken, consider adding words or numbers that are meaningful to you."
          ),
        ],
      },
      {
        id: "profile",
        title: "Completing Your Profile",
        blocks: [
          P("Your profile helps readers and other creators learn more about you."),
          P("You can add information such as:"),
          UL(["Profile picture", "Bio", "Country", "Display name"]),
          P(
            "Profiles on Alfaz are public, allowing other users to discover creators through names and usernames."
          ),
          NOTE("Your email address and password are never displayed publicly."),
        ],
      },
      {
        id: "verify-email-start",
        title: "Verifying Your Email Address",
        blocks: [
          P(
            "Email verification helps protect your account and enables important features such as account recovery and security notifications."
          ),
          P("If you haven't received your verification email:"),
          UL([
            "Check your spam or junk folder.",
            "Confirm that you entered the correct email address.",
            "Request a new verification email from the login or account settings page.",
          ]),
        ],
      },
      {
        id: "logging-in",
        title: "Logging In",
        blocks: [
          P("To sign in to Alfaz:"),
          OL([
            "Visit alfaz.live.",
            "Enter your email address.",
            "Enter your password.",
            "Select Log In.",
          ]),
          P(
            "If you've forgotten your password, use the Forgot Password option to reset it securely."
          ),
        ],
      },
      {
        id: "secure-start",
        title: "Keeping Your Account Secure",
        blocks: [
          P("To help keep your account safe:"),
          UL([
            "Choose a strong, unique password.",
            "Never share your password with anyone.",
            "Be cautious of suspicious emails or messages asking for your login details.",
            "Log out of shared or public devices when you're finished.",
          ]),
          NOTE("Alfaz will never ask you to send your password by email or direct message."),
        ],
      },
    ],
    faqs: [],
  },

  /* ---------------------------------------------------------------- 2 --- */
  {
    id: "publishing",
    icon: "ink_pen",
    title: "Publishing Your Creativity",
    short: "Kalam & Publishing",
    description:
      "Publishing a Kalam, choosing backgrounds, editing and deleting, uploading images and audio, and tips for a great piece.",
    articles: [
      {
        id: "first-kalam",
        title: "Creating Your First Kalam",
        blocks: [
          P(
            "Publishing your first Kalam is one of the best ways to introduce yourself to the Alfaz community."
          ),
          P("To publish a Kalam:"),
          OL(FIRST_KALAM_STEPS),
          P("Once published, your Kalam becomes visible for everyone."),
        ],
      },
      {
        id: "backgrounds",
        title: "Choosing a Background",
        blocks: [
          P("Backgrounds help present your writing beautifully."),
          P("There are two ways to choose a background for your Kalam:"),
          UL(["Select from built-in backgrounds.", "Upload your own background image."]),
          P(
            "Choose backgrounds that enhance readability and complement your writing without making the text difficult to read."
          ),
        ],
      },
      {
        id: "edit-kalam",
        title: "Editing a Kalam",
        blocks: [
          P("Found a typo? Want to improve a line? You can edit your Kalam after publishing."),
          OL([
            "Visit the Collection tab on the Kalam page.",
            "Find the Kalam you want to edit.",
            "Click the three dots in the upper-right corner.",
            "Select Edit.",
            "Make your changes.",
            "Save your updates.",
          ]),
          P("Your edited version will replace the previous version on Alfaz."),
        ],
      },
      {
        id: "delete-kalam",
        title: "Deleting a Kalam",
        blocks: [
          P(
            "If you no longer wish to keep a Kalam on Alfaz, you can delete it at any time."
          ),
          P("To delete a Kalam:"),
          OL([
            "Visit the Kalam page.",
            "Go to the Collection tab using the navbar.",
            "Find the Kalam you want to delete.",
            "Click the three dots in the upper-right corner.",
            "Choose Delete from the menu.",
            "Confirm your decision.",
          ]),
          P("Once deleted, the Kalam will no longer be publicly visible."),
          NOTE(
            "Temporary backups may be retained for a limited period for security, recovery, abuse prevention, or legal compliance, as described in our Privacy Policy."
          ),
        ],
      },
      {
        id: "uploading-images",
        title: "Uploading Images",
        blocks: [
          P(
            "Depending on the features available, Alfaz allows creators to upload images, such as custom backgrounds for their Kalams and albums."
          ),
          P("When uploading images:"),
          UL([
            "Ensure you have the right to use the image.",
            "Avoid uploading content that infringes another person's copyright.",
            "Follow the Community Guidelines.",
            "Respect the privacy of others.",
          ]),
          P("Images that violate our policies may be removed."),
        ],
      },
      {
        id: "audio-support",
        title: "Audio Support",
        blocks: [
          P("Some features may allow creators to add audio to their literary works."),
          P("If audio publishing is available:"),
          UL([
            "Ensure you own the recording or have permission to use it.",
            "Avoid copyrighted recordings unless you have the necessary rights or legal permission.",
            "Follow all applicable Community Guidelines.",
          ]),
          P("Support for additional audio features may expand over time."),
        ],
      },
      {
        id: "great-kalam",
        title: "Tips for a Great Kalam",
        blocks: [
          P(
            "A memorable Kalam isn't always the longest one — it is the one that connects with readers. A few suggestions:"
          ),
          UL([
            "Focus on clarity and emotion.",
            "Read your work aloud before publishing.",
            "Check spelling and punctuation.",
            "Choose a background that complements your writing.",
            "Give your work a final review before selecting Publish.",
          ]),
          NOTE(
            "Most importantly, write in your own voice. Originality is one of the things that makes the Alfaz community special."
          ),
        ],
      },
    ],
    faqs: [
      {
        id: "faq-edit",
        q: "Can I edit my Kalam after publishing?",
        blocks: [
          P(
            "Yes. You can edit your published Kalam at any time unless a specific feature or moderation action temporarily restricts editing."
          ),
        ],
      },
      {
        id: "faq-delete",
        q: "Can I delete my Kalam?",
        blocks: [P("Yes. You can remove your own Kalams whenever you choose.")],
      },
      {
        id: "faq-cant-publish",
        q: "Why can't I publish?",
        blocks: [
          P("If you're unable to publish, possible reasons include:"),
          UL([
            "Your email address has not been verified.",
            "Your account is temporarily restricted.",
            "The content violates our Community Guidelines.",
            "A temporary technical issue is affecting the service.",
          ]),
          P(`If the problem continues, please contact us at ${SUPPORT_EMAIL}.`),
        ],
      },
      {
        id: "faq-someone-elses-poem",
        q: "Can I upload someone else's poem?",
        blocks: [
          P(
            "Only if you have the legal right or permission to do so, or if the work is in the public domain or another legal exception applies."
          ),
          P(
            "Please review our Copyright & Intellectual Property Policy before publishing content created by others."
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 3 --- */
  {
    id: "community",
    icon: "diversity_3",
    title: "Discovering, Connecting & Communities",
    short: "Community",
    description:
      "Finding and following creators, public profiles, notifications, blocking, and reporting users or content.",
    articles: [
      {
        id: "finding-creators",
        title: "Finding Creators",
        blocks: [
          P(
            "One of the best ways to enjoy Alfaz is by discovering new writers and readers."
          ),
          P("You can search for people using:"),
          UL(["Their username.", "Their display name."]),
          P("Search results may include public profiles that match your search."),
        ],
      },
      {
        id: "following",
        title: "Following Creators",
        blocks: [
          P(
            "Following someone helps you stay connected with the writers whose work you enjoy."
          ),
          P(
            "When you follow a creator, you may see their latest public Kalams and other activity throughout the platform."
          ),
          NOTE("Following someone does not give them access to your private information."),
        ],
      },
      {
        id: "public-profiles",
        title: "Public Profiles",
        blocks: [
          P("Profiles on Alfaz are public. A public profile may display information such as:"),
          UL([
            "Display name.",
            "Username.",
            "Profile picture.",
            "Bio.",
            "Published public Kalams.",
            "Follower and following counts (where available).",
          ]),
          NOTE(
            "Your email address, password, and other sensitive account information are never shown publicly."
          ),
        ],
      },
      {
        id: "notifications",
        title: "Notifications",
        blocks: [
          P("Notifications help you stay informed about activity on Alfaz."),
          P("Depending on your notification settings, you may receive notifications about:"),
          UL([
            "New followers.",
            "Likes.",
            "Comments.",
            "Replies.",
            "Messages.",
            "Community activity.",
            "Important account updates.",
            "Security-related alerts.",
          ]),
          P("You can manage notification preferences through your account settings."),
        ],
      },
      {
        id: "blocking",
        title: "Blocking Users",
        blocks: [
          P(
            "If another user is bothering you or making you uncomfortable, you can block them. Blocking a user helps you control your experience on Alfaz."
          ),
          P("Depending on the available features, a blocked user may no longer be able to:"),
          UL([
            "Interact with your profile in certain ways.",
            "View certain information that is restricted after blocking.",
          ]),
          NOTE("Blocking is private. Alfaz does not notify users when they have been blocked."),
        ],
      },
      {
        id: "reporting-overview",
        title: "Reporting Users or Content",
        blocks: [
          P(
            "If you encounter content or behaviour that violates our policies, please report it. Examples include:"
          ),
          UL([
            "Harassment.",
            "Hate speech.",
            "Spam.",
            "Impersonation.",
            "Copyright infringement.",
            "Other violations of the Community Guidelines.",
          ]),
          P("Our moderation team reviews reports and takes appropriate action where necessary."),
          NOTE(
            "Submitting a report does not automatically result in enforcement action, as each report is reviewed individually."
          ),
        ],
      },
    ],
    faqs: [
      {
        id: "faq-find-profile",
        q: "Can anyone find my profile?",
        blocks: [
          P(
            "Yes. Public profiles may appear in search results when someone searches using your display name or username."
          ),
        ],
      },
      {
        id: "faq-block-notify",
        q: "Will someone know if I block them?",
        blocks: [P("No. Alfaz does not notify users when they have been blocked.")],
      },
      {
        id: "faq-after-report",
        q: "What happens after I report someone?",
        blocks: [
          P(
            "Our moderation team reviews each report individually. If we determine that our policies have been violated, appropriate action may be taken."
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 4 --- */
  {
    id: "privacy",
    icon: "shield_person",
    title: "Privacy, Security & Account Management",
    short: "Account & Security",
    description:
      "Passwords, email verification, login history and active sessions, downloading your data, and deleting your account.",
    articles: [
      {
        id: "change-password",
        title: "Changing Your Password",
        blocks: [
          P(
            "Keeping your password up to date is one of the easiest ways to protect your account."
          ),
          P("To change your password:"),
          OL([
            "Open Settings.",
            "Select Security.",
            "Choose Change Password.",
            "Enter your current password.",
            "Enter your new password.",
            "Confirm the new password.",
            "Save your changes.",
          ]),
          P(
            "For your security, choose a strong and unique password that you don't use on other websites."
          ),
        ],
      },
      {
        id: "forgot-password",
        title: "Forgot Your Password?",
        blocks: [
          P("If you can't remember your password:"),
          OL([
            "Select Forgot Password on the login screen.",
            "Enter your registered email address.",
            "Follow the instructions sent to your email.",
            "Create a new password.",
          ]),
          P(
            "If you don't receive the email, check your spam or junk folder before requesting another reset email."
          ),
        ],
      },
      {
        id: "email-verification",
        title: "Email Verification",
        blocks: [
          P(
            "Verifying your email helps protect your account and enables important features such as account recovery and security notifications."
          ),
          P(
            "If your email is not yet verified, you can request a new verification email from your account settings or the login page."
          ),
        ],
      },
      {
        id: "login-history",
        title: "Login History & Active Sessions",
        blocks: [
          P(
            "You can review recent access to your account through Login History and Active Sessions. Depending on the available features, you may see information such as:"
          ),
          UL([
            "Device type.",
            "Browser.",
            "Approximate location (derived from IP address, not GPS).",
            "Date and time of the login.",
            "Whether the session is currently active.",
          ]),
          NOTE(
            "If you don't recognize a device or session, sign out of it immediately and change your password."
          ),
        ],
      },
      {
        id: "manage-sessions",
        title: "Managing Active Sessions",
        blocks: [
          P("To help keep your account secure, you can manage your active sessions. Depending on the available features, you may be able to:"),
          UL([
            "View devices currently signed in.",
            "Sign out of individual devices.",
            "Sign out of all other devices at once.",
          ]),
          P("This is especially useful if you've signed in on a shared or public computer."),
        ],
      },
      {
        id: "download-data",
        title: "Downloading Your Data",
        blocks: [
          P("You can request a copy of certain information associated with your Alfaz account. Depending on the available features, your download may include:"),
          UL([
            "Profile information.",
            "Published Kalams.",
            "Account settings.",
            "Other data associated with your account.",
          ]),
          P("Preparing your data may take some time, and you'll be notified when it's ready."),
        ],
      },
      {
        id: "delete-account",
        title: "Deleting Your Account",
        blocks: [
          P(
            "If you no longer wish to use Alfaz, you can request to delete your account from the DANGER ZONE section in Settings."
          ),
          P("Before deleting your account, remember:"),
          UL([
            "Your public profile will no longer be available.",
            "Your published Kalams will be removed from public view.",
            "Certain information may be retained for a limited period where required for security, abuse prevention, backup, or legal compliance, as explained in our Privacy Policy.",
          ]),
          NOTE("Account deletion may be permanent once completed."),
        ],
      },
      {
        id: "secure-account",
        title: "Keeping Your Account Secure",
        blocks: [
          P("A few simple ways to protect your account:"),
          UL([
            "Use a strong, unique password.",
            "Never share your password with anyone.",
            "Verify your email address.",
            "Review your active sessions regularly.",
            "Sign out of devices you no longer use.",
            "Be cautious of suspicious emails or messages asking for your login information.",
          ]),
          NOTE("Alfaz will never ask you to send your password by email or direct message."),
        ],
      },
    ],
    faqs: [
      {
        id: "faq-change-email",
        q: "Can I change my email address?",
        blocks: [P("No, you cannot change your email address.")],
      },
      {
        id: "faq-stay-signed-in",
        q: "Can I stay signed in?",
        blocks: [
          P(
            "Yes. Depending on your device and browser settings, Alfaz may keep you signed in until you choose to sign out or your session expires."
          ),
        ],
      },
      {
        id: "faq-someone-accessed",
        q: "What should I do if I think someone accessed my account?",
        blocks: [
          P("Immediately:"),
          OL([
            "Change your password.",
            "Review your active sessions.",
            "Sign out of unfamiliar devices.",
            "Contact Alfaz support if you believe your account has been compromised.",
          ]),
        ],
      },
      {
        id: "faq-location",
        q: "Does Alfaz know my exact location?",
        blocks: [
          P("No. Alfaz does not collect your precise GPS location."),
          P(
            "For security purposes, login history may display an approximate location based on your IP address, such as your city or state."
          ),
        ],
      },
      {
        id: "faq-recover-deleted",
        q: "Can I recover a deleted account?",
        blocks: [
          P(
            "Account recovery may not be possible once deletion has been completed. If you requested deletion by mistake, contact us as soon as possible. Recovery may only be possible before the deletion process is finalized."
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 5 --- */
  {
    id: "support",
    icon: "support_agent",
    title: "Reporting, Copyright & Getting Help",
    short: "Reporting & Help",
    description:
      "Reporting content or users, copyright questions, appeals, and how to contact the Alfaz team.",
    articles: [
      {
        id: "report-content",
        title: "Reporting Content",
        blocks: [
          P("If you see content that violates our policies, please report it via:"),
          PATH("Settings > Support & Feedback > Report Content"),
          P("You can report content for reasons including:"),
          UL([
            "Harassment",
            "Hate speech",
            "Spam",
            "Impersonation",
            "Copyright infringement",
            "Self-harm promotion",
            "Terrorism or extremist content",
            "Illegal content",
            "Other violations of our Community Guidelines",
          ]),
          NOTE(
            "Our moderation team reviews every report individually. Submitting a report does not automatically result in the removal of content."
          ),
        ],
      },
      {
        id: "report-user",
        title: "Reporting a User",
        blocks: [
          P(
            "If a user violates our policies or makes you feel unsafe, you can report their profile via:"
          ),
          PATH("Settings > Support & Feedback > Report User"),
          P("Reports help us maintain a safe, respectful, and welcoming community. Depending on the circumstances, we may:"),
          UL([
            "Review the reported account.",
            "Issue a warning.",
            "Remove violating content.",
            "Temporarily restrict the account.",
            "Suspend or permanently remove the account for serious or repeated violations.",
          ]),
        ],
      },
      {
        id: "copyright-questions",
        title: "Copyright Questions",
        blocks: [
          P(
            "If you believe someone has used your original work without permission, please review our Copyright Takedown Policy before submitting a report."
          ),
          P(
            "When submitting a copyright report, providing complete and accurate information helps us review your request more efficiently."
          ),
        ],
      },
      {
        id: "appeals",
        title: "Appeals",
        blocks: [
          P(
            "If you believe that moderation action was taken against your account or content in error, you may contact Alfaz to request a review."
          ),
          P("When submitting an appeal, include:"),
          UL([
            "Your username.",
            "A description of the issue.",
            "Any relevant information that may help us understand the situation.",
          ]),
          NOTE(
            "Submitting an appeal does not guarantee that the original decision will be changed, but we will review it fairly."
          ),
        ],
      },
      {
        id: "contacting-support",
        title: "Contacting Support",
        blocks: [
          P("If you need additional assistance, you can contact the Alfaz team."),
          P(`Email: ${SUPPORT_EMAIL}`),
          P("Please include as much information as possible so we can assist you more efficiently."),
        ],
      },
    ],
    faqs: [],
  },

  /* ---------------------------------------------------------------- 6 --- */
  {
    id: "troubleshooting",
    icon: "build",
    title: "Troubleshooting Common Issues",
    short: "Troubleshooting",
    description:
      "Quick fixes for sign-in problems, missing verification emails, publishing errors and bugs.",
    articles: [
      {
        id: "cant-sign-in",
        title: "I can't sign in",
        blocks: [
          P("Try the following:"),
          UL([
            "Check that your email address is correct.",
            "Make sure your password is correct.",
            "Reset your password if necessary.",
            "Verify your email address if required.",
            "Try signing in again after a few minutes if you're experiencing a temporary technical issue.",
          ]),
        ],
      },
      {
        id: "no-verification-email",
        title: "I didn't receive my verification email",
        blocks: [
          P("Before requesting another verification email:"),
          UL([
            "Check your spam or junk folder.",
            "Confirm that you entered the correct email address.",
            "Wait a few minutes, as email delivery may sometimes be delayed.",
          ]),
        ],
      },
      {
        id: "cant-publish",
        title: "I can't publish a Kalam",
        blocks: [
          P("Possible reasons include:"),
          UL([
            "Your email has not been verified.",
            "Your account is temporarily restricted.",
            "Your content violates our Community Guidelines.",
            "A temporary technical issue is affecting the service.",
          ]),
        ],
      },
      {
        id: "found-bug",
        title: "I found a bug",
        blocks: [
          P("We're always working to improve Alfaz. If you discover a bug or unexpected behavior, please report it via:"),
          PATH("Settings > Support & Feedback > Report a Problem"),
          P("and include:"),
          UL([
            "A description of the problem.",
            "Steps to reproduce it.",
            "Screenshots (if available).",
            "Your device and browser information.",
          ]),
        ],
      },
    ],
    faqs: [],
  },
];

const FAQ_TABS = [
  { key: "all", label: "All Questions" },
  { key: "publishing", label: "Kalam & Publishing" },
  { key: "community", label: "Community" },
  { key: "privacy", label: "Account & Security" },
];

// "Where Can I Learn More?" documents
const LEGAL_LINKS = [
  { path: "terms-of-service", label: "Terms of Service" },
  { path: "privacy-policy", label: "Privacy Policy" },
  { path: "cookie-policy", label: "Cookie Policy" },
  { path: "community-guidelines", label: "Community Guidelines" },
  { path: "copyright-ip-policy", label: "Copyright & IP Policy" },
  { path: "copyright-takedown-policy", label: "Copyright Takedown" },
];

// Community Guidelines page: assembled from the help content above
const COMMUNITY_RULES = [
  {
    icon: "badge",
    title: "Who can join, and how to present yourself",
    blocks: [
      P("You must be at least 18 years old to create or use an Alfaz account."),
      P("A good username:"),
      UL([
        "Is unique and easy to remember.",
        "Respects the rights of others.",
        "Avoids impersonating another person or organization.",
        "Follows the Community Guidelines.",
      ]),
    ],
  },
  {
    icon: "copyright",
    title: "Sharing images, audio and other people's work",
    blocks: [
      UL([
        "Ensure you have the right to use any image or recording you upload.",
        "Avoid content that infringes another person's copyright.",
        "Respect the privacy of others.",
        "Upload someone else's poem only if you have the legal right or permission, or if the work is in the public domain or another legal exception applies.",
      ]),
      NOTE("Images that violate our policies may be removed."),
    ],
  },
  {
    icon: "block",
    title: "Blocking is private",
    blocks: [
      P(
        "If another user is bothering you or making you uncomfortable, you can block them. Alfaz does not notify users when they have been blocked."
      ),
    ],
  },
  {
    icon: "flag",
    title: "Reporting content and users",
    blocks: [
      P("Report harassment, hate speech, spam, impersonation, copyright infringement, self-harm promotion, terrorism or extremist content, illegal content, or other violations of the Community Guidelines."),
      PATH("Settings > Support & Feedback > Report Content"),
      PATH("Settings > Support & Feedback > Report User"),
      NOTE(
        "Our moderation team reviews every report individually. A report does not automatically result in enforcement action."
      ),
    ],
  },
  {
    icon: "gavel",
    title: "What may happen after a violation",
    blocks: [
      P("Depending on the circumstances, we may:"),
      UL([
        "Review the reported account.",
        "Issue a warning.",
        "Remove violating content.",
        "Temporarily restrict the account.",
        "Suspend or permanently remove the account for serious or repeated violations.",
      ]),
    ],
  },
  {
    icon: "balance",
    title: "Appeals",
    blocks: [
      P(
        "If you believe moderation action was taken in error, contact Alfaz to request a review. Include your username, a description of the issue, and any relevant information."
      ),
      NOTE(
        "An appeal does not guarantee that the original decision will change, but it will be reviewed fairly."
      ),
    ],
  },
];

const SUPPORT_TOPICS = [
  "Login or password",
  "Verification email",
  "Publishing a Kalam",
  "Copyright concern",
  "Appeal a decision",
  "Account deletion",
  "Report a bug",
];

/* -------------------------------------------------------------------------- */
/*  SEARCH INDEX                                                               */
/* -------------------------------------------------------------------------- */

const blocksText = (blocks) =>
  blocks.map((b) => (Array.isArray(b.v) ? b.v.join(" ") : b.v)).join(" ");

const ALL_ARTICLES = SECTIONS.flatMap((s) =>
  s.articles.map((a) => ({
    ...a,
    sectionId: s.id,
    sectionTitle: s.title,
    text: blocksText(a.blocks),
  }))
);

const ALL_FAQS = SECTIONS.flatMap((s) =>
  s.faqs.map((f) => ({
    ...f,
    sectionId: s.id,
    text: blocksText(f.blocks),
  }))
);

// light stemming so "security" matches "secure", "images" matches "image", etc.
const stem = (w) =>
  w.length > 5
    ? w.replace(/(ity|ing|ed|es|e|s)$/, "")
    : w.length > 3 && w.endsWith("s")
    ? w.slice(0, -1)
    : w;

const tokenize = (query) =>
  query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1)
    .map(stem);

function scoreItem(tokens, title, body) {
  const t = title.toLowerCase();
  const b = body.toLowerCase();
  let score = 0;
  for (const tok of tokens) {
    const inTitle = t.includes(tok);
    const inBody = b.includes(tok);
    if (!inTitle && !inBody) return 0;
    score += inTitle ? 3 : 1;
  }
  return score;
}

export function searchContent(query) {
  const tokens = tokenize(query);
  if (!tokens.length) return { articles: [], faqs: [] };
  const articles = ALL_ARTICLES.map((a) => ({
    item: a,
    score: scoreItem(tokens, a.title, a.text),
  }))
    .filter((r) => r.score > 0)
    .sort((x, y) => y.score - x.score)
    .map((r) => r.item);
  const faqs = ALL_FAQS.map((f) => ({
    item: f,
    score: scoreItem(tokens, f.q, f.text),
  }))
    .filter((r) => r.score > 0)
    .sort((x, y) => y.score - x.score)
    .map((r) => r.item);
  return { articles, faqs };
}

/* -------------------------------------------------------------------------- */
/*  SMALL PIECES                                                               */
/* -------------------------------------------------------------------------- */

const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    {name}
  </span>
);

const Eyebrow = ({ children }) => (
  <p className="font-hc-label-sm text-hc-label-sm text-hc-primary uppercase tracking-widest font-semibold">
    {children}
  </p>
);

// turns the support email inside plain text into a mailto link
function Linkify({ text }) {
  const parts = text.split(SUPPORT_EMAIL);
  if (parts.length === 1) return text;
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [
          part,
          <a
            key={i}
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-hc-primary underline font-semibold"
          >
            {SUPPORT_EMAIL}
          </a>,
        ]
      : [part]
  );
}

function Blocks({ blocks }) {
  return (
    <div className="space-y-3 font-hc-body-md text-hc-body-md text-hc-ink-secondary">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p":
            return (
              <p key={i}>
                <Linkify text={b.v} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2">
                {b.v.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-hc-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {b.v.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-hc-primary text-hc-on-primary flex items-center justify-center font-hc-label-sm text-hc-label-sm shrink-0">
                      {j + 1}
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "note":
            return (
              <div
                key={i}
                className="flex items-start gap-3 bg-hc-surface-parchment-warm rounded-xl p-4"
              >
                <Icon name="info" className="text-hc-tertiary text-[20px] mt-0.5 shrink-0" />
                <p className="text-hc-ink-primary">
                  <Linkify text={b.v} />
                </p>
              </div>
            );
          case "path":
            return (
              <div
                key={i}
                className="p-3 bg-hc-surface-container-low rounded-lg font-mono text-hc-body-sm text-hc-ink-primary"
              >
                {b.v}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  HEADER                                                                     */
/* -------------------------------------------------------------------------- */

function Header({ path, navigate, query, setQuery }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hc-surface-bright/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => navigate("knowledge-base")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img alt="Alfaz Logo" className="h-8 w-auto object-contain" src={LOGO_URL} />
            <div className="flex flex-col text-left">
              <span className="font-hc-headline-sm text-hc-headline-sm text-hc-on-surface tracking-tight leading-none group-hover:text-hc-primary transition-colors">
                Alfaz
              </span>
              <span className="font-hc-label-sm text-hc-label-sm text-hc-ink-muted uppercase tracking-wider leading-none mt-1">
                Help Center
              </span>
            </div>
          </button>

          <div className="hidden xl:flex items-center bg-hc-surface-container-low px-3 py-2 rounded-lg gap-2 text-hc-ink-muted shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] focus-within:ring-1 focus-within:ring-hc-primary focus-within:text-hc-on-surface transition-all">
            <Icon name="search" className="text-[18px] text-hc-ink-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (path !== "knowledge-base") navigate("knowledge-base");
              }}
              placeholder="Search guides, kalam publishing, policies..."
              className="bg-transparent font-hc-body-sm text-hc-body-sm text-hc-on-surface placeholder:text-hc-ink-muted focus:outline-none w-64"
            />
            <kbd className="font-hc-label-sm text-hc-label-sm bg-hc-surface-card px-1.5 py-0.5 rounded shadow-sm text-hc-ink-muted">
              ⌘K
            </kbd>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1 p-1 bg-hc-surface-container-low/70 rounded-xl">
          {NAV.map((item) => {
            const active = path === item.path;
            return (
              <button
                key={item.path}
                type="button"
                aria-current={active ? "page" : undefined}
                onClick={() => navigate(item.path)}
                className={
                  active
                    ? "px-3 py-2 transition-colors bg-hc-primary-container text-hc-on-primary-container font-hc-label-md text-hc-label-md rounded-lg shadow-sm"
                    : "px-3 py-2 rounded-lg font-hc-label-md text-hc-label-md text-hc-on-surface-variant hover:bg-hc-surface-container-high hover:text-hc-on-surface transition-colors"
                }
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-hc-label-md text-hc-label-md bg-hc-primary text-hc-on-primary hover:bg-hc-primary-container transition-colors shadow-sm focus:outline-none"
          >
            Go to Alfaz App
          </a>
          <div className="w-8 h-8 rounded-full bg-hc-primary flex items-center justify-center">
            <Icon name="person" className="text-hc-on-primary text-[18px]" />
          </div>
        </div>
      </div>

      {/* Mobile / tablet nav */}
      <nav className="lg:hidden flex gap-1 overflow-x-auto px-4 pb-2 bg-hc-surface-bright/90">
        {NAV.map((item) => {
          const active = path === item.path;
          return (
            <button
              key={item.path}
              type="button"
              onClick={() => navigate(item.path)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-hc-label-md text-hc-label-md transition-colors ${
                active
                  ? "bg-hc-primary-container text-hc-on-primary-container"
                  : "text-hc-on-surface-variant hover:bg-hc-surface-container-high"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  KNOWLEDGE BASE                                                             */
/* -------------------------------------------------------------------------- */

function Hero({ query, setQuery, searchRef }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-hc-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-12 w-72 h-72 bg-hc-terracotta-soft rounded-full blur-2xl pointer-events-none -z-10 opacity-70" />

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-12 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-hc-surface-container-high/80 text-hc-primary font-hc-label-sm text-hc-label-sm uppercase tracking-wider shadow-sm mb-6">
          <Icon name="menu_book" className="text-[16px]" />
          <span>Alfaz Knowledge Base &amp; Support</span>
        </div>

        <h1 className="font-hc-headline-lg-mobile md:font-hc-display-lg text-hc-headline-lg-mobile md:text-hc-display-lg text-hc-ink-primary max-w-4xl mx-auto leading-tight">
          How can we help your words find their home?
        </h1>
        <p className="mt-4 font-hc-body-lg text-hc-body-lg text-hc-ink-secondary max-w-2xl mx-auto">
          Welcome to the Alfaz Help Center. Whether you're writing your very first Kalam,
          discovering timeless poetry, connecting with fellow readers, or simply exploring
          Alfaz, we're here to help.
        </p>

        <div className="mt-10 max-w-2xl mx-auto relative group">
          <div className="flex items-center h-14 bg-hc-surface-card rounded-xl px-5 shadow-md shadow-hc-on-background/5 transition-all focus-within:shadow-xl focus-within:ring-2 focus-within:ring-hc-primary/40">
            <Icon name="search" className="text-[24px] text-hc-ink-muted mr-3" />
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides, publishing tips, safety guidelines..."
              className="w-full bg-transparent font-hc-body-md text-hc-body-md text-hc-on-surface placeholder:text-hc-ink-muted focus:outline-none"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="text-hc-ink-muted hover:text-hc-ink-primary"
              >
                <Icon name="close" className="text-[20px]" />
              </button>
            ) : (
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded bg-hc-surface-container-low text-hc-ink-muted font-hc-label-sm text-hc-label-sm">
                ESC
              </kbd>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="font-hc-label-sm text-hc-label-sm text-hc-ink-muted mr-1">
              Popular searches:
            </span>
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  searchRef.current?.focus();
                }}
                className="px-3 py-1 rounded-full bg-hc-surface-container-low hover:bg-hc-primary hover:text-hc-on-primary font-hc-label-sm text-hc-label-sm text-hc-ink-secondary transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PillarGrid({ onOpen }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <Eyebrow>Browse by topic</Eyebrow>
          <h2 className="font-hc-headline-lg text-hc-headline-lg text-hc-ink-primary mt-1">
            Everything you need, in six places
          </h2>
        </div>
        <p className="font-hc-body-sm text-hc-body-sm text-hc-ink-muted max-w-sm">
          Step-by-step guidance organised by what you're trying to do, from creating your
          account to solving a problem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onOpen(s.id)}
            className="text-left bg-hc-surface-card rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-hc-surface-container-low flex items-center justify-center text-hc-primary group-hover:bg-hc-primary group-hover:text-hc-on-primary transition-colors">
                <Icon name={s.icon} className="text-[24px]" />
              </div>
              <h3 className="font-hc-headline-md text-hc-headline-md text-hc-ink-primary mt-4 group-hover:text-hc-primary transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 font-hc-body-sm text-hc-body-sm text-hc-ink-secondary leading-relaxed">
                {s.description}
              </p>
              <ul className="mt-4 space-y-2 text-hc-ink-secondary font-hc-body-sm text-hc-body-sm">
                {s.articles.slice(0, 4).map((a) => (
                  <li key={a.id} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-hc-primary shrink-0" />
                    <span>{a.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 bg-hc-surface-container-low/50 -mx-6 -mb-6 px-6 pb-5 rounded-b-xl flex items-center justify-between">
              <span className="font-hc-label-sm text-hc-label-sm text-hc-primary font-semibold">
                {s.articles.length} articles
                {s.faqs.length > 0 ? ` · ${s.faqs.length} FAQs` : ""}
              </span>
              <Icon
                name="arrow_forward"
                className="text-hc-primary text-[18px] group-hover:translate-x-1 transition-transform"
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function KalamWalkthrough({ onReadMore }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
      <div className="bg-hc-surface-card rounded-2xl p-8 lg:p-12 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-hc-terracotta-soft text-hc-primary font-hc-label-sm text-hc-label-sm w-fit font-semibold">
              <Icon name="draw" className="text-[16px]" />
              <span>Featured walkthrough</span>
            </div>
            <h2 className="font-hc-headline-lg text-hc-headline-lg text-hc-ink-primary">
              Publishing Your First Kalam
            </h2>
            <p className="font-hc-body-md text-hc-body-md text-hc-ink-secondary">
              Publishing your first Kalam is one of the best ways to introduce yourself to the
              Alfaz community.
            </p>

            <Blocks blocks={[OL(FIRST_KALAM_STEPS)]} />

            <p className="font-hc-body-md text-hc-body-md text-hc-ink-secondary">
              Once published, your Kalam becomes visible for everyone.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onReadMore}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-hc-primary hover:bg-hc-primary-container text-hc-on-primary font-hc-label-md text-hc-label-md transition-colors shadow-sm"
              >
                Read the full publishing guide
                <Icon name="arrow_forward" className="text-[18px]" />
              </button>
            </div>

            <div className="bg-hc-surface-parchment-warm rounded-xl p-5 shadow-sm flex items-start gap-4">
              <Icon name="auto_awesome" className="text-[24px] text-hc-tertiary mt-0.5" />
              <div>
                <span className="font-hc-label-md text-hc-label-md text-hc-ink-primary uppercase tracking-wide">
                  Literary pro-tip
                </span>
                <p className="text-hc-body-md text-hc-ink-secondary mt-1 italic font-hc-headline-sm">
                  “A memorable Kalam isn’t always the longest one — it is the one that connects
                  with readers. Write in your own voice.”
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-hc-surface-container-low rounded-2xl p-6 shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-hc-primary/40" />
                  <span className="w-3 h-3 rounded-full bg-hc-primary/40" />
                  <span className="w-3 h-3 rounded-full bg-hc-primary/40" />
                </div>
                <span className="font-hc-label-sm text-hc-label-sm text-hc-ink-muted">
                  Preview box (example)
                </span>
              </div>

              <div className="bg-hc-surface-card rounded-xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-hc-surface-parchment-warm/40 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-hc-primary/20 flex items-center justify-center font-hc-label-sm text-hc-label-sm text-hc-primary font-bold">
                        A
                      </div>
                      <div>
                        <p className="font-hc-label-sm text-hc-label-sm text-hc-ink-primary">
                          Asadullah Khan
                        </p>
                        <p className="font-hc-body-sm text-hc-body-sm text-hc-ink-muted">
                          @ghalib_echoes
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-hc-terracotta-soft text-hc-primary uppercase">
                      Ghazal
                    </span>
                  </div>

                  <div className="py-4 text-center">
                    <h3 className="font-hc-headline-md text-hc-headline-md text-hc-ink-primary mb-3">
                      حیرت کا سمندر (Ocean of Wonder)
                    </h3>
                    <p
                      dir="rtl"
                      className="font-hc-headline-sm text-hc-headline-sm text-hc-ink-secondary leading-relaxed italic"
                    >
                      دل ہی تو ہے نہ سنگ و خشت درد سے بھر نہ آئے کیوں
                      <br />
                      روئیں گے ہم ہزار بار کوئی ہمیں ستائے کیوں
                    </p>
                    <p className="mt-3 font-hc-body-sm text-hc-body-sm text-hc-ink-muted">
                      "It is but a heart, not stone or brick; why should it not ache with
                      feeling?"
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between text-hc-ink-muted font-hc-body-sm text-hc-body-sm">
                    <span className="flex items-center gap-1">
                      <Icon name="favorite" className="text-[16px] text-hc-primary" /> 248 likes
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="bookmark" className="text-[16px]" /> Collection tab
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-hc-surface-card shadow-sm flex items-center gap-3">
                <Icon name="history_edu" className="text-hc-primary text-[20px]" />
                <p className="font-hc-body-sm text-hc-body-sm text-hc-ink-secondary">
                  Found a typo? Open the <strong>Collection</strong> tab, click the three dots,
                  and select <strong>Edit</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FAQ ACCORDION ------------------------------ */

function FaqList({ faqs, autoOpen = false }) {
  const [open, setOpen] = useState(() => new Set());
  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="space-y-4">
      {faqs.map((f) => {
        const isOpen = autoOpen || open.has(f.id);
        return (
          <div key={f.id} className="bg-hc-surface-card rounded-xl shadow-sm transition-all">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(f.id)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <h3 className="font-hc-headline-sm text-hc-headline-sm text-hc-ink-primary">
                {f.q}
              </h3>
              <Icon
                name="expand_more"
                className={`text-hc-ink-muted text-[24px] transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5">
                <Blocks blocks={f.blocks} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function FaqSection() {
  const [tab, setTab] = useState("all");
  const faqs = useMemo(
    () => ALL_FAQS.filter((f) => tab === "all" || f.sectionId === tab),
    [tab]
  );

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-12 py-12 w-full">
      <div className="text-center mb-10">
        <Eyebrow>Immediate clarity</Eyebrow>
        <h2 className="font-hc-headline-lg text-hc-headline-lg text-hc-ink-primary mt-1">
          Frequently Asked Questions
        </h2>
        <p className="font-hc-body-md text-hc-body-md text-hc-ink-secondary mt-2">
          Quick answers about publishing, community and your account.
        </p>
        <div className="inline-flex p-1 mt-6 rounded-xl bg-hc-surface-container-high/60 shadow-inner flex-wrap justify-center gap-1">
          {FAQ_TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-lg font-hc-label-md text-hc-label-md transition-all ${
                tab === t.key
                  ? "bg-hc-primary text-hc-on-primary shadow-sm"
                  : "text-hc-ink-secondary hover:text-hc-ink-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      {/* key forces a fresh open-state per tab */}
      <FaqList key={tab} faqs={faqs} />
    </section>
  );
}

/* ----------------------------- SEARCH RESULTS ----------------------------- */

function SearchResults({ query, onOpenArticle }) {
  const { articles, faqs } = useMemo(() => searchContent(query), [query]);
  const total = articles.length + faqs.length;

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-12 py-10 w-full">
      <p className="font-hc-body-sm text-hc-body-sm text-hc-ink-muted text-center">
        {total} {total === 1 ? "result" : "results"} for “{query.trim()}”
      </p>

      {total === 0 && (
        <div className="mt-6 bg-hc-surface-card rounded-xl p-8 text-center shadow-sm">
          <Icon name="search_off" className="text-[32px] text-hc-ink-muted" />
          <p className="mt-2 font-hc-headline-sm text-hc-headline-sm text-hc-ink-primary">
            Nothing matches “{query.trim()}”
          </p>
          <p className="mt-1 font-hc-body-sm text-hc-body-sm text-hc-ink-muted">
            Try a shorter or different word, or write to{" "}
            <a className="text-hc-primary underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>
      )}

      {articles.length > 0 && (
        <div className="mt-8">
          <h2 className="font-hc-headline-md text-hc-headline-md text-hc-ink-primary mb-4">
            Guides
          </h2>
          <div className="space-y-3">
            {articles.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => onOpenArticle(a.sectionId, a.id)}
                className="w-full text-left bg-hc-surface-card rounded-xl p-5 shadow-sm hover:shadow-lg transition-all group"
              >
                <span className="font-hc-label-sm text-hc-label-sm text-hc-primary uppercase tracking-wider">
                  {a.sectionTitle}
                </span>
                <h3 className="font-hc-headline-sm text-hc-headline-sm text-hc-ink-primary mt-1 group-hover:text-hc-primary transition-colors">
                  {a.title}
                </h3>
                <p className="mt-1 font-hc-body-sm text-hc-body-sm text-hc-ink-secondary line-clamp-2">
                  {a.text}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {faqs.length > 0 && (
        <div className="mt-10">
          <h2 className="font-hc-headline-md text-hc-headline-md text-hc-ink-primary mb-4">
            FAQs
          </h2>
          <FaqList faqs={faqs} autoOpen />
        </div>
      )}
    </section>
  );
}

/* ------------------------- SUPPORT / POLICY STRIPS ------------------------ */

function ThankYou() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-12 py-10 w-full text-center">
      <Icon name="favorite" className="text-hc-primary text-[28px]" />
      <h2 className="font-hc-headline-md text-hc-headline-md text-hc-ink-primary mt-2">
        Thank you for being part of Alfaz
      </h2>
      <p className="mt-3 font-hc-body-md text-hc-body-md text-hc-ink-secondary">
        Whether you're sharing your first poem, discovering new writers, or simply enjoying the
        work of others, we're grateful that you've chosen Alfaz as part of your creative
        journey. Happy writing, happy reading, and welcome to Alfaz.
      </p>
    </section>
  );
}

function SupportStrip() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
      <div className="bg-hc-surface-container-high/70 rounded-2xl p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-3">
            <span className="font-hc-label-sm text-hc-label-sm text-hc-primary uppercase tracking-widest font-semibold">
              Direct human support
            </span>
            <h2 className="font-hc-headline-lg text-hc-headline-lg text-hc-ink-primary">
              Still need assistance?
            </h2>
            <p className="font-hc-body-md text-hc-body-md text-hc-ink-secondary leading-relaxed">
              If you can't find what you're looking for, contact us at {SUPPORT_EMAIL}. Please
              include as much information as possible so we can assist you more efficiently.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-hc-surface-card rounded-xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-hc-terracotta-soft text-hc-primary flex items-center justify-center mb-4">
                  <Icon name="mark_email_unread" className="text-[20px]" />
                </div>
                <h4 className="font-hc-title-md text-hc-title-md text-hc-ink-primary">
                  Support Desk Email
                </h4>
                <p className="font-hc-body-sm text-hc-body-sm text-hc-ink-muted mt-1">
                  General inquiries, login recovery, appeals &amp; copyright
                </p>
                <div className="mt-4 p-3 bg-hc-surface-container-low rounded-lg flex items-center justify-between gap-2">
                  <span className="font-hc-label-md text-hc-label-md text-hc-primary font-bold break-all">
                    {SUPPORT_EMAIL}
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email to clipboard"
                    className="p-1.5 rounded hover:bg-hc-surface-card text-hc-ink-muted hover:text-hc-ink-primary transition-colors flex items-center"
                  >
                    <Icon
                      name={copied ? "check" : "content_copy"}
                      className={`text-[18px] ${copied ? "text-hc-success-sage" : ""}`}
                    />
                  </button>
                </div>
              </div>
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Help%20Center%20Support%20Request`}
                className="mt-6 w-full py-2.5 px-4 rounded-lg bg-hc-primary hover:bg-hc-primary-container text-hc-on-primary font-hc-label-md text-hc-label-md text-center transition-colors shadow-sm"
              >
                Compose Email
              </a>
            </div>

            <div className="flex-1 bg-hc-surface-card rounded-xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-hc-surface-container-low text-hc-ink-secondary flex items-center justify-center mb-4">
                  <Icon name="bug_report" className="text-[20px]" />
                </div>
                <h4 className="font-hc-title-md text-hc-title-md text-hc-ink-primary">
                  Report a Problem
                </h4>
                <p className="font-hc-body-sm text-hc-body-sm text-hc-ink-muted mt-1">
                  Found a bug or unexpected behavior?
                </p>
                <p className="font-hc-body-sm text-hc-body-sm text-hc-ink-secondary mt-3">
                  Use the in-app flow:
                  <br />
                  <code className="text-[12px] bg-hc-surface-container-low px-1.5 py-0.5 rounded text-hc-primary font-semibold mt-1 inline-block">
                    Settings &gt; Support &amp; Feedback &gt; Report a Problem
                  </code>
                </p>
              </div>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 px-4 rounded-lg bg-hc-surface-container-high hover:bg-hc-surface-container-highest text-hc-ink-primary font-hc-label-md text-hc-label-md text-center transition-colors"
              >
                Open Alfaz App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PolicyStrip({ navigate }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-6 w-full mb-8">
      <div className="bg-hc-surface-card rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Icon name="gavel" className="text-hc-primary text-[24px]" />
          <div>
            <h4 className="font-hc-title-md text-hc-title-md text-hc-ink-primary">
              Where can I learn more?
            </h4>
            <p className="font-hc-body-sm text-hc-body-sm text-hc-ink-muted">
              These documents are available through the Alfaz website.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-hc-ink-secondary font-hc-label-sm text-hc-label-sm">
          {LEGAL_LINKS.map((l, i) => (
            <React.Fragment key={l.path}>
              {i > 0 && <span className="text-hc-border-rule-strong">•</span>}
              <button
                type="button"
                onClick={() => navigate(l.path)}
                className="hover:text-hc-primary transition-colors underline decoration-hc-border-rule-strong underline-offset-4"
              >
                {l.label}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function KnowledgeBase({ query, setQuery, searchRef, navigate }) {
  const searching = query.trim().length > 0;
  const openArticle = (section, article) => navigate("guides", { section, article });

  return (
    <div className="flex flex-col w-full">
      <Hero query={query} setQuery={setQuery} searchRef={searchRef} />
      {searching ? (
        <SearchResults query={query} onOpenArticle={openArticle} />
      ) : (
        <>
          <PillarGrid onOpen={(id) => navigate("guides", { section: id })} />
          <KalamWalkthrough onReadMore={() => openArticle("publishing", "first-kalam")} />
          <FaqSection />
          <ThankYou />
        </>
      )}
      <SupportStrip />
      <PolicyStrip navigate={navigate} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  GUIDES                                                                     */
/* -------------------------------------------------------------------------- */

function PageTitle({ eyebrow, title, intro }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-hc-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-12 pb-10 text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-hc-headline-lg-mobile md:font-hc-headline-lg text-hc-headline-lg-mobile md:text-hc-headline-lg text-hc-ink-primary mt-2">
          {title}
        </h1>
        {intro && (
          <p className="mt-3 font-hc-body-lg text-hc-body-lg text-hc-ink-secondary max-w-2xl mx-auto">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}

function Guides({ focus, navigate }) {
  const [active, setActive] = useState(focus?.section || SECTIONS[0].id);

  useEffect(() => {
    if (focus?.section) setActive(focus.section);
  }, [focus]);

  useEffect(() => {
    if (!focus?.article) return undefined;
    const t = setTimeout(() => {
      document
        .getElementById(`article-${focus.article}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => clearTimeout(t);
  }, [focus]);

  const section = SECTIONS.find((s) => s.id === active) || SECTIONS[0];
  const goToArticle = (id) =>
    document.getElementById(`article-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="w-full">
      <PageTitle
        eyebrow="Guides"
        title="Step-by-step help for every part of Alfaz"
        intro="Choose a topic to read the guides, or use the search bar on the Knowledge Base."
      />

      {/* mobile topic chips */}
      <div className="lg:hidden flex gap-2 overflow-x-auto px-6 pb-4">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full font-hc-label-sm text-hc-label-sm transition-colors ${
              s.id === active
                ? "bg-hc-primary text-hc-on-primary"
                : "bg-hc-surface-container-low text-hc-ink-secondary"
            }`}
          >
            {s.short}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-6 grid lg:grid-cols-[280px_1fr] gap-8">
        {/* sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-28 bg-hc-surface-card rounded-xl p-3 shadow-sm max-h-[calc(100vh-8rem)] overflow-y-auto">
            {SECTIONS.map((s) => {
              const isActive = s.id === active;
              return (
                <div key={s.id} className="mb-1">
                  <button
                    type="button"
                    onClick={() => setActive(s.id)}
                    className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded-lg font-hc-label-md text-hc-label-md transition-colors ${
                      isActive
                        ? "bg-hc-primary-container text-hc-on-primary-container"
                        : "text-hc-on-surface-variant hover:bg-hc-surface-container-high"
                    }`}
                  >
                    <Icon name={s.icon} className="text-[18px]" />
                    <span>{s.short}</span>
                  </button>
                  {isActive && (
                    <ul className="mt-1 mb-2 ml-5 pl-3 space-y-0.5">
                      {s.articles.map((a) => (
                        <li key={a.id}>
                          <button
                            type="button"
                            onClick={() => goToArticle(a.id)}
                            className="w-full text-left py-1 font-hc-body-sm text-hc-body-sm text-hc-ink-secondary hover:text-hc-primary transition-colors"
                          >
                            {a.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* content */}
        <div className="min-w-0">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-hc-surface-card shadow-sm flex items-center justify-center text-hc-primary shrink-0">
              <Icon name={section.icon} className="text-[24px]" />
            </div>
            <div>
              <h2 className="font-hc-headline-lg text-hc-headline-lg text-hc-ink-primary">
                {section.title}
              </h2>
              <p className="mt-1 font-hc-body-md text-hc-body-md text-hc-ink-secondary">
                {section.description}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {section.articles.map((a) => (
              <article
                key={a.id}
                id={`article-${a.id}`}
                className={`bg-hc-surface-card rounded-2xl p-6 lg:p-8 shadow-sm scroll-mt-28 ${
                  focus?.article === a.id ? "ring-2 ring-hc-primary/40" : ""
                }`}
              >
                <h3 className="font-hc-headline-md text-hc-headline-md text-hc-ink-primary mb-4">
                  {a.title}
                </h3>
                <Blocks blocks={a.blocks} />
              </article>
            ))}
          </div>

          {section.faqs.length > 0 && (
            <div className="mt-12">
              <h3 className="font-hc-headline-md text-hc-headline-md text-hc-ink-primary mb-4">
                Frequently Asked Questions
              </h3>
              <FaqList key={section.id} faqs={section.faqs} />
            </div>
          )}
        </div>
      </div>

      <SupportStrip />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  COMMUNITY GUIDELINES                                                       */
/* -------------------------------------------------------------------------- */

function CommunityGuidelines() {
  return (
    <div className="w-full">
      <PageTitle
        eyebrow="Community Guidelines"
        title="A safe, respectful, welcoming community"
        intro="How to share responsibly on Alfaz, what to do when something goes wrong, and what happens next."
      />
      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-6 space-y-4">
        {COMMUNITY_RULES.map((r) => (
          <div
            key={r.title}
            className="bg-hc-surface-card rounded-xl p-6 shadow-sm flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-hc-terracotta-soft text-hc-primary flex items-center justify-center shrink-0">
              <Icon name={r.icon} className="text-[20px]" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-hc-headline-sm text-hc-headline-sm text-hc-ink-primary mb-2">
                {r.title}
              </h3>
              <Blocks blocks={r.blocks} />
            </div>
          </div>
        ))}
        <p className="pt-2 text-center font-hc-body-sm text-hc-body-sm text-hc-ink-muted">
          The full Community Guidelines document is available through the Alfaz website.
        </p>
      </section>
      <SupportStrip />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  CONTACT SUPPORT                                                            */
/* -------------------------------------------------------------------------- */

function ContactSupport({ navigate }) {
  const [topic, setTopic] = useState(SUPPORT_TOPICS[0]);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const body = `${username ? `Username: ${username}\n\n` : ""}${message}`;
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    `Help Center: ${topic}`
  )}&body=${encodeURIComponent(body)}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const inputCls =
    "mt-2 w-full rounded-xl bg-hc-surface-container-low px-4 py-3 font-hc-body-md text-hc-body-md text-hc-on-surface placeholder:text-hc-ink-muted focus:outline-none focus:ring-2 focus:ring-hc-primary/40";

  return (
    <div className="w-full">
      <PageTitle
        eyebrow="Contact Support"
        title="Write to the Alfaz team"
        intro="If you need additional assistance, email us. Please include as much information as possible so we can help you faster."
      />
      <section className="max-w-5xl mx-auto px-6 lg:px-12 pb-10 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-hc-surface-card rounded-2xl p-6 lg:p-8 shadow-md">
          <h2 className="font-hc-headline-md text-hc-headline-md text-hc-ink-primary">
            Compose your message
          </h2>

          <p className="mt-5 font-hc-label-md text-hc-label-md text-hc-ink-primary">
            What is this about?
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {SUPPORT_TOPICS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={`px-3 py-1.5 rounded-full font-hc-label-sm text-hc-label-sm transition-colors ${
                  topic === t
                    ? "bg-hc-primary text-hc-on-primary"
                    : "bg-hc-surface-container-low text-hc-ink-secondary hover:bg-hc-surface-container-high"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <label className="block mt-5 font-hc-label-md text-hc-label-md text-hc-ink-primary" htmlFor="hc-username">
            Your username
          </label>
          <input
            id="hc-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="@yourusername"
            className={inputCls}
          />

          <label className="block mt-5 font-hc-label-md text-hc-label-md text-hc-ink-primary" htmlFor="hc-msg">
            Describe the issue
          </label>
          <textarea
            id="hc-msg"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What happened, and anything that helps us understand the situation. For bugs, add the steps to reproduce it, and your device and browser."
            className={inputCls}
          />

          <a
            href={mailto}
            className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-hc-primary hover:bg-hc-primary-container text-hc-on-primary font-hc-label-md text-hc-label-md transition-colors shadow-sm"
          >
            <Icon name="send" className="text-[18px]" />
            Open in email app
          </a>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="bg-hc-surface-card rounded-xl p-6 shadow-md">
            <div className="w-10 h-10 rounded-lg bg-hc-terracotta-soft text-hc-primary flex items-center justify-center mb-4">
              <Icon name="mark_email_unread" className="text-[20px]" />
            </div>
            <h3 className="font-hc-title-md text-hc-title-md text-hc-ink-primary">
              Support Desk Email
            </h3>
            <div className="mt-4 p-3 bg-hc-surface-container-low rounded-lg flex items-center justify-between gap-2">
              <span className="font-hc-label-md text-hc-label-md text-hc-primary font-bold break-all">
                {SUPPORT_EMAIL}
              </span>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email to clipboard"
                className="p-1.5 rounded hover:bg-hc-surface-card text-hc-ink-muted hover:text-hc-ink-primary transition-colors flex items-center"
              >
                <Icon
                  name={copied ? "check" : "content_copy"}
                  className={`text-[18px] ${copied ? "text-hc-success-sage" : ""}`}
                />
              </button>
            </div>
          </div>

          <div className="bg-hc-surface-card rounded-xl p-6 shadow-md">
            <h3 className="font-hc-title-md text-hc-title-md text-hc-ink-primary">
              Appealing a decision?
            </h3>
            <p className="mt-2 font-hc-body-sm text-hc-body-sm text-hc-ink-secondary">
              Include your username, a description of the issue, and any relevant information.
              Appeals are reviewed fairly, though they don't guarantee the original decision will
              change.
            </p>
          </div>

          <div className="bg-hc-surface-card rounded-xl p-6 shadow-md">
            <h3 className="font-hc-title-md text-hc-title-md text-hc-ink-primary">
              Report a bug in the app
            </h3>
            <p className="mt-2 font-hc-body-sm text-hc-body-sm text-hc-ink-secondary">
              Use the in-app flow and include a description, steps to reproduce, screenshots (if
              available), and your device and browser information:
            </p>
            <code className="mt-2 text-[12px] bg-hc-surface-container-low px-1.5 py-0.5 rounded text-hc-primary font-semibold inline-block">
              Settings &gt; Support &amp; Feedback &gt; Report a Problem
            </code>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-12 pb-16">
        <h2 className="font-hc-headline-md text-hc-headline-md text-hc-ink-primary mb-4">
          Try these quick fixes first
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {SECTIONS.find((s) => s.id === "troubleshooting").articles.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => navigate("guides", { section: "troubleshooting", article: a.id })}
              className="text-left bg-hc-surface-card rounded-xl p-4 shadow-sm hover:shadow-lg transition-all flex items-center justify-between gap-3 group"
            >
              <span className="font-hc-label-md text-hc-label-md text-hc-ink-primary group-hover:text-hc-primary transition-colors">
                {a.title}
              </span>
              <Icon name="arrow_forward" className="text-hc-primary text-[18px]" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LEGAL PLACEHOLDER                                                          */
/* -------------------------------------------------------------------------- */

function LegalPage({ path, navigate }) {
  const label = LEGAL_LINKS.find((l) => l.path === path)?.label ?? "Policy";
  return (
    <div className="w-full">
      <PageTitle
        eyebrow="Where can I learn more?"
        title={label}
        intro="This document is available through the Alfaz website."
      />
      <div className="max-w-3xl mx-auto px-6 pb-16 flex flex-wrap justify-center gap-3">
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-hc-primary hover:bg-hc-primary-container text-hc-on-primary font-hc-label-md text-hc-label-md transition-colors shadow-sm"
        >
          Open alfaz.live
        </a>
        <button
          type="button"
          onClick={() => navigate("knowledge-base")}
          className="px-5 py-2.5 rounded-lg bg-hc-surface-container-high hover:bg-hc-surface-container-highest text-hc-ink-primary font-hc-label-md text-hc-label-md transition-colors"
        >
          Back to Knowledge Base
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  FOOTER                                                                     */
/* -------------------------------------------------------------------------- */

function Footer({ navigate }) {
  const linkCls =
    "text-left font-hc-body-sm text-hc-body-sm text-hc-on-surface-variant hover:text-hc-on-surface transition-colors";
  return (
    <footer className="w-full bg-hc-surface-container-low mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img alt="Alfaz Logo" className="h-7 w-auto object-contain" src={LOGO_URL} />
              <span className="font-hc-headline-sm text-hc-headline-sm text-hc-on-surface">
                Alfaz Help Center
              </span>
            </div>
            <p className="font-hc-body-sm text-hc-body-sm text-hc-on-surface-variant max-w-sm">
              Answers to common questions, step-by-step guidance, and useful information about
              using Alfaz, a social platform for poetry and literature.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Icon name="mail" className="text-[18px] text-hc-primary" />
              <a
                className="font-hc-label-md text-hc-label-md text-hc-primary hover:text-hc-on-surface transition-colors"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-wrap gap-12 md:justify-end">
            <div className="flex flex-col gap-3 min-w-[140px]">
              <span className="font-hc-label-md text-hc-label-md text-hc-on-surface uppercase tracking-wider font-semibold">
                Resources
              </span>
              <button type="button" className={linkCls} onClick={() => navigate("knowledge-base")}>
                Knowledge Base
              </button>
              <button type="button" className={linkCls} onClick={() => navigate("guides")}>
                Guides
              </button>
              <button type="button" className={linkCls} onClick={() => navigate("contact-support")}>
                Contact Support
              </button>
            </div>

            <div className="flex flex-col gap-3 min-w-[140px]">
              <span className="font-hc-label-md text-hc-label-md text-hc-on-surface uppercase tracking-wider font-semibold">
                Governance &amp; Legal
              </span>
              {LEGAL_LINKS.map((l) => (
                <button key={l.path} type="button" className={linkCls} onClick={() => navigate(l.path)}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-hc-body-sm text-hc-body-sm text-hc-ink-muted text-center sm:text-left">
            © {new Date().getFullYear()} Alfaz Live (alfaz.live). All literary rights and
            trademarks reserved.
          </p>
          <p className="font-hc-body-sm text-hc-body-sm text-hc-ink-muted">
            Happy writing, happy reading.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  ROOT                                                                       */
/* -------------------------------------------------------------------------- */

const FONT_LINKS = [
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap",
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap",
];

export default function AlfazHelpCenter() {
  const [path, setPath] = useState("knowledge-base");
  const [focus, setFocus] = useState(null); // { section, article? }
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const added = FONT_LINKS.filter(
      (href) => !document.querySelector(`link[href="${href}"]`)
    ).map((href) => {
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = href;
      document.head.appendChild(l);
      return l;
    });
    return () => added.forEach((l) => l.remove());
  }, []);

  const navigate = useCallback((next, focusTarget = null) => {
    setPath(next);
    setFocus(focusTarget);
    if (next !== "knowledge-base") setQuery("");
    if (!focusTarget?.article) window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPath("knowledge-base");
        setTimeout(() => searchRef.current?.focus(), 0);
      } else if (e.key === "Escape") {
        setQuery("");
        searchRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  let page;
  if (path === "knowledge-base") {
    page = (
      <KnowledgeBase query={query} setQuery={setQuery} searchRef={searchRef} navigate={navigate} />
    );
  } else if (path === "guides") {
    page = <Guides foc  us={focus} navigate={navigate} />;
  } else if (path === "community-guidelines") {
    page = <CommunityGuidelines />;
  } else if (path === "contact-support") {
    page = <ContactSupport navigate={navigate} />;
  } else {
    page = <LegalPage path={path} navigate={navigate} />;
  }

  return (
    <div className="bg-hc-surface font-hc-body-md text-hc-body-md text-hc-on-surface selection:bg-hc-primary-fixed selection:text-hc-on-primary-fixed min-h-screen">
      <Header path={path} navigate={navigate} query={query} setQuery={setQuery} />
      <main className="w-full max-lg:pt-28 lg:pt-20 bg-hc-surface min-h-[calc(100vh-280px)]">
        {page}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}