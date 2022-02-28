import axios from "axios";
import { AllWorkHeader } from "components/pages/workPage/allWorkPage/AllWorkHeader";
import { CaseStudiesGrid } from "components/shared/caseStudies/CaseStudiesGrid";
import { ContactForm } from "components/shared/forms/ContactForm";
import { useCaseStudyContext } from "contexts/caseStudyContext";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CaseStudyPreview } from "types/CaseStudy";

const Work: NextPage = ({
  caseStudyPreviews: propsCaseStudyPreviews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setCaseStudyPreviews } = useCaseStudyContext();

  useEffect(() => {
    if (propsCaseStudyPreviews) {
      setCaseStudyPreviews(propsCaseStudyPreviews);
    }
  }, [propsCaseStudyPreviews]);

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
        <AllWorkHeader />
        <CaseStudiesGrid />
        <ContactForm />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const contentfulApiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  const gql = String.raw;

  const contentfulCaseStudyPreviewsQuery = gql`
    query {
      caseStudyPreviewsCollection(order: order_ASC) {
        items {
          handle
          title
          previewImage {
            title
            url
          }
          tags
          templateNumber
          isLabs
        }
      }
    }
  `;

  let props: {
    caseStudyPreviews: CaseStudyPreview[];
  } = {
    caseStudyPreviews: [],
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
      axiosCaseStudyPreviewsResponseData.data.caseStudyPreviewsCollection.items;
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

    return {
      props,
      redirect: {
        destination: "/404",
      },
    };
  }

  return {
    props,
  };
};

export default Work;
