export type Experience = {
  role: string;
  org: string;
  dates?: string;
  detail: string;
};

export type Education = {
  school: string;
  degree: string;
  field: string;
  dates: string;
  detail?: string;
};

export type Hackathon = {
  title: string;
  event: string;
  date: string;
  place: string;
  detail: string;
  certificate: string;
  certificateAlt: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  detail: string;
  certificate: string;
  certificateAlt: string;
  /** Public Credly (or other) verification URL */
  verifyUrl?: string;
};

export const experience: Experience[] = [
  {
    role: "Information Technology Intern",
    org: "City of Monroe, Louisiana",
    dates: "August 2026 – Present",
    detail:
      "Supporting municipal IT operations — helping maintain systems, assist users, and keep city technology running day to day.",
  },
  {
    role: "Graphic Designer",
    org: "Emily Williamson Laboratory School",
    dates: "July 2025 – November 2025",
    detail:
      "Designed visual materials for school programs, translating ideas into clear, memorable graphics.",
  },
];

export const education: Education[] = [
  {
    school: "University of Louisiana Monroe",
    degree: "Bachelor of Science — BS",
    field: "Computer Science",
    dates: "August 2024 – May 2028",
    detail: "Undergraduate studies in computer science at ULM.",
  },
];

export const hackathons: Hackathon[] = [
  {
    title: "Finalist",
    event: "3rd Annual Hawkathon",
    date: "April 17, 2025",
    place: "University of Louisiana Monroe",
    detail:
      "Selected as a finalist at Hawkathon, hosted with GDSC and ACM at ULM.",
    certificate: "/images/certificates/hawkathon-3rd-finalist.png",
    certificateAlt: "Certificate of Finalist — 3rd Annual Hawkathon",
  },
  {
    title: "",
    event: "InterNav Hackathon",
    date: "April 13, 2025",
    place: "University of Louisiana Monroe",
    detail:
      "During ULM's 3-day Hawkathon innovation challenge, my team built InterNav which is a custom indoor routing app that converts static building blueprints into an interactive navigation system to help new students find their classes. ",
    certificate: "/images/certificates/hawkathon-2nd-participation.png",
    certificateAlt: "Certificate of Participation — 2nd Annual Hawkathon",
  },
];

export const certificates: Certificate[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    detail:
      "Foundational AWS cloud fluency — core services, pricing models, security, and how to identify the right building blocks for cloud-focused projects.",
    certificate: "/images/certificates/aws-cloud-practitioner.png",
    certificateAlt: "AWS Certified Cloud Practitioner badge — Credly",
    verifyUrl:
      "https://www.credly.com/badges/5eae8d64-a497-4cc0-887b-cce005121f28/public_url",
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    detail:
      "AI, ML, and generative AI concepts on AWS — choosing the right approaches for use cases and applying these tools responsibly.",
    certificate: "/images/certificates/aws-ai-practitioner.png",
    certificateAlt: "AWS Certified AI Practitioner badge — Credly",
    verifyUrl:
      "https://www.credly.com/badges/7f3a9abc-c957-4d1f-b760-efcc6dd5194b/public_url",
  },
  {
    title: "Google Cybersecurity",
    issuer: "Google",
    detail:
      "Professional certificate covering security foundations, network defense, and hands-on tools used to protect systems and data.",
    certificate: "/images/certificates/google-cybersecurity.png",
    certificateAlt: "Google Cybersecurity Professional Certificate",
  },
];
