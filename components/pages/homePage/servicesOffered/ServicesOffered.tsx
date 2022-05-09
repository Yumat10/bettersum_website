import { BasicAccordion } from "components/shared/accordions/BasicAccordion";
import { Variants } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import fontStyles from "../../../../styles/fontStyles.module.css";
import styles from "./ServicesOffered.module.css";

type IconParams = {
  url: string;
  height: number;
  width: number;
};

export type ServiceDetails = {
  icon: IconParams;
  title: string;
  description: string;
};

const highlightTextVariants: Variants = {
  hover: {
    color: "var(--bettersum-black)",
  },
};

export const ServicesOffered = (): JSX.Element => {
  const router = useRouter();

  const { open: queryOpen } = router.query;

  const [defaultOpenIndex, setDefaultOpenIndex] = useState<number>(0);

  useEffect(() => {
    if (queryOpen) {
      setDefaultOpenIndex(Number(queryOpen));
    }
  }, [queryOpen]);

  const services: ServiceDetails[] = [
    {
      icon: {
        url: "/serviceIcons/strategyIcon.svg",
        height: 35,
        width: 60,
      },
      title: "Strategy & Stewardship",
      description:
        "We solve problems, challenge values, and develop strategies to help articulate a point of view that will guide your business. We believe strategy is not just a phase, but a way of making deliberate decisions throughout the life of a business. We apply this long-term perspective to help execute your vision through brand & product management and oversight.",
    },
    {
      icon: {
        url: "/serviceIcons/designIcon.svg",
        height: 45,
        width: 45,
      },
      title: "Shopify Plus Ecommerce",
      description:
        "We create holistic ecommerce experiences that help grow and scale brands on Shopify Plus. We design end-to-end, build rapidly, handle integrations, and optimize your ecommerce experience with automations.",
    },
    {
      icon: {
        url: "/serviceIcons/developmentIcon.svg",
        height: 45,
        width: 45,
      },
      title: "Custom Digital Experiences",
      description:
        "We help transform your visions into concrete digital products, brands, and services. We both realize and expand your ideas by thoughtfully considering user experience and by practicing sustainable development strategies.",
    },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["header-container"]}>
          <h3 className={`${fontStyles["flair-copy"]}`}>What we offer</h3>
          <h2
            className={`${fontStyles["title-header"]} ${styles["header-text"]}`}
          >
            Better Services
          </h2>
        </div>
        <div
          className={styles["service-container"]}
          style={{ gridTemplateColumns: "" }}
        >
          {services.map((serviceItem, index) => (
            <BasicAccordion
              key={index}
              includeBorderBottom
              headerText={serviceItem.title}
              headerIcon={serviceItem.icon}
              descriptionText={serviceItem.description}
              defaultIsOpen={
                defaultOpenIndex < 0 || defaultOpenIndex >= services.length
                  ? index === 0
                  : index === defaultOpenIndex
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
