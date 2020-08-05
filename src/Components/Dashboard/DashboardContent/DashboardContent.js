import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PieChart from "../PieChart/PieChart";
import LineChart from "../LineChart/LineChart";
import BarChart from "../BarChart/BarChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import DashboardCard from "../DashboardCard/DashboardCard";
import growupImg from "../../../assets/images/growupImg.svg";
import growdownImg from "../../../assets/images/growdownImg.svg";
import growImg from "../../../assets/images/growImg.svg";
import question from "../../../assets/icons/question-markIcon.svg";

import { useStyles } from "./css";

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.image}>
      <div className={classes.root}>
        <br />
        <Typography variant="h4" component="h1" style={{ color: "white" }}>
          <b>Dashboard</b>
        </Typography>
        <br />
        {/* start */}
        <Grid container spacing={1}>
          <Grid item xs={12} sm>
            <DashboardCard
              header="Total Hosts"
              tooltipTitle="Total number of users that have or intend to share their parking space"
              icon={question}
              content="87"
              image={growupImg}
              number="+3.54% "
              discription="Since last month"
            />
          </Grid>
          <Grid item xs={12} sm>
            <DashboardCard
              header="Total Guests"
              tooltipTitle="Total number of users who have booked or intend to book parking space(s)"
              icon={question}
              content="117"
              image={growdownImg}
              number="-3.48% "
              discription="Since last month"
            />
          </Grid>
          <Grid item xs={12} sm>
            <DashboardCard
              header="Total Registration"
              tooltipTitle="Total number of users who registered on the app "
              icon={question}
              content="87"
              image={growupImg}
              number="+3.54% "
              discription="Since last month"
            />
          </Grid>
          <Grid item xs={12} sm>
            <DashboardCard
              header="Active Listings"
              tooltipTitle="Total number of parking spaces available to book or being booked"
              icon={question}
              content="98"
              image={growupImg}
              number="-3.48% "
              discription="Since last month"
            />
          </Grid>
          <Grid item xs={12} sm>
            <DashboardCard
              header="Total Support Active"
              tooltipTitle="Total support requests from users to resolve"
              icon={question}
              content="17"
              image={growImg}
              // number="-3.48% "
              // discription="Since last month"
            />
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <Paper className={classes.paper}>
              <LineChart header="Total Hosts" />
            </Paper>
          </Grid>
          <Grid item sm={6}>
            <Paper className={classes.paper}>
              <LineChart header="Total Guests" />
            </Paper>
          </Grid>

          <Grid item lg={12} sm={6}>
            <Paper className={classes.paper}>
              <BarChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
