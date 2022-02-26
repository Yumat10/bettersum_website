import { useCaseStudyContext } from "contexts/caseStudyContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CaseStudyPreview } from "types/CaseStudy";
import { motion } from "framer-motion";
import fontStyles from "styles/fontStyles.module.css";
import styles from "./RelatedCaseStudies.module.css";

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

  const CaseStudyPreviewComponent = (
    caseStudyPreview: CaseStudyPreview
  ): JSX.Element => {
    const { handle, previewImage, title, tags, templateNumber } =
      caseStudyPreview;

    return (
      <Link href={`/work/${templateNumber}/${handle}`}>
        <a
          draggable="false"
          className={styles["preview-container"]}
          style={{ pointerEvents: isDragging ? "none" : "auto" }}
        >
          <div className={styles["preview-image-container"]}>
            <Image
              src={previewImage.url}
              alt={previewImage.title}
              objectFit="cover"
              layout="fill"
              draggable="false"
            />
          </div>
          <div className={styles["text-container"]}>
            <h5 className={fontStyles["body-copy"]}>
              <b>{title}</b>
            </h5>
            <div className={styles["tags-container"]}>
              {tags.map((tag) => (
                <p
                  key={tag}
                  className={`${fontStyles["flair-copy"]} ${styles["tag"]}`}
                >
                  <span>{" + "}</span>
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </a>
      </Link>
    );
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["header"]}>
          <h3
            className={`${fontStyles["category-header"]} ${styles["header-title"]}`}
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
              ((filteredCaseStudyPreviews.length - 1) * 460 +
                caseStudyPreviews.length * 50),
            right: -1 * (filteredCaseStudyPreviews.length + 1),
          }}
          initial={{
            x: 0,
          }}
          animate={{
            x: -460 - 50,
          }}
          whileDrag={{ scale: 1.05 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className={styles["related-work-grid"]}
        >
          <div className={styles["preview-container"]} />
          {filteredCaseStudyPreviews.map((caseStudyPreview) =>
            CaseStudyPreviewComponent(caseStudyPreview)
          )}
          <div className={styles["preview-container"]} />
        </motion.div>
      </div>
    </div>
  );
};
