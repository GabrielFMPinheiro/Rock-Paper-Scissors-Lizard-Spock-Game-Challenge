import React, { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { GameContext } from '../../contexts/GameContext';

import { ScissorsBtn, LizardBtn, SpockBtn, RockBtn, PaperBtn } from '../Players/Players.elements'
import { GameWrapper, PlayerWrapper, PcWrapper, Description, Loading, ResultWrapper, Result, PlayAgainBtn } from './Game.elements'

function Game() {
  console.log('render')
  const { player, loading, setLoading, setPlayer, setScore } = useContext(GameContext)
  const [computer, setComputer ] = useState('');
  const [result, setResult] = useState('');
  const possiblePlayers = useMemo(() => ['scissors', 'paper', 'rock', 'lizard', 'spock'], []);

  const computerPlayer = useCallback(
    () => {
      const computer = possiblePlayers[Math.floor( Math.random() * possiblePlayers.length )];
      setLoading(false)
      setComputer(computer)
    },
    [setLoading, possiblePlayers]
  )

  const winner = useCallback(() => {
    const doubleArr = [...possiblePlayers, ...possiblePlayers]
    const indexPlayer = doubleArr.lastIndexOf(player)
    if(player === computer) {
      setResult('tie')
    } else if ( doubleArr[indexPlayer - 1] === computer || doubleArr[indexPlayer - 3] === computer) {
      setResult('you lose');
      setScore(prevState => prevState !== 0 ? prevState - 1: 0)
    } else if (computer !== '') {
      setResult('you win');
      setScore(prevState => prevState + 1)
    }

  }, [player, computer, possiblePlayers, setScore])

  useEffect(() => {
    winner()
  }, [computer, winner])

  useEffect(() => {
    const delay = setTimeout(() => computerPlayer(), 3000 )
    
    return () => clearTimeout(delay);
  }, [computerPlayer])

  function renderPlayer(player, bool) {
    switch(player) {
      case 'scissors':
        return <ScissorsBtn isPrimary win={ bool }/>
      case 'spock':
        return <SpockBtn isPrimary win={ bool } />
      case 'lizard':
        return <LizardBtn isPrimary win={ bool } />
      case 'rock':
        return <RockBtn isPrimary win={ bool } />
      default:
        return <PaperBtn isPrimary win={ bool } />
    }
  }

  return (
  <GameWrapper>
    <PlayerWrapper>
      { renderPlayer(player, result === 'you win' && true) }
      <Description>you picked</Description>
    </PlayerWrapper>
    
    <PcWrapper>
      { loading ? <Loading /> : renderPlayer(computer, result === 'you lose' && true) }
      <Description>the house picked</Description>
    </PcWrapper>
    {
    result !== '' && (
    <ResultWrapper>
      <Result>{ result }</Result>
      <PlayAgainBtn onClick={ () => setPlayer('') }>play again</PlayAgainBtn>
    </ResultWrapper>)
    }
  </GameWrapper>
  );
}

export default Game;
