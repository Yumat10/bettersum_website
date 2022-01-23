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
  const profileImageComponent = (
    <div className={styles["image-container"]}>
      <Image
        src={profileImage}
        alt={`${fullName} Profile Image`}
        objectFit="cover"
        layout="fill"
      />
    </div>
  );

  const nameComponent = (
    <h2 className={fontStyles["category-header"]}>{fullName}</h2>
  );

  const titleComponent = (
    <h3 className={`${fontStyles["body-copy"]} ${styles["title-text"]}`}>
      {title}
    </h3>
  );

  const bioComponent = (
    <p className={`${fontStyles["flair-copy"]} ${styles["bio-text"]}`}>{bio}</p>
  );

  return (
    <>
      <div className={styles["container"]}>
        {profileImageComponent}
        <div className={styles["text-container"]}>
          {nameComponent}
          {titleComponent}
          {bioComponent}
        </div>
      </div>
      <div className={styles["mobile-container"]}>
        {profileImageComponent}
        <span>
          {nameComponent}
          {titleComponent}
        </span>
        {bioComponent}
      </div>
    </>
  );
};
