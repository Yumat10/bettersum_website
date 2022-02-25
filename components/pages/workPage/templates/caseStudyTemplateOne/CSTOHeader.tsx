import { useCaseStudyContext } from "contexts/caseStudyContext";
import styles from "./CSTOHeader.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { Subheading } from "components/shared/navbars/Subheading";
import { BetterSumColors } from "types/BetterSumColors";

export const CSTOHeader = (): JSX.Element | null => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  const { title, shortDescription, isLabs, clientName, tags, url } =
    caseStudyData;

  return (
    <div className={styles["container"]}>
      <div className={styles["top-container"]}>
        <h1 className={`${fontStyles["title-header"]} ${styles["title"]}`}>
          <Subheading
            title="Work"
            color={BetterSumColors.Black}
            topOffset="10px"
          />
          {title}
        </h1>
        <h3
          className={`${fontStyles["category-header"]} ${styles["description"]}`}
        >
          {shortDescription}
        </h3>
        {isLabs && (
          <p className={`${fontStyles["body-copy"]} ${styles["lab-tag"]}`}>
            Labs
          </p>
        )}
      </div>
      <hr className={styles["divider"]} />
      <div className={styles["bottom-container"]}>
        <div className={styles["tag-container"]}>
          {tags.map((tag) => (
            <p
              key={tag}
              className={`${fontStyles["body-copy"]} ${styles["tag"]}`}
            >
              #{tag}
              {"  "}
            </p>
          ))}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`${fontStyles["body-copy"]} ${styles["visit-site"]}`}
        >
          <b>Visit Site</b>
        </a>
      </div>
    </div>
  );
};
