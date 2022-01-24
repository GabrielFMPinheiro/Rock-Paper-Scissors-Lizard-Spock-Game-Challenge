import React, { useContext } from 'react';
import { useMediaQuery } from '@mui/material';

import pentagonMobile from '../../images/bg-pentagon-mobile.svg'
import pentagonDesktop from '../../images/bg-pentagon-desktop.svg'

import { 
  Wrapper, 
  ImgWrapper, 
  Img, 
  ScissorsBtn,
  SpockBtn,
  PaperBtn,
  LizardBtn,
  RockBtn,
} from './Players.elements';
import { GameContext } from '../../contexts/GameContext';


function Players() {
  const isMobile = useMediaQuery('(max-width:1024px)');
  const { setPlayer, setLoading } = useContext(GameContext)

  function btnHandler({ target }) {
    setPlayer(target.id)
    setLoading(true)
  }

  return (
  <Wrapper>

    <ScissorsBtn id='scissors' onClick={btnHandler} />
    <SpockBtn id='spock' onClick={btnHandler} />
    <PaperBtn id='paper' onClick={btnHandler} />
    <LizardBtn id='lizard' onClick={btnHandler} />
    <RockBtn id='rock' onClick={btnHandler} />

    <ImgWrapper>
      <Img src={isMobile ? pentagonMobile : pentagonDesktop} alt='pentagon background' />
    </ImgWrapper>
  </Wrapper>
  );
}

export default Players;
