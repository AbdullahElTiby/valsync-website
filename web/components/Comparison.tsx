"use client";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Comparison() {
  const { t } = useI18n();
  const cols = ["store", "party", "matches", "priv"] as const;
  return (
    <Reveal className="section">
      <div className="container">
        <div className="section-intro">
          <h2>{t("comparison.title")}</h2>
          <p>{t("comparison.lead")}</p>
        </div>
        <Reveal className="comparison-grid stagger" as="div">
          {cols.map((c) => (
            <article key={c} className="comparison-item" data-glow>
              <div>
                <h3>{t(`comparison.${c}.title`)}</h3>
                <p>{t(`comparison.${c}.desc`)}</p>
              </div>
              <div>
                <strong className="before">{t("comparison.before")}</strong>
                <strong className="after">{t(`comparison.${c}.after`)}</strong>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}
