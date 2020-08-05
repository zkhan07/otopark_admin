import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import DoughnutChart from "../userDoughnutChart/UserDoughnutChart";
// import Card from "../UserCard/UserCard";
import SupportTable from "../SupportTable/SupportTable";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

import SupportAppbar from "../SupportAppbar/SupportAppbar";
import { useStyles } from "./css";

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
          <b>Support Data</b>
        </Typography>
        <br />
        <br />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={2}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Opened Support
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
                  closed Support
                </Typography>
                <Typography
                  align="center"
                  variant="h2"
                  component="h2"
                  className={classes.subtTitle}
                  className={classes.verticalBar}
                  // style={{ marginTop: "10px" }}
                >
                  <b>20</b>
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
              <SupportAppbar />
              <SupportTable />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
