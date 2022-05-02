import Link from "next/link";
import { useRouter } from "next/router";
import {
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { Route } from "../../../types/Route";
import { GradientOutlineButton } from "../buttons/GradientOutlineButton";
import Image from "next/image";
import styles from "./Navbar.module.css";
import fontStyles from "../../../styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";
import {
  homePageAnimationDuration,
  homePageLoadDuration,
} from "animations/homePageAnimations";

const containerVariants: Variants = {
  hidden: {
    borderColor: "var(--bettersum-black)",
  },
  visible: {
    borderColor: "var(--bettersum-beige)",
    transition: {
      delay: homePageLoadDuration + homePageAnimationDuration,
      duration: homePageAnimationDuration,
    },
  },
};

const innerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: homePageLoadDuration,
      duration: 0.5,
    },
  },
};

const routeVariants: Variants = {
  hover: {
    borderTopWidth: "3px",
    y: "-3px",
  },
};

const humanCenteredVariants: Variants = {
  hover: {
    color: "var(--bettersum-blue)",
  },
};

export const Navbar = (): JSX.Element => {
  const router = useRouter();

  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  useEffect(() => {
    if (openHamburgerMenu) {
      document.body.style.overflow = "hidden";
      const id: string = "hamburger-menu";
      const hamburgerMenu = document.getElementById(id);
      if (hamburgerMenu) {
        hamburgerMenu.style.overflow = "auto";
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openHamburgerMenu]);

  const routes: Route[] = [
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Methods",
      path: "/",
    },
    {
      name: "About",
      path: "/team",
    },
    {
      name: "Contact",
      path: "/",
    },
    // {
    //   name: "Content",
    //   path: "https://content.bettersum.com",
    // },
  ];

  const navigateToContactUs: MouseEventHandler<HTMLButtonElement> = () =>
    router.push("/contact");

  return (
    <motion.div
      // variants={containerVariants}
      initial={router.route === "/" ? "hidden" : undefined}
      animate="visible"
      className={styles["container"]}
    >
      <motion.div
        // variants={innerContainerVariants}
        className={styles["inner-container"]}
      >
        <div className={styles["brand"]} onClick={() => router.push("/")}>
          <Image
            src="/brandLogos/betterSumLogoBlack.svg"
            alt="BetterSum"
            layout="fixed"
            height="100%"
            width={175}
          />
        </div>
        <div className={styles["routes-container"]}>
          {routes.map(({ name, path }, index) => (
            <motion.div
              // variants={routeVariants}
              whileHover="hover"
              key={index}
              className={styles["route"]}
            >
              <Link href={path}>
                <a
                  referrerPolicy="strict-origin-when-cross-origin"
                  className={fontStyles["flair-copy"]}
                >
                  {name}
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Hamburger menu for mobile */}
        <div className={styles["hamburger-menu-container"]}>
          <Image
            src={
              openHamburgerMenu
                ? "/xIcons/closeBlack.svg"
                : "/hamburgerMenuIcon.svg"
            }
            alt="Menu"
            height={25}
            width={25}
            onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}
            className={styles["hamburger-icon"]}
          />
          {openHamburgerMenu && (
            <div
              id="hamburger-menu"
              className={styles["hamburger-routes-container"]}
              onClick={() => setOpenHamburgerMenu(false)}
            >
              {/* Additional "Intro" option for hamburger menu */}
              <div className={styles["route"]}>
                <Link href={"/?section=intro"}>
                  <a className={fontStyles["category-header"]}>intro</a>
                </Link>
              </div>
              {routes.map(({ name, path }) => (
                <div key={path} className={styles["route"]}>
                  <Link href={path}>
                    <a
                      referrerPolicy="strict-origin-when-cross-origin"
                      className={fontStyles["category-header"]}
                    >
                      {name}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
