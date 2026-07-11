"use client";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Features() {
  const { t } = useI18n();
  return (
    <Reveal className="section" id="features">
      <div className="container stack" style={{ gap: "56px" }}>
        <div style={{ maxWidth: "42ch" }}>
          <h2>{t("features.title")}</h2>
        </div>
        <Reveal className="grid-3 stagger" as="div">
          <article className="feature card" data-glow>
            <div className="feature-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M5 7h14v12H5z" />
                <path d="M8 7a4 4 0 0 1 8 0" />
              </svg>
            </div>
            <h3>{t("features.store.title")}</h3>
            <p>{t("features.store.desc")}</p>
          </article>
          <article className="feature card" data-glow>
            <div className="feature-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="8" cy="9" r="3" />
                <circle cx="16" cy="9" r="3" />
                <path d="M4 19c1-4 7-4 8 0" />
                <path d="M12 19c1-4 7-4 8 0" />
              </svg>
            </div>
            <h3>{t("features.party.title")}</h3>
            <p>{t("features.party.desc")}</p>
          </article>
          <article className="feature card" data-glow>
            <div className="feature-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M4 18V6" />
                <path d="M4 18h16" />
                <path d="M8 15l3-4 3 2 4-6" />
              </svg>
            </div>
            <h3>{t("features.review.title")}</h3>
            <p>{t("features.review.desc")}</p>
          </article>
        </Reveal>
      </div>
    </Reveal>
  );
}
