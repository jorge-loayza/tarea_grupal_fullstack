import React, { useEffect } from 'react';
import './estilos/App.css';
import ProductList from './componentes/ProductList';

import { useState } from 'react';
import axios from 'axios';

const productsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 10.0, stock: 5 },
      { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 20.0, stock: 3 },
      { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: 30.0, stock: 8 },
    ]);
  }, 350);
});

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    /*axios
      .get('http://localhost:3001/api/producto')
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });*/

      productsPromise.then((data) => {
        setProducts(data);
      });


  }, []);

  return (
<div className="container">
        <h1>Gestor de Productos</h1>

        <ProductList
          products={products}
        />
      </div>
  );
};
export default App;
