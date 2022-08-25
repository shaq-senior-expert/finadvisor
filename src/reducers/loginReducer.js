export default function loginReducer(state = false, action) {
  switch (action.type) {
    case "SUCCESS":
      return true;
    default:
      return state;
  }
}
