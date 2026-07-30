import React, { useEffect, useRef, useState } from "react";

/**
 * Alfaz — Community Guidelines
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
const COMMUNITY_SECTIONS = [
  {
    id: "g-welcome",
    label: "Welcome",
    number: null,
    title: "Welcome to Alfaz",
    intro: true,
    blocks: [
      { type: "principle", text: "Building a respectful home for poetry, literature, and meaningful conversations." },
      { type: "p", text: "Welcome to Alfaz." },
      {
        type: "p",
        text: "Alfaz is more than a platform for publishing poetry and literature. It is a community where writers, readers, and creators come together to express ideas, discover new voices, and engage in meaningful conversations.",
      },
      {
        type: "p",
        text: "These Community Guidelines explain the standards that help keep Alfaz welcoming, respectful, and safe for everyone.",
      },
      { type: "p", text: "By using Alfaz, you agree to follow these Guidelines in addition to our Terms of Service." },
    ],
  },
  {
    id: "g-1",
    number: 1,
    title: "Our purpose",
    blocks: [
      { type: "p", text: "We believe that creativity grows best in an environment built on respect, honesty, and openness." },
      {
        type: "p",
        text: "Every member of Alfaz contributes to shaping the community through the content they publish and the way they interact with others.",
      },
      { type: "p", text: "These Guidelines are designed to:" },
      {
        type: "ul",
        items: [
          "Encourage creative expression.",
          "Protect creators and readers.",
          "Promote respectful conversations.",
          "Reduce harmful behavior.",
          "Support fair moderation.",
          "Help maintain a trustworthy community.",
        ],
      },
    ],
  },
  {
    id: "g-2",
    number: 2,
    title: "Our community principles",
    blocks: [
      { type: "p", text: "These principles guide every moderation decision made on Alfaz." },
      { type: "h4", text: "2.1 Respect creativity" },
      { type: "p", text: "Respect the originality and effort behind every creative work." },
      { type: "p", text: "Do not copy, plagiarize, or falsely claim ownership of another person's work." },
      { type: "p", text: "When sharing works that are lawfully free to use, provide appropriate attribution whenever possible." },
      { type: "h4", text: "2.2 Respect people" },
      { type: "p", text: "Treat every member with dignity." },
      { type: "p", text: "Thoughtful debate and constructive criticism are welcome." },
      { type: "p", text: "Personal attacks, harassment, intimidation, or abusive behavior are not." },
      { type: "h4", text: "2.3 Create responsibly" },
      { type: "p", text: "Think before you publish." },
      {
        type: "p",
        text: "Content should contribute positively to the community and comply with our Terms of Service, applicable laws, and these Guidelines.",
      },
      { type: "h4", text: "2.4 Protect the community" },
      { type: "p", text: "Help us keep Alfaz safe." },
      {
        type: "p",
        text: "If you encounter content or behavior that violates these Guidelines, use the reporting tools so our moderation team can review it.",
      },
      { type: "p", text: "Reports should always be made honestly and in good faith." },
      { type: "h4", text: "2.5 Be authentic" },
      { type: "p", text: "Represent yourself honestly." },
      {
        type: "p",
        text: "Do not impersonate another person, organization, or public figure in a way that is likely to mislead others.",
      },
      { type: "h4", text: "2.6 Help literature flourish" },
      { type: "p", text: "Celebrate creativity." },
      { type: "p", text: "Encourage new voices." },
      { type: "p", text: "Support meaningful conversations." },
      { type: "p", text: "Treat every poem, story, or Kalam with the respect that creative work deserves." },
    ],
  },
  {
    id: "g-3",
    number: 3,
    title: "Treat people with respect",
    blocks: [
      { type: "p", text: "Alfaz is a community built around creative expression and conversation." },
      { type: "p", text: "Users are expected to interact with others respectfully, even when they disagree." },
      { type: "p", text: "We do not allow behavior that intentionally harms, threatens, intimidates, or targets other people." },
      { type: "h4", text: "3.1 Harassment and bullying" },
      { type: "p", text: "Harassment includes repeated or severe behavior intended to:" },
      {
        type: "ul",
        items: [
          "Intimidate another person.",
          "Humiliate or degrade someone.",
          "Cause emotional distress.",
          "Silence another person's participation.",
          "Encourage others to attack a person.",
        ],
      },
      { type: "p", text: "Examples include:" },
      {
        type: "ul",
        items: [
          "Repeated unwanted contact.",
          "Personal attacks.",
          "Targeted insults.",
          "Coordinated harassment campaigns.",
          "Encouraging others to abuse or attack someone.",
        ],
      },
      { type: "p", text: "Constructive criticism, literary discussion, and respectful disagreement are allowed." },
      { type: "h4", text: "3.2 Hate speech" },
      {
        type: "p",
        text: "Alfaz does not allow content that attacks, dehumanizes, or promotes hatred toward individuals or groups based on protected characteristics.",
      },
      { type: "p", text: "Examples include content that:" },
      {
        type: "ul",
        items: [
          "Encourages discrimination.",
          "Promotes hatred or exclusion.",
          "Uses degrading slurs to attack people.",
          "Claims a group of people are inherently inferior.",
          "Encourages violence against a group.",
        ],
      },
      {
        type: "p",
        text: "Discussions about history, literature, social issues, or personal experiences may be allowed when they do not promote hatred or harm.",
      },
      { type: "h4", text: "3.3 Threats and encouragement of violence" },
      { type: "p", text: "Content that threatens, encourages, or celebrates violence against individuals or groups is not allowed." },
      { type: "p", text: "This includes:" },
      {
        type: "ul",
        items: ["Direct threats.", "Calls for violence.", "Instructions for harming others.", "Encouraging attacks.", "Celebrating real-world violent acts."],
      },
      {
        type: "p",
        text: "Creative works involving fictional violence, mythology, history, or storytelling may be allowed when they do not promote real-world harm.",
      },
      { type: "h4", text: "3.4 Terrorism and extremist promotion" },
      { type: "p", text: "Alfaz does not allow content that:" },
      {
        type: "ul",
        items: [
          "Promotes terrorist organizations.",
          "Encourages terrorist activities.",
          "Recruits individuals for extremist causes.",
          "Provides support for violent extremist actions.",
        ],
      },
      {
        type: "p",
        text: "Educational, historical, or journalistic discussions may be allowed when they do not promote or encourage such activities.",
      },
      { type: "h4", text: "3.5 Self-harm and suicide promotion" },
      { type: "p", text: "Alfaz aims to maintain a safe environment for users experiencing difficult situations." },
      { type: "p", text: "We do not allow content that:" },
      { type: "ul", items: ["Encourages self-harm or suicide.", "Provides instructions for self-harm.", "Celebrates or promotes self-destructive behavior."] },
      {
        type: "p",
        text: "Content that shares personal experiences, recovery journeys, or supportive messages may be allowed when it does not encourage harm.",
      },
      { type: "h4", text: "3.6 Sexual and explicit content" },
      { type: "p", text: "Alfaz is a poetry and literature platform and is intended for users aged 16 and above." },
      { type: "p", text: "Content containing explicit sexual material or pornography is not allowed." },
      { type: "p", text: "This includes:" },
      { type: "ul", items: ["Explicit sexual images.", "Pornographic material.", "Sexual content involving minors.", "Sexual exploitation or abuse."] },
      { type: "p", text: "Literary, educational, artistic, or cultural discussions may be considered based on context." },
      { type: "h4", text: "3.7 Illegal activities" },
      { type: "p", text: "Users may not use Alfaz to promote, coordinate, or participate in illegal activities." },
      { type: "p", text: "This includes:" },
      {
        type: "ul",
        items: [
          "Instructions for committing crimes.",
          "Fraud or scams.",
          "Selling illegal goods or services.",
          "Encouraging unlawful activities.",
          "Sharing content that facilitates serious wrongdoing.",
        ],
      },
      { type: "h4", text: "3.8 Impersonation and misrepresentation" },
      { type: "p", text: "Users should represent themselves honestly." },
      { type: "p", text: "We do not allow impersonation intended to deceive others." },
      { type: "p", text: "Examples include:" },
      {
        type: "ul",
        items: [
          "Pretending to be another user.",
          "Creating fake profiles of real people.",
          "Misrepresenting affiliation with organizations or individuals.",
          "Using another creator's identity to gain trust.",
        ],
      },
      {
        type: "p",
        text: "Parody, fan accounts, or creative expression may be allowed when clearly identifiable and not intended to deceive.",
      },
      { type: "h4", text: "3.9 Malicious use of platform features" },
      { type: "p", text: "Users must not misuse Alfaz features to harm others or manipulate the platform." },
      { type: "p", text: "This includes:" },
      {
        type: "ul",
        items: [
          "Creating fake accounts for abuse.",
          "Spam reporting.",
          "Artificially manipulating engagement.",
          "Exploiting bugs or security issues.",
          "Attempting unauthorized access.",
        ],
      },
    ],
  },
  {
    id: "g-4",
    number: 4,
    title: "Respect original creativity",
    blocks: [
      { type: "p", text: "Alfaz exists to celebrate original poetry, literature, and creative expression." },
      {
        type: "p",
        text: "We encourage users to create, publish, and share their own work while respecting the rights and efforts of other creators.",
      },
      { type: "p", text: "Whenever possible, publish content that you have created yourself or that you have permission or legal authority to share." },
      { type: "h4", text: "4.1 Original content" },
      { type: "p", text: "We strongly encourage users to publish their own original creative works." },
      { type: "p", text: "Original content helps build a community that values creativity, authenticity, and personal expression." },
      { type: "p", text: "Examples include:" },
      {
        type: "ul",
        items: ["Poems", "Shayari", "Kalams", "Quotes", "Short stories", "Literary reflections", "Original artwork accompanying creative works", "Original audio recordings"],
      },
      { type: "h4", text: "4.2 Copyright and intellectual property" },
      { type: "p", text: "Respect the intellectual property rights of others." },
      { type: "p", text: "Do not publish content that infringes another person's copyright, trademark, or other legal rights." },
      { type: "p", text: "You should only publish content that:" },
      { type: "ul", items: ["You created yourself;", "You have permission to use; or", "Is lawfully available for reuse under applicable laws or licenses."] },
      { type: "p", text: "If you believe your copyright has been infringed, please use Alfaz's copyright reporting process." },
      { type: "h4", text: "4.3 Plagiarism" },
      { type: "p", text: "Presenting another person's creative work as your own is not permitted." },
      { type: "p", text: "This includes:" },
      {
        type: "ul",
        items: [
          "Copying poems without authorization.",
          "Reposting another user's Kalam as your own.",
          "Removing attribution from another creator's work.",
          "Making only minor changes to someone else's work while claiming originality.",
        ],
      },
      { type: "p", text: "Respecting creators is one of the core values of Alfaz." },
      { type: "h4", text: "4.4 Sharing public domain and free-to-use works" },
      { type: "p", text: "You may share works that are in the public domain or otherwise legally free to use." },
      {
        type: "p",
        text: "Where reasonably possible, we encourage you to provide appropriate attribution to the original author or source, even when it is not legally required.",
      },
      { type: "p", text: "This helps preserve literary history and acknowledges the contributions of creators." },
      { type: "h4", text: "4.5 AI-generated content" },
      { type: "p", text: "Alfaz may introduce features relating to AI-generated content in the future." },
      { type: "p", text: "If such features are introduced, additional requirements or disclosure obligations may apply." },
      {
        type: "p",
        text: "Until specific AI guidelines are published, users remain responsible for ensuring that all content they publish complies with these Community Guidelines, the Terms of Service, and applicable laws.",
      },
      { type: "h4", text: "4.6 Spam and unwanted promotion" },
      { type: "p", text: "Content should contribute meaningfully to the community." },
      { type: "p", text: "The following may be removed:" },
      {
        type: "ul",
        items: [
          "Repetitive or duplicate posts.",
          "Mass posting intended to manipulate visibility.",
          "Unsolicited promotional content.",
          "Misleading advertisements.",
          "Spam comments or messages.",
          "Content created primarily to artificially increase engagement.",
        ],
      },
      {
        type: "p",
        text: "Reasonable promotion of your own creative work is generally permitted, provided it does not become disruptive or abusive.",
      },
      { type: "h4", text: "4.7 False or misleading content" },
      { type: "p", text: "Do not intentionally publish content that is designed to deceive users in ways that may cause harm." },
      { type: "p", text: "Examples include:" },
      {
        type: "ul",
        items: ["Fraudulent claims.", "Fake giveaways.", "Scam content.", "False impersonation.", "Deliberately misleading information presented as fact."],
      },
      {
        type: "p",
        text: "Creative fiction, satire, poetry, storytelling, and clearly identifiable artistic expression are not considered misleading solely because they are fictional.",
      },
      { type: "h4", text: "4.8 Sensitive content" },
      { type: "p", text: "Literature often explores difficult topics such as grief, loss, war, discrimination, trauma, or mental health." },
      {
        type: "p",
        text: "Such content is generally allowed when it is presented for artistic, educational, historical, journalistic, or personal expression and does not promote harm or violate these Guidelines.",
      },
      {
        type: "p",
        text: "In some cases, Alfaz may apply warnings, reduced visibility, or other appropriate measures to help users make informed viewing choices.",
      },
      { type: "h4", text: "4.9 Creator responsibility" },
      { type: "p", text: "Every creator is responsible for the content they publish." },
      { type: "p", text: "Before posting, consider whether your content:" },
      {
        type: "ul",
        items: [
          "Respects the rights of others.",
          "Contributes positively to the community.",
          "Complies with these Guidelines.",
          "Complies with applicable laws.",
          "Reflects the respectful culture we are building together.",
        ],
      },
    ],
  },
  {
    id: "g-5",
    number: 5,
    title: "Interacting with others",
    blocks: [
      { type: "p", text: "Alfaz is designed to help people discover creative works and connect with other members." },
      { type: "p", text: "Healthy conversations, constructive feedback, and meaningful discussions are encouraged." },
      { type: "p", text: "All interactions should follow the same principles of respect and responsibility that apply to published content." },
      { type: "h4", text: "5.1 Comments" },
      { type: "p", text: "Comments are an important part of the Alfaz community." },
      { type: "p", text: "Users are encouraged to:" },
      { type: "ul", items: ["Share thoughtful feedback.", "Appreciate creative work.", "Participate in meaningful discussions.", "Respect different perspectives."] },
      { type: "p", text: "Comments may be removed when they contain:" },
      {
        type: "ul",
        items: ["Harassment or personal attacks.", "Hate speech.", "Threats.", "Spam.", "Unwanted promotional content.", "Content that violates these Guidelines."],
      },
      { type: "p", text: "Criticism of a creative work is allowed when expressed respectfully." },
      { type: "h4", text: "5.2 Private messages" },
      { type: "p", text: "Private messaging allows users to communicate directly with one another." },
      { type: "p", text: "Users must not use messages to:" },
      {
        type: "ul",
        items: [
          "Harass or intimidate others.",
          "Send unwanted abusive messages.",
          "Send spam or scams.",
          "Share illegal content.",
          "Threaten or harm others.",
          "Circumvent moderation actions.",
        ],
      },
      { type: "p", text: "Users are encouraged to respect boundaries and communicate responsibly." },
      { type: "p", text: "If you receive inappropriate messages, you can use available safety tools such as reporting or blocking." },
      { type: "h4", text: "5.3 Communities and group discussions" },
      { type: "p", text: "If Alfaz provides community or group features, members are expected to help maintain respectful spaces." },
      { type: "p", text: "Community members should:" },
      { type: "ul", items: ["Follow these Guidelines.", "Respect community-specific rules.", "Avoid disrupting discussions.", "Avoid targeting other members."] },
      { type: "p", text: "Community administrators or moderators may manage their spaces according to Alfaz policies." },
      { type: "p", text: "Alfaz may take action when communities are used for:" },
      { type: "ul", items: ["Illegal activities.", "Organized harassment.", "Hate campaigns.", "Spam networks.", "Other harmful behavior."] },
      { type: "h4", text: "5.4 User profiles" },
      { type: "p", text: "Profiles represent creators within the Alfaz community." },
      { type: "p", text: "Users should not create profiles that:" },
      {
        type: "ul",
        items: [
          "Impersonate another person.",
          "Mislead others about identity or affiliation.",
          "Contain prohibited content.",
          "Are created primarily for abuse or manipulation.",
        ],
      },
      { type: "p", text: "Public profiles should remain respectful and authentic." },
      { type: "h4", text: "5.5 Following and social connections" },
      { type: "p", text: "Following other users is intended to help users discover and support creators." },
      { type: "p", text: "Users should not abuse social connection features through:" },
      {
        type: "ul",
        items: [
          "Follow/unfollow manipulation.",
          "Artificial engagement schemes.",
          "Coordinated attempts to manipulate popularity.",
          "Using automated systems to create fake interactions.",
        ],
      },
      { type: "h4", text: "5.6 Blocking and personal boundaries" },
      { type: "p", text: "Alfaz recognizes that users have the right to control their interactions." },
      { type: "p", text: "Where available, users may use blocking tools to:" },
      { type: "ul", items: ["Prevent unwanted interactions.", "Control who can contact them.", "Create a safer personal experience."] },
      {
        type: "p",
        text: "Blocking is a user safety feature and should not be used to unfairly target or silence others through coordinated abuse.",
      },
      { type: "h4", text: "5.7 Reporting content and users" },
      { type: "p", text: "Users can report content, profiles, comments, or messages that they believe violate:" },
      { type: "ul", items: ["These Community Guidelines.", "Terms of Service.", "Applicable laws."] },
      { type: "p", text: "Reports should be submitted honestly and in good faith." },
      { type: "p", text: "Abusing reporting tools, including repeatedly submitting false reports to target others, may result in action." },
      { type: "h4", text: "5.8 Respecting creative discussions" },
      { type: "p", text: "Literary discussions can involve different opinions, interpretations, and emotions." },
      { type: "p", text: "Users may disagree about:" },
      { type: "ul", items: ["Writing styles.", "Themes.", "Interpretations.", "Artistic choices."] },
      { type: "p", text: "However, disagreement should focus on ideas and creative work rather than attacking the person behind them." },
    ],
  },
  {
    id: "g-6",
    number: 6,
    title: "Our approach to moderation",
    blocks: [
      { type: "principle", text: "Fair, consistent, and proportionate enforcement." },
      {
        type: "p",
        text: "Our goal is not simply to remove content or suspend accounts. We aim to maintain a community where creativity can thrive while protecting users from harm.",
      },
      { type: "p", text: "Every report and moderation decision is reviewed based on its specific circumstances." },
      { type: "p", text: "Factors we may consider include:" },
      {
        type: "ul",
        items: [
          "The nature and severity of the violation.",
          "Whether the violation appears intentional.",
          "Previous violations or repeated misconduct.",
          "Potential harm to individuals or the community.",
          "Applicable legal obligations.",
        ],
      },
      { type: "p", text: "Not every violation results in the same action." },
      { type: "h4", text: "6.1 Reporting violations" },
      { type: "p", text: "Users may report:" },
      {
        type: "ul",
        items: ["Posts", "Kalams", "Comments", "Private messages", "User profiles", "Communities", "Other content or behavior that may violate these Guidelines"],
      },
      { type: "p", text: "Reports should be submitted honestly and in good faith." },
      { type: "p", text: "Knowingly submitting false or malicious reports may itself violate these Guidelines." },
      { type: "h4", text: "6.2 Review process" },
      { type: "p", text: "When content or behavior is reported, Alfaz may:" },
      {
        type: "ul",
        items: [
          "Review the reported material.",
          "Consider additional context.",
          "Evaluate whether these Guidelines or our Terms of Service have been violated.",
          "Take appropriate action where necessary.",
        ],
      },
      { type: "p", text: "Some reports may require additional time depending on their complexity." },
      { type: "h4", text: "6.3 Possible enforcement actions" },
      { type: "p", text: "Depending on the circumstances, Alfaz may take one or more of the following actions:" },
      {
        type: "ul",
        items: [
          "No action where no violation is found.",
          "Educational notice or reminder.",
          "Formal warning.",
          "Removal of specific content.",
          "Temporary feature restrictions.",
          "Temporary suspension.",
          "Permanent account suspension.",
          "Reporting unlawful activity to appropriate authorities where required by law.",
        ],
      },
      { type: "h4", text: "6.4 Warning system" },
      {
        type: "p",
        text: "For many first-time or less serious violations, Alfaz may choose to issue a warning before taking stronger enforcement action.",
      },
      { type: "p", text: "Warnings are intended to:" },
      { type: "ul", items: ["Help users understand the Guidelines.", "Encourage responsible participation.", "Give users an opportunity to correct their behavior."] },
      { type: "p", text: "Repeated violations after warnings may result in more serious enforcement actions." },
      { type: "h4", text: "6.5 Immediate action for serious violations" },
      { type: "p", text: "Some behavior may result in immediate enforcement without prior warning." },
      { type: "p", text: "Examples include, but are not limited to:" },
      {
        type: "ul",
        items: [
          "Terrorism or violent extremist promotion.",
          "Child sexual exploitation or abuse material.",
          "Credible threats of violence.",
          "Severe harassment campaigns.",
          "Large-scale fraud or scams.",
          "Serious security abuse.",
          "Other conduct that creates an immediate risk to users or the platform.",
        ],
      },
      { type: "h4", text: "6.6 Appeals" },
      { type: "p", text: "If you believe moderation action was taken in error, you may contact Alfaz to request a review." },
      { type: "p", text: "When reviewing an appeal, we may consider:" },
      {
        type: "ul",
        items: ["Additional context.", "New information.", "Whether our policies were correctly applied.", "Whether the original decision should be modified."],
      },
      { type: "p", text: "Submitting an appeal does not guarantee that a moderation decision will be changed." },
      { type: "h4", text: "6.7 Repeat violations" },
      { type: "p", text: "Users who repeatedly violate these Community Guidelines may face increasingly serious enforcement actions." },
      { type: "p", text: "Repeated violations may result in:" },
      { type: "ul", items: ["Additional warnings.", "Longer restrictions.", "Temporary suspension.", "Permanent suspension."] },
      { type: "p", text: "The severity and frequency of prior violations may influence future moderation decisions." },
      { type: "h4", text: "6.8 Good faith enforcement" },
      { type: "p", text: "We strive to apply these Community Guidelines consistently and fairly." },
      { type: "p", text: "However, moderation decisions often involve context and judgment." },
      {
        type: "p",
        text: "While we work to make accurate decisions, no moderation system is perfect. We continually review and improve our moderation practices to support both user safety and creative expression.",
      },
      { type: "h4", text: "6.9 Protecting the community" },
      { type: "p", text: "Our primary responsibility is to maintain a safe, respectful, and welcoming environment for everyone." },
      { type: "p", text: "When balancing competing interests, Alfaz may prioritize:" },
      { type: "ul", items: ["User safety.", "Protection of creators.", "Compliance with applicable laws.", "The long-term health of the community."] },
    ],
  },
  {
    id: "g-7",
    number: 7,
    title: "Relationship with the Terms of Service",
    blocks: [
      { type: "p", text: "These Community Guidelines are intended to work alongside the Alfaz Terms of Service." },
      {
        type: "p",
        text: "While the Terms of Service establish the legal rules for using Alfaz, these Community Guidelines explain the standards of behavior expected within the community.",
      },
      {
        type: "p",
        text: "In the event of any conflict between these Community Guidelines and the Terms of Service, the Terms of Service will prevail to the extent of the conflict.",
      },
    ],
  },
  {
    id: "g-8",
    number: 8,
    title: "Updates to these Guidelines",
    blocks: [
      { type: "p", text: "As Alfaz evolves, we may update these Community Guidelines to reflect:" },
      {
        type: "ul",
        items: [
          "New platform features.",
          "Improvements to moderation practices.",
          "Changes in applicable laws or regulations.",
          "Emerging forms of abuse or misuse.",
          "Feedback from our community.",
        ],
      },
      {
        type: "p",
        text: "When changes are significant, we will make reasonable efforts to notify users through appropriate channels, such as the website, application, or email where appropriate.",
      },
      { type: "p", text: 'The "Last Updated" date at the beginning of these Community Guidelines will always indicate the latest version.' },
      {
        type: "p",
        text: "Your continued use of Alfaz after updated Guidelines become effective constitutes acceptance of the revised version, subject to applicable law.",
      },
    ],
  },
  {
    id: "g-9",
    number: 9,
    title: "Contact us",
    blocks: [
      {
        type: "p",
        text: "If you have questions about these Community Guidelines, would like to report a violation, or wish to appeal a moderation decision, you may contact us at:",
      },
      { type: "contact", email: "shadaan@alfaz.live" },
      { type: "p", text: "As Alfaz grows, additional support channels may become available." },
    ],
  },
  {
    id: "g-10",
    number: 10,
    title: "Our commitment to fair moderation",
    blocks: [
      { type: "p", text: "We understand that moderation decisions can affect creators and readers alike." },
      { type: "p", text: "Our goal is to apply these Community Guidelines fairly, consistently, and with appropriate consideration of context." },
      {
        type: "p",
        text: "We recognize that literature often explores complex emotions, controversial ideas, historical events, and difficult human experiences.",
      },
      { type: "p", text: "Whenever reasonably possible, we seek to distinguish between creative expression and content that causes or promotes harm." },
      {
        type: "p",
        text: "While we strive to make thoughtful decisions, moderation is not perfect. We continually review our processes and welcome constructive feedback to help improve them.",
      },
    ],
  },
  {
    id: "g-11",
    number: 11,
    title: "A message to the Alfaz community",
    blocks: [
      { type: "p", text: "Every poem begins with a single word." },
      { type: "p", text: "Every story begins with a single idea." },
      { type: "p", text: "Every community begins with people who choose to treat one another with kindness and respect." },
      {
        type: "p",
        text: "Alfaz was created to celebrate creativity, preserve literature, and provide a welcoming place where writers and readers from around the world can connect through words.",
      },
      {
        type: "p",
        text: "Whether you write a single line of Shayari or publish an entire collection of poems, your contribution helps shape the culture of this community.",
      },
      {
        type: "p",
        text: "Thank you for helping us build a place where creativity is respected, conversations remain meaningful, and every voice has the opportunity to be heard.",
      },
      { type: "p", text: "Welcome to Alfaz." },
    ],
  },
  {
    id: "g-12",
    number: 12,
    title: "Effective date",
    blocks: [
      {
        type: "p",
        text: "These Community Guidelines become effective on the Effective Date specified at the beginning of this document and remain in effect until replaced by a newer version.",
      },
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

export default function CommunityGuidelines() {
  const [activeSection, setActiveSection] = useState(COMMUNITY_SECTIONS[0].id);
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
              const isActive = d.id === "community";
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
              {COMMUNITY_SECTIONS.map((s) => {
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
            Community Guidelines
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="mt-3 text-[14px] text-[#7a6f52] max-w-[52ch] [text-wrap:pretty]">
            "Building a respectful home for poetry, literature, and meaningful conversations — the standards that keep Alfaz welcoming and safe."
          </p>

          <div className="mt-10 space-y-14">
            {COMMUNITY_SECTIONS.map((s) => (
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