"use client";
import {
  LayoutDashboard,
  LogIn,
  MegaphoneOff,
  ShieldCheck,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";
import { BouncyAccordion } from "./ui/be-ui-bouncy-accordion";

const FAQ_ITEMS: { id: string; icon: LucideIcon }[] = [
  { id: "1", icon: LogIn },
  { id: "2", icon: MegaphoneOff },
  { id: "3", icon: LayoutDashboard },
  { id: "4", icon: Store },
  { id: "5", icon: Users },
  { id: "6", icon: ShieldCheck },
];

export default function Faq() {
  const { t } = useI18n();
  return (
    <Reveal className="section" id="faq">
      <div className="container grid-2-1">
        <div>
          <h2>{t("faq.title")}</h2>
        </div>
        <BouncyAccordion
          className="w-full"
          defaultValue="1"
          items={FAQ_ITEMS.map(({ id, icon: Icon }) => ({
            id,
            title: t(`faq.q${id}`),
            description: t(`faq.a${id}`),
            icon: <Icon className="h-4 w-4" />,
          }))}
        />
      </div>
    </Reveal>
  );
}
