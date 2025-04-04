import React from "react";
import "../estilos/App.css";
const Product = ({ product }) => {
  return (
    <div className={`empleado-card activo`}>
      <p>
        <strong>{product.name}</strong>
      </p>
      <p>Descripción: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}

export default Product;
// 