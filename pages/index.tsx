import axios from "axios";
import { TotalImpact } from "components/pages/homePage/totalmpact/TotalImpact";
import { WorkAndLab } from "components/pages/homePage/workAndLab/WorkAndLab";
import { useCaseStudyContext } from "contexts/caseStudyContext";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CaseStudyPreview } from "types/CaseStudy";
import { smoothScrollDown } from "util/functions/smoothScrollDown";
import { ServicesOffered } from "../components/pages/homePage/servicesOffered/ServicesOffered";
import { SplashScreen } from "../components/pages/homePage/splashScreen/SplashScreen";
import { SubscribeToNewsletter } from "../components/pages/homePage/subscribeToNewsletter/SubscribeToNewsletter";
import { TeamBackground } from "../components/pages/homePage/teamBackground/TeamBackground";
import { TheLab } from "../components/pages/homePage/theLab/TheLab";

const Home: NextPage = ({
  caseStudyPreviews: propsCaseStudyPreviews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const { section: querySection } = router.query;

  const { setCaseStudyPreviews } = useCaseStudyContext();

  useEffect(() => {
    if (propsCaseStudyPreviews) {
      setCaseStudyPreviews(propsCaseStudyPreviews);
    }
  }, [propsCaseStudyPreviews]);

  useEffect(() => {
    if (querySection) {
      const id = `home-page-${querySection}-section`;
      smoothScrollDown({
        elementId: id,
        offset: -110,
      });
    }
  }, [querySection]);

  return (
    <div>
      <Head>
        <title>BetterSum</title>
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
        <SplashScreen />
        <WorkAndLab />
        <ServicesOffered />
        <TotalImpact />
        {/* <TeamBackground /> */}
        {/* <TheLab /> */}
        {/* <SubscribeToNewsletter /> */}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const contentfulApiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  const contentfulAccessToken = context.preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  const gql = String.raw;

  const contentfulCaseStudyPreviewsQuery = gql`
    query {
      caseStudyPreviewsCollection(order: order_ASC, limit: 4,
       preview: ${context.preview ? true : false}) {
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
  }

  return {
    props,
  };
};

export default Home;
