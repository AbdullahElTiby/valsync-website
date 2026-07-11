"use client";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="pagefoot">
      <div className="container row-between">
        <span>{t("footer.left")}</span>
        <span className="meta">{t("footer.right")}</span>
      </div>
    </footer>
  );
}
