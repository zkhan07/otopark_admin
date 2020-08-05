import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import DoughnutChart from "../userDoughnutChart/UserDoughnutChart";
// import Card from "../UserCard/UserCard";
import ParkingTable from "../ParkingTable/ParkingTable";

import EnhancedTable from "../SortedTable.js/TableSort";
import ParkingAppBar from "../ParkingAppbar/ParkingAppbar";
import ParkingDoughnutChart from "../ParkingDoughnutChart/ParkingDoughnutChart";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";
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
          <b>Parking Data</b>
          <br />
        </Typography>
        <br />
        <br />
        <Grid container spacing={1}>
          <Grid item sm={4}>
            <ParkingDoughnutChart />
          </Grid>
          <Grid item xs={12} sm={6} tyle={{ marginTop: "90px" }}>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={4}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Total Parking
                </Typography>
                <MuiThemeProvider theme={theme}>
                  <Typography
                    align="center"
                    variant="h2"
                    component="h2"
                    className={classes.subtTitle}
                    className={classes.verticalBar}
                  >
                    <b>130</b>
                  </Typography>
                </MuiThemeProvider>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Active Parking
                </Typography>
                <Typography
                  align="center"
                  variant="h2"
                  component="h2"
                  className={classes.subtTitle}
                  className={classes.verticalBar}
                  style={{ color: "#00BBDC" }}
                >
                  <b>110</b>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Inactive Parking
                </Typography>
                <Typography
                  align="center"
                  variant="h2"
                  component="h2"
                  className={classes.subtTitle}
                  className={classes.verticalBar}
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
              <ParkingAppBar />
              <ParkingTable />
              {/* <PrimarySearchAppBar />
              <EnhancedTable /> */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
