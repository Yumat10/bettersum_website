import { useCaseStudyContext } from "contexts/caseStudyContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CaseStudyPreview } from "types/CaseStudy";
import { motion, Variants } from "framer-motion";
import fontStyles from "styles/fontStyles.module.css";
import styles from "./RelatedCaseStudies.module.css";
import { CaseStudyPreviewCard } from "components/shared/caseStudies/CaseStudyPreviewCard";

const previewCardVariants: Variants = {
  hover: {
    scale: 1.1,
  },
};

export const RelatedCaseStudies = (): JSX.Element | null => {
  const router = useRouter();
  const queryWorkHandle = router.query.workHandle;

  const { caseStudyPreviews } = useCaseStudyContext();

  const [filteredCaseStudyPreviews, setFilteredCaseStudyPreviews] = useState<
    CaseStudyPreview[]
  >([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    if (caseStudyPreviews) {
      setFilteredCaseStudyPreviews(
        caseStudyPreviews.filter(
          (caseStudyPreview) => caseStudyPreview.handle !== queryWorkHandle
        )
      );
    }
  }, [queryWorkHandle, caseStudyPreviews]);

  if (caseStudyPreviews.length === 0) return null;

  const RelatedCaseStudiesScroll = (): JSX.Element => (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["header"]}>
          <h3
            className={`${fontStyles["body-copy"]} ${styles["header-title"]}`}
          >
            Take a look at our other work
          </h3>
          <Image
            src="/arrows/downArrowBlack.svg"
            alt="down"
            height={24}
            width={24}
          />
        </div>
        <motion.div
          drag="x"
          dragConstraints={{
            left:
              -1 *
              ((filteredCaseStudyPreviews.length - 2) * 460 +
                caseStudyPreviews.length * 50),
            right: 0,
          }}
          initial={{
            x: 0,
          }}
          animate={{
            x: 0,
          }}
          whileDrag={{ scale: 1.05 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className={styles["related-work-grid"]}
        >
          {/* <div className={styles["preview-container"]} /> */}
          {filteredCaseStudyPreviews.map((caseStudyPreview) => (
            <motion.div
              variants={previewCardVariants}
              whileHover="hover"
              key={caseStudyPreview.handle}
              className={styles["preview-container"]}
            >
              <CaseStudyPreviewCard
                caseStudyPreview={caseStudyPreview}
                isDraggingCard={isDragging}
              />
            </motion.div>
          ))}
          <div className={styles["preview-container"]} />
        </motion.div>
      </div>
    </div>
  );

  return (
    <>
      <div className={styles["desktop"]}>{RelatedCaseStudiesScroll()}</div>
      <div className={styles["mobile"]}>
        <div className={styles["mobile-container"]}>
          <p className={fontStyles["category-copy"]}>View other case studies</p>
          <Image
            src="/arrows/rightArrowBeige.svg"
            alt=""
            height={24}
            width={24}
          />
        </div>
      </div>
    </>
  );
};
