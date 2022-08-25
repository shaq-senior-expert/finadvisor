// const ROOT_URL = "http://localhost:3000/api/v1";
const ROOT_URL = 'https://protected-citadel-71435.herokuapp.com/api/v1';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function fetchTotalSpend() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_TOTAL_SPEND' });
    fetch(`${ROOT_URL}/total_spend`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger;
        Object.keys(response).forEach((key) => {
          const monthStr = months[parseInt(key.split('-')[1]) - 1];
          const payload = { [monthStr]: response[key] };
          //   debugger;
          dispatch({
            type: 'ADD_TOTAL_SPEND',
            payload,
          });
        });
      });
  };
}

export function fetchTotalIncome() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_TOTAL_INCOME' });
    fetch(`${ROOT_URL}/total_income`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger;
        Object.keys(response).forEach((key) => {
          //   debugger;
          const monthStr = months[parseInt(key.split('-')[1]) - 1];
          const payload = { [monthStr]: response[key] };
          //   debugger;
          dispatch({
            type: 'ADD_TOTAL_INCOME',
            payload,
          });
        });
      });
  };
}
