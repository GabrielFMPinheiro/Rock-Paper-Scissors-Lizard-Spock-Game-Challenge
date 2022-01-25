// Libs
import React, { useContext } from "react";

// Context
import AppContext from "../../contexts/AppContext/AppContext";

//Assets
import logo from "../../images//logo-bonus.svg";

//Components
import {
  Wrapper,
  Logo,
  ScoreWrapper,
  ScoreTitle,
  Score,
} from "./Header.elements";

function Header() {
  const { score } = useContext(AppContext);

  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />

      <ScoreWrapper>
        <ScoreTitle>Score</ScoreTitle>
        <Score>{score}</Score>
      </ScoreWrapper>
    </Wrapper>
  );
}

export default Header;
