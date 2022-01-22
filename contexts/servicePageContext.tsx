import { useRouter } from "next/router";
import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { smoothScrollDown } from "util/functions/smoothScrollDown";

export enum ServiceOptions {
  strategy = "strategy",
  design = "design",
  development = "development",
  none = "",
}

interface ServicePageContextInterface {
  openTab: ServiceOptions;
  setOpenTab: Dispatch<SetStateAction<ServiceOptions>>;
}

const ServicePageContext = createContext<
  ServicePageContextInterface | undefined
>(undefined);

export const ServicePageContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const router = useRouter();
  const { type: queryType } = router.query;

  const [openTab, setOpenTab] = useState<ServiceOptions>(ServiceOptions.none);

  useEffect(() => {
    if (queryType) {
      switch (queryType) {
        case ServiceOptions.strategy:
          setOpenTab(ServiceOptions.strategy);
          break;
        case ServiceOptions.design:
          setOpenTab(ServiceOptions.design);
          break;
        case ServiceOptions.development:
          setOpenTab(ServiceOptions.development);
          break;
        default:
          setOpenTab(ServiceOptions.none);
      }
    }
  }, [queryType]);

  useEffect(() => {
    if (openTab) {
      const id = `service-section-${openTab}`;
      smoothScrollDown({ elementId: id, offset: -90 });
    }
  }, [openTab]);

  return (
    <ServicePageContext.Provider
      value={{
        openTab,
        setOpenTab,
      }}
    >
      {children}
    </ServicePageContext.Provider>
  );
};

export const useServicePageContext = (): ServicePageContextInterface => {
  const context = useContext(ServicePageContext);
  if (context === undefined) {
    throw new Error(
      "useServicePageContext must be within ServicePageContextProvider"
    );
  }

  return context;
};
