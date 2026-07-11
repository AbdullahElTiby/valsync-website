"use client";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Faq() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <Reveal className="section" id="faq">
      <div className="container grid-2-1">
        <div>
          <h2>{t("faq.title")}</h2>
        </div>
        <div className="faq-list">
          {items.map((n, idx) => (
            <details key={n} open={idx === 0}>
              <summary>{t(`faq.q${n}`)}</summary>
              <p>{t(`faq.a${n}`)}</p>
            </details>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
