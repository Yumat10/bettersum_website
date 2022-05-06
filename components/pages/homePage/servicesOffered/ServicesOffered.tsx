import { BasicAccordion } from "components/shared/accordions/BasicAccordion";
import { Variants } from "framer-motion";

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
  const services: ServiceDetails[] = [
    {
      icon: {
        url: "/serviceIcons/strategyIcon.svg",
        height: 35,
        width: 60,
      },
      title: "Strategy & Stewardship",
      description:
        "We believe strategy is not just a phase in the development of a product, but a way of making deliberate decisions throughout the life of a business. We apply this longevity-centric perspective to help execute and maintain your vision, drafting plans that address both short and long-term timeframes.",
    },
    {
      icon: {
        url: "/serviceIcons/designIcon.svg",
        height: 45,
        width: 45,
      },
      title: "Holistic Design",
      description:
        "We design digital products, brands, and services by building with empathy. We believe that thoughtfully considering user experience is what makes a difference when designing for real people.",
    },
    {
      icon: {
        url: "/serviceIcons/developmentIcon.svg",
        height: 45,
        width: 45,
      },
      title: "Development",
      description:
        "We help transform great visions into concrete results. We expand your ideas into fully functioning products and work to obtain prompt user feedback that provides invaluable material for developing your business.",
    },
  ];
  return (
    <div id="home-page-services-section" className={styles["container"]}>
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
              defaultIsOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
