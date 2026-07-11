"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const plans = [
  {
    key: "starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    popular: true,
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

const toggleVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT, delay: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

const featureListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.28,
    },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Pricing() {
  const { t } = useI18n();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section" id="pricing">
      <div className="container">
        <motion.div
          className="mx-auto max-w-[58ch] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p className="eyebrow" variants={headerVariants}>
            {t("pricing.eyebrow")}
          </motion.p>
          <motion.h2 className="h2" variants={headerVariants}>
            {t("pricing.title")}
          </motion.h2>
          <motion.p
            className="lead mx-auto mt-4"
            variants={headerVariants}
          >
            Valsync is Free until now
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-1 max-w-md mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.key}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                      scale: plan.popular ? 1.02 : 1.01,
                      transition: { type: "spring", stiffness: 320, damping: 22 },
                    }
              }
              className={cn(
                "card relative flex flex-col p-7 md:p-8",
                plan.popular && "md:-mt-4 md:mb-4"
              )}
              data-glow={plan.popular ? "" : undefined}
              style={
                plan.popular
                  ? ({
                      "--base": "170",
                      "--spread": "120",
                      "--size": "260",
                      "--border": "1",
                    } as React.CSSProperties)
                  : undefined
              }
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--cyan)] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[var(--bg)]">
                  {t("pricing.badge_popular")}
                </span>
              )}

              <div className="text-center">
                <h3 className="h3">{t(`pricing.${plan.key}.name`)}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {t(`pricing.${plan.key}.description`)}
                </p>
              </div>

              <div className="relative mx-auto mt-6 flex h-16 items-baseline justify-center">
                <span className="text-4xl font-extrabold tracking-tight md:text-5xl">
                  {t("pricing.free_price")}
                </span>
              </div>

              <p className="mt-1 text-center text-xs text-[var(--muted)]">
                {t("pricing.free_billing")}
              </p>

              <motion.ul
                className="mt-8 flex flex-1 flex-col gap-3"
                variants={featureListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-sm text-[var(--fg)]"
                    variants={featureItemVariants}
                  >
                    <span
                      className={cn(
                        "mt-0.5 inline-flex shrink-0 items-center justify-center rounded-md p-0.5",
                        plan.popular
                          ? "bg-[color-mix(in_oklch,var(--cyan)_12%,transparent)] text-[var(--cyan)]"
                          : "bg-[color-mix(in_oklch,var(--fg)_7%,transparent)] text-[var(--fg)]"
                      )}
                    >
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span>{t(`pricing.${plan.key}.feature_${i}`)}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                className={cn(
                  "btn mt-8 w-full",
                  plan.popular ? "btn-primary" : "btn-secondary"
                )}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                {t(`pricing.${plan.key}.cta`)}
              </motion.button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
