import Image from "next/image";
import { Route } from "../../../types/Route";
import { FooterLinksColumn } from "./FooterLinksColumn";
import styles from "./Footer.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";

const humanCenteredVariants: Variants = {
  hover: {
    color: "var(--bettersum-blue)",
  },
};

type SocialMedia = {
  name: string;
  link: string;
  imageUrl: string;
};

export const Footer = (): JSX.Element => {
  const footerLinks: Route[][] = [
    // Col 1
    [
      {
        name: "Intro",
        path: "/?section=intro",
      },
      {
        name: "Work",
        path: "/work",
      },
      {
        name: "Services",
        path: "/?section=services",
      },
      {
        name: "Methods",
        path: "/?section=methods",
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
        name: "Strategy & Stewardship",
        path: "/?section=services&open=0",
      },
      {
        name: "Custom Digital Experiences",
        path: "/?section=services&open=1",
      },
      {
        name: "Shopify Plus Commerce",
        path: "/?section=services&open=2",
      },
    ],

    // Col 3
    [
      {
        name: "Contact Us",
        path: "/?section=contact",
      },
      {
        name: "Terms",
        path: "/help/terms-and-conditions",
      },
      {
        name: "Privacy",
        path: "/help/privacy-policy",
      },
      {
        name: "Terms",
        path: "/help/terms-and-conditions",
      },
      {
        name: "Privacy",
        path: "/help/privacy-policy",
      },
    ],
  ];

  const socialMedias: SocialMedia[] = [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/bettersum",
      imageUrl: "/socialMediaLogos/linkedin.svg",
    },
    {
      name: "tiktok",
      link: "https://vm.tiktok.com/TTPdkcRWqb/",
      imageUrl: "/socialMediaLogos/tiktok.svg",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/bettersum_studio/",
      imageUrl: "/socialMediaLogos/instagram.svg",
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/channel/UCLCADM8P75Z5Z0zgH1uBymg",
      imageUrl: "/socialMediaLogos/youtube.svg",
    },
  ];

  const SocialMediaIcons = (
    <div className={styles["social-media-icons-container"]}>
      {socialMedias.map(({ name, link, imageUrl }) => (
        <a key={name} href={link} target="_blank" rel="noreferrer">
          <div className={styles["social-media-logo"]}>
            <Image
              src={imageUrl}
              alt={name}
              objectFit="contain"
              layout="fill"
            />
          </div>
        </a>
      ))}
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
          {/* <hr className={styles["divider"]} /> */}
          <div className={styles["footer-links-containers"]}>
            <FooterLinksColumn header="Home" linksArray={footerLinks[0]} />
            <FooterLinksColumn header="Services" linksArray={footerLinks[1]} />
            <FooterLinksColumn header="Company" linksArray={footerLinks[2]} />
          </div>
        </div>
        <div className={`${fontStyles["body-copy"]} ${styles["footer-text"]}`}>
          Atlanta Based.{" "}
          <motion.span
            variants={humanCenteredVariants}
            whileHover="hover"
            className={fontStyles["category-copy"]}
          >
            Human Centered.
          </motion.span>
        </div>
      </div>
    </div>
  );
};
