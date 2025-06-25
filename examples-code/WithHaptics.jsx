import { Soundz, SoundzProvider } from 'soundz';

/*
*  enableHaptics defaults to 'true'
*  enableHaptics={false} to disable it.
*/
export default function WithHaptics() {
  return (
    <SoundzProvider providedFX="dunDunDun">
      <Soundz icon={{name: "audioLines", size: 20, strokeWidth: 2.5}}>Play Dramatic Sound!</Soundz>
    </SoundzProvider>
  );
}