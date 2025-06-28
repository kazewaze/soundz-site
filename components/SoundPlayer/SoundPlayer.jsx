import { useMemo, useState } from 'react';

import styles from './SoundPlayer.module.css';

// Load all sound-names for selection from the sounds folder.
const soundModules = import.meta.glob('/public/sounds/*.(mp3|wav|ogg)', {
  eager: true,
  query: '?url',
  import: 'default'
});

export default function SoundPlayer() {
  const [selectedSound, setSelectedSound] = useState({name: "... 🤷🏻‍♂️", url: "/src/assets/sounds"});

  const options = useMemo(() => {
    return Object.entries(soundModules).map(([path, url]) => {
      const filename = path.split('/').pop().split('.').slice(0, -1).join('.');
      return { name: filename, url };
    });
  }, []);

  return (
    <div className={styles.soundSelect}>
      <div className={styles.soundSelect__Selection}>
        <label htmlFor="sound-select">Sound Selector</label>
        <select
         id="sound-select"
         onChange={(e) => setSelectedSound(options.find((opt) => opt.name === e.target.value))}
        >
          <option value="">-- Select --</option>
          {
            options.map((opt) => (
              <option key={opt.name + '_KEY'} value={opt.name}>
                { opt.name }
              </option>
            ))
          }
        </select>
      </div>

      {selectedSound && (
        <div className={styles.soundSelect__Player}>
          <div className={styles.soundSelect__Player__View}>
            <h3>Playing</h3>
            <p>{ selectedSound.name }</p>
          </div>
          <audio controls src={selectedSound.url} />
        </div>
      )}
    </div>
  );
}