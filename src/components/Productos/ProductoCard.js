import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ProductoCard = (props) => {
  const { handleProducto, producto, updateProductos, setEditarProducto } = props;
  const navigate = useNavigate();

  const handleDelete = async () => {
    await fetch(`http://localhost:8080/api/productos/${producto.id}`, {
      method: "DELETE"
    });
    updateProductos(producto.id);
  }

  const handleUpdate = () => {
    setEditarProducto(producto);
    navigate("/agregar");
  }

  return (
    <div
      className="productos__container"
    >
      <img onClick={() => handleProducto(producto)} src={producto.image} alt="producto-img" />
      <div className="productos__body">
        <div className="productos__info">
          <h4>{producto.name}</h4>
          <p>{producto.description}</p>
        </div>
        <div className="productos__footer">
          <span>${producto.price}</span>
        </div>
        <button onClick={handleDelete}>Eliminar</button>
        <button onClick={handleUpdate}>Actualizar</button>
      </div>
    </div>
  );
};
