import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "../components/Auth/Auth";
import { Home } from "../components/Home/Home";
import { Usuario } from "../components/Usuario/Usuario";
import { Producto } from "../components/Producto/Producto";
import { Productos } from "../components/Productos/Productos";
import { AgregarProducto } from "../components/AgregarProducto/AgregarProducto";

export const AppRouter = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [producto, setProducto] = useState(null);
  const [editarProducto, setEditarProducto] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("https://fakerapi.it/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setUser(data.data[0]);
        } else {
          setError({
            msg: "Ha ocurrido un error, porfavor intente nuevamente.",
          });
        }
      })
      .catch((err) => setError(err));
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home user={user} handleLogout={handleLogout} />}
        >
          <Route index element={<Productos setEditarProducto={setEditarProducto} setProducto={setProducto} />} />
          <Route
            path="producto"
            element={<Producto user={user} producto={producto} />}
          />
          <Route path="usuario" element={<Usuario user={user} />} />
          <Route path="agregar" element={<AgregarProducto editarProducto={editarProducto} />} />
        </Route>
        <Route
          path="/auth"
          element={<Auth user={user} error={error} onSubmit={handleLogin} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
