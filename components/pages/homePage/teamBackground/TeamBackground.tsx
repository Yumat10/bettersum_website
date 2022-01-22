import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/Subheading";
import Image from "next/image";
import Link from "next/link";
import { BrandExperience } from "./BrandExperience";
import fontStyles from "styles/fontStyles.module.css";
import styles from "./TeamBackground.module.css";

export const TeamBackground = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <Subheading
          title="team"
          sectionNumber={3}
          color={BetterSumColors.Beige}
          topOffset="30px"
        />
        <div className={styles["flex-container"]}>
          <Image
            src="/teamPhotos/actionPhotos/aroundTable.svg"
            alt="Team"
            width={730}
            height={550}
          />
          <div className={styles["text-container"]}>
            <h3 className={fontStyles["category-header"]}>
              We are investigators, designers, quick-fire ideators, educators,
              breakdancers, and workshop enthusiasts.
            </h3>
            <Link href="/team" passHref>
              <div className={styles["meet-team-container"]}>
                <a
                  referrerPolicy="strict-origin-when-cross-origin"
                  className={fontStyles["flair-copy"]}
                >
                  Meet the team
                </a>
                <Image
                  src="/arrows/rightArrow.svg"
                  alt="left"
                  height={24}
                  width={24}
                />
              </div>
            </Link>
          </div>
        </div>
        <BrandExperience />
      </div>
    </div>
  );
};
