"use client";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function PrivacySection() {
  const { t } = useI18n();
  return (
    <Reveal className="section" id="privacy">
      <div className="container">
        <div className="privacy-panel">
          <div className="grid-2">
            <div>
              <p className="eyebrow">{t("privacy.badge")}</p>
              <h2>{t("privacy.title")}</h2>
            </div>
            <p className="lead">{t("privacy.lead")}</p>
          </div>
          <Reveal className="privacy-grid stagger" as="div">
            <article className="privacy-item" data-glow>
              <strong>{t("privacy.ads_title")}</strong>
              <p>{t("privacy.ads_desc")}</p>
            </article>
            <article className="privacy-item" data-glow>
              <strong>{t("privacy.track_title")}</strong>
              <p>{t("privacy.track_desc")}</p>
            </article>
            <article className="privacy-item" data-glow>
              <strong>{t("privacy.riot_title")}</strong>
              <p>{t("privacy.riot_desc")}</p>
            </article>
            <article className="privacy-item" data-glow>
              <strong>{t("privacy.surface_title")}</strong>
              <p>{t("privacy.surface_desc")}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}
