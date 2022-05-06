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
import { CaseStudyTemplate } from "components/pages/workPage/caseStudyTemplate/CaseStudyTemplate";

const SelectedWork: NextPage = ({
  caseStudyData: propsCaseStudyData,
  caseStudyPreviews: propsCaseStudyPreviews,
  shouldRedirectTo404: propsShouldRedirect404,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const { setCaseStudyData, setCaseStudyPreviews } = useCaseStudyContext();

  useEffect(() => {
    if (propsShouldRedirect404) {
      router.replace("/404");
    }
  }, [propsShouldRedirect404]);

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
          {propsShouldRedirect404 ? (
            <div
              style={{
                backgroundColor: "var(--bettersum-black)",
                height: "100vh",
              }}
            />
          ) : (
            <CaseStudyTemplate />
          )}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryWorkHandle: string = String(context.params?.workHandle);

  if (
    typeof context.params?.workHandle == "undefined" ||
    context.params?.workHandle == "undefined"
  ) {
    return {
      props: {
        shouldRedirectTo404: true,
      },
    };
  }

  const contentfulApiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  const contentfulAccessToken = context.preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  const chosenTemplate = "caseStudyTemplateTwoCollection";

  const gql = String.raw;
  const chosenTemplateStructure = gql`
    handle
    title
    subtitle
    siteUrl
    tags
    splashImage {
      title
      url
      contentType
    }
    description {
      json
    }
    stats
    statLabels
    mediaContentCollection {
      items {
        url
        title
        contentType
      }
    }
  `;

  const contentfulCaseStudyQuery = gql`
    query {
     ${chosenTemplate}(where: {
        handle: "${queryWorkHandle.toLowerCase()}"
      }, limit: 1, preview: ${context.preview ? true : false}
     ) {
        items {
          ${chosenTemplateStructure}
        }
      }
    }
  `;

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

  let props: {
    caseStudyData: CaseStudyTemplateOne | null;
    caseStudyPreviews: CaseStudyPreview[];
    shouldRedirectTo404: boolean;
  } = {
    caseStudyData: null,
    caseStudyPreviews: [],
    shouldRedirectTo404: false,
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

    if (axiosCaseStudyResponseData.data[chosenTemplate].items.length === 0) {
      throw "Case study not found";
    }
    props.caseStudyData =
      axiosCaseStudyResponseData.data[chosenTemplate].items[0];

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

export const getStaticPaths: GetStaticPaths = async () => {
  const contentfulApiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  const chosenTemplate = "caseStudyTemplateTwoCollection";

  const gql = String.raw;
  const contentfulCaseStudyQuery = gql`
    query {
      ${chosenTemplate} {
        items {
          handle
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

    const caseStudyPreviews: CaseStudyPreview[] =
      axiosResponseData.data[chosenTemplate].items;
    const paths = caseStudyPreviews.map((preview) => {
      const { handle } = preview;
      return {
        params: {
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

export default SelectedWork;
