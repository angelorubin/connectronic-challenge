import React, { useState } from "react";
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
    minHeight: "auto",
    padding: "2rem"
  }
});

export const EditCategory = props => {
  const { nome, descricao } = props.location.state;
  const classes = useStyles();

  return (
    <Header>
      <Paper className={classes.root}>
        <Grid
          container
          spacing="2"
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Icon fontSize="large" color="primary">
              add_circle
            </Icon>
          </Grid>

          <Grid item>
            <Typography variant={"h6"}>Editar Categoria</Typography>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nome"
                type="text"
                value={nome}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Descrição"
                type="text"
                value={descricao}
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs item>
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
