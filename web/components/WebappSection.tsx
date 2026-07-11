"use client";
import { useI18n } from "@/lib/i18n";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import TabletScene from "@/components/TabletScene/TabletScene";

export default function WebappSection() {
  const { t } = useI18n();
  return (
    <section className="section" id="webapp">
      <ContainerScroll
        titleComponent={
          <>
            <p className="eyebrow">{t("webapp.badge")}</p>
            <h2>{t("webapp.title")}</h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>{t("webapp.lead")}</p>
            <a
              className="btn btn-secondary"
              href="mailto:contact@valsync.app?subject=VALSYNC%20web%20app%20notify"
              style={{ marginTop: 24 }}
            >
              {t("webapp.cta")}
            </a>
          </>
        }
      >
        <TabletScene />
      </ContainerScroll>
    </section>
  );
}
