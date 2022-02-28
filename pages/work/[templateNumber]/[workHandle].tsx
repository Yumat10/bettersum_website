import axios from "axios";
import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { CaseStudyPreview, CaseStudyTemplateOne } from "types/CaseStudy";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCaseStudyContext } from "contexts/caseStudyContext";
import { CaseStudyTemplateOne as CaseStudyTemplateOneComponent } from "components/pages/workPage/templates/caseStudyTemplateOne/CaseStudyTemplateOne";

const Work: NextPage = ({
  caseStudyData: propsCaseStudyData,
  caseStudyPreviews: propsCaseStudyPreviews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setCaseStudyData, setCaseStudyPreviews } = useCaseStudyContext();

  useEffect(() => {
    if (propsCaseStudyData) {
      setCaseStudyData(propsCaseStudyData);
    }
  }, [propsCaseStudyData]);

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
        <div>
          <CaseStudyTemplateOneComponent />
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryWorkHandle: string = String(context.params?.workHandle);
  const queryTemplateNumber: number = Number(context.params?.templateNumber);

  if (
    typeof context.params?.workHandle == "undefined" ||
    context.params?.workHandle == "undefined"
  ) {
    return {
      props: {},
      redirect: {
        destination: "/404",
      },
    };
  }

  const contentfulApiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  // Templates start at 1
  const templates: string[] = ["", "caseStudyTemplateOneCollection"];
  const chosenTemplate = templates[Number(queryTemplateNumber)];

  const gql = String.raw;
  const templateStructure: string[] = [
    "",
    gql`
      handle
      title
      shortDescription
      tags
      url
      isLabs
      clientName
      photosCollection {
        items {
          title
          url
        }
      }
      video {
        title
        url
      }
      overview {
        json
      }
      tools
      stats
      statDescriptions
      quote
      quoteUserName
      quoteUserTitle
      quoteLinkText
      quoteLink
    `,
  ];
  const chosenTemplateStructure = templateStructure[queryTemplateNumber];

  const contentfulCaseStudyQuery = gql`
    query {
     ${chosenTemplate}(where: {
        handle: "${queryWorkHandle.toLowerCase()}"
      }, limit: 1
     ) {
        items {
          ${chosenTemplateStructure}
        }
      }
    }
  `;

  const contentfulCaseStudyPreviewsQuery = gql`
    query {
      caseStudyPreviewsCollection {
        items {
          handle
          title
          previewImage {
            title
            url
          }
          tags
          templateNumber
        }
      }
    }
  `;

  let props: {
    caseStudyData: CaseStudyTemplateOne | null;
    caseStudyPreviews: CaseStudyPreview[];
  } = {
    caseStudyData: null,
    caseStudyPreviews: [],
  };

  try {
    const { data: axiosCaseStudyResponseData } = await axios.post(
      contentfulApiUrl,
      { query: contentfulCaseStudyQuery },
      {
        headers: {
          Authorization: `Bearer ${contentfulAccessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

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

    console.log(axiosCaseStudyResponseData);

    if (axiosCaseStudyResponseData.data[chosenTemplate].items.length === 0) {
      throw "Case study not found";
    }
    props.caseStudyData =
      axiosCaseStudyResponseData.data[chosenTemplate].items[0];
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

export const getStaticPaths: GetStaticPaths = async () => {
  const contentfulApiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  const gql = String.raw;
  const contentfulCaseStudyQuery = gql`
    query {
      caseStudyPreviewsCollection {
        items {
          handle
          # previewImage {
          #   title
          #   url
          # }
          # tags
          templateNumber
        }
      }
    }
  `;

  let staticPathsResult: GetStaticPathsResult = {
    paths: [],
    fallback: "blocking",
  };

  try {
    const { data: axiosResponseData } = await axios.post(
      contentfulApiUrl,
      { query: contentfulCaseStudyQuery },
      {
        headers: {
          Authorization: `Bearer ${contentfulAccessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // console.log(axiosResponseData.data.caseStudyPreviewsCollection);
    const caseStudyPreviews: CaseStudyPreview[] =
      axiosResponseData.data.caseStudyPreviewsCollection.items;
    const paths = caseStudyPreviews.map((preview) => {
      const { handle, templateNumber } = preview;
      return {
        params: {
          templateNumber,
          workHandle: handle.toLowerCase(),
        },
      };
    });
    staticPathsResult = { paths, fallback: "blocking" };
  } catch (error: any) {
    console.log(error);
    const errorResponse = error["response"];
    console.log(
      errorResponse["status"],
      errorResponse["statusText"],
      errorResponse["data"]
    );
  }
  return staticPathsResult;
};

export default Work;
