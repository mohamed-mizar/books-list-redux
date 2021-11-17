import React from "react";
import { Switch, Route } from "react-router";

import Books from "./Components/Books/Books";
import Authors from "./Components/Authors/Authors";
import Categories from "./Components/Categories/Categories";
import NewBook from "./Components/Add/NewBook/NewBook";
import NewAuthor from "./Components/Add/NewAuthor/NewAuthor";
import NewCategory from "./Components/Add/NewCategory/NewCategory";
import EditCategory from "./Components/Edit/EditCategory";
import EditAuthor from "./Components/Edit/EditAuthor"
import EditBook from "./Components/Edit/EditBook";

function Router() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => <Books {...props}  />}
      />
      <Route 
        path="/authors/:id" 
        render={(props) => <Authors {...props} />}
        />
      <Route
        path="/category/:id"
        render={(props) => <Categories {...props} />}
      />
      <Route path="/new/book" component={NewBook} />
      <Route path="/new/author" component={NewAuthor} />
      <Route path="/new/category" component={NewCategory} />

      <Route path="/edit/category/:id" component={EditCategory} />
      <Route path="/edit/author/:id" component={EditAuthor} />
      <Route path="/edit/book/:id" component={EditBook} />
    </Switch>
  );
}
export default Router;
