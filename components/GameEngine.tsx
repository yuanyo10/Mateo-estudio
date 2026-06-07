"use client";

import { useState, useEffect } from "react";
import { questions } from "@/lib/questions";
import { speak } from "@/lib/audio";

export default function GameEngine() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [msg, setMsg] = useState("");

  const q = questions[i];

  useEffect(() => {
    speak(q.word.replace("__", "___"));
  }, [i]);

  function answer(a: string) {
    if (a === q.answer) {
      setScore(score + 10);
      setMsg("🎉 Correcto!");
    } else {
      setMsg("❌ Intenta otra vez");
    }

    setTimeout(() => {
      setMsg("");
      setI((i + 1) % questions.length);
    }, 1000);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Completa la palabra</h2>

      <h1 style={{ fontSize: 50 }}>{q.word}</h1>
      <p>{q.hint}</p>

      <button onClick={() => answer("b")}>B</button>
      <button onClick={() => answer("v")}>V</button>

      <h3>{msg}</h3>
      <p>⭐ {score}</p>
    </div>
  );
}
