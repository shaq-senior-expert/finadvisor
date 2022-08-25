import React, { Component, useEffect } from "react";
import Dashboard from "./containers/Dashboard";
import { connect } from "react-redux";
import { fetchTransactions } from "./actions/fetchTransactions";
import { fetchCategories } from "./actions/fetchCategories";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import { autoLoginUser } from "./actions/userActions";
import {
  fetchTotalSpend,
  fetchTotalIncome,
} from "./actions/transactionsSummary";
import Backdrop from "./components/BackDrop";

function App({
  transactions,
  userAlreadyLogged,
  transactionLoading,
  fetchTransactions,
  fetchCategories,
  autoLoginUser,
  fetchTotalSpend,
  fetchTotalIncome,
}) {
  useEffect(() => {
    if (localStorage.token) {
      fetchTransactions();
      fetchCategories();
      // need autoLoginUser to save user information in redux store and show info on profile section
      autoLoginUser();
      fetchTotalSpend();
      fetchTotalIncome();
    }
  }, []);

  return (
    <Router>
      <div>
        {transactionLoading ? <Backdrop /> : null}

        <Switch>
          <Route path="/login">
            {localStorage.token ? <Redirect to="/" /> : <Login />}
          </Route>

          <Route path="/signup">
            {localStorage.token ? <Redirect to="/" /> : <SignUp />}
          </Route>

          {localStorage.token ? (
            <Route
              path="/"
              render={(routerProps) => (
                <Dashboard {...routerProps} transactions={transactions} />
              )}
            />
          ) : (
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions.list,
    userAlreadyLogged: state.isLoggedIn,
    transactionLoading: state.transactions.loading,
  };
};

export default connect(mapStateToProps, {
  fetchTransactions,
  fetchCategories,
  autoLoginUser,
  fetchTotalSpend,
  fetchTotalIncome,
})(App);
