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

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.route === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflow = "hidden";
      setTimeout(
        () => (document.body.style.overflow = "auto"),
        (homePageLoadDuration + homePageAnimationDuration) * 1000
      );
    }
  }, []);

  return (
    <div>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </div>
  );
}

export default MyApp;
