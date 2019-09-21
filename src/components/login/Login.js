import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Grid,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
  CircularProgress,
  Snackbar,
  IconButton,
  Grow
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogin } from "../../store/ducks/login";

import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
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
  },
  snackBar: {
    backgroundColor: red[500]
  }
}));

export const Login = () => {
  const [open, setOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const { loading, snackbar, token, user } = useSelector(state => state.login);
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === "email") {
      setUserEmail(e.target.value);
      // console.log(email);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
      // console.log(password);
    }
  };

  const handleClick = () => {
    dispatch(fetchLogin());
    setOpen(snackbar);
    setUserEmail("");
    setPassword("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Grid className={classes.container}>
        <Grid className={classes.item}>
          {token ? <p>token: {user.data}</p> : null}
        </Grid>
        <Grid className={classes.item}>
          {loading ? <CircularProgress className={classes.progress} /> : null}
        </Grid>
        <Grid className={classes.item}>
          <Typography variant="h4">My Login</Typography>
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
            value={userEmail}
            onChange={handleChange}
          />
        </Grid>
        <Grid className={classes.item}>
          <TextField
            type="password"
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
            Login
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
      <Snackbar
        autoHideDuration={3000}
        variant="error"
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Grow}
        message={<span id="message-id">email/password incorreto</span>}
      />
    </>
  );
};
