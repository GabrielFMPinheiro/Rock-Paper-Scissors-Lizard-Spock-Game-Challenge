// Libs
import { useEffect, useState } from "react";

//Context
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const [humanWeapon, setHumanWeapon] = useState("");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(() => {
    const localData = localStorage.getItem("score");
    return localData ? JSON.parse(localData) : 0;
  });

  // Every game, update score on Local Storage
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  const contextValue = {
    humanWeapon,
    saveHumanWeapon: setHumanWeapon,
    loading,
    changeStatusLoading: setLoading,
    score,
    updateScore: setScore,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
