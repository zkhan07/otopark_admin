import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
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
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

import { useStyles } from "./css";

export default function LineChart(props) {
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

  const line = {
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
        label: "Total Hosts",
        borderWidth: 4,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 20, 10, 35, 45, 30, 40, 10, 15, 20, 30, 60]
      }
    ]
  };

  const options = {
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
    <div>
      <div className={classes.root}>
        <Toolbar>
          <MuiThemeProvider theme={theme}>
            <Typography
              align="left"
              variant="h7"
              style={{ flex: 1, color: "#8898AA" }}
            >
              OVERVIEW
            </Typography>
          </MuiThemeProvider>

          {/* <div>
            <FormControl
              // variant="outlined"
              // className={classes.formControl}
              className={classes.dropdown}
            >
              <Select
                // style={{ color: "white" }}
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple"
                }}
              >
                <option value={10}>7 Days</option>
                <option value={20}>1 Month</option>
                <option value={30}>3 Month</option>
                <option value={40}>6 Month</option>
                <option value={50}>1 Year</option>
                <option value={60}>All</option>
              </Select>
            </FormControl>
          </div> */}

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
            style={{ marginTop: "-20px", marginLeft: "20px", color: "#1D1D1D" }}
          >
            <b>{props.header}</b>
          </Typography>
        </MuiThemeProvider>
      </div>
      <br />
      <Line data={line} options={options} />
    </div>
  );
}
