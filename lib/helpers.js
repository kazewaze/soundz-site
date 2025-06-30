/*
* Helper Functions.
* - KC
*/

const propsSelections = [ // Yeah I know... ick.
  {
    name: "providedFX",
    desc: "Name of predefined sound.",
    dataType: "string",
    codeSnippet: `// default: boop
providedFX="boop"`
  },
  {
    name: "customFX",
    desc: "Custom API URL to MP3 file.",
    dataType: "string",
    codeSnippet: `customFX="https://my-sound-api.io/boop"`
  },
  {
    name: "apiBaseUrl",
    desc: "Override the base API URL for sound fetches.",
    dataType: "string (url)",
    codeSnippet: `/* Use with SoundzProvider */
apiBaseUrl="https://my-sounds.io"`
  },
  {
    name: "hoverFX",
    desc: "Sound to play on hover.",
    dataType: "string | URL",
    codeSnippet: `\
/* Use with SoundzProvider */

// Works with Provided Sounds:
hoverFX="pop"

// OR Custom API URL:
hoverFX="https://my-sounds.io/clap.mp3"`
  },
  {
    name: "noClickSound",
    desc: "Disable sound on click.",
    dataType: "boolean",
    codeSnippet: `// Ex: Hover Sound Only
noClickSound={true}`
  },
  {
    name: "fetchCooldown",
    desc: "Delay before re-fetching same sound (ms).",
    dataType: "number",
    codeSnippet: `// default: 10000 (10 sec)
fetchCooldown={12000}`
  },
  {
    name: "clickCooldown",
    desc: "Debounce clicking sound effect (ms).",
    dataType: "number",
    codeSnippet: `// default: 0
clickCooldown={3000} // 3 sec`
  },
  {
    name: "keyboardKey",
    desc: "Trigger sound with key press.",
    dataType: "string",
    codeSnippet: `keyboardKey="Enter"`
  },
  {
    name: "enableHaptics",
    desc: "Vibrate on click if supported.",
    dataType: "boolean",
    codeSnippet: `// default: true
enableHaptics={false}`
  },
  {
    name: "loading",
    desc: "Optional loading state component.",
    dataType: "( ) => ReactNode",
    codeSnippet: `loading={() => <p>I'm Hurrying!</p>}`
  },
  {
    name: "showTooltip",
    desc: "Show text when sound plays?",
    dataType: "boolean",
    codeSnippet: `showTooltip={true}`
  },
  {
    name: "tooltipText",
    desc: "Text shown in tooltip.",
    dataType: "string",
    codeSnippet: `tooltipText="Howdy!"`
  },
  {
    name: "tooltipPosition",
    desc: "Tooltip position preference.",
    dataType: "string -> top | bottom | left | right",
    codeSnippet: `// top | bottom | left | right
tooltipPosition="top"`
  },
  {
    name: "tooltipAnimation",
    desc: "Tooltip animation preference.",
    dataType: "string -> fade | scale | slide",
    codeSnippet: `// fade | scale | slide
tooltipAnimation="fade"`
  },
  {
    name: "animationSpeed",
    desc: "Animation speed.",
    dataType: "string (s - seconds) (default: '1s')",
    codeSnippet: `// seconds - default: "1s"
animationSpeed="3s"`
  },
  {
    name: "icon",
    desc: "Select animated icon.",
    dataType: "object - speaker | waves | audioWaves | audioLines | trophy",
    codeSnippet: `\
/*
  speaker, waves, trophy,
  audioWaves, audioLines
*/

icon={{
  name: "speaker",
  size: 20, // default
  strokeWidth: 2.5 // default
}}`
  },
  {
    name: "theme",
    desc: "Select a provided theme.",
    dataType: "string -> auto | light | dark | neon | pastel",
    codeSnippet: `// auto | light | dark | neon | pastel
theme="neon"`
  },
  {
    name: "customTheme",
    desc: "Declare your own theme.",
    dataType: "object",
    codeSnippet: `\
// merges/overrides the defaults
customTheme={{
  tooltipBg: "#ff1493",
  tooltipColor: "#ffffff",
  pulseColor: "#ff1493"
 }}`
  },
  {
    name: "className",
    desc: "CSS class for wrapper.",
    dataType: "string",
    codeSnippet: `className="myClassName"`
  },
  {
    name: "style",
    desc: "Inline styles for wrapper.",
    dataType: "CSSProperties",
    codeSnippet: `\
style={{
  padding: '2rem',
  background: 'transparent'
 }}`
  },
  {
    name: "layout",
    desc: "CSS layout preference.",
    dataType: "string",
    codeSnippet: `layout="inline-flex"`
  },
  {
    name: "wrap",
    desc: "Custom CSS class or style block.",
    dataType: "string",
    codeSnippet: `\
wrap=\`.wrap {
         margin: 0;
         padding: 0;
         background: transparent;
       }\``
  }
];

// For Narnia... Err I mean Docs Page..
export const getPropSelections = () => propsSelections;

export const capitalize = (str='', sounds=true) => {
  if (typeof str !== 'string' || str.length === 0)
    return ''; // No Bueno...

  if (sounds) // Sound File Names.
    return str.charAt(0).toUpperCase() + str.slice(1);
  else // Other Use-Cases.
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const uncapitalize = (str='') => {
  if (typeof str !== 'string' || str.length === 0)
    return ''; // No Bueno...

  return str.charAt(0).toLowerCase() + str.slice(1);
};

// TBD ...