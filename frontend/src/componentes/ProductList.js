import  Product  from "./Product";

const ProductList = ({ products }) => {
  
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }
  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};
export default ProductList;
