import React, { useReducer, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { connect } from "react-redux";
import { addTransaction } from "../actions/fetchTransactions";

function TransactionForm({ categories, setShowForm, addTransaction }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      button: {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  const initialState = {
    date: "",
    description: "",
    category_id: "",
    amount: 0,
    deposit: "",
    disabled: true,
  };

  const reducer = (state, action) => {
    const { type, payload } = action;
    return { ...state, [type]: payload };
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { date, description, category_id, amount, deposit } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { date, category_id, amount, description, deposit };
    addTransaction({ transaction: data });
    setShowForm(false);
  };

  const handleOnChange = useCallback(({ target: { name, value } }) => {
    dispatch({ type: name, payload: value });
  }, []);

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          type="date"
          name="date"
          onChange={handleOnChange}
          helperText="Date of the transaction"
        />

        <TextField
          type="text"
          name="description"
          onChange={handleOnChange}
          helperText="Describe the transaction"
        />

        <TextField
          type="number"
          name="amount"
          onChange={handleOnChange}
          helperText="Amount"
        />

        <TextField
          select
          name="category_id"
          value={category_id}
          onChange={handleOnChange}
          helperText="Please select a category"
        >
          {categories.map((category) => (
            <MenuItem key={category.name} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          name="deposit"
          value={deposit}
          onChange={handleOnChange}
          helperText="Please select type"
        >
          [ <MenuItem value={true}>Deposit</MenuItem>,
          <MenuItem value={false}>Withdraw</MenuItem>]
        </TextField>
      </div>

      <Button
        disabled={
          !(date && description && category_id && amount && deposit !== "")
        }
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Create Transaction
      </Button>
    </form>
  );
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { addTransaction })(TransactionForm);
