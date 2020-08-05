import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./css";
import { useForm, Controller } from "react-hook-form";
import { Router } from "react-router-dom";

export const baseUrl = "/otopark/";

export default function SignIn() {
  const history = useHistory();
  const classes = useStyles();
  const { handleSubmit, reset, watch, control, register } = useForm();
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = data => {
    console.log(data);
    if (data.password && data.email) {
      history.push(baseUrl + "dashboard");
      setRedirect(true);
    } else {
      setError(true);
    }
  };

  // if(Redirect){

  // }

  return (
    <>
      <div
        style={{
          // padding:'40px',
          height: "100vh",
          backgroundColor: "#00BBDC",
          backgroundImage: require("../../assets/images/LoginPageImg.svg")
        }}
      >
        <Container component="main" maxWidth="xs" className={classes.container}>
          <Card className={classes.root}>
            <CardContent>
              <CssBaseline />

              <div className={classes.paper}>
                <Typography component="h5" variant="h5">
                  <b>Otopark Super Admin</b>
                </Typography>
                <Typography component="h9" variant="h9">
                  Welcome back! Please login to continue
                </Typography>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <TextField
                    size="small"
                    style={{
                      backgroundColor: "#fff",
                      color: "1px solid #1717172E"
                    }}
                    inputRef={register}
                    className="textbox"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Username or email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    style={{ backgroundColor: "#fff" }}
                    size="small"
                    inputRef={register}
                    className="textbox"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  {/* new */}
                  <div className={classes.forgotcheck}>
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            inputRef={register}
                            value="remember"
                            name="checkbox"
                            color="grey"
                          />
                        }
                        label="Remember me"
                      />
                    </div>
                    <div align="right">
                      <Link
                        href="#"
                        variant="body2"
                        style={{ color: "#172B4D" }}
                      >
                        <p>Forgot password?</p>
                      </Link>
                    </div>
                  </div>
                  {/* new */}

                  <Grid container>
                    <Grid item xs>
                      <Button
                        align="center"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Sign In
                      </Button>
                      <br />
                      <div align="center">
                        Now to Product?
                        <Link
                          href="#"
                          variant="body2"
                          style={{ color: "#00BBDC" }}
                        >
                          {"Sign Up"}
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </CardContent>
          </Card>
        </Container>
        <footer
          style={{
            height: "300px",
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            backgroundColor: "#00BBDC"
          }}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src={require("../../assets/images/mumbai.png")}
          />
        </footer>
      </div>
    </>
  );
}
