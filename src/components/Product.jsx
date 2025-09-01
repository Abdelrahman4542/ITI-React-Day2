import React, { useState } from 'react';
import ProductInfo from './ProductInfo';

const Product = () => {
  const [products, setProducts] = useState([
    { code: 111, name: 'books', price: 89.99, category: 'Literature' },
    { code: 121, name: 'phone', price: 999.99, category: 'Electronics' },
    { code: 211, name: 'Smartphone', price: 499.99, category: 'Electronics' },
    { code: 133, name: 'Wireless Mouse', price: 29.99, category: 'Electronics' },
    { code: 421, name: "USB-C Cable", price: 15.99, category: 'Accessories' },
    { code: 511, name: "Laptop Stand", price: 49.99, category: 'Accessories' },
  ]);

  const handleDeleteProduct = (productCode) => {
    setProducts(products.filter(product => product.code !== productCode));
  };

  return (
    <div className="products-container">
      <h2>Products List</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductInfo key={product.code}
          product={product} 
          onDelete={handleDeleteProduct} />
        ))}
      </div>
    </div>
  );
};

export default Product;