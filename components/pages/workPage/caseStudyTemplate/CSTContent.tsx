import { useCaseStudyContext } from "contexts/caseStudyContext";
import Link from "next/link";
import { FC } from "react";

import styles from "./CSTContent.module.css";
import { CSTMedia } from "./CSTMedia";

export const CSTContent: FC = () => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  console.log(caseStudyData);

  return (
    <div>
      <div>
        <div>
          {/* {caseStudyData.mediaContentCollection?.items.map(
            (mediaContent, index) => {
              return (
                <CSTMedia key={index} media={mediaContent} height="500px" />
              );
            }
          )} */}
        </div>
        <Link href="/work">
          <a>See All Case Studies</a>
        </Link>
      </div>
    </div>
  );
};
