import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/Subheading";
import Image from "next/image";
import Link from "next/link";
import { BrandExperience } from "./BrandExperience";
import fontStyles from "styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";
import aroundTableGIF from "public/teamPhotos/actionPhotos/aroundTable.gif";
import styles from "./TeamBackground.module.css";

const arrowVariants: Variants = {
  hover: {
    x: 15,
  },
};

export const TeamBackground = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["flex-container"]}>
          <Subheading
            title="team"
            sectionNumber={3}
            color={BetterSumColors.Beige}
            topOffset="30px"
          />
          <div className={styles["team-image"]}>
            <Image
              priority
              src={aroundTableGIF}
              alt="Team"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className={styles["text-container"]}>
            <h3 className={fontStyles["title-header"]}>
              We are investigators, designers, quick-fire ideators, educators,
              breakdancers, and workshop enthusiasts.
            </h3>
            <Link href="/team" passHref>
              <motion.div
                whileHover="hover"
                className={styles["meet-team-container"]}
              >
                <a
                  referrerPolicy="strict-origin-when-cross-origin"
                  className={fontStyles["flair-copy"]}
                >
                  Meet the team
                </a>
                <motion.div variants={arrowVariants}>
                  <Image
                    src="/arrows/rightArrowBeige.svg"
                    alt="left"
                    height={24}
                    width={24}
                  />
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </div>
        <BrandExperience />
      </div>
    </div>
  );
};
