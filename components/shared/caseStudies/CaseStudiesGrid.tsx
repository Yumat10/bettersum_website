import { useCaseStudyContext } from "contexts/caseStudyContext";
import { CaseStudyPreview } from "types/CaseStudy";
import styles from "./CaseStudiesGrid.module.css";
import { CaseStudyPreviewCard } from "./CaseStudyPreviewCard";

export const CaseStudiesGrid = (): JSX.Element | null => {
  const { caseStudyPreviews } = useCaseStudyContext();

  if (!caseStudyPreviews) return null;

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        {caseStudyPreviews.map((caseStudyPreview) => (
          <div
            key={caseStudyPreview.handle}
            className={styles["preview-container"]}
          >
            <CaseStudyPreviewCard
              fullWidth
              caseStudyPreview={caseStudyPreview}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
