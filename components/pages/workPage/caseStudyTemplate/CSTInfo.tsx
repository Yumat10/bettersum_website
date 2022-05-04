import { useCaseStudyContext } from "contexts/caseStudyContext";
import { FC } from "react";

import styles from "./CSTInfo.module.css";

export const CSTInfo: FC = () => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  const StatsGrid = (): JSX.Element | null => {
    if (caseStudyData.stats?.length !== caseStudyData.statLabels?.length) {
      return null;
    }
    return (
      <div>
        {caseStudyData.stats?.map((stat, index) => {
          return (
            <div key={index}>
              <p>{stat}</p>
              {/* @ts-ignore */}
              <p>{caseStudyData?.statLabels[index]}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div>
        <h2>Overview</h2>
        <div>{caseStudyData.description?.json.content[0].content[0].value}</div>
        {StatsGrid()}
      </div>
    </div>
  );
};
