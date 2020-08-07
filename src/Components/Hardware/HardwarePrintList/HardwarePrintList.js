import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            style={{ backgroundColor: "#00BBDC", color: "white" }}
          >
            Total Amount : 2,5000.50
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <form
            style={{ marginLeft: "20px" }}
            className={classes.root}
            noValidate
            autoComplete="off"
            align="left"
          >
            <b>Vehical Number</b>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="MH 04 DW 4092"
            />
            <br />
            <br />
            <b>Vehical Owner Name</b>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="Zaid Khan"
            />
          </form>
        </Grid>
        <Grid item xs={6} sm={6}>
          <form
            style={{ marginLeft: "20px" }}
            className={classes.root}
            noValidate
            autoComplete="off"
            align="left"
          >
            <b>Vehical Number</b>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="MH 04 DW 4092"
            />
            <br />
            <br />
            <b>Vehical Owner Name</b>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="Zaid Khan"
            />
          </form>
        </Grid>
        {/* 2nd */}
        <Grid item xs={6} sm={6}>
          <h4>Custom Parking Price</h4>
          <form
            style={{ marginLeft: "20px" }}
            className={classes.root}
            noValidate
            autoComplete="off"
            align="left"
          >
            <b>Vehical Number</b>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="MH 04 DW 4092"
            />
            <br />
            <br />
            <b>Vehical Owner Name</b>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="Zaid Khan"
            />
          </form>
        </Grid>
        <Grid item xs={6} sm={6}>
          <br />
          <br />
          <br />

          <form
            style={{ marginLeft: "20px" }}
            className={classes.root}
            noValidate
            autoComplete="off"
            align="left"
          >
            <b>Vehical Number1</b>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="MH 04 DW 4092"
            />
            <br />
            <br />
            <b>Vehical Owner Name</b>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="Zaid Khan"
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
