import "../styles/global.css";  // ✅ Globales CSS hier importieren

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
