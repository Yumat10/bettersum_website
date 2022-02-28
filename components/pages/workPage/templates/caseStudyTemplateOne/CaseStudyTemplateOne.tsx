import { ContactForm } from "components/shared/forms/ContactForm";
import { useCaseStudyContext } from "contexts/caseStudyContext";
import { RelatedCaseStudies } from "../../RelatedCaseStudies";
import styles from "./CaseStudyTemplateOne.module.css";
import { CSTOContent } from "./CSTOContent";
import { CSTOHeader } from "./CSTOHeader";

export const CaseStudyTemplateOne = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <CSTOHeader />
      <CSTOContent />
      <RelatedCaseStudies />
      <ContactForm />
    </div>
  );
};
