import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStyles } from "./css";

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9"
    }
  }))(Tooltip);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} component="p">
          <b>{props.header}</b>
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography variant="h7" color="inherit">
                  {props.tooltipTitle}
                </Typography>
              </React.Fragment>
            }
          >
            <IconButton aria-label="discription">
              <img className={classes.image1} src={props.icon} />
            </IconButton>
          </HtmlTooltip>
        </Typography>
        <div className={classes.content}>
          {props.content}
          <img src={props.image} />
        </div>
        <Typography
          className={classes.discription}
          color="textSecondary"
          align="justify-content-between"
        >
          <div>
            {props.number}
            {props.discription}
          </div>
        </Typography>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
    </Card>
  );
}
