import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import { updateUser } from "../actions/userActions";
import { connect } from "react-redux";

function ProfileDetails({ user, updateUser }) {
  const [first_name, setFname] = useState(null);
  const [last_name, setLname] = useState(null);
  const [email, setEmail] = useState(null);
  const [income, setIncome] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);

  useEffect(() => {
    setFname(user.first_name);
    setLname(user.last_name);
    setEmail(user.email);
    setIncome(user.income);
    setAge(user.age);
    setGender(user.gender);
  }, [user]);

  const handleChange = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "firstName":
        setFname(event.target.value);
        console.log(first_name);
        break;
      case "lastName":
        setLname(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "income":
        setIncome(event.target.value);
        break;
      case "age":
        setAge(event.target.value);
        break;
      case "gender":
        setGender(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { first_name, last_name, email, income, age, gender };
    updateUser(data);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                onChange={(event) => handleChange(event)}
                required
                value={first_name || ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={(event) => handleChange(event)}
                value={last_name || ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={(event) => handleChange(event)}
                value={email || ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Income"
                name="income"
                onChange={(event) => handleChange(event)}
                type="number"
                value={income || ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                onChange={(event) => handleChange(event)}
                type="number"
                value={age || ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Gender"
                name="gender"
                onChange={(event) => handleChange(event)}
                value={gender || ""}
                variant="outlined"
              ></TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained" type="submit">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
}

export default connect(null, { updateUser })(ProfileDetails);
