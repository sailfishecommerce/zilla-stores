import type { AppProps } from "next/app";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "simplebar/dist/simplebar.min.js";
//import 'smooth-scroll'
//import "drift-zoom/dist/Drift.min.js";

import "drift-zoom/dist/drift-basic.min.css";
import "simplebar/dist/simplebar.min.css";
import "../styles/globals.css";
import "../styles/theme.min.css";
//import "../js/slider.js";
// import "../js/theme.js";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"
        />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
