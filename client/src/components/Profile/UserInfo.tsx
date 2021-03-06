import React from "react";
import { Link } from "react-router-dom";

const formatDate = (date) => {
  const newDate = new Date(Number(date)).toLocaleDateString("ru-RU");
  const newTime = new Date(Number(date)).toLocaleTimeString("ru-RU");
  return `${newDate} at ${newTime}`;
};

const UserInfo = ({ session }) => {
  const { username, email, joinDate, favorites } = session.getCurrentUser;
  return (
    <div>
      <h3>User Info</h3>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Join Date: {formatDate(joinDate)}</p>
      <h3>{username}'s' Favorites</h3>
      {favorites.length === 0 && (
        <p>
          <strong>You have no favorites currently. Go add some</strong>
        </p>
      )}
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite._id}>
            <Link to={`/recipes/${favorite._id}`}>
              <p>{favorite.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
