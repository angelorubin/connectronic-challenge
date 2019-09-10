import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Grid, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <Grid
      spacing={2}
      className={classes.root}
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <h2>React Redux MUI Panel</h2>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          id="email"
          label="email"
          className={classes.border}
          margin="dense"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          id="password"
          label="senha"
          className={classes.border}
          margin="dense"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to={"/dashboard"}
        >
          entrar
        </Button>
      </Grid>
    </Grid>
  );
};
