import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px"
    }
  },
  paper: {
    borderRadius: "10px",
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  image: {
    backgroundColor: "#00BBDC",
    backgroundImage: require("../../../assets/images/mumbai.png")
    // opacity: "0.8",
    // backgroundColor: "#00BBDC"

    // background: `#00BBDC ${require("../../../assets/images/mumbai.png")} no-repeat right top`
  }
}));
