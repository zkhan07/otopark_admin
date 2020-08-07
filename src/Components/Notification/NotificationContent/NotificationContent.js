import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NotificationAppbar from "../NotificationAppbar/NotificationAppbar";
import NotificationTable from "../NotificationTable/NotificationTable";
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
          <b>Notification Overview</b>
          <br />
        </Typography>
        <br />
        <Grid container spacing={1}>
          <Grid item xs={12}></Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <NotificationAppbar />
              <NotificationTable />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
