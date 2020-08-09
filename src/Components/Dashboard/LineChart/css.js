import { makeStyles } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  dropdown: {
    backgroundColor: "#00BBDC",
    color: "white",
    width: "120px",
    height: "40px",
    borderColor: "#00BBDC",
    boder: "1px solid #00BBDC",
    borderRadius: "50px",
    // border: "0px",
    outline: "0px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      // width: "40",
      height: "35px"
    }
  }

  // select: {
  //   margin: "50px",
  //   width: "150px",
  //   height: "50px",
  //   padding: " 5px 35px 5px 5px",
  //   fontSize: "16px",
  //   // border: "1px solid #CCC",

  //   webkitAppearance: "none",
  //   mozAppearance: "none",
  //   appearance: "none"
  // }

  // select::-ms-expand {
  //     display: none
  // },
}));
