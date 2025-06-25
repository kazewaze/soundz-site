import { Soundz } from 'soundz';

export default function DynamicTheme() {
  return (
    <Soundz
      customTheme={{
        tooltipBg: '#ff1493',
        tooltipColor: '#ffffff',
        pulseColor: '#ff1493'
      }}
      icon={{
        name: "trophy",
        size: 20,
        strokeWidth: 2.5
      }}
      showTooltip
      tooltipText="SUCCESS!"
      tooltipPosition="top"
      providedFX="victory"
    >
      Submit
    </Soundz>
  );
}