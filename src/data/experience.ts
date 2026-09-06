export type Experience = {
  role: string;
  org: string;
  detail: string;
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
  certificate: string;
  certificateAlt: string;
};

export const experience: Experience[] = [
  {
    role: "Graphic Designer",
    org: "Campus laboratory school",
    detail:
      "Designed visual materials for school programs, translating ideas into clear, memorable graphics.",
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
    title: "Google Cybersecurity",
    certificate: "/images/certificates/google-cybersecurity.png",
    certificateAlt: "Google Cybersecurity Professional Certificate",
  },
];
