"use client";
import { useI18n } from "@/lib/i18n";
import AiExplainer from "./AiExplainer";

type Item = { type: "h" | "p" | "ul"; n: number; count?: number };

const STRUCTURES: Record<string, Item[]> = {
  privacy: [
    { type: "h", n: 1 }, { type: "p", n: 1 },
    { type: "h", n: 2 }, { type: "p", n: 2 }, { type: "ul", n: 1, count: 5 },
    { type: "h", n: 3 }, { type: "p", n: 3 },
    { type: "h", n: 4 }, { type: "p", n: 4 },
    { type: "h", n: 5 }, { type: "p", n: 5 }, { type: "ul", n: 2, count: 2 },
    { type: "h", n: 6 }, { type: "p", n: 6 },
    { type: "h", n: 7 }, { type: "p", n: 7 }, { type: "ul", n: 3, count: 1 }, { type: "p", n: 8 },
    { type: "h", n: 8 }, { type: "p", n: 9 },
    { type: "h", n: 9 }, { type: "p", n: 10 },
    { type: "h", n: 10 }, { type: "p", n: 11 },
    { type: "h", n: 11 }, { type: "p", n: 12 },
    { type: "h", n: 12 }, { type: "p", n: 13 },
  ],
  terms: [
    { type: "h", n: 1 }, { type: "p", n: 1 },
    { type: "h", n: 2 }, { type: "p", n: 2 },
    { type: "h", n: 3 }, { type: "p", n: 3 },
    { type: "h", n: 4 }, { type: "p", n: 4 }, { type: "ul", n: 1, count: 4 },
    { type: "h", n: 5 }, { type: "p", n: 5 },
    { type: "h", n: 6 }, { type: "p", n: 6 },
    { type: "h", n: 7 }, { type: "p", n: 7 },
    { type: "h", n: 8 }, { type: "p", n: 8 },
    { type: "h", n: 9 }, { type: "p", n: 9 },
    { type: "h", n: 10 }, { type: "p", n: 10 },
    { type: "h", n: 11 }, { type: "p", n: 11 },
  ],
};

export default function LegalPage({ doc }: { doc: "privacy" | "terms" }) {
  const { t, th } = useI18n();
  const items = STRUCTURES[doc];
  return (
    <main>
      <AiExplainer doc={doc} />
      <section className="legal-section">
        <div className="container">
          <div className="legal">
            <h1>{t(`legal.${doc}.title`)}</h1>
            <p className="updated">{t(`legal.${doc}.updated`)}</p>
            {items.map((item, i) => {
              if (item.type === "h")
                return <h2 key={i} dangerouslySetInnerHTML={th(`legal.${doc}.h${item.n}`)} />;
              if (item.type === "p")
                return <p key={i} dangerouslySetInnerHTML={th(`legal.${doc}.p${item.n}`)} />;
              return (
                <ul key={i}>
                  {Array.from({ length: item.count! }, (_, j) => (
                    <li
                      key={j}
                      dangerouslySetInnerHTML={th(`legal.${doc}.ul${item.n}.li${j + 1}`)}
                    />
                  ))}
                </ul>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
