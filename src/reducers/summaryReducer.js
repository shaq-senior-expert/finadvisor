export default function summaryReducer(state = {}, action) {
  switch (action.type) {
    case "START_ADDING_TOTAL_INCOME":
      return state;

    case "START_ADDING_TOTAL_SPEND":
      return state;

    case "ADD_TOTAL_SPEND":
      return {
        ...state,
        total_spend: { ...state.total_spend, ...action.payload },
      };

    case "ADD_TOTAL_INCOME":
      return {
        ...state,
        total_income: { ...state.total_income, ...action.payload },
      };
    default:
      return state;
  }
}
