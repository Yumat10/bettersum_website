import { ServiceDetails } from "./ServicesOffered";
import Image from "next/image";
import styles from "./ServiceColumn.module.css";
import fontStyles from "@/styles/fontStyles.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const ServiceColumn = ({
  icon,
  title,
  description,
  includePlus,
  padding,
  path,
}: ServiceDetails): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(path);
  }, []);

  return (
    <div
      className={styles["container"]}
      style={{
        padding,
        borderRight: includePlus ? "1px solid var(--bettersum-black)" : "",
      }}
      onClick={() => router.push(path)}
    >
      <Image
        src={icon.url}
        alt={`${title} Icon`}
        height={icon.height}
        width={icon.width}
        className={styles["icon"]}
      />
      <h2 className={`${fontStyles["category-header"]} ${styles["category"]}`}>
        {title}
      </h2>
      <p className={`${fontStyles["body-copy"]} ${styles["descriptions"]}`}>
        {description}
      </p>
      {includePlus && (
        <div className={styles["plus"]}>
          <Image src="/plus.svg" alt="+" objectFit="cover" layout="fill" />
        </div>
      )}
    </div>
  );
};
