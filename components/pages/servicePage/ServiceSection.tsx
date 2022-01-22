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
  const { openTab, setOpenTab } = useServicePageContext();

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

  return (
    <div className={styles["container"]}>
      <div className={styles["overview-container"]}>
        <p
          className={`${fontStyles["flair-copy"]} ${styles["service-number"]}`}
        >
          {index}
        </p>
        <div className={styles["text-container"]}>
          <div className={styles["title-container"]}>
            <h2
              className={`${fontStyles["category-header"]} ${styles["title-text"]}`}
              style={{
                borderTop:
                  openTab === type ? "4px solid var(--bettersum-black)" : "",
              }}
            >
              {title}
            </h2>
          </div>
          <div
            className={`${fontStyles["body-copy"]} ${styles["overview"]}`}
            style={{ visibility: openTab === type ? "hidden" : "visible" }}
          >
            {overview}
          </div>
          <button
            onClick={() => setOpenTab(type)}
            className={styles["plus-container"]}
            style={{ visibility: openTab === type ? "hidden" : "visible" }}
          >
            <Image
              src="/actionsPlus.svg"
              alt="See More"
              height={24}
              width={24}
            />
          </button>

          {openTab === type && ServiceBreakdowns}
        </div>
      </div>
    </div>
  );
};
