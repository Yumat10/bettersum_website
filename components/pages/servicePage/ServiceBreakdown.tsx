import { ServiceDetails } from "../../../types/ServiceDetails";
import styles from "./ServiceBreakdown.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

export const ServiceBreakdown = ({
  name,
  description,
  offerings,
}: ServiceDetails): JSX.Element => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={styles["container"]}
    >
      <h2 className={fontStyles["body-copy"]}>{name}</h2>
      <div className={styles["details-container"]}>
        <p
          className={`${fontStyles["category-copy"]} ${styles["description"]}`}
        >
          {description}
        </p>
        <ul className={styles["list"]}>
          {offerings.map((offering, index) => (
            <li key={index} className={fontStyles["category-copy"]}>
              {offering}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
