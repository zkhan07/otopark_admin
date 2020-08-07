import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HardwareAppbar from "../../Hardware/HardwareAppbar/HardwareAppbar";
import HardwareRFIDTable from "../../Hardware/HardwareRFIDTable/HardwareRFIDTable";

import { Link } from "react-router-dom";

import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
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
              <b>FASTag Overview</b>
              <br />
            </Typography>
            <Paper className={classes.paper}>
              <HardwareAppbar />
              <HardwareRFIDTable />
            </Paper>
          </Grid>

          {/* <Grid item xs={12}>
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
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
}
