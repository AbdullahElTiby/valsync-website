"use client";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Demo() {
  const { t } = useI18n();
  return (
    <Reveal className="section" id="demo">
      <div className="container grid-1-2">
        <div className="stack">
          <h2>{t("demo.title")}</h2>
          <p className="lead">{t("demo.lead")}</p>
          <Reveal className="signal-list stagger" as="div">
            <div className="signal-row">
              <strong>{t("demo.signal1")}</strong>
              <span className="num">{t("demo.signal1_val")}</span>
            </div>
            <div className="signal-row">
              <strong>{t("demo.signal2")}</strong>
              <span className="num">{t("demo.signal2_val")}</span>
            </div>
            <div className="signal-row">
              <strong>{t("demo.signal3")}</strong>
              <span className="num">{t("demo.signal3_val")}</span>
            </div>
          </Reveal>
        </div>
        <div className="card" data-glow>
          <p className="meta" style={{ margin: "0 0 12px" }}>{t("demo.card_label")}</p>
          <h3>{t("demo.card_title")}</h3>
          <p style={{ color: "var(--muted)", margin: "10px 0 22px" }}>{t("demo.card_desc")}</p>
          <div className="signal-list">
            <div className="signal-row">
              <strong>{t("demo.card_s1")}</strong>
              <span>{t("demo.card_s1_val")}</span>
            </div>
            <div className="signal-row">
              <strong>{t("demo.card_s2")}</strong>
              <span className="num" style={{ color: "var(--gold)" }}>{t("demo.card_s2_val")}</span>
            </div>
            <div className="signal-row">
              <strong>{t("demo.card_s3")}</strong>
              <span className="num" style={{ color: "var(--green)" }}>{t("demo.card_s3_val")}</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
