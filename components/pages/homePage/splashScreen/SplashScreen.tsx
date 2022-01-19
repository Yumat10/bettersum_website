import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/SubHeading";
import { PageLinks } from "./PageLinks";
import { ReadMoreArrow } from "./ReadMoreArrow";
import styles from "./SplashScreen.module.css";

export const SplashScreen = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Subheading
        title="intro"
        sectionNumber={1}
        color={BetterSumColors.Beige}
      />
      <PageLinks />
      <div>
        <h1>BetterSum</h1>
      </div>
      <p>A holistic integrative digital studio.</p>
      <ReadMoreArrow />
    </div>
  );
};
