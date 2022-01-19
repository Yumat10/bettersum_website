import { BetterSumColors } from "../../../../types/BetterSumColors";
import { Subheading } from "../../../shared/navbars/Subheading";
import Image from "next/image";
import styles from "./TeamBackground.module.css";
import Link from "next/link";
import { BrandExperience } from "./BrandExperience";

export const TeamBackground = (): JSX.Element => {
  return (
    <div>
      <Subheading
        title="team"
        sectionNumber={3}
        color={BetterSumColors.Black}
      />
      <div>
        <Image src="/team.svg" alt="Team" width={730} height={550} />
        <div>
          <h3>
            We are investigators, design lovers, educators, geeks, breakdancers,
            and workshop enthusisits.
          </h3>
          <Link href="/team">
            <a referrerPolicy="strict-origin-when-cross-origin">
              Meet the team
            </a>
          </Link>
        </div>
        <BrandExperience />
      </div>
    </div>
  );
};
