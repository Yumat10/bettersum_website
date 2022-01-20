import { ServiceDetails } from "../../../types/ServiceDetails";
import styles from "./ServiceBreakdown.module.css";

export const ServiceBreakdown = ({
  name,
  description,
  offerings,
}: ServiceDetails): JSX.Element => {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div>
        <ul>
          {offerings.map((offering, index) => (
            <li key={index}>{offering}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
