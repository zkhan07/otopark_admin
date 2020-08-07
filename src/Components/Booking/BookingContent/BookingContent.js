import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import DoughnutChart from "../userDoughnutChart/UserDoughnutChart";
// import Card from "../UserCard/UserCard";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import BookingBarChart from "../BookingBarChart/BookingBarChart";
import BookingAppbar from "../BookingAppbar/BookingAppbar";
import BookingTable from "../BookingTable/BookingTable";
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
  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9"
    }
  }))(Tooltip);

  return (
    <div>
      <div className={classes.root}>
        <Typography
          variant="h4"
          component="h1"
          style={{ padding: "10px", color: "#1D1D1D" }}
        >
          <br />
          <b>Booking Overview</b>
          <br />
          <br />
        </Typography>
        <Grid container spacing={1}>
          <Grid item sm={12}>
            <Paper className={classes.paper}>
              <BookingBarChart />
            </Paper>
          </Grid>
          {/* card */}
          <Grid container spacing={1}>
            <Grid item xs={12} sm={8} style={{ marginTop: "90px" }}>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={3}>
                  <Typography
                    align="center"
                    variant="body2"
                    component="p"
                    className={classes.title}
                  >
                    Total Bookings
                    <br />
                    <HtmlTooltip
                      title={
                        <React.Fragment>
                          <Typography variant="h7" color="inherit">
                            Total parking listings booked by Guests
                          </Typography>
                        </React.Fragment>
                      }
                    >
                      <IconButton aria-label="discription">
                        <img
                          src={require("../../../assets/icons/question-markIcon.svg")}
                        />
                      </IconButton>
                    </HtmlTooltip>
                  </Typography>
                  <MuiThemeProvider theme={theme}>
                    <Typography
                      align="center"
                      variant="h2"
                      component="h2"
                      className={classes.subtTitle}
                      className={classes.verticalBar}
                    >
                      <b>87</b>
                    </Typography>
                  </MuiThemeProvider>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography
                    align="center"
                    variant="body2"
                    component="p"
                    className={classes.title}
                  >
                    Awaiting Confirmation
                    <HtmlTooltip
                      title={
                        <React.Fragment>
                          <Typography variant="h7" color="inherit">
                            Total pending bookings made by Guests that are
                            awaiting confirmation by Hosts
                          </Typography>
                        </React.Fragment>
                      }
                    >
                      <IconButton aria-label="discription">
                        <img
                          src={require("../../../assets/icons/question-markIcon.svg")}
                        />
                      </IconButton>
                    </HtmlTooltip>
                  </Typography>
                  <Typography
                    align="center"
                    variant="h2"
                    component="h2"
                    className={classes.subtTitle}
                    className={classes.verticalBar}
                    style={{ color: "#00BBDC" }}
                  >
                    <b>117</b>
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <Typography
                    align="center"
                    variant="body2"
                    component="p"
                    className={classes.title}
                  >
                    Upcoming Bookings
                    <HtmlTooltip
                      title={
                        <React.Fragment>
                          <Typography variant="h7" color="inherit">
                            Total bookings confirmed in advance by Hosts
                          </Typography>
                        </React.Fragment>
                      }
                    >
                      <IconButton aria-label="discription">
                        <img
                          src={require("../../../assets/icons/question-markIcon.svg")}
                        />
                      </IconButton>
                    </HtmlTooltip>
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
                <Grid item xs={6} sm={3}>
                  <Typography
                    align="center"
                    variant="body2"
                    component="p"
                    className={classes.title}
                  >
                    Completed Bookings
                    <HtmlTooltip
                      title={
                        <React.Fragment>
                          <Typography variant="h7" color="inherit">
                            Total bookings successfully completed with payment
                            settled
                          </Typography>
                        </React.Fragment>
                      }
                    >
                      <IconButton aria-label="discription">
                        <img
                          src={require("../../../assets/icons/question-markIcon.svg")}
                        />
                      </IconButton>
                    </HtmlTooltip>
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
            </Grid>
          </Grid>
          {/* card end */}

          <Grid item xs={12}>
            <br />
            <br />
            <Paper className={classes.paper}>
              <BookingAppbar />
              <BookingTable />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
