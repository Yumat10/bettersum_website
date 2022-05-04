import { useCaseStudyContext } from "contexts/caseStudyContext";
import Link from "next/link";
import { FC } from "react";
import { CSTMedia } from "./CSTMedia";

import fontStyles from "../../../../styles/fontStyles.module.css";
import styles from "./CSTContent.module.css";
import Image from "next/image";

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
      <Link href="/work">
        <a
          className={`${fontStyles["category-copy"]} ${styles["all-work-link"]}`}
        >
          See All Case Studies
          <span className={styles["arrow-container"]}>
            <Image
              src="/arrows/rightArrowBlack.svg"
              alt=""
              objectFit="contain"
              height={30}
              width={35}
            />
          </span>
        </a>
      </Link>
    </div>
  );
};
