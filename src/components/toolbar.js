import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
import TransactionForm from "./transactionForm";

export default function Toolbar({ setKeyword }) {
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <Box display="flex" justifyContent="flex-end">
        <Button
          color="primary"
          variant="contained"
          onClick={() => setShowForm(!showForm)}
        >
          Add transaction
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon fontSize="small" color="action">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search transaction"
                  variant="outlined"
                  name="search"
                  onChange={handleChange}
                />
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* show the add transaction form only if the add transaction button is clicked */}
      {showForm ? (
        <Box mt={3}>
          <Card>
            <Box maxWidth={1500} boxShadow={3} m={1} p={1}>
              <TransactionForm setShowForm={setShowForm} />
            </Box>
          </Card>
        </Box>
      ) : null}
    </div>
  );
}
