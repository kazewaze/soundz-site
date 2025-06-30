import { Soundz } from "soundz";

export default function KeyboardEnabled() {
  return (
    <Soundz keyboardKey="Enter">
      Play Boop on Keydown [Enter]
    </Soundz>
  );
}