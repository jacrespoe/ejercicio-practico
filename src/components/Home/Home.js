import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

import "./home.css";

export const Home = (props) => {
  const { user, handleLogout } = props;

  if (!user) return <Navigate to="/auth" />;

  return (
    <div className="home">
      <Navbar user={user} handleLogout={handleLogout} />
      <Outlet />
    </div>
  );
};
