import { makeStyles } from "@material-ui/core/styles";
import shadows from "@material-ui/core/styles/shadows";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "276px",
    height: "483px",
    backgroundColor: "#F7FAFC",
    boxShadow: "#2C28281C"
  },
  container: {
    minHeight: "100vh", // height of the browser viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00BBDC",
    borderRadius: 50,
    width: "50%",
    marginLeft: "25%",
    "&:hover": {
      background: "#fff",
      color: "#00BBDC",
      border: "2px solid #00BBDC"
    }
  },
  forgotcheck:{
      display:"flex",
      justifyContent:"space-between"
  },
  textbox:{
    color:'#1717172E',
    backgroundColor:'black',
    "&:hover":{
        color:'#1717172E'
    }
  }
}));
