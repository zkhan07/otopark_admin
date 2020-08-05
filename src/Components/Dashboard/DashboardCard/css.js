import { makeStyles } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 200,
    height: "120px",
    paddingBottom: "10px",
    borderRadius: "10px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginTop: "-15px",
    fontSize: 12,
    color: "#2D2D2D"
  },
  content: {
    display: " flex",
    justifyContent: "space-between",
    marginTop: "-25px",
    fontSize: 54,
    color: "#2D2D2D"
  },
  image: {
    marginTop: "-25px",
    marginLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "150px"
    }
  },
  number: {
    marginTop: "-10px",
    fontSize: 12,
    color: "#2D2D2D"
  },
  discription: {
    marginLeft: "5px",
    marginTop: "0px",
    fontSize: 12,
    color: "#2D2D2D"
  },

  pos: {
    marginBottom: 12
  }
}));
