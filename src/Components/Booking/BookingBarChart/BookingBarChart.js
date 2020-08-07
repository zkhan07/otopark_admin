import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "chartjs-top-round-bar";
import { useStyles } from "./css";

export default function BarChart() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const bar = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "july",
      "August"
    ],
    datasets: [
      {
        label: "Bookings",
        backgroundColor: "#00BBDC",
        borderColor: "#00BBDC",
        barThickness: 30,
        hoverBackgroundColor: "white",
        hoverBorderColor: "white",
        data: [100, 70, 65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  const options = {
    // cornerRadius: 20,
    // barRoundness: 10,
    tooltips: {
      enabled: true
      // custom: CustomTooltips
    },
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          display: true
        }
      ],
      yAxes: [
        {
          display: true
        }
      ]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#26272A",
        color: "white",
        borderRadius: "10px"
      }}
    >
      <div className={classes.root}>
        <Toolbar>
          <Typography
            align="left"
            variant="h7"
            style={{ flex: 1 }}
            className={classes.discription}
          >
            Overview
          </Typography>
          <div>
            <select className={classes.dropdown}>
              <option style={{ padding: "20px !important" }}>7 Days</option>
              <option selected>1 Month</option>
              <option>3 Month</option>
              <option>6 Month</option>
              <option>1 Year</option>
              <option>All</option>
            </select>
          </div>
        </Toolbar>
        <Typography align="left" variant="h5" className={classes.title}>
          Awaiting Confirmation
        </Typography>
      </div>
      <Bar data={bar} options={options} height={100} topBorderRadius={150} />
    </div>
  );
}
