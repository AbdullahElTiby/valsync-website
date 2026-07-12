"use client";
import {
  EyeOff,
  LayoutGrid,
  Lock,
  LogIn,
  ShoppingBag,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";
import { BouncyAccordion } from "./ui/be-ui-bouncy-accordion";

const FAQ_ITEMS: { id: string; icon: LucideIcon }[] = [
  { id: "1", icon: LogIn },
  { id: "2", icon: EyeOff },
  { id: "3", icon: LayoutGrid },
  { id: "4", icon: ShoppingBag },
  { id: "5", icon: Users },
  { id: "6", icon: Lock },
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
