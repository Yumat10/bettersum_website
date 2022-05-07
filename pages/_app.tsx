import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/shared/navbars/Navbar";
import { Footer } from "../components/shared/footers/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  homePageAnimationDuration,
  homePageLoadDuration,
} from "animations/homePageAnimations";
import * as gtag from "lib/gtag";
import { CaseStudyContextProvider } from "contexts/caseStudyContext";
import { DynamiDataContextProvider } from "contexts/dynamicDataContext";

const isProd = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // useEffect(() => {
  //   if (router.route === "/") {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //     document.body.style.overflow = "hidden";
  //     setTimeout(
  //       () => (document.body.style.overflow = "auto"),
  //       (homePageLoadDuration + homePageAnimationDuration) * 1000
  //     );
  //   }
  // }, []);

  // Google Analytics
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProd) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <>
        <Navbar />
        <CaseStudyContextProvider>
          <DynamiDataContextProvider>
            <Component {...pageProps} />
          </DynamiDataContextProvider>
        </CaseStudyContextProvider>
        <Footer />
      </>
    </div>
  );
}

export default MyApp;
