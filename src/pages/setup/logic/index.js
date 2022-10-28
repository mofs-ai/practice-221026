export const InitialState = {
  cash: {
    name: "현금",
    amount: 0,
  },
  estimated: [
    {
      name: "투자금",
      amount: 0,
    },
    {
      name: "정부 지원금",
      amount: 0,
    },
    {
      name: "기타",
      list: [],
    },
  ],
  months: [
    {
      month: "",
      revenues: [
        {
          name: "서비스 이용료",
          amount: 0,
        },
        {
          name: "단발성 수익",
          amount: 0,
        },
        // 변동값
        {
          name: "기타",
          list: [],
        },
      ],
      fixed_costs: [
        {
          name: "인건비",
          amount: 0,
        },
        {
          name: "SaaS이용료",
          amount: 0,
        },
        {
          name: "임대료",
          amount: 0,
        },
        {
          name: "기타",
          list: [],
        },
      ],
      variable_costs: [
        {
          name: "추가채용",
          amount: 0,
        },
        {
          name: "운영비",
          amount: 0,
        },
        {
          name: "마케팅",
          amount: 0,
        },
        {
          name: "기타",
          list: [],
        },
      ],
    },
  ],
};

export const getCurrentMonth = (params) => {
  //dayjs || YYYYMM
  const thisMoth = "202210";

  const monthData = {
    month: thisMoth,
    revenues: [
      {
        name: "서비스 이용료",
        amount: 0,
      },
      {
        name: "단발성 수익",
        amount: 0,
      },
      // 변동값
      {
        name: "기타",
        list: [],
      },
    ],
    fixed_costs: [
      {
        name: "인건비",
        amount: 0,
      },
      {
        name: "SaaS이용료",
        amount: 0,
      },
      {
        name: "임대료",
        amount: 0,
      },
      {
        name: "기타",
        list: [],
      },
    ],
    variable_costs: [
      {
        name: "추가채용",
        amount: 0,
      },
      {
        name: "운영비",
        amount: 0,
      },
      {
        name: "마케팅",
        amount: 0,
      },
      {
        name: "기타",
        list: [],
      },
    ],
  };

  return { ...monthData };
};
