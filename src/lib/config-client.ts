import type { SiteConfig, ThemeColors } from "../data/types";
import { CONFIG_STORAGE_KEY, THEME_CSS_VARS } from "../data/types";

export function applyTheme(theme: ThemeColors) {
  const root = document.documentElement;
  (Object.keys(THEME_CSS_VARS) as (keyof ThemeColors)[]).forEach((key) => {
    const cssVar = THEME_CSS_VARS[key];
    const value = theme[key];
    if (value) root.style.setProperty(cssVar, value);
  });
}

export function readLocalConfig(): SiteConfig | null {
  try {
    const raw = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SiteConfig;
  } catch {
    return null;
  }
}

export function writeLocalConfig(config: SiteConfig) {
  localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
}

export async function loadRuntimeConfig(): Promise<SiteConfig> {
  const local = readLocalConfig();
  if (local) return local;
  const res = await fetch("/site-config.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Could not load site-config.json");
  return (await res.json()) as SiteConfig;
}

export function downloadConfig(config: SiteConfig, filename = "site-config.json") {
  const blob = new Blob([JSON.stringify(config, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
