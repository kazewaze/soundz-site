import { Soundz } from 'soundz';

export default function TooltipIcon() {
  return (
    <Soundz
      customTheme={{
        tooltipBg: '#ff1493',
        tooltipColor: '#ffffff',
        pulseColor: '#ff1493'
      }}
      providedFX="firework"
      icon={{
        name: "speaker",
        size: 20,
        strokeWidth: 2.5
      }}
      showTooltip
      tooltipText="POW!"
      tooltipPosition="top"
    >
      Play Firework!
    </Soundz>
  );
}