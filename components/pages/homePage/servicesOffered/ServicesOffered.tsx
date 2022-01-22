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
  padding: string;
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
          challenge values, and develop strategies to articulate a better point
          of view that helps your business{" "}
          <span className={styles["highlighted-text"]}>
            navigate the future
          </span>
          .
        </span>
      ),
      path: "/services?type=strategy",
      padding: "65px 50px 0px 0px",
    },
    {
      icon: {
        url: "/serviceIcons/developmentIcon.svg",
        height: 45,
        width: 45,
      },
      title: "Holistic Design",
      description: (
        <span>
          We design digital products, brands, and services by building{" "}
          <span className={styles["highlighted-text"]}>with empathy</span>. We
          believe that a thoughtful user experience is what makes the difference
          between a great solution and a better solution.
        </span>
      ),
      path: "/services?type=design",
      padding: "65px 50px 0px 50px",
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
          We help transform great visions into better products. We expand your
          ideas into{" "}
          <span className={styles["highlighted-text"]}>
            fully functioning products,
          </span>{" "}
          that quickly obtain user feedback for focusing on developing the next
          steps for your business.
        </span>
      ),
      path: "/services?type=development",
      padding: "65px 0px 0px 50px",
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
