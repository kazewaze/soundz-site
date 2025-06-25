import Prism from 'prismjs';

import "@/styles/reset.css";
import "@/styles/theme.css";
import "@/styles/globals.css";
import 'prismjs/components/prism-jsx'; // load JSX syntax
import 'prismjs/components/prism-javascript'; // optional, if needed
import 'prismjs/components/prism-tsx'; // optional, if using TSX

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}