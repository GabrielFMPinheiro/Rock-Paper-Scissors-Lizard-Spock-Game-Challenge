import React, { useState } from 'react';

import rules from '../../images/image-rules-bonus.svg'
import close from '../../images/icon-close.svg'

import { RulesBtn, Modal, RulesWrapper, Title, RulesImg, CloseBtn } from './Rules.elements'

function Rules() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <RulesBtn onClick={() => setModal(true)}>rules</RulesBtn>
      {modal && (
          <><Modal /><RulesWrapper>
          <Title>rules</Title>
          <RulesImg src={rules} alt='rules' />
          <CloseBtn
            src={close}
            alt='close button'
            onClick={() => setModal(false)} />
        </RulesWrapper></>
      )}
    </>
    );
}

export default Rules;
