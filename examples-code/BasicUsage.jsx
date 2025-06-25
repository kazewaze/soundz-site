import { Soundz, SoundzProvider } from 'soundz';

export default function BasicUsage() {
  return (
    <SoundzProvider icon={{name: "speaker", size: 20, strokeWidth: 2.5}}>
      <Soundz providedFX="boop">Play Boop!</Soundz>
    </SoundzProvider>
  );
}