import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, MouseEventHandler, useEffect } from "react";
import { Route } from "../../../types/Route";
import { GradientOutlineButton } from "../buttons/GradientOutlineButton";
import Image from "next/image";
import styles from "./Navbar.module.css";
import fontStyles from "../../../styles/fontStyles.module.css";

export const Navbar = (): JSX.Element => {
  const router = useRouter();

  const routes: Route[] = [
    {
      name: "services",
      path: "/services",
    },
    {
      name: "team",
      path: "/team",
    },
    {
      name: "lab",
      path: "/?section=lab",
    },
    {
      name: "content",
      path: "/content",
    },
  ];

  const navigateToContactUs: MouseEventHandler<HTMLButtonElement> = () =>
    router.push("/contact");

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["brand"]} onClick={() => router.push("/")}>
          <Image
            src="/brandLogos/betterSumSmallMarkBeige.svg"
            alt="BetterSum"
            height={30}
            width={20}
          />
          <div className={styles["logo-text"]}>
            <p>Atlanta Based.</p>
            <br />
            <p className={styles["bolded-logo-text"]}>Human Centered.</p>
          </div>
        </div>
        <div className={styles["routes-container"]}>
          {routes.map(({ name, path }) => (
            <div key={path} className={styles["route"]}>
              <Link href={path}>
                <a
                  referrerPolicy="strict-origin-when-cross-origin"
                  className={fontStyles["flair-copy"]}
                >
                  {name}
                </a>
              </Link>
            </div>
          ))}
          <GradientOutlineButton
            text="Contact us"
            onClick={navigateToContactUs}
          />
        </div>
      </div>
    </div>
  );
};
