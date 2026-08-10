export type Project = {
  title: string;
  description: string;
  tags: string[];
  award?: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Bloom Scroll",
    description:
      "An AI-powered browser extension that filters unwanted content from social media feeds, so you see more of what matters and less of the noise.",
    tags: ["JavaScript", "Browser Extension", "AI"],
    award: "2nd place — campus innovation competition",
    link: "#",
    repo: "#",
  },
  {
    title: "Password Strength Evaluator",
    description:
      "A co-developed tool that analyzes password strength against known data-breach vulnerability patterns to help people choose safer credentials.",
    tags: ["Python", "Security", "Data Analysis"],
    link: "#",
    repo: "#",
  },
];
