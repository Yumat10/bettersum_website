import { useCaseStudyContext } from "contexts/caseStudyContext";
import Image from "next/image";
import fontStyles from "styles/fontStyles.module.css";
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
        <h3 className={`${fontStyles["title-header"]} ${styles["quote"]}`}>
          {quote}
        </h3>
        <div className={styles["quote-details-container"]}>
          <p className={fontStyles["flair-copy"]}>
            <b>{quoteUserName} </b>
          </p>
          <p className={fontStyles["flair-copy"]}>@ {quoteUserTitle}</p>
          <div className={styles["arrow-link-container"]}>
            <div className={styles["arrow"]}>
              <Image
                src="/arrows/rightArrowBeige.svg"
                alt="Go"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <a
              href={quoteLink}
              target="_blank"
              rel="noreferrer"
              className={fontStyles["flair-copy"]}
            >
              <b>
                <u>{quoteLinkText}</u>
              </b>
            </a>
          </div>
        </div>
      </div>
      <video src={video.url} autoPlay muted loop className={styles["video"]} />
    </div>
  );
};
