import Image from "next/image";
import Link from "next/link";
import { CaseStudyPreview } from "types/CaseStudy";
import fontStyles from "styles/fontStyles.module.css";
import styles from "./CaseStudyPreviewCard.module.css";
import { motion, Variants } from "framer-motion";

const labTagVariants: Variants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  shake: {
    scale: 1.1,
    rotate: [-3, 3, -3],
    transition: {
      rotate: {
        repeat: Infinity,
        // repeatType: "loop",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
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
  shakeLabTag,
}: CaseStudyPreviewCardProps): JSX.Element => {
  const { handle, previewImage, title, tags, templateNumber, isLabs } =
    caseStudyPreview;

  return (
    <Link href={`/work/${templateNumber}/${handle}`}>
      <a
        draggable="false"
        className={styles["preview-container"]}
        style={{
          width: fullWidth ? "100%" : "",
          pointerEvents: isDraggingCard ? "none" : "auto",
        }}
      >
        <div className={styles["preview-image-container"]}>
          <Image
            src={previewImage.url}
            alt={previewImage.title}
            objectFit="cover"
            layout="fill"
            draggable="false"
          />
          {isLabs && (
            <motion.div
              variants={labTagVariants}
              animate={shakeLabTag ? "shake" : "initial"}
              className={`${fontStyles["body-one"]} ${styles["lab-tag"]}`}
            >
              Labs
            </motion.div>
          )}
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
