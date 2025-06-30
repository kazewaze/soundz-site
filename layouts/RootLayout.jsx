import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import styles from '@/layouts/RootLayout.module.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children, home=true }) {
  return (
    <>
      <Head>
        <title>Soundz</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="Kaycee Ingram" />
        <meta name="description" content="A Lightweight, Customizable Sound Effects Wrapper for React." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FDF7E7" />
        <meta property="og:title" content="Soundz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soundzjs.vercel.app" />
        <meta property="og:image" content="/s-icon.svg" />
        <meta property="og:image:alt" content="/s-icon.svg" />
        <link rel="prefetch" href="/kaycee.svg" as="image" type="image/svg+xml" />
        <link rel="prefetch" href="/soundz.svg" as="image" type="image/svg+xml" />
        <link rel="prefetch" href="/soundz_heading.svg" as="image" type="image/svg+xml" />
        <link rel="prefetch" href="/call-to-action.svg" as="image" type="image/svg+xml" />
        <link rel="prefetch" href="/shoutout.svg" as="image" type="image/svg+xml" />
        <link rel="prefetch" href="/shoutout-list.svg" as="image" type="image/svg+xml" />
        <link rel="prefetch" href="/arrow-down_pink.svg" as="image" type="image/svg+xml" />
        <link rel="prefetch" href="/s-icon.svg" as="image" type="image/svg+xml" />
        <link rel="icon" href="/s-icon.svg" sizes="any" />
        <link rel="icon" href="/s-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/s-icon.svg" />
      </Head>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        { // Custom <main> needed ? otherwise use home.
          home
          ?
            <main className={styles.main}>
              { children }
            </main>
          :
            <>
              { children }
            </>
        }
        <Footer />
      </div>
    </>
  );
}