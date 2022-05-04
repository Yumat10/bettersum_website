import { useCaseStudyContext } from "contexts/caseStudyContext";
import Image from "next/image";
import { CaseStudyPhoto } from "types/CaseStudy";
import { CSTOQuote } from "./CSTOQuote";
import fontStyles from "styles/fontStyles.module.css";
import styles from "./CSTOContent.module.css";

export const CSTOContent = (): JSX.Element | null => {
  const { caseStudyData } = useCaseStudyContext();

  if (!caseStudyData) return null;

  const { photosCollection, overview, tools, stats, statDescriptions } =
    caseStudyData;

  const [photoOne, photoTwo, photoThree, photoFour, photoFive] =
    photosCollection.items;

  const CaseStudyPhotoComponent = (photo: CaseStudyPhoto) => {
    const { title, url } = photo;
    return (
      <div className={styles["photo-container"]}>
        <Image src={url} alt={title} objectFit="cover" layout="fill" />
      </div>
    );
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        {CaseStudyPhotoComponent(photoOne)}
        <div className={styles["overview-tools-container"]}>
          <div className={styles["overview-container"]}>
            <h3
              className={`${fontStyles["body-copy"]} ${styles["overview-title"]}`}
            >
              Overview
            </h3>
            <p className={fontStyles["category-copy"]}>
              {overview.json.content[0].content[0].value}
            </p>
          </div>
          <div className={styles["tools-container"]}>
            <h3
              className={`${fontStyles["body-copy"]} ${styles["tools-title"]}`}
            >
              Tool Kits
            </h3>
            <div className={styles["tools-grid"]}>
              {tools.map((tool) => (
                <p
                  key={tool}
                  className={`${fontStyles["category-copy"]} ${styles["tool"]}`}
                >
                  + {tool}
                </p>
              ))}
            </div>
          </div>
        </div>
        {CaseStudyPhotoComponent(photoTwo)}
        {CaseStudyPhotoComponent(photoThree)}
        <div className={styles["stats-grid"]}>
          {stats.map((stat, index) => {
            const statDescription = statDescriptions[index];
            return (
              <div key={index} className={styles["stat-container"]}>
                <p className={fontStyles["title-header"]}>{stat}</p>
                <p
                  className={`${fontStyles["category-copy"]} ${styles["stat-description"]}`}
                >
                  {statDescription}
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles["photo-grid"]}>
          <div>
            <Image
              src={photoFour.url}
              alt={photoFour.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div>
            <Image
              src={photoFive.url}
              alt={photoFive.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
        <CSTOQuote />
      </div>
    </div>
  );
};
