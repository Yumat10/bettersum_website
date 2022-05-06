import axios from "axios";
import { AllWork } from "components/pages/workPage/allWorkPage/AllWork";
import { CaseStudiesGrid } from "components/shared/caseStudies/CaseStudiesGrid";
import { ContactForm } from "components/shared/forms/ContactForm";
import { useCaseStudyContext } from "contexts/caseStudyContext";
import { useDynamiDataContext } from "contexts/dynamicDataContext";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CaseStudyPreview } from "types/CaseStudy";
import { ImpactData } from "types/DynamicData";

const Work: NextPage = ({
  caseStudyPreviews: propsCaseStudyPreviews,
  dynamicData: propsDynamicData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setCaseStudyPreviews } = useCaseStudyContext();
  const { setAllWorkOutcomeData, setImpactData } = useDynamiDataContext();

  useEffect(() => {
    if (propsCaseStudyPreviews) {
      setCaseStudyPreviews(propsCaseStudyPreviews);
    }
  }, [propsCaseStudyPreviews]);

  useEffect(() => {
    if (propsDynamicData) {
      let newImpactData: ImpactData[] = [];
      for (let i = 0; i < propsDynamicData.impactData.length; i++) {
        newImpactData.push({
          data: propsDynamicData.impactData[i],
          subtitle: propsDynamicData.impactDataSubtitles[i],
        });
      }
      setImpactData(newImpactData);
      setAllWorkOutcomeData(propsDynamicData.allWorkOutcomeData);
    }
  }, [propsDynamicData]);

  return (
    <div>
      <Head>
        <title>BetterSum | Work</title>
        <meta property="og:url" content="https://www.bettersum.com" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="553417342511194" /> */}
        <meta property="og:title" content="BetterSum" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content="An integrative digital studio."
        />
        <meta
          property="og:image"
          content="https://bettersum.com/BetterSumPreview.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="4096" />
        <meta property="og:image:height" content="2141" />
      </Head>
      <main>
        <AllWork />
        <ContactForm />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const contentfulApiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  const contentfulAccessToken = context.preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  const chosenTemplate = "caseStudyTemplateTwoCollection";

  const gql = String.raw;
  const contentfulCaseStudyPreviewsQuery = gql`
    query {
      ${chosenTemplate}(preview: ${context.preview ? true : false}) {
        items {
          handle
          title
          splashImage {
            title
            url
            contentType
          }
          tags
        }
      }
    }
  `;

  const contentfulDynamicDataQuery = gql`
    query {
      websiteV2Data(id: "7nIArgVLQGPDmDhXkIz9gZ") {
        impactData
        impactDataSubtitles
        allWorkOutcomeData
      }
    }
  `;

  let props: {
    caseStudyPreviews: CaseStudyPreview[];
    shouldRedirectTo404: boolean;
    dynamicData: {
      impactData: string[];
      impactDataSubtitles: string[];
      allWorkOutcomeData: string;
    };
  } = {
    caseStudyPreviews: [],
    shouldRedirectTo404: false,
    dynamicData: {
      impactData: [],
      impactDataSubtitles: [],
      allWorkOutcomeData: "",
    },
  };

  try {
    const { data: axiosCaseStudyPreviewsResponseData } = await axios.post(
      contentfulApiUrl,
      { query: contentfulCaseStudyPreviewsQuery },
      {
        headers: {
          Authorization: `Bearer ${contentfulAccessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    props.caseStudyPreviews =
      axiosCaseStudyPreviewsResponseData.data[chosenTemplate].items;

    const { data: axiosDynamicDataResponseData } = await axios.post(
      contentfulApiUrl,
      { query: contentfulDynamicDataQuery },
      {
        headers: {
          Authorization: `Bearer ${contentfulAccessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    props.dynamicData = axiosDynamicDataResponseData.data.websiteV2Data;

    console.log(props);
  } catch (error: any) {
    const errorResponse = error["response"];
    if (
      errorResponse &&
      errorResponse["status"] &&
      errorResponse["statusText"] &&
      errorResponse["data"]
    ) {
      console.log(
        errorResponse["status"],
        errorResponse["statusText"],
        errorResponse["data"]
      );
    } else {
      console.log(error);
    }

    props.shouldRedirectTo404 = true;
  }

  return {
    props,
  };
};

export default Work;
