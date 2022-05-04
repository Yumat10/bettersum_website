import styles from "./CaseStudyTemplate.module.css";
import { CSTContent } from "./CSTContent";
import { CSTHeader } from "./CSTHeader";
import { CSTInfo } from "./CSTInfo";

export const CaseStudyTemplate = (): JSX.Element => {
  return (
    <div>
      <CSTHeader />
      <CSTInfo />
      <CSTContent />
    </div>
  );
};
