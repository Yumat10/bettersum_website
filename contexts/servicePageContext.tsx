import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
  useContext,
} from "react";

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
  const [openTab, setOpenTab] = useState<ServiceOptions>(ServiceOptions.none);

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
