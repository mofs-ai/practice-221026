import React, { useState, useEffect } from "react";
import { initThis, setThisMonthValue, setThisMonthEtcValue } from "./logic";

const SetupView2 = (props) => {
  const [thisMonth, setMonth] = useState({ ...(props?.months || initThis) });

  return (
    <div>
      <div>
        {thisMonth?.revenues?.[0]?.name}
        <input
          defaultValue={thisMonth?.revenues?.[0]?.amount}
          onChange={(e) => {
            setThisMonthValue({
              thisMonth,
              setMonth,
              props,
              event: e,
              index: 0,
            });
          }}
        />
      </div>
      <div>
        {thisMonth?.revenues?.[1]?.name}
        <input
          defaultValue={thisMonth?.revenues?.[1]?.amount}
          onChange={(e) => {
            setThisMonthValue({
              thisMonth,
              setMonth,
              props,
              event: e,
              index: 1,
            });
          }}
        />
      </div>
      {/* --------------------------------------- */}
      <div style={{ marginTop: 100 }}>
        {thisMonth?.revenues?.[2]?.list.length ? <>배열돌리기</> : null}
      </div>
      {/* --------------------------------------- */}
      <button type="small" onClick={() => {}}>
        카테고리 추가
      </button>
    </div>
  );
};

export default SetupView2;
