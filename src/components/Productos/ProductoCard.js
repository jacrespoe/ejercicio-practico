import React from "react";

export const ProductoCard = (props) => {
  const { handleProducto, producto } = props;
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
};
