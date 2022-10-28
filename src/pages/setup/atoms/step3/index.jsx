import React, { useState, useEffect } from "react";

const SetupView3 = (props) => {
  const { state, setState } = props;

  useEffect(() => {
    //init
  }, []);

  return <div>step 3 == {state?.id || "111"}</div>;
};

export default SetupView3;
