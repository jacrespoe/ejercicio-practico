import React from "react";
import { Navigate } from "react-router-dom";
import "./auth.css";

export const Auth = (props) => {
  const { user, onSubmit, error } = props;

  if (user) return <Navigate to="/" replace />;

  return (
    <div className="auth">
      <form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <h3>Iniciar Sesión</h3>
        <input name="user" type="text" placeholder="Usuario" />
        <input name="password" type="password" placeholder="Contraseña" />
        <button>Iniciar Sesión</button>
      </form>
    </div>
  );
};
