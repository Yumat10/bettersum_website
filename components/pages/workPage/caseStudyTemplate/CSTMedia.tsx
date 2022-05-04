import Image from "next/image";
import { FC } from "react";
import { CaseStudyMedia } from "types/CaseStudy";

import styles from "./CSTMedia.module.css";

type CSTOMediaProps = {
  media: CaseStudyMedia;
  height: string;
};

export const CSTMedia: FC<CSTOMediaProps> = ({ media, height }) => {
  if (media.contentType.startsWith("image/")) {
    return <Image src={media.url} alt="" height={height} width={500} />;
  } else {
    return <video src={media.url} autoPlay muted />;
  }
};
