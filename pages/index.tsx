import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { smoothScrollDown } from "util/functions/smoothScrollDown";
import { ServicesOffered } from "../components/pages/homePage/servicesOffered/ServicesOffered";
import { SplashScreen } from "../components/pages/homePage/splashScreen/SplashScreen";
import { SubscribeToNewsletter } from "../components/pages/homePage/subscribeToNewsletter/SubscribeToNewsletter";
import { TeamBackground } from "../components/pages/homePage/teamBackground/TeamBackground";
import { TheLab } from "../components/pages/homePage/theLab/TheLab";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  const { section: querySection } = router.query;

  useEffect(() => {
    if (querySection) {
      const id = `home-page-${querySection}-section`;
      smoothScrollDown({
        elementId: id,
        offset: -110,
      });
    }
  }, [querySection]);

  return (
    <div className={styles.container}>
      <Head>
        <title>BetterSum</title>
        <meta property="og:url" content="https://www.bettersum.com" />
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
