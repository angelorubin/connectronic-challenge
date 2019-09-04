import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, TextField, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    margin: 0,
    width: "100vw",
    height: "100vh"
  },
  border: {
    borderColor: blue[50]
  }
});

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
        <h2>Connectronic</h2>
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
