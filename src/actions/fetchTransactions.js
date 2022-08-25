// const ROOT_URL = "http://localhost:3000/api/v1";
const ROOT_URL = 'https://protected-citadel-71435.herokuapp.com/api/v1';

import { fetchTotalSpend, fetchTotalIncome } from './transactionsSummary';

export function fetchTransactions() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_TRANSACTIONS_REQUEST' });
    fetch(`${ROOT_URL}/user_transactions`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((response) =>
        dispatch({ type: 'FETCH_TRANSACTIONS', payload: response })
      );
  };
}

export function addTransaction(data) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_TRANSACTION_REQUEST' });
    fetch(`${ROOT_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.token,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger;
        dispatch({ type: 'ADD_TRANSACTION', payload: response });
        dispatch(fetchTotalIncome());
        dispatch(fetchTotalSpend());
      });
  };
}

export function updateTransaction(data) {
  // debugger;
  return (dispatch) => {
    dispatch({ type: 'START_UPDATING_TRANSACTION_REQUEST' });
    fetch(`${ROOT_URL}/transactions/${data.id}}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.token,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger;
        dispatch({ type: 'UPDATE_TRANSACTION', payload: response });
        dispatch(fetchTotalIncome());
        dispatch(fetchTotalSpend());
      });
  };
}

export function deleteTransaction(id) {
  return (dispatch) => {
    dispatch({ type: 'START_DELETING_TRANSACTION_REQUEST' });
    fetch(`${ROOT_URL}/transactions/${id}}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: response.id });
        dispatch(fetchTotalIncome());
        dispatch(fetchTotalSpend());
      });
  };
}
