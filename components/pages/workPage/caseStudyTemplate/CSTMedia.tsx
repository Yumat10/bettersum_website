import Image from "next/image";
import { FC } from "react";
import { CaseStudyMedia } from "types/CaseStudy";

import styles from "./CSTMedia.module.css";

type CSTOMediaProps = {
  media: CaseStudyMedia;
};

export const CSTMedia: FC<CSTOMediaProps> = ({ media }) => {
  if (media.contentType.startsWith("image/")) {
    return <img src={media.url} alt="" className={styles["image"]} />;
  } else if (media.contentType.startsWith("video/")) {
    return (
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        muted
        className={styles["video"]}
      />
    );
  }

  return null;
};
