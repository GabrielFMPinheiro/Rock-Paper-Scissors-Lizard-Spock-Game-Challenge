import { createContext, useContext, useEffect, useState  } from 'react';

export const GameContext = createContext();

function GameProvider({ children }) {
  const [player, setPlayer] = useState();
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(() => {
    const localData = localStorage.getItem('score');
    return localData ? JSON.parse(localData) : 0
  })

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score))
  }, [score]);

  const value = {
    player,
    loading,
    setPlayer,
    setLoading,
    score,
    setScore,
  }

  return (
    <GameContext.Provider value={value}>
      { children }
    </GameContext.Provider>
  )
}

export default GameProvider;

