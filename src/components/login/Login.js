import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Grid,
  Button,
  TextField,
  Paper,
  Container,
  Typography,
  Link as MuiLink
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    margin: "0.8rem"
  }
}));

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleChange = e => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      console.log(email);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
      console.log(password);
    }
  };

  const handleClick = e => {
    console.log(email, password);
  };

  return (
    <Grid className={classes.container}>
      <Grid className={classes.item}>
        <Typography variant="h4">Login</Typography>
      </Grid>
      <Grid className={classes.item}>
        <TextField
          fullWidth
          name="email"
          id="email"
          label="email"
          className={classes.border}
          margin="dense"
          variant="outlined"
          value={email}
          onChange={handleChange}
        />
      </Grid>
      <Grid className={classes.item}>
        <TextField
          id="password"
          name="password"
          label="password"
          className={classes.border}
          margin="dense"
          variant="outlined"
          value={password}
          onChange={handleChange}
        />
      </Grid>
      <Grid className={classes.item}>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          onClick={handleClick}
        >
          Sign In
        </Button>
      </Grid>
      <Grid className={classes.item}>
        <Typography>
          <Link to="/register">register</Link>
        </Typography>
      </Grid>
      <Grid className={classes.item}>
        <Typography>
          <Link to="/lost-password">lost password?</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
