/*
Snack 2

import useDate from "./useDate";

function App() {
  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
}

export default App;*/

import useCustomPointer from "./useCustomPointer";

function App() {
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App;
