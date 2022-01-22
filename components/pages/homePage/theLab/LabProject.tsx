import { useRouter } from "next/router";
import { useEffect } from "react";
import { LabProjectDetails } from "./TheLab";
import Image from "next/image";
import styles from "./LabProject.module.css";
import fontStyles from "styles/fontStyles.module.css";

export const LabProject = ({
  index,
  name,
  description,
  link,
}: LabProjectDetails): JSX.Element => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      referrerPolicy="strict-origin-when-cross-origin"
      className={styles["container"]}
    >
      <p className={fontStyles["flair-copy"]}>{index}</p>
      <div className={styles["text-container"]}>
        <div className={styles["header"]}>
          <h2 className={fontStyles["category-header"]}>{name}</h2>
          <Image
            src="/arrows/rightArrowBlack.svg"
            alt="find out more"
            height={24}
            width={24}
          />
        </div>
        <p className={`${fontStyles["body-copy"]} ${styles["description"]}`}>
          {description}
        </p>
      </div>
    </a>
  );
};
