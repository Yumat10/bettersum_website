import { FC } from "react";

import fontStyles from "../../../../styles/fontStyles.module.css";
import styles from "./TotalImpact.module.css";

export const TotalImpact: FC = () => {
  const impactFigures: { data: string; subtitle: string }[] = [
    { data: "5,678%", subtitle: "Businesses Scaled" },
    {
      data: "878",
      subtitle: "Tasks Automated",
    },
    { data: "3,230", subtitle: "Customers Impacted" },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["header-container"]}>
          <h2 className={fontStyles["category-header"]}>
            Sum of
            <br className={styles["mobile-br"]} /> Impact
          </h2>
        </div>
        <div className={styles["figure-grid"]}>
          {impactFigures.map(({ data, subtitle }, index) => {
            return (
              <div key={index} className={styles["figure-container"]}>
                <p className={fontStyles["category-header"]}>{data}</p>
                <p className={fontStyles["body-copy"]}>{subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
