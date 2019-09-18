import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./login/Login";
import { Dashboard } from "./dashboard/Dashboard";
import { CreateCategory } from "./category/CreateCategory";
import { ListCategories } from "./category/ListCategories";
import { EditCategory } from "./category/EditCategory";
import { Register } from "./register/Register";
import { PageNotFound } from "./page-not-found/PageNotFound";

export const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create-category" component={CreateCategory} />
        <Route path="/list-categories" component={ListCategories} />
        <Route path="/edit-category" component={EditCategory} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};
