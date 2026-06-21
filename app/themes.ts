import type { CSSProperties } from "react";

export type Theme = {
  id: string;
  label: string;
  tag: string;
  hero: string;
  vars: CSSProperties;
};

// Each variant overrides CSS variables that the whole site reads:
// --bg / --surface / --border (palette) and --color-brand / --color-brand-light (accent).
const v = (o: Record<string, string>): CSSProperties => o as CSSProperties;

export const THEMES: Record<string, Theme> = {
  a: {
    id: "a", label: "Midnatt", tag: "Royal blå · kinematisk",
    hero: "/img/brabus.png",
    vars: v({
      "--bg": "#090a0d", "--surface": "#0f1422", "--border": "rgba(90,130,230,0.12)",
      "--color-brand": "#1d49a7", "--color-brand-light": "#3a63d0", "--glow": "rgba(45,90,210,0.16)",
    }),
  },
  b: {
    id: "b", label: "Karbon", tag: "Varm amber · garasje",
    hero: "/img/ferrari.jpg",
    vars: v({
      "--bg": "#0c0a08", "--surface": "#19130d", "--border": "rgba(255,150,80,0.14)",
      "--color-brand": "#ff7a1a", "--color-brand-light": "#ff9c47", "--glow": "rgba(255,120,26,0.16)",
    }),
  },
  c: {
    id: "c", label: "Smaragd", tag: "Dyp grønn · rolig",
    hero: "/img/bmw.jpg",
    vars: v({
      "--bg": "#07100c", "--surface": "#0e1a14", "--border": "rgba(60,220,160,0.14)",
      "--color-brand": "#10b981", "--color-brand-light": "#3ddca0", "--glow": "rgba(16,185,129,0.16)",
    }),
  },
  d: {
    id: "d", label: "Neon", tag: "Elektrisk cyan · tech",
    hero: "/img/brabus.png",
    vars: v({
      "--bg": "#060a0f", "--surface": "#0c141c", "--border": "rgba(0,220,230,0.16)",
      "--color-brand": "#00cdd6", "--color-brand-light": "#42e7ef", "--glow": "rgba(0,210,220,0.18)",
    }),
  },
};

export const ORDER = ["a", "b", "c", "d"] as const;
