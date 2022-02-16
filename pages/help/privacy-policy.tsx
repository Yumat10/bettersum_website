import { PrivacyPolicyLegalDoc } from "components/pages/help/PrivacyPolicyLegalDoc";
import type { NextPage } from "next";
import Head from "next/head";

const TermsAndConditions: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BetterSum | Privacy Policy</title>
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
        <PrivacyPolicyLegalDoc />
      </main>
    </div>
  );
};

export default TermsAndConditions;
