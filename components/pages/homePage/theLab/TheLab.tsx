import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/Subheading";
import { LabProject } from "./LabProject";
import styles from "./TheLab.module.css";
import fontStyles from "styles/fontStyles.module.css";

export interface LabProjectDetails {
  index: number;
  name: string;
  description: string;
  link: string;
}

export const TheLab = (): JSX.Element => {
  const labProjects: LabProjectDetails[] = [
    {
      index: 1,
      name: "Rangr",
      description:
        "Gig-economy platform that helps manage and create polished online storefront experiences for freelancers and their customers.",
      link: "https://www.rangr.org",
    },
  ];

  return (
    <div id="home-page-lab-section" className={styles["container"]}>
      <div className={styles["container-inner"]}>
        <div className={styles["header-container"]}>
          <Subheading
            title="Lab"
            sectionNumber={4}
            color={BetterSumColors.Black}
            topOffset="50px"
          />
          <h2
            className={`${fontStyles["title-header"]} ${styles["header-text"]}`}
          >
            The Lab is where we feature products we have made in-house.
          </h2>
          <p
            className={`${fontStyles["body-copy"]} ${styles["subheader-text"]}`}
          >
            Check back for regular updates.
          </p>
        </div>
        <div className={styles["lab-projects-container"]}>
          {labProjects.map((project) => (
            <LabProject key={project.index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
