import { useState } from "react";

export default function useSwitch() {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn((prev) => !prev);
  return [isOn, toggle];
}

// Snack 1: useSwitch() – Toggle Booleano
// Creare un custom hook per alternare un valore booleano tra true e false.

// Cosa deve fare?

// Inizialmente false.
// Ritorna il valore attuale e una funzione toggle() per cambiarlo.
// Quando toggle() viene chiamato, il valore passa da true → false e viceversa.
