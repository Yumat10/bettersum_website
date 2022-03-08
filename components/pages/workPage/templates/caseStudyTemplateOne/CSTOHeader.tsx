import { useCaseStudyContext } from "contexts/caseStudyContext";
import styles from "./CSTOHeader.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { Subheading } from "components/shared/navbars/Subheading";
import { BetterSumColors } from "types/BetterSumColors";
import { motion, Variants } from "framer-motion";
import {
  caseStudyHeaderVariants,
  caseStudySubheaderVariants,
} from "components/shared/variants/HeaderVariants";

const tagContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      delayChildren: 1.5,
      staggerChildren: 0.5,
    },
  },
};

const tagVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const CSTOHeader = (): JSX.Element | null => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  const { title, shortDescription, isLabs, clientName, tags, url } =
    caseStudyData;

  return (
    <div className={styles["container"]}>
      <div className={styles["top-container"]}>
        <motion.h1
          variants={caseStudyHeaderVariants}
          initial="hidden"
          animate="visible"
          className={`${fontStyles["title-header"]} ${styles["title"]}`}
        >
          <Subheading
            title="Work"
            color={BetterSumColors.Black}
            topOffset="10px"
          />
          {title}
        </motion.h1>
        <motion.h3
          variants={caseStudySubheaderVariants}
          initial="hidden"
          animate="visible"
          className={`${fontStyles["category-header"]} ${styles["description"]}`}
        >
          {shortDescription}
        </motion.h3>
        {isLabs && (
          <motion.p
            variants={caseStudySubheaderVariants}
            initial="hidden"
            animate="visible"
            className={`${fontStyles["body-copy"]} ${styles["lab-tag"]}`}
          >
            Labs
          </motion.p>
        )}
      </div>
      <hr className={styles["divider"]} />
      <div className={styles["bottom-container"]}>
        <motion.div
          variants={tagContainerVariants}
          initial="hidden"
          animate="visible"
          className={styles["tag-container"]}
        >
          {tags.map((tag) => (
            <motion.p
              variants={tagVariants}
              key={tag}
              className={`${fontStyles["body-copy"]} ${styles["tag"]}`}
            >
              #{tag}
              {"  "}
            </motion.p>
          ))}
        </motion.div>
        <motion.a
          variants={tagContainerVariants}
          initial="hidden"
          animate="visible"
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`${fontStyles["body-copy"]} ${styles["visit-site"]}`}
        >
          <b>Visit Site</b>
        </motion.a>
      </div>
    </div>
  );
};
