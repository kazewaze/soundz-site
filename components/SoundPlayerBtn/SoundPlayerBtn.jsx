import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './SoundPlayerBtn.module.css';

const SoundPlayerBtn = ({ sound }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleAudioEnd = () => {
      setIsPlaying(false); // Reset to play icon when audio finishes
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('ended', handleAudioEnd);
    }

    // Clean up event listener on component unmount
    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', handleAudioEnd);
      }
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className={styles.container}>
      <button
        onClick={toggleSound}
        aria-label={isPlaying ? "Pause Sound" : "Play Sound"}
        className={styles.playPauseBtn}
      >
        {
          isPlaying
          ?
            <Image
              className={styles.pauseIcon}
              src="/icons/circle-pause.svg"
              alt="Solid Pink Circle Pause Icon Image"
              width={50}
              height={50}
            />
          :
            <Image
              className={styles.playIcon}
              src="/icons/circle-play.svg"
              alt="Solid Pink Circle Play Icon Image"
              width={50}
              height={50}
            />
        }
      </button>
      <audio className={styles.audio} ref={audioRef} src={`/sounds/${sound}.mp3`} />
    </div>
  );
};

export default SoundPlayerBtn;