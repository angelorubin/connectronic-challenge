import React from "react";
import { Header } from "../header/Header";
import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "3rem",
    border: "1px sold green"
  },
  paper: {
    padding: "1rem",
    height: "20vh"
  }
});

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <Header>
      <Grid className={classes.root} container spacing={3}>
        <Grid item xs={9}>
          <Paper className={classes.paper}>content</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>content</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>content</Paper>
        </Grid>
      </Grid>
    </Header>
  );

  /*
  const id = 2;
  const { users } = useSelector(state => state.users);
  const user = users.filter(user => user.id === id);
  console.log(user);
  

  const dispatch = useDispatch();

  const newUser = [
    {
      id: 3,
      fullname: "suzana rubin",
      cellphone: "(19) 99187-2093",
      email: "angelorubin@gmail.com",
      telephone: "(19) 3527-2118",
      website: "https://www.suzanarubin.com.br"
    }
  ];

  useEffect(() => {
    dispatch({
      type: "ADD_USER",
      user: {
        id: 3,
        fullname: "suzana rubin",
        email: "suzanarubin@gmail.com",
        telephone: "(19) 3527-2118",
        cellphone: "(19) 99187-2093"
      }
    });
  }, []);

  
  useEffect(() => {
    return addUser(newUser);
  }, []);

  
  addUser({ id: 3 });

  // const { posts } = props.state.posts;

  // addUser({ type: ADD_USER, users: { id: 3 } });

  // const users = useSelector(state => state.userReducer.users);

  // console.log(users);

  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      user: {
        id: 3,
        fullname: "suzana rubin",
        email: "suzanarubin@gmail.com",
        telephone: "(19) 3527-2118",
        cellphone: "(19) 99187-2093"
      }
    });
  }, []);
  */
};
