export function speak(text: string) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "es-ES";
  speechSynthesis.speak(u);
}
