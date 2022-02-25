import { useCaseStudyContext } from "contexts/caseStudyContext";
import styles from "./CSTOHeader.module.css";
import fontStyles from "styles/fontStyles.module.css";

export const CSTOHeader = (): JSX.Element | null => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  const { title, shortDescription, isLabs, clientName, tags, url } =
    caseStudyData;

  return (
    <div className={styles["container"]}>
      <div className={styles["top-container"]}>
        <h1>{title}</h1>
        <h3>{shortDescription}</h3>
        {isLabs && <p>Labs</p>}
      </div>
      <hr className={styles["divider"]} />
      <div className={styles["bottom-container"]}>
        <div className={styles["tag-container"]}>
          {tags.map((tag) => (
            <p key={tag} className={styles["tag"]}>
              #{tag}{" "}
            </p>
          ))}
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          Visit Site
        </a>
      </div>
    </div>
  );
};
