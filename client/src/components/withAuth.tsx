import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GET_CURRENT_USER } from "../queries";

const withAuth = (cf) => (Component) => (args) => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER);

  if (loading) return null;

  return cf(data) ? <Component {...args} /> : <Redirect to={"/"} />;
};

export default withAuth;
