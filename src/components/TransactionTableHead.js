import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const TransactionTableHead = () => {
  const classes = { cell: { background: "#7ca1d9" } };
  return (
    <TableHead>
      <TableRow>
        <TableCell style={classes.cell}>Date</TableCell>
        <TableCell style={classes.cell}>Description</TableCell>
        <TableCell style={classes.cell}>Category</TableCell>
        <TableCell style={classes.cell}>Type</TableCell>
        <TableCell style={classes.cell}>Amount</TableCell>
        <TableCell style={classes.cell}></TableCell>
      </TableRow>
    </TableHead>
  );
};
