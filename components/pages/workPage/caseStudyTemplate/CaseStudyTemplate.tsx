import { CSTContent } from "./CSTContent";
import { CSTHeader } from "./CSTHeader";
import { CSTInfo } from "./CSTInfo";

import styles from "./CaseStudyTemplate.module.css";

export const CaseStudyTemplate = (): JSX.Element => {
  return (
    <div>
      <CSTHeader />
      <CSTInfo />
      <CSTContent />
    </div>
  );
};
