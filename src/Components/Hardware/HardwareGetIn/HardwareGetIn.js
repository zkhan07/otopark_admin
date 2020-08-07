import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import HardwareTab from "../HardwareTab/HardwareTab";
import HardwarePrintList from "../HardwarePrintList/HardwarePrintList";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid black"
          }}
        >
          <Toolbar>
            <Avatar
              alt="Remy Sharp"
              src={require("../../../assets/images/profile.jpg")}
              className={classes.large}
            />
            <Typography
              variant="h7"
              style={{
                color: "black",
                textTransform: "none",
                padding: "10px"
              }}
            >
              Neha Dixit
            </Typography>
            <Typography variant="h6" className={classes.title}></Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <HardwareTab />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <HardwarePrintList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
