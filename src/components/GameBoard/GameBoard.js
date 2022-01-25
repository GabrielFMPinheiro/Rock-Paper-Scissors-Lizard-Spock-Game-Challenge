// Libs
import React, { useContext, useEffect, useState, useCallback } from "react";

// Contexts
import AppContext from "../../contexts/AppContext/AppContext";

//Components
import {
  ScissorsBtn,
  LizardBtn,
  SpockBtn,
  RockBtn,
  PaperBtn,
} from "../Weapons/Weapons.elements";

import {
  GameWrapper,
  UserWeaponWrapper,
  ComputerWeaponWrapper,
  Description,
  Loading,
  WinnerWrapper,
  Winner,
  PlayAgainBtn,
  IconQuestion,
} from "./GameBoard.elements";

const allWeapons = ["scissors", "paper", "rock", "lizard", "spock"];

function GameBoard() {
  const {
    humanWeapon,
    saveHumanWeapon,
    loading,
    changeStatusLoading,
    updateScore,
  } = useContext(AppContext);

  const [computerWeapon, setComputerWeapon] = useState("");
  const [winner, setWinner] = useState("");

  function randomEl(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  const rafflingPcWeapon = useCallback(() => {
    changeStatusLoading(false);
    setComputerWeapon(allWeapons[randomEl(allWeapons)]);
  }, [changeStatusLoading]);

  const whoWon = useCallback(() => {
    // this will help to evaluate who won because we are evaluating by index
    const duplicateWeaponsArr = [...allWeapons, ...allWeapons];
    const humanWeaponPos = duplicateWeaponsArr.lastIndexOf(humanWeapon);

    if (humanWeapon === computerWeapon) setWinner("Tie");
    else if (
      duplicateWeaponsArr[humanWeaponPos - 1] === computerWeapon ||
      duplicateWeaponsArr[humanWeaponPos - 3] === computerWeapon
    ) {
      setWinner("You lose");
      updateScore((prevState) => (prevState !== 0 ? prevState - 1 : 0));
    } else if (computerWeapon !== "") {
      setWinner("You win");
      updateScore((prevState) => prevState + 1);
    }
  }, [computerWeapon, humanWeapon, updateScore]);

  useEffect(() => {
    //After set computer weapon, this effect will evaluate who won
    const choosingWeapon = setTimeout(() => whoWon(), 500);

    return () => clearTimeout(choosingWeapon);
  }, [computerWeapon, whoWon]);

  useEffect(() => {
    const choosingWeapon = setTimeout(() => rafflingPcWeapon(), 1000);

    return () => clearTimeout(choosingWeapon);
  }, [rafflingPcWeapon]);

  function renderPlayer(player, isWinner) {
    switch (player) {
      case "scissors":
        return <ScissorsBtn isPrimary win={isWinner} />;
      case "spock":
        return <SpockBtn isPrimary win={isWinner} />;
      case "lizard":
        return <LizardBtn isPrimary win={isWinner} />;
      case "rock":
        return <RockBtn isPrimary win={isWinner} />;
      default:
        return <PaperBtn isPrimary win={isWinner} />;
    }
  }

  return (
    <GameWrapper>
      <UserWeaponWrapper>
        {renderPlayer(humanWeapon, winner === "You win" && true)}
        <Description>You picked</Description>
      </UserWeaponWrapper>

      <ComputerWeaponWrapper>
        {loading ? (
          <Loading>
            <IconQuestion />
          </Loading>
        ) : (
          renderPlayer(computerWeapon, winner === "You lose" && true)
        )}
        <Description>The house picked</Description>
      </ComputerWeaponWrapper>

      {winner !== "" && (
        <WinnerWrapper>
          <Winner>{winner}</Winner>
          <PlayAgainBtn onClick={() => saveHumanWeapon("")}>
            Play again
          </PlayAgainBtn>
        </WinnerWrapper>
      )}
    </GameWrapper>
  );
}

export default GameBoard;
