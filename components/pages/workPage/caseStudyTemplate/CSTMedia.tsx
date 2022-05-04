import Image from "next/image";
import { FC } from "react";
import { CaseStudyMedia } from "types/CaseStudy";

import styles from "./CSTMedia.module.css";

type CSTOMediaProps = {
  media: CaseStudyMedia;
};

export const CSTMedia: FC<CSTOMediaProps> = ({ media }) => {
  if (media.contentType.startsWith("image/")) {
    return <Image src={media.url} alt="" layout="fill" objectFit="cover" />;
  } else {
    return <video src={media.url} autoPlay muted className={styles["video"]} />;
  }
};
