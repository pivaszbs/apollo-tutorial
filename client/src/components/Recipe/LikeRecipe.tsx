import React, { useEffect, useState } from "react";
import withSession from "../withSession";
import { useMutation } from "react-apollo";
import { LIKE_RECIPE, GET_RECIPE, UNLIKE_RECIPE } from "../../queries";
import { Mutation } from "../../queries/types";

const LikeRecipe = ({ session, _id, refetch }) => {
  const [username, setUsername] = useState("");
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (session.getCurrentUser) {
      const { username, favorites } = session.getCurrentUser;
      const prevLiked =
        favorites.findIndex((favorite) => favorite._id === _id) > -1;
      setUsername(username);
      setLiked(prevLiked);
    }
  }, [session]);

  const [likeRecipe] = useMutation<Mutation>(LIKE_RECIPE, {
    variables: {
      _id,
      username,
    },
    update: (cache, { data }) => {
      const { likes } = data.likeRecipe;
      const { getRecipe } = cache.readQuery({
        query: GET_RECIPE,
        variables: { _id },
      });

      cache.writeQuery({
        query: GET_RECIPE,
        variables: { _id },
        data: {
          getRecipe: { ...getRecipe, likes: likes + 1 },
        },
      });
    },
  });

  const [unlikeRecipe] = useMutation<Mutation>(UNLIKE_RECIPE, {
    variables: {
      _id,
      username,
    },
    update: (cache, { data }) => {
      const { likes } = data.unlikeRecipe;
      const { getRecipe } = cache.readQuery({
        query: GET_RECIPE,
        variables: { _id },
      });

      cache.writeQuery({
        query: GET_RECIPE,
        variables: { _id },
        data: {
          getRecipe: { ...getRecipe, likes: likes - 1 },
        },
      });
    },
  });

  const handleClick = () => {
    setLiked(!liked);
    handleLike(!liked);
  };

  const handleLike = (liked) => {
    if (liked) {
      likeRecipe().then(async (data) => {
        console.log(data);
        await refetch();
      });
    } else {
      unlikeRecipe().then(async (data) => {
        console.log(data);
        await refetch();
      });
    }
  };

  return (
    username && (
      <button onClick={handleClick}>{liked ? "Dislike" : "Like"}</button>
    )
  );
};

export default withSession(LikeRecipe);
