import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ImpactData } from "types/DynamicData";

interface DynamiDataContextInterface {
  impactData: ImpactData[];
  setImpactData: Dispatch<SetStateAction<ImpactData[]>>;
  allWorkOutcomeData: string;
  setAllWorkOutcomeData: Dispatch<SetStateAction<string>>;
}

const DynamiDataContext = createContext<DynamiDataContextInterface | undefined>(
  undefined
);

export const DynamiDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [impactData, setImpactData] = useState<ImpactData[]>([]);
  const [allWorkOutcomeData, setAllWorkOutcomeData] = useState<string>("");

  return (
    <DynamiDataContext.Provider
      value={{
        impactData,
        setImpactData,
        allWorkOutcomeData,
        setAllWorkOutcomeData,
      }}
    >
      {children}
    </DynamiDataContext.Provider>
  );
};

export const useDynamiDataContext = (): DynamiDataContextInterface => {
  const context = useContext(DynamiDataContext);
  if (context === undefined) {
    throw new Error(
      "DynamiDataContext must be within DynamiDataContextProvider"
    );
  }

  return context;
};
