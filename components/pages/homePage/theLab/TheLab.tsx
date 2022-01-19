import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/Subheading";
import { LabProject } from "./LabProject";
import styles from "./TheLab.module.css";

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
        "Gig-economy platform that helps manage and create beautiful online storefront experiences for freelancers and their customers",
      link: "https://www.rangr.org",
    },
  ];

  return (
    <div>
      <Subheading title="Lab" sectionNumber={4} color={BetterSumColors.Black} />
      <div>
        <h2>The Lab is where we feature products we have made in-house.</h2>
        <p>Check back for regular updates.</p>
      </div>
      <div>
        {labProjects.map((project) => (
          <LabProject key={project.index} {...project} />
        ))}
      </div>
    </div>
  );
};
