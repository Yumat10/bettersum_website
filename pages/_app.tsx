import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/shared/navbars/Navbar";
import { Footer } from "../components/shared/footers/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => (document.body.style.overflow = "auto"), 3000);
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
