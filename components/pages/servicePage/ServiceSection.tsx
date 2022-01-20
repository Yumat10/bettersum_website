import {
  ServiceOptions,
  useServicePageContext,
} from "../../../contexts/servicePageContext";
import styles from "./ServiceSection.module.css";

type ServiceOverview = {
  index: number;
  type: ServiceOptions;
  title: string;
  overview: JSX.Element;
  services: ServiceDetails[];
};

export interface ServiceDetails {
  name: string;
  description: string;
  offerings: string[];
}

export const ServiceSection = ({
  index,
  type,
  title,
  overview,
  services,
}: ServiceOverview): JSX.Element => {
  const { openTab, setOpenTab } = useServicePageContext();

  return (
    <div>
      <p>{index}</p>
      <h2>{title}</h2>
      <div>{overview}</div>
      {openTab === type && <div>open</div>}
      <button onClick={() => setOpenTab(type)}>Open</button>
    </div>
  );
};
