import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Title from "./Title";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Transaction from "./Transaction";
import { TransactionTableHead } from "./TransactionTableHead";
import uuid from "react-uuid";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  link: {
    cursor: "pointer",
  },
}));

export default function RecentTransactions({ transactions }) {
  const rows = transactions.map((transaction) => {
    return {
      id: transaction.id,
      date: transaction.date,
      description: transaction.description,
      category_id: transaction.category_id,
      amount: transaction.amount,
      user_id: transaction.user_id,
      category: transaction.category,
      deposit: transaction.deposit,
    };
  });
  const classes = useStyles();
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Recent Transactions</Title>
          <Table size="small">
            <TransactionTableHead />
            <TableBody>
              {rows.map((row) => (
                // hide the buttons when displayed on recent transactions table, show showBtn is false
                <Transaction key={uuid()} row={row} showBtn={false} />
              ))}
            </TableBody>
          </Table>
          <div className={classes.seeMore}>
            <Link
              color="primary"
              className={classes.link}
              onClick={() => history.push("/transactions")}
            >
              See more transactions
            </Link>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
