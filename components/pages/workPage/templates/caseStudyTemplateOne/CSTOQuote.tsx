import { useCaseStudyContext } from "contexts/caseStudyContext";
import Image from "next/image";
import styles from "./CSTOQuote.module.css";

export const CSTOQuote = (): JSX.Element | null => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  const {
    quote,
    quoteUserName,
    quoteUserTitle,
    quoteLinkText,
    quoteLink,
    video,
  } = caseStudyData;

  return (
    <div className={styles["container"]}>
      <div className={styles["quote-container"]}>
        <h3 className={styles["quote"]}>{quote}</h3>
        <div className={styles["quote-details-container"]}>
          <p>{quoteUserName} </p>
          <p>@ </p>
          <p>{quoteUserTitle}</p>
          <Image
            src="/arrows/leftArrowBeige.svg"
            alt="Go"
            width={24}
            height={24}
          />
          <a href={quoteLink} target="_blank" rel="noreferrer">
            {quoteLinkText}
          </a>
        </div>
      </div>
      <div className={styles["video-container"]}>
        <video src={video.url} autoPlay muted loop />
      </div>
    </div>
  );
};
