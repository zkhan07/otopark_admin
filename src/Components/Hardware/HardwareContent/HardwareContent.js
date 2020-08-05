import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import DoughnutChart from "../userDoughnutChart/UserDoughnutChart";
// import Card from "../UserCard/UserCard";
import HardwareAppbar from "../HardwareAppbar/HardwareAppbar";
import HardwareRFIDTable from "../HardwareRFIDTable/HardwareRFIDTable";
import TicketDispenser from "../TicketDispenser/TicketDispenser";

import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Typography
          variant="h4"
          component="h1"
          style={{ padding: "10px", color: "#1D1D1D" }}
        >
          <br />
          <b>Hardware Overview</b>
          <br />
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <br />
            <br />
            <br />
            <br />
            <Typography
              variant="h5"
              style={{ padding: "10px", color: "#1D1D1D" }}
            >
              <b>RFID Reader Overview</b>
              <br />
            </Typography>
            <Paper className={classes.paper}>
              <HardwareAppbar />
              <HardwareRFIDTable />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <br />
            <br />
            <br />
            <br />
            <Typography
              variant="h5"
              style={{ padding: "10px", color: "#1D1D1D" }}
            >
              <b>Ticket Dispenser Overview</b>
              <br />
            </Typography>
            <Paper className={classes.paper}>
              <HardwareAppbar />
              <TicketDispenser />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
