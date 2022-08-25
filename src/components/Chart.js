import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
// import * as Recharts from 'recharts';
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";

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

export default function Chart({ transactions }) {
  // debugger;
  const today = new Date();
  const month = today.getMonth() + 1;
  let data = [];

  // filter only current month data

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const parseMonth = parseInt(transaction.date.split("T0")[0].split("-")[1]);
    const parseDay = parseInt(transaction.date.split("T0")[0].split("-")[2]);
    if (parseMonth == month)
      data.push({ time: parseDay, amount: transaction.amount });
  }

  const theme = useTheme();
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Title>This month's spending by day!</Title>
          <ResponsiveContainer>
            <LineChart
              data={data.sort((a, b) => a.time - b.time)}
              margin={{
                top: 16,
                right: 16,
                bottom: 18,
                left: 24,
              }}
            >
              <XAxis
                interval={2}
                dataKey="time"
                stroke={theme.palette.text.secondary}
              >
                <Label angle={360} position="bottom">
                  Day
                </Label>
              </XAxis>
              <YAxis stroke={theme.palette.text.secondary}>
                <Label
                  angle={270}
                  position="left"
                  style={{
                    textAnchor: "middle",
                    fill: theme.palette.text.primary,
                  }}
                >
                  Spend ($)
                </Label>
              </YAxis>
              <Line
                type="monotone"
                dataKey="amount"
                stroke={theme.palette.primary.main}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
