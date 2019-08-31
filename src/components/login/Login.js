import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {},
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
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
      className={`${classes.grid} ${classes.root}`}
    >
      <Grid item>
        <h2>Connectronic</h2>
      </Grid>
      <Grid item>
        <label> email </label>
        <input />
      </Grid>
      <Grid item>
        <label> password </label>
        <input />
      </Grid>
      <Grid item>
        <Button
          color="primary"
          variant="inset"
          component={Link}
          to={"/dashboard"}
        >
          entrar
        </Button>
      </Grid>
    </Grid>
  );
};
