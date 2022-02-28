import { Subheading } from "components/shared/navbars/Subheading";
import { useCaseStudyContext } from "contexts/caseStudyContext";
import { BetterSumColors } from "types/BetterSumColors";
import fontStyles from "styles/fontStyles.module.css";
import styles from "./AllWork.module.css";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { CaseStudiesGrid } from "components/shared/caseStudies/CaseStudiesGrid";
import { ContactForm } from "components/shared/forms/ContactForm";

const labTagVariants: Variants = {
  hover: {
    scale: 1.1,
  },
};

export const AllWork = (): JSX.Element => {
  const [shakeLabTag, setShakeLabTag] = useState<boolean>(false);

  const Header = (): JSX.Element => (
    <div className={styles["container"]}>
      <div className={styles["top-container"]}>
        <h1 className={`${fontStyles["title-header"]} ${styles["title"]}`}>
          <Subheading
            title="Work"
            color={BetterSumColors.Black}
            topOffset="10px"
          />
          We are constantly creating for the future.
        </h1>

        <div className={styles["lab-container"]}>
          <motion.button
            variants={labTagVariants}
            whileHover="hover"
            onClick={() => {
              setShakeLabTag(true);
              setTimeout(() => {
                setShakeLabTag(false);
              }, 1000);
            }}
            className={`${fontStyles["body-copy"]} ${styles["lab-tag"]}`}
          >
            Labs
          </motion.button>
          <p className={`${fontStyles["body-copy"]}`}>
            highlights products that we have made in-house.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <CaseStudiesGrid shakeLabTag={shakeLabTag} />
    </div>
  );
};
