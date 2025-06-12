import { useState, useEffect } from "react";

export default function useCustomPointer(cursor) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        cursor: "none",
      }}
    >
      {cursor}
    </div>
  );
}

// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

// Cosa deve fare?

// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.
// Esempio di utilizzo:
