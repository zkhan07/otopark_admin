import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { useStyles } from "./css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     width: "100%",
//     backgroundColor: theme.palette.background.paper
//   }
// }));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h2 align="left" style={{ color: "#1D1D1D", marginLeft: "20px" }}>
        <b>Get In</b>
      </h2>
      <h3 align="left" style={{ color: "#00BBDC", marginLeft: "20px" }}>
        <b>Select a Vehicle</b>
      </h3>
      <Grid container spacing={3}>
        <Grid item xs={3} sm>
          <img
            className={classes.vehicleImg}
            src={require("../../../assets/images/getInBikeImg.svg")}
          />
          <br />
          <b className={classes.vehicleNaming}>2-Wheeler</b>
        </Grid>
        <Grid item xs={3} sm>
          <img
            className={classes.vehicleImg}
            src={require("../../../assets/images/getInAutoImg.svg")}
          />
          <br />
          <b className={classes.vehicleNaming}>3-Wheeler</b>
        </Grid>
        <Grid item xs={3} sm>
          <img
            className={classes.vehicleImg}
            style={{ backgroundColor: "#00BBDC", border: "1px solid #00BBDC" }}
            src={require("../../../assets/images/getInCarImg.svg")}
          />
          <br />
          <b className={classes.vehicleNaming}>4-Wheeler</b>
        </Grid>
        <Grid item xs={3} sm>
          <img
            className={classes.vehicleImg}
            src={require("../../../assets/images/getInECarImg.svg")}
          />
          <br />
          <b className={classes.vehicleNaming}>E-4-Wheeler</b>
        </Grid>
        <Grid item xs={3} sm>
          <img
            className={classes.vehicleImg}
            src={require("../../../assets/images/getInTruckImg.svg")}
          />
          <br />
          <b className={classes.vehicleNaming}>4-Wheeler Heavy</b>
        </Grid>
      </Grid>
      <br />
      <br />
      <div
        style={{
          borderBottom: "1px solid #2D2D2D26"
        }}
      ></div>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <form
            style={{ marginLeft: "20px" }}
            className={classes.root}
            noValidate
            autoComplete="off"
            align="left"
          >
            {/* <b>Vehical Number</b>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="MH 04 DW 4092"
            /> */}
            <br />
            <br />
            <br />
            <br />
            <b>Vehical Owner Number</b>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="1234566789"
            />
          </form>
        </Grid>
      </Grid>
      <br />
      <br />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          textColor="primary"
          // variant="scrollable"
          variant="fullWidth"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            style={{
              backgroundColor: "#00BBDC",
              color: "#fff"
            }}
            label="Get In"
          />
          <Tab
            style={{
              backgroundColor: "#fff",
              color: "#878787",
              height: "20px",
              borderRight: "1px solid #2D2D2D26"
            }}
            label="Get Out"
          />
          <Tab
            style={{
              backgroundColor: "#fff",
              color: "#878787"
            }}
            label="More"
          />
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </div>
  );
}
