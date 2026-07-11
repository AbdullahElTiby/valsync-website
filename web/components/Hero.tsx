"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

const COPY: Record<string, [string, string]> = {
  home: ["Home base", "The main VALSYNC readout."],
  store: ["Store watch", "Night Market ready when you are."],
  party: ["Party sync", "Know the stack before queue."],
  matches: ["Match review", "Keep the useful rounds in focus."],
  loadout: ["Loadout deck", "Your collection, presets, and favorites."],
  social: ["Social view", "Friends and party context in one place."],
};
const PANELS = ["home", "store", "party", "matches", "loadout", "social"];

export default function Hero() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  const setPanel = (next: number) =>
    setActive((next + PANELS.length) % PANELS.length);

  return (
    <section className="section hero" id="top">
      <div className="container hero-split">
        <div>
          <p className="eyebrow hero-kicker">{t("hero.badge")}</p>
          <h1>
            <span>{t("hero.title1")}</span>
            <em>{t("hero.title2")}</em>
          </h1>
          <p className="lead">{t("hero.lead")}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#download">{t("hero.cta1")}</a>
            <a className="btn btn-secondary btn-arrow" href="#demo">{t("hero.cta2")}</a>
          </div>
          <div className="trust-row">
            <span>{t("hero.trust1")}</span>
            <span>{t("hero.trust2")}</span>
            <span>{t("hero.trust3")}</span>
          </div>
        </div>

        <aside className="hud-shell" aria-label="VALSYNC tactical HUD preview">
          <div className="hud-grid" />
          <div className="hud-content">
            <div className="hud-top">
              <span>{t("hud.label")}</span>
              <span className="num">23:14</span>
            </div>
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-head">
                  <div className="phone-title">{COPY[PANELS[active]][0]}</div>
                  <div className="phone-sub">{COPY[PANELS[active]][1]}</div>
                </div>
                {PANELS.map((panel, i) => (
                  <div
                    key={panel}
                    className={`screen-panel${i === active ? " is-active" : ""}`}
                  >
                    <img
                      className="app-shot"
                      src={`/assets/screenshot-${panel}.jpg`}
                      alt={`VALSYNC ${panel} screen`}
                    />
                    <div className="shot-caption">
                      <strong>{COPY[panel][0]}</strong>
                      <span>{COPY[panel][1]}</span>
                    </div>
                  </div>
                ))}
                <div className="phone-controls">
                  <button
                    className="phone-arrow"
                    type="button"
                    aria-label="Previous app screen"
                    onClick={() => setPanel(active - 1)}
                  >
                    &lsaquo;
                  </button>
                  <button
                    className="phone-arrow"
                    type="button"
                    aria-label="Next app screen"
                    onClick={() => setPanel(active + 1)}
                  >
                    &rsaquo;
                  </button>
                </div>
              </div>
            </div>
            <div className="telemetry-strip">
              <div className="mini-readout">
                <span className="meta">{t("hud.noise")}</span>
                <strong className="num">{t("hud.noise_val")}</strong>
              </div>
              <div className="mini-readout">
                <span className="meta">{t("hud.tracking")}</span>
                <strong className="num">{t("hud.tracking_val")}</strong>
              </div>
              <div className="mini-readout">
                <span className="meta">{t("hud.sync")}</span>
                <strong className="num">{t("hud.sync_val")}</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
