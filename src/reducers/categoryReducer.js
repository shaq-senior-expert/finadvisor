function categoryReducer(state = [], action) {
  switch (action.type) {
    case "START_ADDING_CATEGORIES_REQUEST":
      return state;

    case "ADD_CATEGORIES":
      return [...state, action.payload];

    default:
      return state;
  }
}

export default categoryReducer;
