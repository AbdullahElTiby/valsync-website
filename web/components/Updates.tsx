"use client";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";

const RELEASES = [
  {
    version: "v1.0.0",
    date: "2026-06-13",
    title: "Initial early-access launch",
    items: [
      "Store, party, matches, wiki, and social surfaces in one companion",
      "Riot RSO sign-in handoff",
      "Home, store, party, matches, loadout, and social readouts",
    ],
  },
  {
    version: "v1.0.2",
    date: "2026-06-23",
    title: "VALSYNC rebrand and privacy hardening",
    items: [
      "Rebrand from ValPaw to VALSYNC; package moved to com.valsync.app",
      "OAuth PKCE flow with encrypted token storage",
      "Redesigned match details and replay with tactical-telemetry HUD",
      "Full i18n for English, Arabic, Turkish, and German",
      "R8 minification and debug-only cleartext traffic",
    ],
  },
  {
    version: "v1.0.3",
    date: "2026-06-27",
    title: "Riot sign-in cleanup",
    items: [
      "Full-screen Riot RSO page, edge-to-edge",
      "System back handler and floating close button for cancellation",
      "Strip WebView UA marker so \u201cSign in with Google\u201d works",
    ],
  },
  {
    version: "v1.0.4",
    date: "2026-07-04",
    title: "Watchlist alerts and lineup details",
    items: [
      "Skin watchlist alerts for store and Night Market",
      "Match trends and advisor, plus lineup details",
      "Riot auth WebView moved to a standalone Activity (fixes focus and keystroke bugs)",
    ],
  },
  {
    version: "v1.0.5",
    date: "2026-07-05",
    title: "Clutch and multi-kill readouts",
    items: [
      "Per-player clutch %, plus double, triple, quadra, and ACE counts",
      "First-blood detection by real game-time ordering; rounded HS%",
      "Tap a player row to expand extended stats (ACS, KDA, K-D, HS chips)",
      "Language switch cold-restart fix via AlarmManager and PendingIntent",
    ],
  },
  {
    version: "v1.0.6",
    date: "2026-07-06",
    title: "Live match panel in Party",
    items: [
      "Party hosts a live match panel with dodge dialog, enemy intel, and telemetry probe",
      "Lineups rebuilt with loading states; mock fallback data removed",
      "Login: VALSYNC logo asset replaces the diamond brand mark",
      "Riot API client parallelizes live-match player builds (async/awaitAll)",
      "Settings: real BuildConfig.VERSION_NAME instead of hardcoded value",
    ],
  },
  {
    version: "v1.0.9",
    date: "2026-07-09",
    latest: true,
    title: "Background alerts, login consent gate, and VP pricing",
    items: [
      "Background notifications for friends coming online and store/Night Market skin restocks via a foreground service",
      "Login consent gate requires accepting Terms and Privacy; live docs open in-app with AI-explainer shortcuts",
      "VP pricing with per-region FX rates and cash estimates on bundles and the store",
      "Home and History rebuilt with an animated analytics card, filters, and date-bucket grouping",
      "Settings, Social, and Main screen polish; legacy Trends/advisor panel retired",
    ],
  },
];

export default function Updates() {
  const { t } = useI18n();
  return (
    <Reveal className="section" id="updates">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{t("releases.badge")}</p>
          <h2>{t("releases.title")}</h2>
          <p>{t("releases.lead")}</p>
        </div>
        <Reveal className="timeline stagger" as="ol">
          {RELEASES.map((r) => (
            <li key={r.version} className={`timeline-row${r.latest ? " is-latest" : ""}`}>
              <div className="timeline-meta">
                <span className="version-pill">{r.version}</span>
                <span className="timeline-date">{r.date}</span>
                {r.latest && <span className="latest-tag">{t("releases.latest")}</span>}
              </div>
              <h3 className="timeline-title">{r.title}</h3>
              <ul className="timeline-body">
                {r.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}
