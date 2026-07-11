"use client";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";

export default function Nav() {
  const { t } = useI18n();
  const pathname = usePathname();
  const prefix = pathname === "/" ? "" : "/";
  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <a className="logo" href={`${prefix}#top`}>
          {/* ponytail: plain img, static export has no image optimization */}
          <img className="logo-mark" src="/mr7gmipd-playstore.png" alt="VALSYNC logo" />
          <span>VALSYNC</span>
        </a>
        <div className="nav-right">
          <nav aria-label="Primary navigation">
            <a href={`${prefix}#features`}>{t("nav.features")}</a>
            <a href={`${prefix}#demo`}>{t("nav.app")}</a>
            <a href={`${prefix}#updates`}>{t("nav.updates")}</a>
            <a href="/privacy">{t("nav.privacy")}</a>
            <a href="/terms">{t("nav.terms")}</a>
          </nav>
          <LangSwitch />
          <a className="btn btn-primary" href={`${prefix}#download`}>
            {t("nav.download")}
          </a>
        </div>
      </div>
    </header>
  );
}
