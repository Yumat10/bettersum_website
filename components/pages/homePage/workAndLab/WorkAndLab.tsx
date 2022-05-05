import { CaseStudiesGrid } from "components/shared/caseStudies/CaseStudiesGrid";
import { MobileOnlyLineBreak } from "components/shared/lineBreaks/MobileOnlyLineBreak";
import { UnderlineArrowLink } from "components/shared/links/UnderlineArrowLink";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import fontStyles from "styles/fontStyles.module.css";
import { BetterSumColors } from "types/BetterSumColors";
import styles from "./WorkAndLab.module.css";

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
  },
};

const arrowVariants: Variants = {
  hover: {
    x: "95%",
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const WorkAndLab = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <h3 className={`${fontStyles["title-header"]} ${styles["header"]}`}>
          Recent <MobileOnlyLineBreak />
          Work
        </h3>
        <div className={styles["case-studies-grid-container"]}>
          <CaseStudiesGrid />
        </div>
        <div className={styles["link-container"]}>
          <UnderlineArrowLink
            color={BetterSumColors.Beige}
            text="See All Case Studies"
            link="/work"
          />
        </div>
      </div>
    </div>
  );
};
