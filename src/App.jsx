import useSwitch from "./useSwitch";

function App() {
  const [isOn, toggle] = useSwitch();
  // Utilizzo del custom hook useSwitch per gestire lo stato booleano
  // isOn rappresenta il valore booleano attuale
  // toggle è la funzione per cambiare il valore di isOn

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}

export default App;
