import { useCaseStudyContext } from "contexts/caseStudyContext";
import { FC } from "react";

import fontStyles from "../../../../styles/fontStyles.module.css";
import styles from "./CSTInfo.module.css";

export const CSTInfo: FC = () => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  const StatsGrid = (): JSX.Element | null => {
    if (caseStudyData.stats?.length !== caseStudyData.statLabels?.length) {
      return null;
    }
    return (
      <div className={styles["stats-grid"]}>
        {caseStudyData.stats?.map((stat, index) => {
          return (
            <div key={index} className={styles["stats-container"]}>
              <p
                className={`${fontStyles["title-header"]} ${styles["stat-text"]}`}
              >
                {stat}
              </p>
              <p
                className={`${fontStyles["body-copy"]} ${styles["stat-label-text"]}`}
              >
                {/* @ts-ignore */}
                {caseStudyData?.statLabels[index]}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <h2
          className={`${fontStyles["title-header"]} ${styles["header-text"]}`}
        >
          Overview
        </h2>
        <div className={`${fontStyles["body-copy"]}`}>
          {caseStudyData.description?.json.content[0].content[0].value}
        </div>
        {caseStudyData.stats && StatsGrid()}
      </div>
    </div>
  );
};
