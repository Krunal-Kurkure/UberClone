import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../src/context/UserContext";
const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  if (!token) {
    navigate("/login");
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
