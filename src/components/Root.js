import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./login/Login";
import { Dashboard } from "./dashboard/Dashboard";
import { ListCategories } from "../components/category/ListCategories";

export const Root = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/list-categories" component={ListCategories} />
    </Router>
  );
};
