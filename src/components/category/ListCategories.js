import React, { useState } from "react";
import MaterialTable from "material-table";
import { Header } from "../header/Header";
import { Link } from "react-router-dom";
import {
  Paper,
  makeStyles,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Icon
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "4rem",
    padding: theme.spacing(3, 2)
  }
}));

export const ListCategories = props => {
  const categories = useSelector(state => state.categories);
  const { push } = props.history;
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Header>
      <Paper className={classes.root}>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12} align="right">
            <Button variant="outlined" component={Link} to="/add-category">
              Adicionar <Icon>add</Icon>
            </Button>
          </Grid>
          <Grid item>
            <Paper>
              <MaterialTable
                actions={[
                  {
                    icon: "edit",
                    tooltip: "Edit",
                    onClick: (event, rowData) => {
                      push({
                        pathname: "/edit-category",
                        state: rowData
                      });
                    }
                  },
                  {
                    icon: "delete",
                    tooltip: "Delete",
                    onClick: (event, rowData) => {
                      setOpen(true);
                    }
                  }
                ]}
                title="Categorias"
                options={{
                  actionsColumnIndex: -1
                }}
                columns={categories.columns}
                data={categories.data}
              />
              {/* Delete Dialog */}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  Você irá apagar uma categoria
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Tem certeza que deseja apagá-la?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button size="small" onClick={handleClose} color="primary">
                    Cancelar
                  </Button>
                  <Button onClick={handleClose} size="small">
                    Apagar
                  </Button>
                </DialogActions>
              </Dialog>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Header>
  );
};
