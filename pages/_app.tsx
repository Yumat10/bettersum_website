import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/shared/navbars/Navbar";
import { Footer } from "../components/shared/footers/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
