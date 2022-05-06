import Image from "next/image";
import Link from "next/link";
import { CaseStudyPreview } from "types/CaseStudy";
import fontStyles from "styles/fontStyles.module.css";
import styles from "./CaseStudyPreviewCard.module.css";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";

const previewCardVariants: Variants = {
  hover: {
    scale: 1.05,
  },
};

const previewPhoto: Variants = {
  hover: {
    scale: 1.1,
  },
};

type CaseStudyPreviewCardProps = {
  caseStudyPreview: CaseStudyPreview;
  isDraggingCard?: boolean;
  fullWidth?: boolean;
  shakeLabTag?: boolean;
};

export const CaseStudyPreviewCard = ({
  caseStudyPreview,
  isDraggingCard,
  fullWidth,
}: CaseStudyPreviewCardProps): JSX.Element => {
  const { handle, splashImage, title, tags } = caseStudyPreview;

  const monitorCardSize = (): void => {
    const previewCard = document.getElementById(`cs-preview-card-${handle}`);
    const previewCardTextArea = document.getElementById(
      `cs-preview-card-text-container-${handle}`
    );
    if (previewCard && previewCardTextArea) {
      if (window.innerWidth > 850) {
        // Mobile View
        const previewCardWidth = previewCard.clientWidth;
        previewCardTextArea.style.padding = `${previewCardWidth / 20}px 25px`;
        console.log(previewCardTextArea.style.padding);
      } else {
        // Desktop View
        previewCardTextArea.style.padding = "12px 16px";
      }
    }
  };

  useEffect(() => {
    monitorCardSize();
    window.addEventListener("resize", monitorCardSize);
    () => window.removeEventListener("resize", monitorCardSize);
  }, []);

  return (
    <Link href={`/work/${handle}`}>
      <motion.a
        id={`cs-preview-card-${handle}`}
        variants={previewCardVariants}
        whileHover="hover"
        draggable="false"
        className={styles["preview-container"]}
        style={
          {
            // width: fullWidth ? "100%" : "",
          }
        }
      >
        {splashImage && (
          <div className={styles["preview-image-container"]}>
            <motion.img
              src={splashImage.url}
              variants={previewPhoto}
              alt={splashImage.title}
              className={styles["preview-image"]}
            />
          </div>
        )}
        <div
          id={`cs-preview-card-text-container-${handle}`}
          className={styles["text-container"]}
        >
          <h5 className={fontStyles["body-copy"]}>
            <b>{title}</b>
          </h5>
          <div className={styles["tags-container"]}>
            {tags?.map((tag, index) => (
              <p
                key={tag}
                className={`${fontStyles["flair-copy"]} ${styles["tag"]}`}
              >
                {index !== 0 && <span>{" + "}</span>}
                {tag}
              </p>
            ))}
          </div>
        </div>
      </motion.a>
    </Link>
  );
};
