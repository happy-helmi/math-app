import { useState } from 'react';

export default function Quiz() {
  const questions = [
    { question: "Was ist 5 + 3?", answer: "8" },
    { question: "Was ist 7 - 4?", answer: "3" },
    { question: "Was ist 6 × 2?", answer: "12" }
  ];

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);

  function checkAnswer() {
    if (input === questions[index].answer) {
      setScore(score + 1);
    }
    setIndex(index + 1);
    setInput("");
  }

  if (index >= questions.length) {
    return <h2>Spiel vorbei! Dein Punktestand: {score} von {questions.length}</h2>;
  }

  return (
    <div>
      <h1>Mathe-Quiz</h1>
      <p>{questions[index].question}</p>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={checkAnswer}>Antwort prüfen</button>
    </div>
  );
}
