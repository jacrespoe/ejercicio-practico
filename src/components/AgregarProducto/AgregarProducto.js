import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './agregar.css';

export const AgregarProducto = (props) => {
    const navigate = useNavigate();
    const { editarProducto: producto } = props;
    const [newProduct, setNewProduct] = useState({
        id: producto ? producto.id : 0,
        name: producto ? producto.name : "",
        description: producto ? producto.description : "",
        price: producto ? producto.price : "",
        image: producto ? producto.image : ""
    });

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        }).then(res => res.json())
            .then(() => {
                navigate("/");
            })
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/api/productos/${producto.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        }).then(res => res.json())
            .then(() => {
                navigate("/");
            })
    }

    return (
        <>
            <form className='agregar_form' onSubmit={producto ? handleSubmit : handleUpdate}>
                <input onChange={handleChange} disabled={producto?.id && true} value={newProduct?.id} type="number" name="id" placeholder='ID' />
                <input onChange={handleChange} value={newProduct?.name} type="text" name="name" placeholder='Name' />
                <input onChange={handleChange} value={newProduct?.description} type="text" name="description" placeholder='Description' />
                <input onChange={handleChange} value={newProduct?.price} type="number" name="price" placeholder='Price' />
                <input onChange={handleChange} value={newProduct?.image} type="text" name="image" placeholder='Image URL' />
                <button>{producto ? "Actualizar" : "Crear"} Producto</button>
            </form>
        </>
    )
}