import Head from 'next/head';
import Image from 'next/image';
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ClientOnly from '@/components/ClientOnly';
import PropCard from '@/components/PropCard/PropCard';
import CodePreview from '@/components/CodePreview/CodePreview';

import { getPropSelections } from '@/lib/helpers';

import styles from '@/styles/Docs.module.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const installCode = `npm install soundz`;
const basicUsageCode = `
import { Soundz, SoundzProvider } from 'soundz';

export default function Example() {
  return (
    <SoundzProvider>
      <Soundz providedFX="boop">Click Me</Soundz>
    </SoundzProvider>
  );
}
`;

const customSoundCode = `
<Soundz customFX="/sounds/click.mp3">
  Custom Sound Button
</Soundz>
`;

const withAllOptionsCode = `
<Soundz
  providedFX="boop"
  hoverFX="pop"
  clickCooldown={1000}
  fetchCooldown={10000}
  keyboardKey="k"
  enableHaptics
  showTooltip
  tooltipText="Boop!"
  tooltipPosition="top"
  customTheme={{ // or available themes: theme="neon"
    tooltipBg: '#ff1493',
    tooltipColor: '#ffffff',
    pulseColor: '#ff1493'
  }}
  icon={{
    name: "audioLines",
    size: 20,
    strokeWidth: 2.5
  }}
>
  Click: Boop! - Hover: Pop!
</Soundz>
`;

const propSelections = getPropSelections();
const PropsGrid = ({ propSelections }) => {
  return (
    <section className={styles.propsGrid}>
      {
        propSelections.map((prop, index) => (
          <PropCard
            key={`${index}__${prop.name}`}
            name={prop.name}
            desc={prop.desc}
            codeSnippet={prop.codeSnippet}
          />
        ))
      }
    </section>
  );
};

