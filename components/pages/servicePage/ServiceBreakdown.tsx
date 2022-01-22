import { ServiceDetails } from "../../../types/ServiceDetails";
import styles from "./ServiceBreakdown.module.css";
import fontStyles from "styles/fontStyles.module.css";

export const ServiceBreakdown = ({
  name,
  description,
  offerings,
}: ServiceDetails): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <h2 className={fontStyles["category-header"]}>{name}</h2>
      <div className={styles["details-container"]}>
        <p className={`${fontStyles["body-copy"]} ${styles["description"]}`}>
          {description}
        </p>
        <ul className={styles["list"]}>
          {offerings.map((offering, index) => (
            <li key={index} className={fontStyles["body-container"]}>
              {offering}
            </li>
          ))}
        </ul>{" "}
      </div>
    </div>
  );
};
