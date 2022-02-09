import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ContactForm } from "../components/shared/forms/ContactForm";
import styles from "styles/Contact.module.css";
import fontStyles from "styles/fontStyles.module.css";
import Image from "next/image";

const Contact: NextPage = () => {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div>
      <Head>
        <title>BetterSum | Contact</title>
        <meta property="og:url" content="https://www.bettersum.com/contact" />
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
        <div>
          <h1 className={fontStyles["hidden-h1"]}>Contact the team.</h1>
          <div className={styles["container"]}>
            <div className={styles["inner-container"]}>
              <button onClick={backHandler} className={styles["button"]}>
                <Image
                  src="/arrows/leftArrowBeige.svg"
                  alt="Go"
                  width={24}
                  height={24}
                />
                <p className={fontStyles["flair-copy"]}>Back</p>
              </button>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default Contact;
