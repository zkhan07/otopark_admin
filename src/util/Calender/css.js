import { makeStyles, fade } from "@material-ui/core/styles";
import { borderColor } from "@material-ui/system";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  calender: {
    backgroundColor: "#00BBDC",
    fontSize: "14px",
    color: "white",
    width: "200px",
    height: "42px",
    borderColor: "#00BBDC",
    boder: "1px solid #00BBDC",
    borderRadius: "50px",
    // border: "0px",
    outline: "0px",
    padding: "10px"
  },
  imageIcon: {
    width: "25px",
    height: "25px"
  }
}));
