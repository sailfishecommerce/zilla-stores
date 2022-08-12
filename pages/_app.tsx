import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "react-query/devtools";

import "simplebar";

import store from "@/redux/store";
import Nprogress from "@/components/Loader/Nprogress";
import "bootstrap/dist/css/bootstrap.min.css";
import "drift-zoom/dist/drift-basic.min.css";
import "simplebar/dist/simplebar.css";
import "@/styles/globals.css";
import "@/styles/theme.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

dynamic(() => import("drift-zoom/dist/Drift.min.js"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);

  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/src/css/lightgallery.css"
        />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/lib/js/lightgallery.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js" />
      <Script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" />

      <Script type="module" src="/js/theme.js" />
      <Nprogress color="red" options={{ showSpinner: false }} />
      <ToastContainer />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;
