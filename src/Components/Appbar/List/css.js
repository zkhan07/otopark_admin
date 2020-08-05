import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  linkstyleprimary: {
    textDecoration: "none",
    backgroundColor: "#00BBDC",
    color: "white",
    "&:focus": {
      backgroundColor: "#00BBDC"
    }
  },
  linkstylesecondary: {
    backgroundColor: "#00BBDC",
    color: "white"
  }
}));
