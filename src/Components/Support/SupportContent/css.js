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
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    color: "#1D1D1D",
    fontSize: 16,
    fontWeight: "bold"
    // font:" bold 20px Lato"
  },
  subTitle: {
    fontSize: "80px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px"
    },
    fontWeight: "bold"
  },
  verticalBar: {
    marginTop: "-20px",
    height: "120px",
    borderRight: "3px solid #959595",
    padding: "0.5em",
    [theme.breakpoints.down("sm")]: {
      height: "80px"
    }
  }
}));
