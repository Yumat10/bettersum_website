import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/Subheading";
import { PageLinks } from "./PageLinks";
import { ReadMoreArrow } from "./ReadMoreArrow";
import Image from "next/image";
import styles from "./SplashScreen.module.css";
import fontStyles from "../../../../styles/fontStyles.module.css";

export const SplashScreen = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles["inner-container"]}>
        <Subheading
          title="intro"
          sectionNumber={1}
          color={BetterSumColors.Beige}
          topOffset="345px"
        />
        <PageLinks />
        <div className={styles["brand-logo"]}>
          <Image
            src="/brandLogos/betterSumLogoBeige.svg"
            alt="BetterSum"
            objectFit="cover"
            height={180}
            width={1000}
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
