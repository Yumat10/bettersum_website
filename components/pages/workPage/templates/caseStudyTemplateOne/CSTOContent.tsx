import { useCaseStudyContext } from "contexts/caseStudyContext";
import Image from "next/image";
import { CaseStudyPhoto } from "types/CaseStudy";
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
        <Image
          src={url}
          alt={title}
          objectFit="contain"
          width={200}
          height={200}
        />
      </div>
    );
  };

  return (
    <div className={styles["container"]}>
      {CaseStudyPhotoComponent(photoOne)}
      <div className={styles["overview-tools-container"]}>
        <div className={styles["overview-container"]}>
          <h3>Overview</h3>
          <p>{overview.json.content[0].content[0].value}</p>
        </div>
        <div className={styles["tools-container"]}>
          <h3>Tool Kits</h3>
          <div className={styles["tools-grid"]}>
            {tools.map((tool) => (
              <p key={tool} className={styles["tool"]}>
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
              <p>{stat}</p>
              <p>{statDescription}</p>
            </div>
          );
        })}
      </div>
      <div className={styles["photo-grid"]}>
        <div>
          <Image
            src={photoFour.url}
            alt={photoFour.title}
            objectFit="contain"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            src={photoFive.url}
            alt={photoFive.title}
            objectFit="contain"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};
