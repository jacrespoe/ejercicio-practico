import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const { user, handleLogout } = props;
  return (
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
  );
};
