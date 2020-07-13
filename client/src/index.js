import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import App from "./components/App/App";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import withSession from "./components/withSession";
import Navbar from "./components/Navbar";
import AddRecipe from "./components/Recipe/AddRecipe";
import RecipePage from "./components/Recipe/RecipePage";
import Search from "./components/Recipe/Search";
import Profile from "./components/Profile/Profile";

const client = new ApolloClient({
  uri: "http://localhost:4444/graphql",
  fetchOptions: {
    credentials: "include",
  },
  request: (operation) => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log("Network error", networkError);

      if (networkError.statusCode === 401) {
        localStorage.removeItem("token");
      }
    }
  },
});

const Root = withSession(({ refetch, session }) => (
  <Router>
    <Navbar session={session} />
    <Switch>
      <Route path={"/"} component={App} exact />
      <Route
        path={"/signin"}
        render={() => <Signin refetch={refetch} />}
        exact
      />
      <Route path={"/search"} component={Search} exact />
      <Route
        path={"/signup"}
        render={() => <Signup refetch={refetch} />}
        exact
      />
      <Route
        path={"/recipes/add"}
        render={() => <AddRecipe session={session} />}
        exact
      />
      <Route path={"/recipes/:_id"} component={RecipePage} exact />
      <Route
        path={"/profile"}
        render={() => <Profile session={session} />}
        exact
      />
      <Redirect to={"/"} />
    </Switch>
  </Router>
));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById("root")
);
