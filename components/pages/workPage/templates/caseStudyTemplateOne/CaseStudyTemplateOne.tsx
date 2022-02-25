import { useCaseStudyContext } from "contexts/caseStudyContext";
import styles from "./CaseStudyTemplateOne.module.css";
import { CSTOContent } from "./CSTOContent";
import { CSTOHeader } from "./CSTOHeader";

export const CaseStudyTemplateOne = (): JSX.Element => {
  const { caseStudyData, caseStudyPreviews } = useCaseStudyContext();

  return (
    <div className={styles["container"]}>
      <CSTOHeader />
      <CSTOContent />
    </div>
  );
};
