import { Subheading } from "components/shared/navbars/Subheading";
import { useCaseStudyContext } from "contexts/caseStudyContext";
import { BetterSumColors } from "types/BetterSumColors";
import fontStyles from "styles/fontStyles.module.css";
import styles from "./AllWorkHeader.module.css";

export const AllWorkHeader = (): JSX.Element => {
  return (
    <div>
      <div className={styles["container"]}>
        <div className={styles["top-container"]}>
          <h1 className={`${fontStyles["title-header"]} ${styles["title"]}`}>
            <Subheading
              title="Work"
              color={BetterSumColors.Black}
              topOffset="10px"
            />
            We are constantly creating for the future.
          </h1>

          <div className={styles["lab-container"]}>
            <p className={`${fontStyles["body-copy"]} ${styles["lab-tag"]}`}>
              Labs
            </p>
            <p className={`${fontStyles["body-copy"]}`}>
              highlights products that we have made-in-house.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
