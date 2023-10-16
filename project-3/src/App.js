import { useState } from "react";
import StartPage from "./components/StartPage";
import GamePlay from "./components/GamePlay";


function App() {

  const [gameStarted, setGameStarted] = useState(true);

  const toogleGamePlay = () => {

    setGameStarted((prev) => !prev);
  }


  return (
    <>
      {gameStarted ? <GamePlay /> : <StartPage toggle={toogleGamePlay} />}
    </>
  );
}

export default App;
