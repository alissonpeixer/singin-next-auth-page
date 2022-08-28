import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head lang="pt-BR">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}