// Libs
import React, { useContext } from "react";
import { useMediaQuery } from "@mui/material";

// Assets
import pentagonMobile from "../../images/bg-pentagon-mobile.svg";
import pentagonDesktop from "../../images/bg-pentagon-desktop.svg";

// Components
import {
  Wrapper,
  ImgWrapper,
  Img,
  ScissorsBtn,
  SpockBtn,
  PaperBtn,
  LizardBtn,
  RockBtn,
} from "./Weapons.elements";

// Context
import AppContext from "../../contexts/AppContext/AppContext";

function Weapons() {
  // This hook will tell when the screen is less than 1024px
  const isMobile = useMediaQuery("(max-width:1024px)");
  const { saveHumanWeapon, changeStatusLoading } = useContext(AppContext);

  function btnHandler({ target }) {
    saveHumanWeapon(target.id);
    changeStatusLoading(true);
  }

  return (
    <Wrapper>
      <ScissorsBtn id="scissors" onClick={btnHandler} />
      <SpockBtn id="spock" onClick={btnHandler} />
      <PaperBtn id="paper" onClick={btnHandler} />
      <LizardBtn id="lizard" onClick={btnHandler} />
      <RockBtn id="rock" onClick={btnHandler} />

      <ImgWrapper>
        <Img
          src={isMobile ? pentagonMobile : pentagonDesktop}
          alt="pentagon background"
        />
      </ImgWrapper>
    </Wrapper>
  );
}

export default Weapons;
