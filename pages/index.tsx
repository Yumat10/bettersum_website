import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ServicesOffered } from "../components/pages/homePage/servicesOffered/ServicesOffered";
import { SplashScreen } from "../components/pages/homePage/splashScreen/SplashScreen";
import { SubscribeToNewsletter } from "../components/pages/homePage/subscribeToNewsletter/SubscribeToNewsletter";
import { TeamBackground } from "../components/pages/homePage/teamBackground/TeamBackground";
import { TheLab } from "../components/pages/homePage/theLab/TheLab";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SplashScreen />
        <ServicesOffered />
        <TeamBackground />
        <TheLab />
        <SubscribeToNewsletter />
      </main>
    </div>
  );
};

export default Home;
