"use client";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";

export default function Nav() {
  const { t } = useI18n();
  const pathname = usePathname();
  const prefix = pathname === "/" ? "" : "/";
  const B = process.env.NEXT_PUBLIC_BASE_PATH;
  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <a className="logo" href={`${B}${prefix}#top`}>
          {/* ponytail: plain img, static export has no image optimization */}
          <img className="logo-mark" src={`${B}/mr7gmipd-playstore.png`} alt="VALSYNC logo" />
          <span>VALSYNC</span>
        </a>
        <div className="nav-right">
          <nav aria-label="Primary navigation">
            <a href={`${B}${prefix}#features`}>{t("nav.features")}</a>
            <a href={`${B}${prefix}#demo`}>{t("nav.app")}</a>
            <a href={`${B}${prefix}#updates`}>{t("nav.updates")}</a>
            <a href={`${B}/privacy`}>{t("nav.privacy")}</a>
            <a href={`${B}/terms`}>{t("nav.terms")}</a>
          </nav>
          <LangSwitch />
          <a className="btn btn-primary" href={`${B}${prefix}#download`}>
            {t("nav.download")}
          </a>
        </div>
      </div>
    </header>
  );
}
