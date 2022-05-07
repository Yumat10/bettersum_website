import { MobileOnlyLineBreak } from "components/shared/lineBreaks/MobileOnlyLineBreak";
import { useDynamiDataContext } from "contexts/dynamicDataContext";
import { FC } from "react";

import fontStyles from "../../../../styles/fontStyles.module.css";
import styles from "./TotalImpact.module.css";

export const TotalImpact: FC = () => {
  const { impactData } = useDynamiDataContext();

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["header-container"]}>
          <h2 className={fontStyles["title-header"]}>
            Sum of
            <MobileOnlyLineBreak /> Impact
          </h2>
        </div>
        <div className={styles["figure-grid"]}>
          {impactData.map(({ data, subtitle }, index) => {
            return (
              <div key={index} className={styles["figure-container"]}>
                <p className={fontStyles["title-header"]}>{data}</p>
                <p
                  className={`${fontStyles["body-copy"]} ${styles["subtitle-text"]}`}
                >
                  {subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
