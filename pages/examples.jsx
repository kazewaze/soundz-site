import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ClientOnly from '@/components/ClientOnly';
import ExampleShowcase from '@/components/ExampleShowcase/ExampleShowcase';

import BasicUsage from '@/examples-code/BasicUsage';
import KeyboardEnabled from '@/examples-code/KeyboardEnabled';
import WithHaptics from '@/examples-code/WithHaptics';
import DynamicTheme from '@/examples-code/DynamicTheme';
import TooltipIcon from '@/examples-code/TooltipIcon';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ExamplesPage({ codeSnippets }) {
  return (
    <>
      <Head>
        <title>Soundz Examples</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="Kaycee Ingram" />
        <meta name="description" content="Explore various examples of the Soundz component for adding sound effects to your React apps." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FDF7E7" />
        <meta property="og:title" content="Soundz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soundzjs.vercel.app" />
        <meta property="og:image" content="/s-icon.svg" />
        <meta property="og:image:alt" content="/s-icon.svg" />
        <link rel="prefetch" href="/s-icon.svg" as="image" type="image/svg+xml" />
        <link rel="icon" href="/s-icon.svg" sizes="any" />
        <link rel="icon" href="/s-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/s-icon.svg" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto', padding: '2rem' }}>
          <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>Examples</h1>

          <ClientOnly>
            <ExampleShowcase title="Basic Usage" Component={BasicUsage} code={codeSnippets.basic} />
          </ClientOnly>
          <ClientOnly>
            <ExampleShowcase title="Keyboard Enabled" Component={KeyboardEnabled} code={codeSnippets.keyboard} />
          </ClientOnly>
          <ClientOnly>
            <ExampleShowcase title="With Haptics" Component={WithHaptics} code={codeSnippets.haptics} />
          </ClientOnly>
          <ClientOnly>
            <ExampleShowcase title="Dynamic Theme" Component={DynamicTheme} code={codeSnippets.dynamic} />
          </ClientOnly>
          <ClientOnly>
            <ExampleShowcase title="Tooltip+Icon" Component={TooltipIcon} code={codeSnippets.tooltip} />
          </ClientOnly>
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const codeSnippets = {
    basic: fs.readFileSync(path.join(process.cwd(), 'examples-code/BasicUsage.jsx'), 'utf-8'),
    keyboard: fs.readFileSync(path.join(process.cwd(), 'examples-code/KeyboardEnabled.jsx'), 'utf-8'),
    haptics: fs.readFileSync(path.join(process.cwd(), 'examples-code/WithHaptics.jsx'), 'utf-8'),
    dynamic: fs.readFileSync(path.join(process.cwd(), 'examples-code/DynamicTheme.jsx'), 'utf-8'),
    tooltip: fs.readFileSync(path.join(process.cwd(), 'examples-code/TooltipIcon.jsx'), 'utf-8')
  };

  return { props: { codeSnippets } };
}