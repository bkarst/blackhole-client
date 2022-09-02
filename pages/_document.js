import HeaderMetaTags from '../components/components/HeaderMetaTags'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import { DefaultAppSeo } from '../components/components/DefaultAppSeo'
import * as React from 'react'

export default class CustomDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <HeaderMetaTags />
          <DefaultAppSeo />
        </Head>

        <body className="font-sans antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
