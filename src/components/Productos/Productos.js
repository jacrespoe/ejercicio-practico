import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch/useFetch";
import "./productos.css";

export const Productos = (props) => {
  const { setProducto } = props;
  const {
    data: productos,
    error,
    loading,
  } = useFetch("https://fakerapi.it/api/v1/products");
  const navigate = useNavigate();

  const handleProducto = (producto) => {
    setProducto(producto);
    navigate("/producto");
  };

  if (loading) return <h1>Cargando...</h1>;

  return (
    <div className="productos">
      <div>
        {productos.map((producto) => {
          return (
            <div
              onClick={() => handleProducto(producto)}
              key={producto.id}
              className="productos__container"
            >
              <img src={producto.image} alt="producto-img" />
              <div className="productos__body">
                <div className="productos__info">
                  <h4>{producto.name}</h4>
                  <p>{producto.description}</p>
                </div>
                <div className="productos__footer">
                  <span>${producto.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
