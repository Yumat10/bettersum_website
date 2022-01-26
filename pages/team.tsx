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
  sketch: {
    src: string;
    top: string;
    left: string;
  };
}

const Team: NextPage = () => {
  const teamMembers: TeamMemberIntro[] = [
    {
      fullName: "Richard Lee",
      title: "Product Manager",
      bio: "Here is where we will put a super brief summary of who we are and what we do.",
      profileImage: "/teamPhotos/profileImage/richard.svg",
      sketch: {
        src: "/sketches/hashSketch.svg",
        top: "10%",
        left: "10%",
      },
    },
    {
      fullName: "William King",
      title: "Designer & Strategist",
      bio: "Here is where we will put a super brief summary of who we are and what we do.",
      profileImage: "/teamPhotos/profileImage/william.svg",
      sketch: {
        src: "/sketches/skullSketch.svg",
        top: "70%",
        left: "60%",
      },
    },
    {
      fullName: "Yuma Tanaka",
      title: "Developer",
      bio: "Here is where we will put a super brief summary of who we are and what we do.",
      profileImage: "/teamPhotos/profileImage/yuma.svg",
      sketch: {
        src: "/sketches/zapSketch.svg",
        top: "10%",
        left: "20%",
      },
    },
  ];

  return (
    <div>
      <Head>
        <title>BetterSum | Team</title>
        <meta property="og:url" content="https://www.bettersum.com/team" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="553417342511194" /> */}
        <meta property="og:title" content="BetterSum" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content="A holisitc integrative digital studio."
        />
        <meta
          property="og:image"
          content="https://bettersum.com/RangrPreview.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="4096" />
        <meta property="og:image:height" content="2141" />
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
