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
      title: "Founding Partner /\n Product Strategist",
      bio: "Richard is a multidisciplinary engineer and designer that bridges the technical and ideological gap to solve problems with an empathetic lens. He has led profitable startups, built cross-disciplinary teams for private companies and educational organizations, and operated nonprofit design organizations for the city of Atlanta.",
      profileImage: "/teamPhotos/profileImage/richard.png",
      sketch: {
        src: "/sketches/hashSketch.svg",
        top: "10%",
        left: "10%",
      },
    },
    {
      fullName: "William King",
      title: "Founding Partner /\n Designer & Strategist",
      bio: "William is an end-to-end designer with over 7 years of experience, working for startups, Fortune 500 companies, and everything in between. He is an enthusiastic proponent of user-centered design, believing that products designed with empathy and foresight can dramatically shape a better future.",
      profileImage: "/teamPhotos/profileImage/william.png",
      sketch: {
        src: "/sketches/skullSketch.svg",
        top: "70%",
        left: "60%",
      },
    },
    {
      fullName: "Yuma Tanaka",
      title: "Founding Partner /\n Software Engineer",
      bio: "Yuma is a software engineer with a strong technical background in web development. He has built product in startups from zero to production grade fullstack applications with paying users. He believes in the power of co-developing solutions with end-users to craft a solution that truly meets their need.",
      profileImage: "/teamPhotos/profileImage/yuma.png",
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
          content="An integrative digital studio."
        />
        <meta
          property="og:image"
          content="https://bettersum.com/BetterSumPreview.png"
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
