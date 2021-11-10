import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import "bootstrap/dist/css/bootstrap.min.css";
import "simplebar/dist/simplebar.min.js";
//import "drift-zoom/dist/Drift.min.js";

import "drift-zoom/dist/drift-basic.min.css";
import "simplebar/dist/simplebar.min.css";
import "../styles/globals.css";
import "../styles/theme.min.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.helper.ie8.js" />
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
