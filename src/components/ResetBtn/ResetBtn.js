// Libs
import React, { useContext } from "react";

// Context
import AppContext from "../../contexts/AppContext/AppContext";

// Component
import { ResetButton } from "./ResetBtn.elements";

function ResetBtn() {
  const { updateScore } = useContext(AppContext);

  return <ResetButton onClick={() => updateScore(0)}>Reset</ResetButton>;
}

export default ResetBtn;
