import Image from "next/image";
import { FC } from "react";
import { CaseStudyMedia } from "types/CaseStudy";

import styles from "./CaseStudyMediaContent.module.css";

type CSTOMediaProps = {
  media: CaseStudyMedia;
};

export const CaseStudyMediaContent: FC<CSTOMediaProps> = ({ media }) => {
  console.log(media);
  if (media.contentType.startsWith("image/")) {
    return <img src={media.url} alt="" className={styles["image"]} />;
  } else if (media.contentType.startsWith("video/")) {
    return (
      <video src={media.url} autoPlay muted loop className={styles["video"]} />
    );
  }

  return null;
};
