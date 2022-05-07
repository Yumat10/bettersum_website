import { TermsAndConditionsLegalDoc } from "components/pages/help/TermsAndConditionsLegalDoc";
import type { NextPage } from "next";
import Head from "next/head";

const TermsAndConditions: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BetterSum | Terms and Conditions</title>
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
        <TermsAndConditionsLegalDoc />
      </main>
    </div>
  );
};

export default TermsAndConditions;
