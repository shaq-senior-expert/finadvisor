function transactionReducer(state = { list: [], loading: false }, action) {
  switch (action.type) {
    case "START_ADDING_TRANSACTIONS_REQUEST":
      return { ...state, loading: true };

    case "START_ADDING_TRANSACTION_REQUEST":
      return { ...state, loading: true };

    case "START_UPDATING_TRANSACTION_REQUEST":
      return { ...state, loading: true };

    case "START_DELETING_TRANSACTION_REQUEST":
      return { ...state, loading: true };

    case "FETCH_TRANSACTIONS":
      const loadedState = {
        list: [...state.list, ...action.payload],
        loading: false,
      };
      return loadedState;

    case "ADD_TRANSACTION":
      const addedState = {
        list: [...state.list, action.payload],
        loading: false,
      };
      return addedState;

    case "UPDATE_TRANSACTION":
      const updatedTransactionIdx = state.list.findIndex(
        (transaction) => transaction.id === action.payload.id
      );

      return {
        list: [
          ...state.list.slice(0, updatedTransactionIdx),
          action.payload,
          ...state.list.slice(updatedTransactionIdx + 1),
        ],
        loading: false,
      };

    case "DELETE_TRANSACTION":
      const newState = state.list.filter(
        (transaction) => transaction.id !== action.payload
      );
      return { list: [...newState], loading: false };

    default:
      return state;
  }
}

export default transactionReducer;
