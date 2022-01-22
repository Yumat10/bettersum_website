import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { TeamMemberColumn } from "../components/pages/teamPage/TeamMemberColumn";
import { Subheading } from "../components/shared/navbars/Subheading";
import { BetterSumColors } from "../types/BetterSumColors";
import styles from "styles/Team.module.css";
import fontStyles from "styles/fontStyles.module.css";

export interface TeamMemberIntro {
  fullName: string;
  title: string;
  bio: string;
  profileImage: string;
}

const Team: NextPage = () => {
  const teamMembers: TeamMemberIntro[] = [
    {
      fullName: "Richard Lee",
      title: "Product Manager",
      bio: "Here is where we will put a super brief summary of who we are and what we do.",
      profileImage: "/teamPhotos/profileImage/richard.svg",
    },
    {
      fullName: "William King",
      title: "Designer & Strategist",
      bio: "Here is where we will put a super brief summary of who we are and what we do.",
      profileImage: "/teamPhotos/profileImage/william.svg",
    },
    {
      fullName: "Yuma Tanaka",
      title: "Developer",
      bio: "Here is where we will put a super brief summary of who we are and what we do.",
      profileImage: "/teamPhotos/profileImage/yuma.svg",
    },
  ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles["container"]}>
          <div className={styles["inner-container"]}>
            <Subheading
              title="Team"
              sectionNumber={3}
              color={BetterSumColors.Beige}
            />
            <h1
              className={`${fontStyles["title-header"]} ${styles["title-text"]}`}
            >
              Meet the team behind the curtain.
            </h1>
            <div className={styles["team-members-container"]}>
              {teamMembers.map((teamMemberInfo, index) => (
                <TeamMemberColumn key={index} {...teamMemberInfo} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;
