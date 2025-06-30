import { Soundz, SoundzProvider } from 'soundz';

export default function TooltipIcon() {
  return (
    <SoundzProvider
      providedFX="firework"
      icon={{
        name: "audioWaves",
        size: 20,
        strokeWidth: 2.5
      }}
      showTooltip
      tooltipText="POW!"
      tooltipPosition="top"
    >
      <Soundz>
        Play Firework!
      </Soundz>
    </SoundzProvider>
  );
}