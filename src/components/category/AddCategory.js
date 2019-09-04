import React from "react";
import {
  Grid,
  Icon,
  Typography,
  TextField,
  Paper,
  Button,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Header } from "../header/Header";

const useStyles = makeStyles({
  root: {
    marginTop: "4rem",
    padding: "2rem"
  },
  containerButton: {
    display: "flex",
    width: "100%"
  },
  itemButton: {
    marginRight: "auto"
  }
});

export const AddCategory = () => {
  const classes = useStyles();
  return (
    <Header>
      <Paper className={classes.root}>
        <Grid
          container
          spacing="3"
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Icon fontSize="large" color="primary">
              add_circle
            </Icon>
          </Grid>

          <Grid item xs={12}>
            <Typography variant={"h6"}>Criar Categoria</Typography>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                autoFocus
                margin="dense"
                id="name"
                label="Nome"
                type="text"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="dense"
                id="description"
                label="Descrição"
                type="text"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs>
              <Button variant="outlined" component={Link} to="/list-categories">
                Voltar
              </Button>
            </Grid>
            <Grid item justify="flex-end">
              <Button variant="outlined" onClick={""}>
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Header>
  );
};
