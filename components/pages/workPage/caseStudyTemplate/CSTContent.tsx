import { useCaseStudyContext } from "contexts/caseStudyContext";
import Link from "next/link";
import { FC } from "react";
import { CSTMedia } from "./CSTMedia";

import fontStyles from "../../../../styles/fontStyles.module.css";
import styles from "./CSTContent.module.css";
import Image from "next/image";
import { UnderlineArrowLink } from "components/shared/links/UnderlineArrowLink";
import { BetterSumColors } from "types/BetterSumColors";

export const CSTContent: FC = () => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  console.log(caseStudyData);

  return (
    <div className={styles["container"]}>
      <div className={styles["media-grid"]}>
        {caseStudyData.mediaContentCollection?.items.map(
          (mediaContent, index) => {
            return (
              <div key={index} className={styles["media-container"]}>
                <CSTMedia media={mediaContent} />
              </div>
            );
          }
        )}
      </div>
      <div className={`${styles["all-work-link"]}`}>
        <UnderlineArrowLink
          color={BetterSumColors.Black}
          text="See All Case Studies"
          link="/work"
        />
      </div>
    </div>
  );
};
