import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

import logo from '../../images//logo-bonus.svg'

import { Wrapper, Logo, ScoreWrapper, ScoreTitle, Score } from './Header.elements';

function Header() {
  const { score } = useContext(GameContext)

  return (
  <Wrapper>
    <Logo src={logo} alt='logo'/>

    <ScoreWrapper>
      <ScoreTitle>score</ScoreTitle>
      <Score>{ score }</Score>
    </ScoreWrapper>
  </Wrapper>
);
}

export default Header;
