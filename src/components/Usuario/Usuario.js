import React from "react";
import { Navigate } from "react-router-dom";
import "./usuario.css";

export const Usuario = (props) => {
  const { user } = props;

  if (!user) return <Navigate to="/auth" />;
  return (
    <div className="usuario">
      <div className="usuario__container">
        <img src={user.image} alt="user-img" />
        <div className="usuario__form-container">
          <div className="usuario__form">
            <p>Nombre de Usuario</p>
            <input type="text" value={`${user.username}`} disabled />
          </div>
          <div className="usuario__form">
            <p>Nombre</p>
            <input
              type="text"
              value={`${user.firstname} ${user.lastname}`}
              disabled
            />
          </div>
          <div className="usuario__form">
            <p>Correo Electrónico</p>
            <input type="text" value={`${user.email}`} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};
