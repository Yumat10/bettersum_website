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
import { UnderlineArrowLink } from "components/shared/links/UnderlineArrowLink";

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
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div>
          <h1 className={fontStyles["intro-header"]}>
            Delivering
            <br />
            Ecommerce <br />
            Solutions <br />
            That Scale <br />
            Businesses.
          </h1>
          <h3
            className={`${fontStyles["subtitle-header"]} ${styles["subtitle-text"]}`}
          >
            We are an integrative digital studio with expertise in strategy,
            design, and development.
          </h3>
          <h2
            className={`${fontStyles["category-copy"]} ${styles["cta-text"]}`}
          >
            <UnderlineArrowLink
              color={BetterSumColors.Black}
              text="Partner with us to scale your DTC ecommerce business"
              link="/"
            />
          </h2>
        </div>
        <div className={styles["image-container"]}>
          <Image
            src="/splashScreenPhoto.svg"
            alt="welcome"
            layout="fill"
            className={styles["next-image"]}
          />
        </div>
      </div>
    </div>
  );
};
