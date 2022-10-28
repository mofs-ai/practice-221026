import React, { useState, useEffect } from "react";
import { setCashAmount } from "./logic";

const SetupView1 = (props) => {
  const { state, setState } = props;

  return (
    <div>
      {state?.cash?.name}
      <input
        defaultValue={state?.cash?.amount}
        onChange={(e) => {
          setState((prev) => setCashAmount(prev, e));
        }}
      />
    </div>
  );
};

export default SetupView1;
