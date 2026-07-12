import type { Metadata, Viewport } from "next";
import { Saira } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import MobileBottomNav from "@/components/MobileBottomNav";
import GazaBanner from "@/components/GazaBanner";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GlowProvider from "@/components/GlowProvider";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-saira",
  display: "swap",
});

const SITE_URL = "https://abdullaheltiby.github.io/valsync-website/";
const B = process.env.NEXT_PUBLIC_BASE_PATH;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VALSYNC - Privacy-First Valorant Companion App",
  description:
    "VALSYNC is a privacy-first Valorant companion app for store checker workflows, Night Market alerts, party status, match review, and tactical readouts with no ads or tracking.",
  applicationName: "VALSYNC",
  keywords: ["Valorant", "companion app", "store checker", "Night Market", "privacy-first"],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "VALSYNC - Privacy-First Valorant Companion App",
    description:
      "A calm Valorant companion app for store checks, Night Market watchlists, party status, match review, and tactical prep with no ads or tracking.",
    url: SITE_URL,
    siteName: "VALSYNC",
    images: [{ url: "/img/screenshot-home.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VALSYNC - Privacy-First Valorant Companion App",
    description:
      "Store checker, Night Market watchlist, party status, and match review for Valorant players. No ads. No tracking.",
    images: ["/img/screenshot-home.jpg"],
  },
  icons: { icon: `${B}/favicon.ico` },
};

export const viewport: Viewport = {
  themeColor: "#0A141E",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: "VALSYNC",
      url: SITE_URL,
      description:
        "VALSYNC is a privacy-first Valorant companion app for store checks, Night Market watchlists, party status, match review, and tactical prep.",
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "VALSYNC",
      url: SITE_URL,
      logo: `${SITE_URL}mr7gmipd-playstore.png`,
      sameAs: [],
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}#app`,
      name: "VALSYNC",
      url: SITE_URL,
      applicationCategory: "GameApplication",
      operatingSystem: "Android",
      description:
        "A privacy-first Valorant companion app for store checker workflows, Night Market alerts, party status, match review, loadouts, and tactical readouts with no ads or tracking.",
      image: `${SITE_URL}img/screenshot-home.jpg`,
      publisher: { "@id": `${SITE_URL}#organization` },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}#faq`,
      mainEntity: [
        { "@type": "Question", name: "Do I need a Riot account?", acceptedAnswer: { "@type": "Answer", text: "VALSYNC is designed around Riot sign-in handoff, so account-specific Valorant surfaces stay tied to the player who owns them." } },
        { "@type": "Question", name: "Where do ads show up?", acceptedAnswer: { "@type": "Answer", text: "They do not. VALSYNC is a Valorant companion app without banner slots, engagement traps, monetized tracking, or ad inventory." } },
        { "@type": "Question", name: "What can I check from the app?", acceptedAnswer: { "@type": "Answer", text: "VALSYNC covers Home, Store, Party, Matches, Loadout, and Social views for Valorant players." } },
        { "@type": "Question", name: "How does the store checker work?", acceptedAnswer: { "@type": "Answer", text: "VALSYNC surfaces the Valorant shop, Night Market, and a skin watchlist so players can check what is available without opening multiple browser tabs." } },
        { "@type": "Question", name: "Can I track my squad or party?", acceptedAnswer: { "@type": "Answer", text: "Yes. The party module shows who is online, who is mid-match, and what roles the stack is missing before the lobby fills up." } },
        { "@type": "Question", name: "Does VALSYNC collect or sell my data?", acceptedAnswer: { "@type": "Answer", text: "No. VALSYNC is built without banner ads, tracking pixels, or data brokerage. Telemetry surfaces explain product state, not user surveillance." } },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={saira.variable} data-scroll-behavior="smooth">
      <body>
        <div id="page-loader" className="page-loader is-visible" aria-hidden="false">
          <div className="page-loader-mark">
            <span className="page-loader-text">VALSYNC</span>
            <span className="page-loader-dot" />
          </div>
          <div className="page-loader-bar">
            <span className="page-loader-bar-fill" />
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "setTimeout(function(){var l=document.getElementById('page-loader');if(l){l.classList.remove('is-visible');l.setAttribute('aria-hidden','true');setTimeout(function(){if(l&&l.parentNode)l.parentNode.removeChild(l);},500);}},1400);",
          }}
        />
        <I18nProvider>
          <GlowProvider>
            <Nav />
            <MobileBottomNav />
            <GazaBanner />
            {children}
            <Footer />
            <BackToTop />
          </GlowProvider>
        </I18nProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
