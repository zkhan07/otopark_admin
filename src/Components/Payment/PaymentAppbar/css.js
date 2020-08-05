import { makeStyles, fade } from "@material-ui/core/styles";
import { borderColor } from "@material-ui/system";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      backgroundColor: "#F7FAFC"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    height: "35px",
    backgroundColor: "#F7FAFC",
    boxShadow: "0px 3px 6px #1717172D",
    borderRadius: "5px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7FAFC"
  },
  inputRoot: {
    color: "black"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "100px"
    }
  },

  button: {
    textTransform: "none",
    marginLeft: "-20px !important",
    fontSize: "12px",
    marginLeft: "5px",
    // width: "120px",
    height: "38px",
    color: "#00BBDC",
    borderColor: "#00BBDC",
    borderRadius: "5px",
    "&:hover": {
      background: "#00BBDC",
      color: "#fff",
      border: "1px solid #00BBDC"
    }
  },
  dropdown: {
    backgroundColor: "#00BBDC",
    fontSize: "14px",
    color: "white",
    width: "180px",
    height: "35px",
    borderColor: "#00BBDC",
    boder: "1px solid #00BBDC",
    borderRadius: "50px",
    // border: "0px",
    outline: "0px"
  },
  scroll: {
    padding: "20px",
    // border : dotted "1px",
    whiteSpace: "nowrap",
    overflowX: "auto"
  }
}));
