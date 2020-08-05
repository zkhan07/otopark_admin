import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import { useStyles } from "./css";

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Total Host
          <Tooltip title="File in pdf">
            <IconButton aria-label="delete">
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
        </Typography>
        <Typography variant="h5" component="h2">
          87
          <Divider orientation="vertical" flexIte />
          87
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          +3.54% Since last month
        </Typography>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
    </Card>
  );
}
