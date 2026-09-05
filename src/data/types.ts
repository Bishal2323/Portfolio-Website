export type Project = {
  title: string;
  description: string;
  tags: string[];
  award?: string;
  link?: string;
  repo?: string;
};

export type Experience = {
  role: string;
  org: string;
  detail: string;
};

export type ThemeColors = {
  ink: string;
  inkMuted: string;
  mist: string;
  mistWarm: string;
  bloom: string;
  bloomDeep: string;
  line: string;
};

export type SiteInfo = {
  name: string;
  role: string;
  tagline: string;
  stack: string[];
  headshot: string;
  email: string;
  github: string;
  linkedin: string;
  pageTitle: string;
};

export type SiteConfig = {
  site: SiteInfo;
  theme: ThemeColors;
  projects: Project[];
  experience: Experience[];
};

export const CONFIG_STORAGE_KEY = "portfolio-site-config";
export const ADMIN_SESSION_KEY = "portfolio-admin-ok";

/** Map theme keys → CSS custom properties used by Tailwind @theme */
export const THEME_CSS_VARS: Record<keyof ThemeColors, string> = {
  ink: "--color-ink",
  inkMuted: "--color-ink-muted",
  mist: "--color-mist",
  mistWarm: "--color-mist-warm",
  bloom: "--color-bloom",
  bloomDeep: "--color-bloom-deep",
  line: "--color-line",
};
