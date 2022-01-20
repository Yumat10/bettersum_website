import {
  ServiceOptions,
  useServicePageContext,
} from "../../../contexts/servicePageContext";
import { ServiceDetails } from "../../../types/ServiceDetails";
import { ServiceBreakdown } from "./ServiceBreakdown";
import styles from "./ServiceSection.module.css";

type ServiceOverview = {
  index: number;
  type: ServiceOptions;
  title: string;
  overview: JSX.Element;
  services: ServiceDetails[];
};

export const ServiceSection = ({
  index,
  type,
  title,
  overview,
  services,
}: ServiceOverview): JSX.Element => {
  const { openTab, setOpenTab } = useServicePageContext();

  const scrollToContact = () => {
    const id = "services-page-contact";
    const yOffset = 0;
    const element = document.getElementById(id);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const ServiceBreakdowns = (
    <div>
      {services.map((serviceDetail, index) => (
        <ServiceBreakdown key={index} {...serviceDetail} />
      ))}
      <button onClick={scrollToContact}>Get in Touch</button>
    </div>
  );

  return (
    <div>
      <p>{index}</p>
      <h2>{title}</h2>
      <div>{overview}</div>
      {openTab === type && ServiceBreakdowns}
      <button onClick={() => setOpenTab(type)}>open</button>
    </div>
  );
};
