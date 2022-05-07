import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SubscribeToNewsletterForm } from "../components/shared/forms/SubscribeToNewsletterForm";
import styles from "styles/Content.module.css";
import fontStyles from "styles/fontStyles.module.css";

const Content: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BetterSum | Content</title>
        <meta property="og:url" content="https://www.bettersum.com/content" />
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
            <h1 className={`${fontStyles["title-header"]}`}>
              Behind the scenes of BetterSum.
            </h1>
            <h2
              className={`${fontStyles["title-header"]} ${styles["subtitle-text"]}`}
            >
              Subscribe to our newsletter.
            </h2>
            <div className={styles["details-container"]}>
              <p
                className={`${fontStyles["category-copy"]} ${styles["body-text"]}`}
              >
                Sign up to receive all the latest news and content. We regularly
                create podcasts, videos, and articles in order to keep the
                conversation growing.
              </p>
              <div className={styles["subscribe-section"]}>
                <SubscribeToNewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;
