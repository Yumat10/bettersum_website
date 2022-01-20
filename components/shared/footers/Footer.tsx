import Image from "next/image";
import { Route } from "../../../types/Route";
import styles from "./Footer.module.css";
import { FooterLinksColumn } from "./FooterLinksColumn";

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

  return (
    <div style={{ background: "gray" }}>
      <div>
        <div>
          <div>
            <h2>Bettersum</h2>
          </div>
          <div>
            <Image src="/snapchat.svg" alt="snapchat" width={34} height={34} />
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={34}
              height={34}
            />
            <Image src="/tiktok.svg" alt="tiktok" width={30} height={34} />
            <Image src="/facebook.svg" alt="facebook" width={34} height={34} />
          </div>
        </div>
        <div>
          <FooterLinksColumn header="Home" linksArray={footerLinks[0]} />
          <FooterLinksColumn header="Services" linksArray={footerLinks[1]} />
          <FooterLinksColumn header="Company" linksArray={footerLinks[2]} />
        </div>
      </div>
      <div>Atlanta Based. Human Centered.</div>
    </div>
  );
};
