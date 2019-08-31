import React, { useState } from "react";
import { Header } from "../header/Header";
import { Paper, makeStyles, Button, Typography, Grid } from "@material-ui/core";
import MaterialTable from "material-table";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "4rem",
    padding: theme.spacing(3, 2)
  },
  buttonAdd: {
    marginBottom: "0.5rem"
  }
}));

export const List = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Sanlıurfa" }
      }
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      }
    ]
  });

  return (
    <Header>
      <Paper className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Button className={classes.buttonAdd} variant="outlined">
              ADICIONAR +
            </Button>
          </Grid>
        </Grid>
        <Paper>
          <MaterialTable
            title="Categorias"
            columns={state.columns}
            data={state.data}
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data.push(newData);
                    setState({ ...state, data });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data[data.indexOf(oldData)] = newData;
                    setState({ ...state, data });
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data.splice(data.indexOf(oldData), 1);
                    setState({ ...state, data });
                  }, 600);
                })
            }}
          />
        </Paper>
      </Paper>
    </Header>
  );
};
