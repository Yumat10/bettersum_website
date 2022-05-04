import { useCaseStudyContext } from "contexts/caseStudyContext";
import { FC } from "react";

import styles from "./CSTHeader.module.css";
import { CSTMedia } from "./CSTMedia";

export const CSTHeader: FC = () => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  return (
    <div>
      <div>
        <h1>{caseStudyData?.title}</h1>
        <h2>{caseStudyData?.subtitle}</h2>
        {caseStudyData.siteUrl && (
          <a href={caseStudyData.siteUrl} target="_blank" rel="noreferrer">
            Visit Live Site
          </a>
        )}
        {caseStudyData.splashImage && (
          <CSTMedia media={caseStudyData.splashImage} height="500px" />
        )}
      </div>
    </div>
  );
};
