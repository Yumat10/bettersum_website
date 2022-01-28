import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/Subheading";
import { PageLinks } from "./PageLinks";
import { ReadMoreArrow } from "./ReadMoreArrow";
import Image from "next/image";
import betterSumLogo from "public/brandLogos/betterSumLogoNoLineBeige.svg";
import styles from "./SplashScreen.module.css";
import fontStyles from "../../../../styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";
import {
  enterFromBottomVariants,
  homePageLoadDuration,
} from "animations/homePageAnimations";

const loadingBarInnerContainerVariants: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      duration: homePageLoadDuration,
    },
  },
};

export const SplashScreen = (): JSX.Element => {
  return (
    <div id="home-page-intro-section" className={styles.container}>
      <div className={styles["inner-container"]}>
        <PageLinks />
        <div className={styles["brand-logo"]}>
          <Subheading
            title="intro"
            sectionNumber={1}
            color={BetterSumColors.Beige}
            topOffset="3rem"
          />
          <div className={styles["loading-bar-container"]}>
            <motion.div
              variants={loadingBarInnerContainerVariants}
              initial="hidden"
              animate="visible"
              className={styles["loading-bar-inner-container"]}
            />
          </div>
          <div className={styles["brand-logo-container"]}>
            <Image
              src={betterSumLogo}
              alt="BetterSum"
              objectFit="contain"
              layout="fill"
              className={styles["brand-logo"]}
            />
          </div>
        </div>
        <motion.div
          variants={enterFromBottomVariants}
          initial="hidden"
          animate="visible"
          className={`${fontStyles["flair-copy"]} ${styles["subheader"]}`}
        >
          A holistic integrative digital studio.
        </motion.div>
        <ReadMoreArrow />
      </div>
    </div>
  );
};
