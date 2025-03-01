import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Willkommen zur Mathe-App!</h1>
      <p>Hier kannst du Mathematik spielerisch lernen.</p>
      <img src="/images/math-icons.png" alt="Mathe Icons" style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block' }} />
    </Layout>
  );
}
