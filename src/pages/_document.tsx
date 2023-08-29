/* eslint-disable react/react-in-jsx-scope */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="stylesheet" type="text/css" href="src/styles/global.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One&family=Righteous&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One&family=Righteous&family=Shadows+Into+Light&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
