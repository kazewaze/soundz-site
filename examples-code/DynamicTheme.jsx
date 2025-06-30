import { Soundz, SoundzProvider } from 'soundz';

export default function DynamicTheme() {
  return (
    <SoundzProvider
      icon={{
        name: "trophy",
        size: 20,
        strokeWidth: 2.5
      }}
      providedFX="victory"
    >
      <Soundz>
        Submit
      </Soundz>
    </SoundzProvider>
  );
}