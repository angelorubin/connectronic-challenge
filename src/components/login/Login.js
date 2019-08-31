import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, makeStyles, InputLabel } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    backgroundColor: blue[300]
  },
  divider: {
    marginTop: 1,
    color: "red",
    width: "10vw"
  },
  grid: {
    minHeight: "100vh"
  }
});

export const Login = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={`${classes.grid} ${classes.root}`}
    >
      <Grid item>
        <h2>Login</h2>
      </Grid>
      <Grid item>
        <InputLabel>email</InputLabel>
        <input />
      </Grid>
      <label>password</label>
      <input />
      <br />
      <Button>
        <Link to={"/dashboard"}>Logar</Link>
      </Button>
    </Grid>
  );
};
