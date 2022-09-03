import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Expanding Cards</title>
        <meta name="description" content="Expanding cards created from the Brad Traversy's example." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>HomePage</h1>

    </div>
  )
}

export default Home
