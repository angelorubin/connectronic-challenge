import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard";
import { List } from "../components/list/List";
import { Login } from "./login/Login";
// import { UsersList } from "./user/UsersList";

export const Root = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/list" component={List} />
      <Route path="/users-list" component={null} />
    </Router>
  );
};
