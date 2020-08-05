import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import DoughnutChart from "../userDoughnutChart/UserDoughnutChart";
// import Card from "../UserCard/UserCard";
import Table from "../PaymentTable/PaymentTable";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";
import { useStyles } from "./css";
import PaymentBarChart from "../PaymentBarChart/PaymentBarChart";
import PaymentAppbar from "../PaymentAppbar/PaymentAppbar";

export default function FullWidthGrid() {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <div className={classes.root}>
        <Typography
          variant="h4"
          component="h1"
          style={{ padding: "10px", color: "#1D1D1D" }}
        >
          <br />
          <b>Payment Data</b>
        </Typography>
        <br />
        <br />
        <Grid container spacing={1}>
          <Grid item sm={12}>
            <Paper className={classes.paper}>
              <PaymentBarChart />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12}>
            <br />
            <br />
            <Grid container spacing={1}>
              <Grid item xs={6} sm={2}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Total Revenue
                </Typography>
                <MuiThemeProvider theme={theme}>
                  <Typography
                    align="center"
                    variant="h2"
                    component="h2"
                    className={classes.subtTitle}
                    className={classes.verticalBar}
                    style={{ color: "#00BBDC" }}
                  >
                    <b>87</b>
                  </Typography>
                </MuiThemeProvider>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Net Revenue
                </Typography>
                <Typography
                  align="center"
                  variant="h2"
                  component="h2"
                  className={classes.subtTitle}
                  className={classes.verticalBar}
                >
                  <b>117</b>
                </Typography>
              </Grid>

              <Grid item xs={6} sm={2}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Completed Payment
                </Typography>
                <Typography
                  align="center"
                  variant="h2"
                  component="h2"
                  className={classes.subtTitle}
                  className={classes.verticalBar}
                >
                  <b>450</b>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Pending Payments
                </Typography>
                <Typography
                  align="center"
                  variant="h2"
                  component="h2"
                  className={classes.subtTitle}
                  className={classes.verticalBar}
                >
                  <b>107</b>
                </Typography>
              </Grid>
            </Grid>
            <br />
            <br />
          </Grid>
          {/* card end */}

          <Grid item xs={12}></Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <PaymentAppbar />
              <Table />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
