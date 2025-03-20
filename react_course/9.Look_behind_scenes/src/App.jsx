import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/COnfigureCounter.jsx";
import Counter from "./components/Counter/Counter.jsx"
import { useState } from "react";

function App() {
  log("<App /> rendered");

    const [chosenCount, setChosenCount] = useState(0);

    function handleSetClick(number){
      setChosenCount(number)
    }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSelect={handleSetClick}/>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
