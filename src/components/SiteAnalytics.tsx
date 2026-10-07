"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

// Visit any page with ?analytics=off to stop counting views from this browser,
// or ?analytics=on to start counting them again.
const STORAGE_KEY = "exclude-from-analytics";

function isExcluded(): boolean {
  try {
    const toggle = new URLSearchParams(window.location.search).get("analytics");
    if (toggle === "off") localStorage.setItem(STORAGE_KEY, "true");
    if (toggle === "on") localStorage.removeItem(STORAGE_KEY);
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    // Storage blocked (e.g. private mode): count the visit as normal
    return false;
  }
}

export default function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event: BeforeSendEvent) => (isExcluded() ? null : event)}
    />
  );
}
