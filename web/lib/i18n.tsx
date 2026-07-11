"use client";
import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import en from "@/lang/en.json";
import ar from "@/lang/ar.json";
import de from "@/lang/de.json";
import tr from "@/lang/tr.json";

const DICTS: Record<string, Record<string, unknown>> = { en, ar, de, tr };
const LANGS = ["en", "ar", "de", "tr"];
const RTL_LANGS = ["ar"];

function lookup(obj: Record<string, unknown>, path: string): string {
  const val = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[key];
    return undefined;
  }, obj);
  return typeof val === "string" ? val : path;
}

type I18nCtx = {
  lang: string;
  setLang: (l: string) => void;
  t: (k: string) => string;
  th: (k: string) => { __html: string };
  dir: string;
};

const I18nContext = createContext<I18nCtx>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
  th: (k) => ({ __html: k }),
  dir: "ltr",
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("valsync-lang");
    const query = new URLSearchParams(window.location.search).get("lang");
    const nav = navigator.language.slice(0, 2);
    const initial = [query, stored, nav].find((l) => l && LANGS.includes(l)) || "en";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (initial !== "en") setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
    localStorage.setItem("valsync-lang", lang);
  }, [lang]);

  const setLang = useCallback((l: string) => setLangState(l), []);

  const value = useMemo<I18nCtx>(() => {
    const dict = DICTS[lang] || DICTS.en;
    return {
      lang,
      setLang,
      t: (k: string) => lookup(dict, k),
      th: (k: string) => ({ __html: lookup(dict, k) }),
      dir: RTL_LANGS.includes(lang) ? "rtl" : "ltr",
    };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
