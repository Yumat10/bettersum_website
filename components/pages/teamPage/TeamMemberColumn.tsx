import { TeamMemberIntro } from "../../../pages/team";
import Image from "next/image";
import styles from "./TeamMemberColumn.module.css";
import fontStyles from "styles/fontStyles.module.css";

export const TeamMemberColumn = ({
  fullName,
  title,
  bio,
  profileImage,
}: TeamMemberIntro): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <Image
          src={profileImage}
          alt={`${fullName} Profile Image`}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className={styles["text-container"]}>
        <h2 className={fontStyles["category-header"]}>{fullName}</h2>
        <h3 className={`${fontStyles["body-copy"]} ${styles["title-text"]}`}>
          {title}
        </h3>
        <p className={`${fontStyles["flair-copy"]} ${styles["bio-text"]}`}>
          {bio}
        </p>
      </div>
    </div>
  );
};
