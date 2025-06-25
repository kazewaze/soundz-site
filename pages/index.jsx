import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import Image from "next/image";

import RootLayout from '@/layouts/RootLayout';
import SoundPick from "@/components/SoundPick/SoundPick";

import styles from "@/styles/Home.module.css";

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'public/sounds');
  const files = fs.readdirSync(dir);
  const soundNames = files.map(f => f.replace(/\.mp3$/, ''));

  return {
    props: { soundNames }
  }
}

export default function Home({ soundNames }) {
  const [selectedSound, setSelectedSound] = useState(null);
  const soundOptions = soundNames.map(soundName => {
    return { name: soundName, url: `/sounds/${soundName}.mp3` };
  });

  return (
    <>
      <RootLayout>
        <Image
          className={styles.logo}
          src="/soundz.svg"
          alt="Soundz Logo"
          width={360}
          height={76}
          priority
        />
        <Image
          className={styles.logo}
          src="/soundz_heading.svg"
          alt="Soundz Heading Image"
          width={470}
          height={156}
          priority
        />
        <div className={styles.callToAction}>
          <Image
            className={`${styles.logo} ${styles.callToAction__text}`}
            src="/call-to-action.svg"
            alt="'Try it out!' Image"
            width={200}
            height={100}
            priority
          />
          <Image
            className={`${styles.logo} ${styles.callToAction__downArrow}`}
            src="/arrow-down_pink.svg"
            alt="Down Arrow Icon Image"
            width={50}
            height={50}
            priority
          />
          <SoundPick
            soundOptions={soundOptions}
            setSelectedSound={setSelectedSound}
          />
        </div>
        <div className={styles.shoutoutTo}>
          <Image
            className={`${styles.logo} ${styles.shoutoutTo__text}`}
            src="/shoutout.svg"
            alt="'Shoutout To' Image"
            width={200}
            height={100}
            priority
          />
          <Image
            className={`${styles.logo} ${styles.shoutoutTo__list}`}
            src="/shoutout-list.svg"
            alt="'Shoutout To' List Image"
            width={450}
            height={295}
            priority
          />
        </div>
      </RootLayout>
    </>
  );
}