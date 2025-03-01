import { useState } from 'react';

export default function Rechnen() {
  const [zahl1, setZahl1] = useState(Math.floor(Math.random() * 10));
  const [zahl2, setZahl2] = useState(Math.floor(Math.random() * 10));
  const [antwort, setAntwort] = useState("");
  const [score, setScore] = useState(0);

  function checkAnswer() {
    if (parseInt(antwort) === zahl1 + zahl2) {
      setScore(score + 1);
      setZahl1(Math.floor(Math.random() * 10));
      setZahl2(Math.floor(Math.random() * 10));
    }
    setAntwort("");
  }

  return (
    <div>
      <h1>Rechnen</h1>
      <p>{zahl1} + {zahl2} = ?</p>
      <input value={antwort} onChange={e => setAntwort(e.target.value)} />
      <button onClick={checkAnswer}>Antwort prüfen</button>
      <p>Punktestand: {score}</p>
    </div>
  );
}
