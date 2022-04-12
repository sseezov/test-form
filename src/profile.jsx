import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "./UserContext";

const Profile = () => {
  let navigate = useNavigate();
  const { name, setUserLog } = useContext(UserContext);
  const unlogger = () => {
    setUserLog(false);
    navigate("/");
  };
  return (
    <>
      <div className="error">{name}</div>
      <button onClick={unlogger}>Logout</button>
    </>
  );
};

export default Profile;
