import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>
          Product Hunt – The best new products in tech. Cloned by phinnl
        </title>
        <meta
          name="title"
          content="Product Hunt – The best new products in tech. Cloned by phinnl"
        />
        <meta name="description" content="An example nextjs..." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Product Hunt – The best new products in tech. Cloned by phinnl"
        />
        <meta property="og:description" content="An example nextjs..." />
        <meta
          property="og:image"
          content="/product-hunt.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Product Hunt – The best new products in tech. Cloned by phinnl"
        />
        <meta property="twitter:description" content="An example nextjs..." />
        <meta
          property="twitter:image"
          content="/product-hunt.jpg"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
