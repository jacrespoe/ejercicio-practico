import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch/useFetch";
import { ProductoCard } from "./ProductoCard";
import { Filtro } from "./Filtro";
import "./productos.css";

export const Productos = (props) => {
  // const { data: productos, loading, setData } = useFetch(
  //   "http://localhost:8080/producto"
  // );
  const { setProducto, setEditarProducto } = props;
  const [query, setQuery] = useState("");
  const [productos, setProductos] = useState(null);
  const navigate = useNavigate();

  const handleProducto = (producto) => {
    setProducto(producto);
    navigate("/producto");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const updateProductos = (id) => {
    const newProductos = productos.filter(producto => {
      return producto.id !== id;
    });
    setProductos(newProductos);
  }

  useEffect(() => {
    setEditarProducto(null);
    fetch("http://localhost:8080/api/productos")
    .then(res => res.json())
    .then(({data, status}) => {
      if(status === "OK"){
        setProductos(data);
      }
    })
    .catch(err => console.log(err));
  }, []);

  if (!productos) return <h1>Cargando...</h1>;

  return (
    <div className="productos">
      <Filtro handleChange={handleChange} query={query} />
      <div>
        {productos.map((producto) => {
          return (
            producto.name.toLowerCase().includes(query.toLowerCase()) && (
              <ProductoCard
                key={producto.id}
                updateProductos={updateProductos}
                handleProducto={handleProducto}
                producto={producto}
                setEditarProducto={setEditarProducto}
              />
            )
          );
        })}
      </div>
    </div>
  );
};
