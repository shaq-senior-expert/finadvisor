import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function DeleteConfirmation({ confirmDelete }) {
  const handleClose = (event) => {
    const term = event.target.innerText === "AGREE" ? true : false;
    confirmDelete(term);
  };
  return (
    <>
      <Dialog open={true}>
        <DialogTitle>{"Delete the transaction ?"}</DialogTitle>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Disagree
          </Button>
          <Button color="primary" autoFocus onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
