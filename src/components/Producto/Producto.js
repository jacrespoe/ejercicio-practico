import React from "react";
import { Navigate } from "react-router-dom";
import "./producto.css";
import { ProductoTag } from "./ProductoTag";

export const Producto = (props) => {
  const { user, producto } = props;

  if (!user) return <Navigate to="/auth" />;
  return (
    <div className="producto">
      <div className="producto__container">
        <div className="producto__img-container">
          <img src={producto.image} />
        </div>
        <div>
          <h4 className="title">{producto.name}</h4>
          <p className="description">{producto.description}</p>
          <div className="info">
            <span className="price">${producto.price}</span>
            <button disabled>No disponible</button>
          </div>
          <div className="tags__container">
            {producto.tags.map((tag, index) => {
              return <ProductoTag key={tag + index} tag={tag} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
