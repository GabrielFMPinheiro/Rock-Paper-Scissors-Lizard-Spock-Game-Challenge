// Libs
import React, { useState } from "react";

// Assets
import rules from "../../images/image-rules-bonus.svg";
import close from "../../images/icon-close.svg";

// Components
import {
  RulesBtn,
  Modal,
  RulesWrapper,
  Title,
  RulesImg,
  CloseBtn,
} from "./Rules.elements";

function Rules() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <RulesBtn onClick={() => setModal(true)}>Rules</RulesBtn>
      {modal && (
        <>
          <Modal />
          <RulesWrapper>
            <Title>Rules</Title>
            <RulesImg src={rules} alt="rules" />
            <CloseBtn
              src={close}
              alt="close button"
              onClick={() => setModal(false)}
            />
          </RulesWrapper>
        </>
      )}
    </>
  );
}

export default Rules;
