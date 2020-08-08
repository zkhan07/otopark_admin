import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HardwareAppbar from "../HardwareAppbar/HardwareAppbar";
import HardwareRFIDTable from "../HardwareRFIDTable/HardwareRFIDTable";
import TicketDispenser from "../TicketDispenserTable/TicketDispenserTable";
import HardwareTable from "../HardwareTable/HardwareTable";
import { Link } from "react-router-dom";

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
          <Grid item sm={4}>
            <Button className={classes.button} variant="outlined">
              <img
                className={classes.image}
                src={require("../../../assets/icons/hardwareCCTVIcon.svg")}
                style={{ width: "25px", height: "25px", marginLeft: "-180px" }}
              />
              <b style={{ marginLeft: "20px" }}>CCTV</b>
            </Button>
            <br />
            <br />
            <Button className={classes.button} variant="outlined">
              <img
                className={classes.image}
                src={require("../../../assets/icons/hardwarePrinterIcon.svg")}
                style={{ width: "25px", height: "25px", marginLeft: "-170px" }}
              />
              <b style={{ marginLeft: "20px" }}>Printer</b>
            </Button>
            <br />
            <br />
            <Link to="/otopark/rfid" style={{ textDecoration: "none" }}>
              <Button className={classes.button} variant="outlined">
                <img
                  className={classes.image}
                  src={require("../../../assets/icons/hardwareRFIDIcon.svg")}
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "-185px"
                  }}
                />
                <b style={{ marginLeft: "20px" }}>RFID</b>
              </Button>
            </Link>
            <br />
            <br />
            <Link
              to="/otopark/ticketdispenser"
              style={{ textDecoration: "none" }}
            >
              <Button className={classes.button} variant="outlined">
                <img
                  className={classes.image}
                  src={require("../../../assets/icons/hardwareTicketDispenserIcon.svg")}
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "-115px"
                  }}
                />
                <b style={{ marginLeft: "20px" }}>Ticket Dispenser</b>
              </Button>
            </Link>
            <br />
            <br />
            <Button className={classes.button} variant="outlined">
              <img
                className={classes.image}
                src={require("../../../assets/icons/hardwareANPRIcon.svg")}
                style={{ width: "25px", height: "25px", marginLeft: "-180px" }}
              />
              <b style={{ marginLeft: "20px" }}>ANPR</b>
            </Button>
          </Grid>
          <Grid item sm={8}>
            <img
              className={classes.image}
              src={require("../../../assets/images/hardwarePageImg.svg")}
            />
          </Grid>
          <Grid item xs={12}>
            <br />
            <br />
            <br />
            <br />

            <Paper className={classes.paper}>
              <HardwareTable />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
