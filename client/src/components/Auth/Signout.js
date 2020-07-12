import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

const handleSignout = (resetStore, redirect) => {
  localStorage.setItem("token", "");
  resetStore();
  redirect("/");
};

const Signout = ({ history }) => {
  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <button
            onClick={() => handleSignout(client.resetStore, history.push)}
          >
            Signout
          </button>
        );
      }}
    </ApolloConsumer>
  );
};

export default withRouter(Signout);
