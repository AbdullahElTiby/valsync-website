"use client";
import Script from "next/script";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Cta() {
  const { t } = useI18n();
  return (
    <Reveal className="section" id="download" style={{ textAlign: "center" }}>
      <div className="container" style={{ maxWidth: 660 }}>
        <p className="eyebrow">{t("cta.badge")}</p>
        <h2>{t("cta.title")}</h2>
        <p className="lead" style={{ margin: "16px auto 32px" }}>{t("cta.lead")}</p>
        <a
          className="btn btn-primary"
          href="mailto:contact@valsync.app?subject=VALSYNC%20waitlist"
        >
          {t("cta.button")}
        </a>
        <div className="support-row">
          <a href="https://liberapay.com/AbdullahElTiby/donate">
            <img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg" />
          </a>
          <Script src="https://liberapay.com/AbdullahElTiby/widgets/button.js" strategy="afterInteractive" />
        </div>
      </div>
    </Reveal>
  );
}
