import type { SiteConfig } from "./types";
import defaults from "./site-config.json";

/** Build-time config */
export const siteConfig = defaults as SiteConfig;

export const site = siteConfig.site;
export const projects = siteConfig.projects;
export const experience = siteConfig.experience;
export const theme = siteConfig.theme;
