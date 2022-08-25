import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import summaryReducer from "./summaryReducer";

const rootReducer = combineReducers({
  transactions: transactionReducer,
  categories: categoryReducer,
  user: userReducer,
  isLoggedIn: loginReducer,
  summary: summaryReducer,
});

export default rootReducer;
