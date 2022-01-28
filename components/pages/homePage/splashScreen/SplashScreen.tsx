import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/Subheading";
import { PageLinks } from "./PageLinks";
import { ReadMoreArrow } from "./ReadMoreArrow";
import Image from "next/image";
import betterSumLogo from "public/brandLogos/betterSumLogoBeige.svg";
import styles from "./SplashScreen.module.css";
import fontStyles from "../../../../styles/fontStyles.module.css";

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
          <Image
            src={betterSumLogo}
            alt="BetterSum"
            objectFit="contain"
            layout="fill"
            className={styles["brand-logo"]}
          />
        </div>
        <p className={`${fontStyles["flair-copy"]} ${styles["subheader"]}`}>
          A holistic integrative digital studio.
        </p>
        <ReadMoreArrow />
      </div>
    </div>
  );
};
