import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { name, setName } = useContext(UserContext);
  return <div className="error">{name}</div>;
};

export default Profile;
