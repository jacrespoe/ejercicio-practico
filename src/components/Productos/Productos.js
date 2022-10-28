import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch/useFetch";
import { ProductoCard } from "./ProductoCard";
import { Filtro } from "./Filtro";
import "./productos.css";

export const Productos = (props) => {
  const { setProducto } = props;
  const [query, setQuery] = useState("");
  const { data: productos, loading } = useFetch(
    "https://fakerapi.it/api/v1/products"
  );
  const navigate = useNavigate();

  const handleProducto = (producto) => {
    setProducto(producto);
    navigate("/producto");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  if (loading) return <h1>Cargando...</h1>;

  return (
    <div className="productos">
      <Filtro handleChange={handleChange} query={query} />
      <div>
        {productos.map((producto) => {
          return (
            producto.name.toLowerCase().includes(query.toLowerCase()) && (
              <ProductoCard
                handleProducto={handleProducto}
                producto={producto}
              />
            )
          );
        })}
      </div>
    </div>
  );
};
