import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Calender from "../../../util/Calender/Calender";
import { useStyles } from "./css";

export default function PrimarySearchAppBar() {
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

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ display: "flex", backgroundColor: "white" }}
      >
        <Toolbar className={classes.scroll}>
          <Calender />
          {/* <div
            style={{
              backgroundColor: "#00BBDC",
              borderRadius: "50px",
              padding: "5px"
            }}
          >
            <img
              width="25px"
              height="25px"
              style={{ marginBottom: "-10px" }}
              src={require("../../../assets/icons/whiteBookingIcon.svg")}
            />
            <select className={classes.dropdown}>
              <option selected>january 1,2020 - oct 5,2023</option>
              <option>january 2,2020 - oct 5,2023</option>
              <option>january 3,2020 - oct 5,2023</option>
              <option>january 4,2020 - oct 5,2023</option>
              <option>january 5,2020 - oct 5,2023</option>
              <option>january 6,2020 - oct 5,2023</option>
            </select>
          </div> */}

          <div>
            <Button
              className={classes.button}
              variant="contained"
              style={{ backgroundColor: "#00BBDC", color: "white" }}
            >
              All Users
            </Button>
            <Button className={classes.button} variant="outlined">
              Active Users
            </Button>
            <Button className={classes.button} variant="outlined">
              Inactive Users
            </Button>
            <Button className={classes.button} variant="outlined">
              Host Users
            </Button>
            <Button className={classes.button} variant="outlined">
              Guest Users
            </Button>
          </div>
          {/* Search Bar */}
          <div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: "grey" }} />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          {/* search bar end */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
