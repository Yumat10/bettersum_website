import { MobileOnlyLineBreak } from "components/shared/lineBreaks/MobileOnlyLineBreak";
import { FC } from "react";

import fontStyles from "../../../../styles/fontStyles.module.css";
import styles from "./BetterMethods.module.css";

export const BetterMethods: FC = (): JSX.Element => {
  const methods: { title: string; description: string }[] = [
    {
      title: "Longevity-Focused Strategies",
      description:
        "We believe in the future of sustainable practices, long-term thinking, and holistic solutions. BetterSum places emphasis on viability over time, working with its clients to plan for the future of their product or experience.",
    },
    {
      title: "User-Centered Design",
      description:
        "Empathy is the foundation of all of our design practices. By reflecting on the needs and feelings of current and future users, we create guidelines for our client’s growth over time that take into account both the product’s viability and responsibility to the end-user.",
    },
    {
      title: "Compounding Technologies",
      description:
        "At BetterSum we don’t believe in one-size-fits-all solutions. The optimal strategy for each client are technical architectures that will grow to meet their future goals. We implement cutting-edge technology and automation to fill the gaps needed for proper scaling.",
    },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["header-container"]}>
          <h2 className={fontStyles["title-header"]}>
            Better
            <MobileOnlyLineBreak /> Methods
          </h2>
        </div>
        <div className={styles["methods-grid"]}>
          {methods.map(({ title, description }, index) => {
            return (
              <div key={index} className={styles["methods-container"]}>
                <h3 className={fontStyles["category-copy"]}>{title}</h3>
                <p className={fontStyles["body-copy"]}>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
