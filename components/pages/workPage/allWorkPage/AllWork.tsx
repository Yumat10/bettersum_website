import { Subheading } from "components/shared/navbars/Subheading";
import { useCaseStudyContext } from "contexts/caseStudyContext";
import { BetterSumColors } from "types/BetterSumColors";
import fontStyles from "styles/fontStyles.module.css";
import styles from "./AllWork.module.css";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { CaseStudiesGrid } from "components/shared/caseStudies/CaseStudiesGrid";
import { ContactForm } from "components/shared/forms/ContactForm";
import {
  caseStudyHeaderVariants,
  caseStudySubheaderVariants,
} from "components/shared/variants/HeaderVariants";
import { useDynamiDataContext } from "contexts/dynamicDataContext";

export const AllWork = (): JSX.Element => {
  const { allWorkOutcomeData } = useDynamiDataContext();

  const [shakeLabTag, setShakeLabTag] = useState<boolean>(false);

  return (
    <div className={styles["container"]}>
      <motion.h1
        // variants={caseStudyHeaderVariants}
        initial="hidden"
        animate="visible"
        className={`${fontStyles["title-header"]} ${styles["title"]}`}
      >
        Our work has led to
        <br />
        <u>{allWorkOutcomeData}</u>
      </motion.h1>
      <CaseStudiesGrid shakeLabTag={shakeLabTag} />
    </div>
  );
};
