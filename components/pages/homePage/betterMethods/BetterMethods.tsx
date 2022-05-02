import { MobileOnlyLineBreak } from "components/shared/lineBreaks/MobileOnlyLineBreak";
import { FC } from "react";

import fontStyles from "../../../../styles/fontStyles.module.css";
import styles from "./BetterMethods.module.css";

export const BetterMethods: FC = (): JSX.Element => {
  const methods: { title: string; description: string }[] = [
    {
      title: "Longevity Focused Strategies",
      description:
        "We believe in the future of sustainable practices, long-term thinking, and holistic solutions.",
    },
    {
      title: "User-Centered Design",
      description:
        "Both the client and every user that gets to touch the experience will be taken accounted for.",
    },
    {
      title: "Compounding Technologies",
      description:
        "We believe in providing the optimal solution for the challenges we take on.",
    },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["header-container"]}>
          <h2 className={fontStyles["category-header"]}>
            Better
            <MobileOnlyLineBreak /> Methods
          </h2>
        </div>
        <div className={styles["methods-grid"]}>
          {methods.map(({ title, description }, index) => {
            return (
              <div key={index} className={styles["methods-container"]}>
                <h3 className={fontStyles["body-copy"]}>{title}</h3>
                <p className={fontStyles["flair-copy"]}>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
