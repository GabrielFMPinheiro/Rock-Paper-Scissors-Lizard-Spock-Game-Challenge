import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { ResetButton } from './ResetBtn.elements';

function ResetBtn() {
  const { setScore } = useContext(GameContext)

  return (
  <ResetButton onClick={() => setScore(0)}>reset</ResetButton>);
}

export default ResetBtn;
