import { CSTContent } from "./CSTContent";
import { CSTHeader } from "./CSTHeader";
import { CSTInfo } from "./CSTInfo";

import styles from "./CaseStudyTemplate.module.css";
import { ContactForm } from "components/shared/forms/ContactForm";

export const CaseStudyTemplate = (): JSX.Element => {
  return (
    <div>
      <CSTHeader />
      <CSTInfo />
      <CSTContent />
      <ContactForm />
    </div>
  );
};
