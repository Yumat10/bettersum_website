import { CaseStudiesGrid } from "components/shared/caseStudies/CaseStudiesGrid";
import { MobileOnlyLineBreak } from "components/shared/lineBreaks/MobileOnlyLineBreak";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import fontStyles from "styles/fontStyles.module.css";
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
        <Link href="/work" passHref>
          <motion.a
            // variants={buttonVariants}
            whileHover="hover"
            className={styles["button"]}
          >
            <p className={fontStyles["category-copy"]}>See All Case Studies</p>
            <motion.div
              // variants={arrowVariants}
              className={styles["arrow-container"]}
            >
              <Image
                src="/arrows/rightArrowBeige.svg"
                alt=""
                height={24}
                width={24}
              />
            </motion.div>
          </motion.a>
        </Link>
      </div>
    </div>
  );
};
