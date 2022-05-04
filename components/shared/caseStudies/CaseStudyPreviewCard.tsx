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
}: CaseStudyPreviewCardProps): JSX.Element => {
  const { handle, splashImage, title, tags } = caseStudyPreview;

  return (
    <Link href={`/work/${handle}`}>
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
            src={splashImage.url}
            alt={splashImage.title}
            objectFit="cover"
            layout="fill"
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
