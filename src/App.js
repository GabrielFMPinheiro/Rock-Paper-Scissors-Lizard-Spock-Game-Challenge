// Libs
import React, { useContext } from "react";

// Components
import { Header, Weapons, Rules, GameBoard, ResetBtn } from "./components";
import { MainWrapper } from "./App.elements";

//Context
import AppContext from "./contexts/AppContext/AppContext";

function App() {
  const { humanWeapon } = useContext(AppContext);

  return (
    <MainWrapper>
      <Header />
      {/* Start the game when the user has chosen a button */}
      {humanWeapon ? <GameBoard /> : <Weapons />}

      <Rules />
      <ResetBtn />
    </MainWrapper>
  );
}

export default App;
