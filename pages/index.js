import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Willkommen zur Mathe-App!</h1>
      <p>Hier kannst du Mathematik spielerisch lernen.</p>
      <h2>Wähle ein Spiel:</h2>
      <ul>
        <li><Link href="/quiz">Mathe-Quiz</Link></li>
        <li><Link href="/dragdrop">Drag & Drop</Link></li>
        <li><Link href="/rechnen">Rechenaufgaben</Link></li>
      </ul>
    </div>
  );
}
