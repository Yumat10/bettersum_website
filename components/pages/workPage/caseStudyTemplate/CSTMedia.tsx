import Image from "next/image";
import { FC } from "react";
import { CaseStudyMedia } from "types/CaseStudy";

import styles from "./CSTMedia.module.css";

type CSTOMediaProps = {
  media: CaseStudyMedia;
};

export const CSTMedia: FC<CSTOMediaProps> = ({ media }) => {
  if (media.contentType.startsWith("image/")) {
    return (
      <Image src={media.url} alt="" layout="fill" objectFit="cover" priority />
    );
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
