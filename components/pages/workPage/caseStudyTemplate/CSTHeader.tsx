import { useCaseStudyContext } from "contexts/caseStudyContext";
import { FC } from "react";
import { CSTMedia } from "./CSTMedia";

import fontStyles from "../../../../styles/fontStyles.module.css";
import styles from "./CSTHeader.module.css";

export const CSTHeader: FC = () => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  return (
    <div className={styles["container"]}>
      <div className={styles["header-container"]}>
        <h1 className={`${fontStyles["intro-header"]}`}>
          {caseStudyData?.title}
        </h1>
        <h2 className={`${fontStyles["body-copy"]} ${styles["subtitle-text"]}`}>
          {caseStudyData?.subtitle}
        </h2>
        {caseStudyData.siteUrl && (
          <a
            href={caseStudyData.siteUrl}
            target="_blank"
            rel="noreferrer"
            className={`${fontStyles["flair-copy"]} ${styles["link-text"]}`}
          >
            Visit Live Site
          </a>
        )}
      </div>
      <div className={styles["splash-image-container"]}>
        {caseStudyData.splashImage && (
          <CSTMedia media={caseStudyData.splashImage} />
        )}
      </div>
    </div>
  );
};
