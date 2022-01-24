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
      offset: -110,
    });
  };

  const ServiceBreakdowns = (
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
    <button
      className={styles["plus-container"]}
      onClick={() => toggleOpenTab(type)}
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
    </button>
  );

  const titleText = (
    <div className={styles["title-container"]}>
      <h2
        className={`${fontStyles["category-header"]} ${styles["title-text"]}`}
        style={{
          borderTop: openTabs.get(type)
            ? "4px solid var(--bettersum-black)"
            : "",
        }}
      >
        {title}
      </h2>
    </div>
  );

  const overviewText = (
    <div
      className={`${fontStyles["body-copy"]} ${styles["overview"]}`}
      style={{
        visibility: openTabs.get(type) ? "hidden" : "visible",
        height: openTabs.get(type) ? 0 : "",
      }}
    >
      {overview}
    </div>
  );

  return (
    <div id={`service-section-${type}`} className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <p
          className={`${fontStyles["flair-copy"]} ${styles["service-number"]}`}
        >
          {index}
        </p>
        <div className={styles["text-container"]}>
          {titleText}
          {overviewText}
          {plusButton}
          {openTabs.get(type) && ServiceBreakdowns}
        </div>
        <div className={styles["mobile-text-container"]}>
          {titleText}
          {plusButton}
          <span style={{ display: openTabs.get(type) ? "none" : "" }}>
            {overviewText}
          </span>
          {openTabs.get(type) && ServiceBreakdowns}
        </div>
      </div>
    </div>
  );
};
