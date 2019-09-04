import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./login/Login";
import { Dashboard } from "./dashboard/Dashboard";
import { AddCategory } from "./category/AddCategory";
import { ListCategories } from "./category/ListCategories";
import { EditCategory } from "./category/EditCategory";

export const Root = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/add-category" component={AddCategory} />
      <Route path="/list-categories" component={ListCategories} />
      <Route path="/edit-category" component={EditCategory} />
    </Router>
  );
};
