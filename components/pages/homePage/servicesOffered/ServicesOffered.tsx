import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/Subheading";
import { ServiceColumn } from "./ServiceColumn";
import styles from "./ServicesOffered.module.css";

export type ServiceDetails = {
  icon: string;
  title: string;
  description: JSX.Element;
  path: string;
  includePlus?: boolean;
};

export const ServicesOffered = (): JSX.Element => {
  const services: ServiceDetails[] = [
    {
      icon: "",
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
    },
    {
      icon: "",
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
    },
    {
      icon: "",
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
    },
  ];
  return (
    <div>
      <Subheading
        title="services"
        sectionNumber={2}
        color={BetterSumColors.Black}
      />
      {services.map((serviceItem, index) => (
        <ServiceColumn
          key={serviceItem.title}
          {...serviceItem}
          includePlus={index < services.length - 1}
        />
      ))}
    </div>
  );
};
