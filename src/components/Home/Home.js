import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

import "./home.css";

export const Home = (props) => {
  const { user, handleLogout } = props;

  if (!user) return <Navigate to="/auth" />;

  return (
    <div className="home">
      <nav className="home__navbar">
        <div>
          <Link to="/">
            <h2>eCommerce</h2>
          </Link>
        </div>
        <div className="home__navbar-btns">
          <Link to="/usuario">
            <div className="home__navbar-user">
              <img src={user.image} alt="user-img" />
              <p>{user.username}</p>
            </div>
          </Link>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
