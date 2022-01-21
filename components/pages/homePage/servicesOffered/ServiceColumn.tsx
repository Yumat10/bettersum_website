import styles from "./ServiceColumn.module.css";
import { ServiceDetails } from "./ServicesOffered";
import Image from "next/image";

export const ServiceColumn = ({
  icon,
  title,
  description,
  includePlus,
}: ServiceDetails): JSX.Element => {
  return (
    <div id="services-offered">
      <h2>{title}</h2>
      <p>{description}</p>
      {includePlus && (
        <Image
          src="/plus.svg"
          alt="+"
          objectFit="cover"
          height={25}
          width={25}
        />
      )}
    </div>
  );
};
