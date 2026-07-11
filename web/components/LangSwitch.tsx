"use client";
import { useI18n } from "@/lib/i18n";

const LANGS = [
  { code: "en", label: "EN", aria: "English" },
  { code: "ar", label: "AR", aria: "العربية" },
  { code: "de", label: "DE", aria: "Deutsch" },
  { code: "tr", label: "TR", aria: "Türkçe" },
];

export default function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="lang-switch">
      {LANGS.map((l) => (
        <button
          key={l.code}
          className={`lang-btn${lang === l.code ? " active" : ""}`}
          onClick={() => setLang(l.code)}
          aria-label={l.aria}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
