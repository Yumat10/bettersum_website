import { BetterSumColors } from "../../../types/BetterSumColors";
import styles from "./Subheading.module.css";
import fontStyles from "../../../styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";
import {
  homePageAnimationDuration,
  homePageLoadDuration,
} from "animations/homePageAnimations";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
    rotate: "270deg",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: homePageLoadDuration,
      duration: homePageAnimationDuration,
    },
  },
};

type Props = {
  title: string;
  sectionNumber?: number;
  color: BetterSumColors;
  topOffset?: string;
  leftOffset?: string;
};

export const Subheading = ({
  title,
  sectionNumber,
  color,
  topOffset = "0px",
  leftOffset = "-100px",
}: Props): JSX.Element => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles["container"]}
      style={{ top: topOffset, left: leftOffset }}
    >
      <p className={fontStyles["flair-copy"]} style={{ color }}>
        {sectionNumber && `${sectionNumber} — `}
        {title}
      </p>
    </motion.div>
  );
};
