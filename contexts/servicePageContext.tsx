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
}

interface ServicePageContextInterface {
  openTabs: Map<ServiceOptions, boolean>;
  setOpenTabs: Dispatch<SetStateAction<Map<ServiceOptions, boolean>>>;
  toggleOpenTab: (type: ServiceOptions, status: boolean) => void;
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

  const [openTabs, setOpenTabs] = useState<Map<ServiceOptions, boolean>>(
    new Map([
      [ServiceOptions.strategy, false],
      [ServiceOptions.design, false],
      [ServiceOptions.development, false],
    ])
  );

  const toggleOpenTab = (type: ServiceOptions, status: boolean): void => {
    let newOpenTabs = new Map(openTabs);
    const currOpenTabValue = openTabs.get(type);
    newOpenTabs.set(type, status);
    setOpenTabs(newOpenTabs);
    // If opening the tab, scroll to it
    if (!currOpenTabValue) {
      const id = `service-section-${type}`;
      smoothScrollDown({ elementId: id, offset: 0 });
    }
  };

  useEffect(() => {
    if (
      queryType &&
      Object.values(ServiceOptions).includes(queryType as ServiceOptions)
    ) {
      toggleOpenTab(queryType as ServiceOptions, true);
    }
  }, [queryType]);

  return (
    <ServicePageContext.Provider
      value={{
        openTabs,
        setOpenTabs,
        toggleOpenTab,
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
