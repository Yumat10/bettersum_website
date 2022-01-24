import Image from "next/image";
import { Route } from "../../../types/Route";
import { FooterLinksColumn } from "./FooterLinksColumn";
import styles from "./Footer.module.css";
import fontStyles from "styles/fontStyles.module.css";

export const Footer = (): JSX.Element => {
  const footerLinks: Route[][] = [
    // Col 1
    [
      {
        name: "Intro",
        path: "/?section=intro",
      },
      {
        name: "Services",
        path: "/?section=services",
      },
      {
        name: "Content",
        path: "/content",
      },
      {
        name: "About the Team",
        path: "/team",
      },
    ],

    // Col 2
    [
      {
        name: "All Services",
        path: "/services",
      },
      {
        name: "Workshops",
        path: "/services?type=strategy",
      },
      {
        name: "Ideas to MVP",
        path: "/services?type=development",
      },
      {
        name: "Design Audits",
        path: "/services?type=design",
      },
    ],

    // Col 3
    [
      {
        name: "Contact Us",
        path: "/contact",
      },
    ],
  ];

  const SocialMediaIcons = (
    <div className={styles["social-media-icons-container"]}>
      <div className={styles["social-media-logo"]}>
        <Image
          src="/socialMediaLogos/snapchat.svg"
          alt="snapchat"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className={styles["social-media-logo"]}>
        <Image
          src="/socialMediaLogos/instagram.svg"
          alt="instagram"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className={styles["social-media-logo"]}>
        <Image
          src="/socialMediaLogos/tiktok.svg"
          alt="tiktok"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className={styles["social-media-logo"]}>
        <Image
          src="/socialMediaLogos/facebook.svg"
          alt="facebook"
          objectFit="contain"
          layout="fill"
        />
      </div>
    </div>
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["footer-info"]}>
          <div className={styles["main-info"]}>
            <div className={styles["brand-logo"]}>
              <Image
                src="/brandLogos/betterSumLogoBeige.svg"
                alt="BetterSum"
                objectFit="contain"
                layout="fill"
              />
            </div>
            {SocialMediaIcons}
          </div>
          <hr className={styles["divider"]} />
          <div className={styles["footer-links-containers"]}>
            <FooterLinksColumn header="Home" linksArray={footerLinks[0]} />
            <FooterLinksColumn header="Services" linksArray={footerLinks[1]} />
            <FooterLinksColumn header="Company" linksArray={footerLinks[2]} />
          </div>
        </div>
        <div className={`${fontStyles["flair-copy"]} ${styles["footer-text"]}`}>
          Atlanta Based.{" "}
          <span className={fontStyles["body-copy"]}>Human Centered.</span>
        </div>
      </div>
    </div>
  );
};
