import { Soundz } from 'soundz';

export default function BasicUsage() {
  return (
    <Soundz
      icon={{
        name: "speaker",
        size: 20,
        strokeWidth: 2.5
      }}
      providedFX="boop"
    >
      Play Boop!
    </Soundz>
  );
}