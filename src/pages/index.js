import Head from 'next/head'

import EditorPicks from '../components/editorPicks'
import Slider from '../components/slider'
import styles from '../styles/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SportNews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Slider />
        <EditorPicks />
      </main>
    </div>
  )
}
