import React, { useContext } from 'react';

import { Header, Players, Rules, Game, ResetBtn } from './components';
import { MainWrapper } from './App.elements'
import { GameContext } from './contexts/GameContext';

function App() {
  const { player } = useContext(GameContext)

  return (
    <MainWrapper>
      <Header />
      { player ?  <Game />: <Players /> }
      <Rules />
      <ResetBtn />
    </MainWrapper>
  );
}

export default App;
