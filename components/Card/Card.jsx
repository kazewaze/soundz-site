import React from 'react';
import Image from 'next/image';

import SoundPlayerBtn from '@/components/SoundPlayerBtn/SoundPlayerBtn';

import styles from './Card.module.css';

export default function Card({
  name,
  downloadFile
}) {
  return (
    <div className={styles.card} role="region" aria-label={name}>
      <div className={styles.buttonSection}>
        {
          downloadFile
          &&
          <a
            href={`/sounds/${downloadFile}.mp3`}
            download
            className={styles.downloadBtn}
            aria-label={`Download the ${downloadFile} sound`}
          >
            {
              <Image
                className={`${styles.downloadBtnImg}`}
                src="/icons/download-white.svg"
                alt="Download Icon Image"
                width={20}
                height={20}
              />
              ||
              'Download'
            }
          </a>
        }
        
      </div>
      <div className={styles.titleSection}>
        <h2>{ name }</h2>
      </div>
      <div className={styles.soundPlayer}>
        <div className={styles.soundPlayerContents}>
          <SoundPlayerBtn sound={downloadFile} />
        </div>
      </div>
    </div>
  );
}