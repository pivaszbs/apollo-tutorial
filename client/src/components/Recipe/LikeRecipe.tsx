import React, { useEffect, useState } from "react";
import withSession from "../withSession";
import { useMutation } from "react-apollo";
import { LIKE_RECIPE } from "../../queries";
import { Mutation } from "../../queries/types";

const LikeRecipe = ({ session, _id }) => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (session.getCurrentUser) {
      const { username } = session.getCurrentUser;
      setUsername(username);
    }
  }, [session]);

  const [likeRecipe] = useMutation<Mutation["likeRecipe"]>(LIKE_RECIPE, {
    variables: {
      _id,
      username,
    },
  });

  const handleLike = () => {
    likeRecipe().then((data) => {
      console.log(data);
    });
  };

  return username && <button onClick={handleLike}>Like</button>;
};

export default withSession(LikeRecipe);
