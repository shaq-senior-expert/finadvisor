import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import uuid from "react-uuid";
import Toolbar from "../components/toolbar";
import Transaction from "../components/Transaction";
import { TransactionTableHead } from "../components/TransactionTableHead";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(0),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    maxHeight: 800,
  },
}));

function Transactions({ transactions }) {
  const classes = useStyles();
  // keyword is used to filter search result if any
  const [keyword, setKeyword] = useState("");
  const sortedData = transactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  // page and rowsPerPage are used in pagenation
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = sortedData.map((transaction) => {
    return {
      id: transaction.id,
      date: transaction.date,
      description: transaction.description,
      category: transaction.category,
      category_id: transaction.category_id,
      amount: transaction.amount,
      user_id: transaction.user_id,
      deposit: transaction.deposit,
    };
  });

  const populateTable = () => {
    // slice is used to show specific number of rows in pagenation
    return rows
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row) => {
        if (keyword === "")
          return <Transaction key={uuid()} row={row} showBtn={true} />;
        else if (row.description.includes(keyword))
          return <Transaction key={uuid()} row={row} showBtn={true} />;
        else return;
      });
  };
  // below two functions are used for pagenation, determining the page and row number to show
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Toolbar setKeyword={setKeyword} />
        <Paper className={classes.paper}>
          <Table size="small" stickyHeader>
            <TransactionTableHead />
            <TableBody>{populateTable()}</TableBody>
          </Table>
        </Paper>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions.list,
  };
};

export default connect(mapStateToProps)(Transactions);
