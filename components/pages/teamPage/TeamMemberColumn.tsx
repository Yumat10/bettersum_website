import { TeamMemberIntro } from "../../../pages/team";
import Image from "next/image";
import styles from "./TeamMemberColumn.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";

export const TeamMemberColumn = ({
  fullName,
  title,
  bio,
  profileImage,
  sketch,
}: TeamMemberIntro): JSX.Element => {
  const profileImageComponent = (
    <motion.img
      src={profileImage}
      alt={`${fullName} Profile Image`}
      className={styles["image-container"]}
      // objectFit="cover"
      // layout="fill"
    />
  );

  const nameComponent = <h2 className={fontStyles["body-copy"]}>{fullName}</h2>;

  const titleComponent = (
    <h3 className={`${fontStyles["category-copy"]} ${styles["title-text"]}`}>
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
