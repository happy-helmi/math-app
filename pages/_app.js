import "../styles/global.css";  // ✅ Globales CSS importieren
import Layout from "../components/Layout"; // Optional: Layout einbinden

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
