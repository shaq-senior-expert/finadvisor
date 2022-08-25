import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

function Summary({ summary }) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const today = new Date();
  const currentMonth = today.toLocaleString("default", {
    month: "long",
  });

  return (
    <React.Fragment>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Title>Total spending this month</Title>
          <Typography component="p" variant="h6">
            ${summary.total_spend ? summary.total_spend[currentMonth] : null}
          </Typography>
          {/* <Typography color="textSecondary" className={classes.depositContext}>
            as of <Moment format="D MMM YYYY">{today}</Moment>
          </Typography> */}

          <Title>Total income this month</Title>
          <Typography component="p" variant="h6">
            ${summary.total_income ? summary.total_income[currentMonth] : null}
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            as of <Moment format="D MMM YYYY">{today}</Moment>
          </Typography>

          {/* <div>
            <Link color="primary" href="#" onClick={preventDefault}>
              View balance
            </Link>
          </div> */}
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = ({ summary }) => ({ summary });
export default connect(mapStateToProps)(Summary);
