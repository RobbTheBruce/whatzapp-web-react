import Landing from '../screens/landing/index';
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon-64x64.ico" src="/favicon-64x64.ico" />
      </Head>
      <Landing></Landing>
    </>
  )
}
