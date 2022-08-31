import Head from "next/head";
import GlobalStyle from "../src/theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>

          {/*<!-- Google tag (gtag.js) --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-3WTMG2FNS1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-3WTMG2FNS1');
              `
            }}
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true.toString()} / >
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,800;1,800&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp;