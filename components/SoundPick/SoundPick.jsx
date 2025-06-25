import { useState } from 'react';
import styles from './SoundPick.module.css';

function SoundPick({ soundOptions, setSelectedSound }) {
  const [selectedUrl, setSelectedUrl] = useState(null);

  // Handle Sound Selection.
  function handleSelectChange(e) {
    const value = e.target.value;

    if (value === '') {
      // A Devious User Selected the Empty Option Again ("-- Select --").
      setSelectedUrl(null);
      setSelectedSound(null);
    } else {
      const selected = soundOptions.find(opt => opt.name === value);
      if (selected) {
        setSelectedUrl(selected.url);
        setSelectedSound(selected.name);
      }
    }
  }

  const handlePlay = () => {
    if (selectedUrl) {
      const audio = new Audio(selectedUrl);
      audio.play().catch((error) => {
        console.error('Error playing sound:', error);
      });
    }
  };

  return (
    <div className={styles.soundSelect}>
      <div className={styles.soundSelect__Selection}>
        <label htmlFor="sound-select">Pick Sound</label>
        <select id="sound-select" onChange={handleSelectChange} defaultValue="">
          <option value="">-- Select --</option>
          {soundOptions.map((opt) => (
            <option key={opt.name} value={opt.name}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button
          className={styles.btn}
          onClick={handlePlay}
          disabled={!selectedUrl}
        >
          Play Sound
        </button>
      </div>
    </div>
  );
}

export default SoundPick;