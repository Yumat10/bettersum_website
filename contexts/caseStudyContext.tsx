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
import { CaseStudyPreview, CaseStudyTemplateOne } from "types/CaseStudy";

export enum ServiceOptions {
  strategy = "strategy",
  design = "design",
  development = "development",
}

interface CaseStudyContextInterface {
  caseStudyData: null | CaseStudyTemplateOne;
  setCaseStudyData: Dispatch<SetStateAction<null | CaseStudyTemplateOne>>;
  caseStudyPreviews: CaseStudyPreview[];
  setCaseStudyPreviews: Dispatch<SetStateAction<CaseStudyPreview[]>>;
}

const CaseStudyContext = createContext<CaseStudyContextInterface | undefined>(
  undefined
);

export const CaseStudyContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [caseStudyData, setCaseStudyData] =
    useState<null | CaseStudyTemplateOne>(null);
  const [caseStudyPreviews, setCaseStudyPreviews] = useState<
    CaseStudyPreview[]
  >([]);
  return (
    <CaseStudyContext.Provider
      value={{
        caseStudyData,
        setCaseStudyData,
        caseStudyPreviews,
        setCaseStudyPreviews,
      }}
    >
      {children}
    </CaseStudyContext.Provider>
  );
};

export const useCaseStudyContext = (): CaseStudyContextInterface => {
  const context = useContext(CaseStudyContext);
  if (context === undefined) {
    throw new Error("caseStudyContext must be within CaseStudyContextProvider");
  }

  return context;
};
