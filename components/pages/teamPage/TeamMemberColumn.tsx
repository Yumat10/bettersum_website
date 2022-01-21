import { TeamMemberIntro } from "../../../pages/team";
import Image from "next/image";
import styles from "./TeamMemberColumn.module.css";

export const TeamMemberColumn = ({
  fullName,
  title,
  bio,
  profileImage,
}: TeamMemberIntro): JSX.Element => {
  return (
    <div>
      <Image
        src={profileImage}
        alt={`${fullName} Profile Image`}
        objectFit="cover"
        width={390}
        height={425}
      />
      <h2>{fullName}</h2>
      <h3>{title}</h3>
      <p>{bio}</p>
    </div>
  );
};
