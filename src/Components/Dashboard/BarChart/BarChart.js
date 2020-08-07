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
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./css";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

export default function BarChart() {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
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
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Bookings",
        backgroundColor: "#00BBDC",
        borderColor: "#00BBDC",
        barThickness: 30,
        hoverBackgroundColor: "white",
        hoverBorderColor: "white",
        data: [90, 60, 80, 50, 100, 70, 65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  const options = {
    cornerRadius: 20,
    // Chart.defaults.global.elements.rectangle.borderWidth = 2;

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
          <MuiThemeProvider theme={theme}>
            <Typography align="left" variant="h7" style={{ flex: 1 }}>
              OVERVIEW
            </Typography>
          </MuiThemeProvider>
          <div>
            <select className={classes.dropdown}>
              <option>7 Days</option>
              <option selected>1 Month</option>
              <option>3 Month</option>
              <option>6 Month</option>
              <option>1 Year</option>
              <option>All</option>
            </select>
          </div>
        </Toolbar>
        <MuiThemeProvider theme={theme}>
          <Typography
            align="left"
            variant="h4"
            // component="h2"
            style={{ marginLeft: "20px", marginTop: "-15px" }}
          >
            Bookings
          </Typography>
        </MuiThemeProvider>
      </div>
      <Bar data={bar} options={options} height={100} />
    </div>
  );
}
