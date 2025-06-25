import { useState, useEffect } from 'react';
import { Howl } from '@/lib/howler.min.js';

export default function SoundFX({
  children,
  providedFX = null,
  customFX = null,
  loading = null,
  wrap = null
}) {
  const [selectedSound, setSelectedSound] = useState(null);
  const [soundUrl, setSoundUrl] = useState(null);

  const wrapCSS = wrap
    ? wrap
    : `
      .wrap,
      .wrap:before,
      .wrap:after {
        margin: 0;
        padding: 0;
      }
      .wrap {
        display: block;
        border: none;
        color: inherit;
        background: transparent;
      }
    `;

  useEffect(() => {
    let isMounted = true;

    const fetchSound = async () => {
      if (customFX) {
        setSelectedSound({ url: customFX });
        setSoundUrl(customFX);
        return;
      }

      const fallbackFX = providedFX || 'boop';

      try {
        const response = await fetch(`/api/sounds?sound=${fallbackFX}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();

        if (result.url && isMounted) {
          setSelectedSound(result);
          setSoundUrl(result.url);
        } else {
          console.error('*** Invalid Sound Data received *** :', result);
        }
      } catch (error) {
        console.error('*** Error Sending GET Request *** :', error);
      }
    };

    fetchSound();

    return () => {
      isMounted = false;
    };
  }, [customFX, providedFX]);

  const finalSoundUrl = soundUrl ? `${soundUrl}?t=${new Date().getTime()}` : null;

  const handleClick = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioContext.resume().then(() => {
      const sound = new Howl({
        src: [finalSoundUrl],
        autoplay: true,
      });
      sound.play();
    });
  };

  return (
    <>
      {soundUrl ? (
        <div className="wrap" onClick={handleClick}>
          {children}
          <style jsx>{wrapCSS}</style>
        </div>
      ) : loading ? (
        loading()
      ) : (
        <p>Loading... "starts whistling nervously."</p>
      )}
    </>
  );
}