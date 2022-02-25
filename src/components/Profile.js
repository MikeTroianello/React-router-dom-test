import React from "react";
import { useParams, Link } from "react-router-dom";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>This is the profile Page of {name}</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Profile;
