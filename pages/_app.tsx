import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
        <meta
          name="keywords"
          content="pantherprotocol, blockchain, privacy, defi, web3, "
        />
        <meta
          name="description"
          content="Panther Protocol is an end-to-end solution that restores privacy in Web3 and DeFi while providing financial institutions with a clear path to compliantly participate in decentralized finance."
        />
        <meta name="subject" content="Privacy Blockchain Protocol" />
        <meta name="copyright" content="Panther Protocol" />
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <meta
          name="revised"
          content="Wednesday, November 10th, 2011, 4:20 pm"
        />
        <meta
          name="abstract"
          content="Panther Protocol is an end-to-end solution that restores privacy in Web3 and DeFi while providing financial institutions with a clear path to compliantly participate in decentralized finance."
        />
        <meta name="topic" content="Privacy" />
        <meta
          name="summary"
          content="Panther Protocol is an end-to-end solution that restores privacy in Web3 and DeFi while providing financial institutions with a clear path to compliantly participate in decentralized finance."
        />
        <meta name="Classification" content="Web3 Privacy Protocol" />
        <meta
          name="author"
          content="Panther Protocol, news@pantherprotocol.io"
        />
        <meta name="designer" content="Panther Protocol" />
        <meta name="copyright" content="Panther Protocol" />
        <meta name="reply-to" content="news@pantherprotocol.io" />
        <meta name="owner" content="Panther Protocol" />
        <meta name="url" content="https://www.pantherprotocol.io" />
        <meta name="identifier-URL" content="https://www.pantherprotocol.io" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Blockchain" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="%PUBLIC_URL%/og.jpg" />
        <meta property="og:title" content="Panther Protocol" />
        <meta
          property="og:description"
          content="Panther Protocol is an end-to-end solution that restores privacy in Web3 and DeFi while providing financial institutions with full ownership of their data as they participate in decentralized finance."
        />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Panther Protocol</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
