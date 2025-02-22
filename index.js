import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Select, SelectItem } from "@/components/ui/select";
import { GiTrophy, GiBrain, GiStarShuriken } from "react-icons/gi";

const levels = [
  "Einsteiger",
  "Fortgeschritten",
  "Experte"
];

const learningStyles = [
  "Visuell (Bilder & Animationen)",
  "Auditiv (Erklärungen & Geschichten)",
  "Kinästhetisch (Interaktive Aufgaben)"
];

const exercises = {
  Einsteiger: ["1+1", "2+3", "5-2"],
  Fortgeschritten: ["12x3", "15/3", "25-7"],
  Experte: ["45x2", "144/12", "63-18"]
};

export default function MathLearningApp() {
  const [level, setLevel] = useState("Einsteiger");
  const [learningStyle, setLearningStyle] = useState("Visuell (Bilder & Animationen)");
  const [progress, setProgress] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [points, setPoints] = useState(0);
  
  const nextExercise = () => {
    if (exerciseIndex < exercises[level].length - 1) {
      setExerciseIndex(exerciseIndex + 1);
      setProgress((prev) => prev + (100 / exercises[level].length));
      setPoints((prev) => prev + 10);
    } else {
      alert("Super gemacht! Du hast das Level abgeschlossen und eine Trophäe verdient!");
      setProgress(100);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-blue-400 to-blue-600 min-h-screen text-white">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <GiBrain /> Mathe Abenteuer
      </h1>
      <p className="mt-2">Wähle dein Level und deinen Lernstil!</p>

      <div className="flex gap-4 mt-4">
        <Select value={level} onChange={(e) => setLevel(e.target.value)}>
          {levels.map((lvl) => (
            <SelectItem key={lvl} value={lvl}>{lvl}</SelectItem>
          ))}
        </Select>

        <Select value={learningStyle} onChange={(e) => setLearningStyle(e.target.value)}>
          {learningStyles.map((style) => (
            <SelectItem key={style} value={style}>{style}</SelectItem>
          ))}
        </Select>
      </div>

      <Card className="mt-6 w-80 p-4 text-center bg-white text-black shadow-lg rounded-lg border-2 border-yellow-500">
        <CardContent>
          <motion.h2 
            className="text-xl font-semibold"
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {exercises[level][exerciseIndex]}
          </motion.h2>
          <Button className="mt-4 bg-yellow-500 text-black" onClick={nextExercise}>Nächste Aufgabe</Button>
        </CardContent>
      </Card>

      <div className="mt-4 flex flex-col items-center">
        <p className="text-lg font-semibold">Punkte: {points}</p>
        <Progress value={progress} className="mt-2 w-80 bg-gray-300" />
        {progress === 100 && (
          <div className="mt-4 text-xl flex items-center gap-2">
            <GiTrophy className="text-yellow-500" /> Herzlichen Glückwunsch!
          </div>
        )}
      </div>
    </div>
  );
}
