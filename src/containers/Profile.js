import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Profile from "../components/Profile";
// import ProfileDetails from "../components/ProfileDetails";
import ProfileDetails from "../components/ProfileDetails";
import { connect } from "react-redux";

const Account = ({ user }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <Profile user={user} />
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <ProfileDetails user={user} />
        </Grid>
      </Grid>
    </Container>
  );
};
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(Account);
