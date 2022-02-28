import { useCaseStudyContext } from "contexts/caseStudyContext";
import { motion, Variants } from "framer-motion";
import { CaseStudyPreview } from "types/CaseStudy";
import styles from "./CaseStudiesGrid.module.css";
import { CaseStudyPreviewCard } from "./CaseStudyPreviewCard";

const cardVariants: Variants = {
  hover: {
    scale: 1.1,
  },
};

type CaseStudiesGridProps = {
  shakeLabTag?: boolean;
};

export const CaseStudiesGrid = ({
  shakeLabTag,
}: CaseStudiesGridProps): JSX.Element | null => {
  const { caseStudyPreviews } = useCaseStudyContext();

  if (!caseStudyPreviews) return null;

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        {caseStudyPreviews.map((caseStudyPreview) => (
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            key={caseStudyPreview.handle}
            className={styles["preview-container"]}
          >
            <CaseStudyPreviewCard
              fullWidth
              caseStudyPreview={caseStudyPreview}
              shakeLabTag={shakeLabTag}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
