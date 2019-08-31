import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Alert } from "reactstrap";
import { UserEdit } from "./UserEdit";
import { ADD_USER } from "../../constants/actionTypes";

const styles = {
  root: {
    margin: "1rem"
  },
  alert: {
    margin: "1rem"
  },
  title: {
    margin: "1.5rem 0 2rem 0"
  }
};

export const UsersList = () => {
  const { users } = useSelector(state => state.users);
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    /*
    dispatch({
      type: ADD_USER,
      user: {
        id: Math.random(),
        fullname: "suzana gonzalez rubin",
        email: "suzanarubin@gmail.com",
        telephone: "(19) 3527-2118",
        cellphone: "(19) 99187-2093"
      }
    });
    */
  }, []);

  const fetchData = () => {
    // setLoading(true);
  };

  return users.length > 0 ? (
    <div style={styles.root}>
      <h4 style={styles.title}>Listagem de usuários</h4>
      <Table size="sm" dark style={styles.table} responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>email</th>
            <th>telefone</th>
            <th>celular</th>
            <th>website</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>{user.cellphone}</td>
                <td>
                  <a
                    target="_blank"
                    href={user.website}
                    rel="noopener noreferrer"
                  >
                    {user.website}
                  </a>
                </td>
                <td>
                  <UserEdit userId={user.id} users={users} onClick={""} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  ) : (
    <Alert color="light">Nenhum usuário registrado.</Alert>
  );
};
