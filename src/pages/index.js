import Head from 'next/head'
import Navigation from '@/components/Navigation/Navigation'
import TopSellers from '@/components/TopSellers/TopSellers'
import Recommended from '@/components/TopSellers/Recommended'
import Blog from '@/components/Blog/Blog'
import Header from '@/components/Header/Header'
import FooterMenu from '@/components/FooterMenu/FooterMenu'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Nunito+Sans:wght@400;700&display=swap"
          rel="stylesheet" />
        <title>Bookstore</title>
      </Head>
      <main >
        <div class={styles.bookstore}>
          <div class={styles.navigationArea}>
          <Navigation/>
          </div>
          <div class={styles.head}>
          <Header/>
          </div>
          <div class={styles.topSellers}>
          <TopSellers/>
          </div>
          <div class={styles.recommended}>
          <Recommended/>
          </div>
          <div class={styles.blog}>
            <Blog/>
          </div>
          <div class={styles.footer}>
          <FooterMenu/>
          </div>
        </div>
      </main>

    </>
  )
}
