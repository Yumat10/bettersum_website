import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/Subheading";
import { ServiceColumn } from "./ServiceColumn";
import styles from "./ServicesOffered.module.css";

type IconParams = {
  url: string;
  height: number;
  width: number;
};

export type ServiceDetails = {
  icon: IconParams;
  title: string;
  description: JSX.Element;
  path: string;
  includePlus?: boolean;
};

export const ServicesOffered = (): JSX.Element => {
  const services: ServiceDetails[] = [
    {
      icon: {
        url: "/serviceIcons/strategyIcon.svg",
        height: 45,
        width: 70,
      },
      title: "Strategy",
      description: (
        <span>
          Our work begins at the inception of an idea. We solve problems,
          challenge values, and develop strategies to articulate a point of view
          that helps your business{" "}
          <span className={styles["highlighted-text"]}>
            navigate the future
          </span>
          .
        </span>
      ),
      path: "/services?type=strategy",
    },
    {
      icon: {
        url: "/serviceIcons/designIcon.svg",
        height: 45,
        width: 45,
      },
      title: "Holistic Design",
      description: (
        <span>
          We design digital products, brands, and services by building with
          empathy{" "}
          <span className={styles["highlighted-text"]}>with empathy</span>. We
          believe that thoughtfully considering user experience is what makes a
          difference when designing for real people.
        </span>
      ),
      path: "/services?type=design",
    },
    {
      icon: {
        url: "/serviceIcons/developmentIcon.svg",
        height: 45,
        width: 45,
      },
      title: "Development",
      description: (
        <span>
          We help transform great visions into concrete results. We expand your
          ideas into{" "}
          <span className={styles["highlighted-text"]}>
            fully functioning products
          </span>{" "}
          and work to obtain prompt user feedback that provides invaluable
          material for developing your business.
        </span>
      ),
      path: "/services?type=development",
    },
  ];
  return (
    <div id="home-page-services-section" className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <Subheading
          title="services"
          sectionNumber={2}
          color={BetterSumColors.Black}
          topOffset="130px"
        />
        <div className={styles["service-container"]}>
          {services.map((serviceItem, index) => (
            <ServiceColumn
              key={serviceItem.title}
              {...serviceItem}
              includePlus={index < services.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
