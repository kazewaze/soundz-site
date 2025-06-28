import fs from 'fs';
import path from 'path';
import React from 'react';
import { Geist, Geist_Mono } from "next/font/google";

import RootLayout from '@/layouts/RootLayout';
import Card from '@/components/Card/Card';

import { capitalize, uncapitalize } from '@/lib/helpers';

import styles from "@/styles/Sounds.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'public/sounds');
  const files = fs.readdirSync(dir);
  const sounds = files.map(f => f.replace(/\.mp3$/, ''));

  return {
    props: { sounds }
  }
}

const SoundsGrid = ({ soundSelections }) => {
  return (
    <section className={styles.soundsGrid}>
      {
        soundSelections.map((sound, index) => (
          <Card
            key={`${index}__${sound.name}`}
            name={sound.name}
            downloadFile={sound.downloadFile}
          />
        ))
      }
    </section>
  );
};

export default function Sounds({ sounds }) {
  const soundSelections = sounds.map(soundName => {
    return { name: capitalize(soundName), downloadFile: uncapitalize(soundName) };
  });
console.log(soundSelections);
  return (
    <RootLayout home={false}>
    <main className={`${styles.main} ${geistSans.variable} ${geistMono.variable}`}>
      <h1 className={styles.headingOne}>
        Sounds
      </h1>
      <p className={styles.headingOneParagraph}>
        Explore the available sounds to find one that tickles your fancy or download them for local use!
      </p>
      <SoundsGrid soundSelections={soundSelections} />
    </main>
    </RootLayout>
  )
}