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
import { useSelector, useDispatch } from "react-redux";
import { Creators } from "../../store/ducks/categories";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "4rem",
    padding: theme.spacing(3, 2)
  }
}));

export const ListCategories = props => {
  const { categories, columns } = useSelector(state => state.categories);
  const [selectedRowData, setSelectedRowData] = useState("");
  const dispatch = useDispatch();
  const { push } = props.history;
  const classes = useStyles();
  const { deleteCategory } = Creators;

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    dispatch(deleteCategory(selectedRowData.id));
    handleClose();
  };

  return (
    <Header>
      <div className={classes.root}>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12} align="right">
            <Button variant="outlined" component={Link} to="/create-category">
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
                      setSelectedRowData(rowData);
                      // console.log(rowData.id);
                    }
                  }
                ]}
                title="Categorias"
                options={{
                  actionsColumnIndex: -1
                }}
                columns={columns}
                data={categories}
              />
              {/* Delete Dialog */}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  Você irá apagar a categoria
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Tem certeza que deseja apagar a categoria{" "}
                    {selectedRowData.nome}?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button size="small" onClick={handleClose} color="primary">
                    Cancelar
                  </Button>
                  <Button onClick={handleDelete} size="small">
                    Apagar
                  </Button>
                </DialogActions>
              </Dialog>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Header>
  );
};
