import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  vehicleImg: {
    marginLeft: "20px",
    width: "40px",
    height: "40px",
    border: "2px solid black",
    padding: "10px",
    borderRadius: "5px"
  },
  vehicleNaming: {
    marginLeft: "20px",
    color: "#000000",
    fontSize: "12px"
  }
}));
