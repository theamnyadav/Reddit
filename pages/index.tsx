import type { NextPage } from 'next'
import Head from 'next/head'
import Postbox from '../components/Postbox'

const Home: NextPage = () => {
  return (
    <div className="my-7 mx-auto man-w-5xl">
      <Head>
        <title>Reddit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Postbox/>     
      
    </div>
  )
}

export default Home