export default function Docs() {
  return (
    <>
      <Head>
        <title>Soundz Documentation</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="Kaycee Ingram" />
        <meta name="description" content="Learn how to use the Soundz component to add sound effects to your React apps." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FDF7E7" />
        <meta property="og:title" content="Soundz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soundzjs.vercel.app" />
        <meta property="og:image" content="/s-icon.svg" />
        <meta property="og:image:alt" content="/s-icon.svg" />
        <link rel="preload" href="/s-icon.svg" as="image" type="image/svg+xml" />
        <link rel="icon" href="/s-icon.svg" sizes="any" />
        <link rel="icon" href="/s-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/s-icon.svg" />
      </Head>

      <Header />
      <main className={`${styles.main} ${geistSans.variable} ${geistMono.variable}`}>
        <h1 className={styles.headingOne}>
          Documentation
        </h1>
        <p className={styles.headingOneParagraph}>
          Soundz makes it easy to wrap your UI Elements with Beautiful, Accessible, and Customizable Sound Effects.
        </p>

        <section className={styles.section}>
          <h2>
            <Image
              className={styles.headingImg}
              src="/icons/installation.svg"
              alt="Wrench Icon (For Installation Heading)"
              width={25}
              height={25}
              priority
            />
            - Installation
          </h2>
          <p>Install via NPM:</p>
          <ClientOnly>
            <CodePreview filename="Install" language="bash" code={installCode} />
          </ClientOnly>
        </section>

        <section className={styles.section}>
          <h2>
            <Image
              className={styles.headingImg}
              src="/icons/basic-usage.svg"
              alt="Rocket Icon (For Basic Usage Heading)"
              width={25}
              height={25}
              priority
            />
            - Basic Usage
          </h2>
          <p className={styles.paragraph}>
            Wrap your app in the <code>SoundzProvider</code> to pass global defaults, and wrap any element in <code>Soundz</code> to enable sounds.
          </p>
          <div className={styles.additionalInfo}>
            <p className={styles.paragraph}><code>providedFX="boop"</code> can be omitted in this example since Soundz defaults to fetching <code>"boop"</code> if <code>providedFX</code> & <code>customFX</code> are not given.</p>
          </div>
          <ClientOnly>
            <CodePreview filename="BasicUsage.jsx" language="jsx" code={basicUsageCode} />
          </ClientOnly>
        </section>

        <section className={styles.section}>
          <h2>
            <Image
              className={styles.headingImg}
              src="/icons/custom-sound.svg"
              alt="Musical Note Icon (For Custom Sound File Heading)"
              width={25}
              height={25}
              priority
            />
            - Custom Sound File
          </h2>
          <p className={styles.paragraph}>
            You can pass an MP3 URL directly using <code>customFX</code>. This bypasses the <code>providedFX</code> fetching.
          </p>
          <ClientOnly>
            <CodePreview filename="CustomSound.jsx" language="jsx" code={customSoundCode} />
          </ClientOnly>
        </section>

        <section className={styles.section}>
          <h2>
            <Image
              className={styles.headingImg}
              src="/icons/full-example.svg"
              alt="Gears Icon (For Full Example Heading)"
              width={30}
              height={30}
              priority
            />
            - Full Options
          </h2>
          <p>Here's an example using multiple props for a richer UX:</p>
          <ClientOnly>
            <CodePreview filename="FullExample.jsx" language="jsx" code={withAllOptionsCode} />
          </ClientOnly>
        </section>

        <section className={styles.section}>
          <h2>
            <Image
              className={styles.headingImg}
              src="/icons/props.svg"
              alt="Slider Settings Icon (For Props Reference Heading)"
              width={25}
              height={25}
              priority
            />
            - Props Reference
          </h2>
          <PropsGrid propSelections={ propSelections } />
        </section>

        <section className={styles.section}>
          <h2>
            <Image
              className={styles.headingImg}
              src="/icons/headphones.svg"
              alt="Headphones Icon (For Provided Sounds Heading)"
              width={30}
              height={30}
              priority
            />
            - Provided Sounds
          </h2>
          <ul className={styles.list}>
            <li>Boop → <code>providedFX={`{"boop"}`}</code></li>
            <li>Disable → <code>providedFX={`{"disable"}`}</code></li>
            <li>Drums → <code>providedFX={`{"drums"}`}</code></li>
            <li>DunDunDun → <code>providedFX={`{"dunDunDun"}`}</code></li>
            <li>Enable → <code>providedFX={`{"enable"}`}</code></li>
            <li>Error → <code>providedFX={`{"error"}`}</code></li>
            <li>Firework → <code>providedFX={`{"firework"}`}</code></li>
            <li>Glug → <code>providedFX={`{"glug"}`}</code></li>
            <li>GlugA → <code>providedFX={`{"glugA"}`}</code></li>
            <li>GlugB → <code>providedFX={`{"glugB"}`}</code></li>
            <li>Guitar → <code>providedFX={`{"guitar"}`}</code></li>
            <li>Meow → <code>providedFX={`{"meow"}`}</code></li>
            <li>Plunger → <code>providedFX={`{"plunger"}`}</code></li>
            <li>PlungerQuick → <code>providedFX={`{"plungerQuick"}`}</code></li>
            <li>Pop → <code>providedFX={`{"pop"}`}</code></li>
            <li>PopDouble → <code>providedFX={`{"popDouble"}`}</code></li>
            <li>PopHigh → <code>providedFX={`{"popHigh"}`}</code></li>
            <li>PopLow → <code>providedFX={`{"popLow"}`}</code></li>
            <li>Pops → <code>providedFX={`{"pops"}`}</code></li>
            <li>SwitchOff → <code>providedFX={`{"switchOff"}`}</code></li>
            <li>SwitchOn → <code>providedFX={`{"switchOn"}`}</code></li>
            <li>Tap → <code>providedFX={`{"tap"}`}</code></li>
            <li>Tik → <code>providedFX={`{"tik"}`}</code></li>
            <li>Tok → <code>providedFX={`{"tok"}`}</code></li>
            <li>Victory → <code>providedFX={`{"victory"}`}</code></li>
            <li>WaterDrip → <code>providedFX={`{"waterDrip"}`}</code></li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            <Image
              className={styles.headingImg}
              src="/icons/themes.svg"
              alt="Paint Palette Icon (For Themes Heading)"
              width={25}
              height={25}
              priority
            />
            - Themes
          </h2>
          <p>Soundz supports built-in themes:</p>
          <ul className={styles.list}>
            <li><code>auto</code> (detects system light/dark)</li>
            <li><code>light</code></li>
            <li><code>dark</code></li>
            <li><code>neon</code></li>
            <li><code>pastel</code></li>
            <li><code>mono</code></li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>
            <Image
              className={styles.headingImg}
              src="/icons/accessibility.svg"
              alt="Universal Access Icon (For Accessibility Heading)"
              width={25}
              height={25}
              priority
            />
            - Accessibility
          </h2>
          <p>All buttons are keyboard-navigable, screen reader safe, and support haptics where available.</p>
        </section>

        <section className={styles.section}>
          <h2>
            <Image
              className={styles.headingImg}
              src="/icons/exported-api.svg"
              alt="Box Icon (For Exported APIs Heading)"
              width={25}
              height={25}
              priority
            />
            - Exported APIs
          </h2>
          <ul className={styles.list}>
            <li><code>Soundz</code> - Main Component</li>
            <li><code>SoundzProvider</code> - Context Provider for defaults</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}