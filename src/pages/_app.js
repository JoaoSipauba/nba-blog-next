import Head from 'next/head'

import Header from '../components/header'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp