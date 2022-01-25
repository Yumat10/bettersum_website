import {
  ServiceOptions,
  useServicePageContext,
} from "../../../contexts/servicePageContext";
import { ServiceDetails } from "../../../types/ServiceDetails";
import { ServiceBreakdown } from "./ServiceBreakdown";
import Image from "next/image";
import { smoothScrollDown } from "util/functions/smoothScrollDown";
import styles from "./ServiceSection.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hover: {
    backgroundColor: "var(--bettersum-blue)",
    cursor: "pointer",
  },
};

const indexVariants: Variants = {
  hover: {
    x: -30,
  },
};

const plusVariants: Variants = {
  hover: {
    visibility: "hidden",
  },
};

const textVariants: Variants = {
  hover: {
    color: "var(--bettersum-beige)",
  },
};

const seeServicesVariants: Variants = {
  hover: {
    visibility: "visible",
  },
};

type ServiceOverview = {
  index: number;
  type: ServiceOptions;
  title: string;
  overview: JSX.Element;
  services: ServiceDetails[];
};

export const ServiceSection = ({
  index,
  type,
  title,
  overview,
  services,
}: ServiceOverview): JSX.Element => {
  const { openTabs, setOpenTabs, toggleOpenTab } = useServicePageContext();

  const scrollDownHandler = () => {
    smoothScrollDown({
      elementId: "services-contact-form",
      offset: 0,
    });
  };

  const ServiceBreakdowns = openTabs.get(type) && (
    <div className={styles["service-breakdowns-container"]}>
      {services.map((serviceDetail, index) => (
        <ServiceBreakdown key={index} {...serviceDetail} />
      ))}
      <button onClick={scrollDownHandler} className={styles["contact-button"]}>
        <p className={styles["body-copy"]}>Get in Touch</p>
        <Image
          src="/arrows/downArrowBeige.svg"
          alt="Now"
          height={24}
          width={24}
        />
      </button>
    </div>
  );

  const plusButton = (
    <motion.button
      variants={plusVariants}
      className={styles["plus-container"]}
      onClick={() => toggleOpenTab(type, !openTabs.get(type))}
    >
      {openTabs.get(type) ? (
        <Image
          src="/xIcons/closeBlack.svg"
          alt="close"
          width={35}
          height={35}
        />
      ) : (
        <Image src="/actionsPlus.svg" alt="See More" height={24} width={24} />
      )}
    </motion.button>
  );

  const titleText = (
    <div className={styles["title-container"]}>
      <motion.h2
        variants={textVariants}
        className={`${fontStyles["category-header"]} ${styles["title-text"]}`}
        style={{
          borderTop: openTabs.get(type)
            ? "4px solid var(--bettersum-black)"
            : "",
        }}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={seeServicesVariants}
        className={styles["see-services"]}
      >
        <Image src="/arrows/downArrowBeige.svg" alt="" height={24} width={24} />
        <p className={fontStyles["flair-copy"]}>See services</p>
      </motion.div>
    </div>
  );

  const overviewText = (
    <motion.div
      variants={textVariants}
      className={`${fontStyles["body-copy"]} ${styles["overview"]}`}
      style={{
        visibility: openTabs.get(type) ? "hidden" : "visible",
        height: openTabs.get(type) ? 0 : "",
      }}
    >
      {overview}
    </motion.div>
  );

  return (
    <motion.div
      id={`service-section-${type}`}
      variants={containerVariants}
      whileHover={openTabs.get(type) ? "initial" : "hover"}
      className={styles["container"]}
      onClick={() => !openTabs.get(type) && toggleOpenTab(type, true)}
    >
      <div className={styles["inner-container"]}>
        <motion.p
          variants={indexVariants}
          className={`${fontStyles["flair-copy"]} ${styles["service-number"]}`}
        >
          {index}
        </motion.p>
        <div className={styles["text-container"]}>
          {titleText}
          {overviewText}
          {plusButton}
          {ServiceBreakdowns}
        </div>
        <div className={styles["mobile-text-container"]}>
          {titleText}
          {plusButton}
          <span style={{ display: openTabs.get(type) ? "none" : "" }}>
            {overviewText}
          </span>
          {ServiceBreakdowns}
        </div>
      </div>
    </motion.div>
  );
};
