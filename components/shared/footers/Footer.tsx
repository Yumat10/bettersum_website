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
        path: "/#intro",
      },
      {
        name: "Services",
        path: "/#services",
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
        name: "UX Audits",
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
      <Image
        src="/socialMediaLogos/snapchat.svg"
        alt="snapchat"
        width={34}
        height={34}
      />
      <Image
        src="/socialMediaLogos/instagram.svg"
        alt="instagram"
        width={34}
        height={34}
      />
      <Image
        src="/socialMediaLogos/tiktok.svg"
        alt="tiktok"
        width={30}
        height={34}
      />
      <Image
        src="/socialMediaLogos/facebook.svg"
        alt="facebook"
        width={34}
        height={34}
      />
    </div>
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["footer-info"]}>
          <div>
            <Image
              src="/brandLogos/betterSumLogoBeige.svg"
              alt="BetterSum"
              height={40}
              width={210}
            />
            {SocialMediaIcons}
          </div>

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
