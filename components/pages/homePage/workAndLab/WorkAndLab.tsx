import { CaseStudiesGrid } from "components/shared/caseStudies/CaseStudiesGrid";
import Image from "next/image";
import Link from "next/link";
import fontStyles from "styles/fontStyles.module.css";
import styles from "./WorkAndLab.module.css";

export const WorkAndLab = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <h3 className={`${fontStyles["category-header"]} ${styles["header"]}`}>
          Check out some of the experiences we have created
        </h3>
        <div>
          <CaseStudiesGrid />
        </div>
        <Link href="/work">
          <a className={styles["button"]}>
            <p className={fontStyles["body-copy"]}>See all work</p>
            <Image
              src="/arrows/rightArrowBeige.svg"
              alt=""
              height={24}
              width={24}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
