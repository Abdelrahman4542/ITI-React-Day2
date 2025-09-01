import React from 'react';

const ProductInfo = ({ product, onDelete }) => {
  if (!product) {
    return <div className="product-info">No product data available.</div>;
  }

  const handleDelete = () => {
    if (onDelete && product.code !== undefined) {
      onDelete(product.code);
    }
  };

  return (
    <div className="product-info">
      <div className="product-details">
        <h3>{product.name || "Unnamed Product"}</h3>
        <p>
          Price: $
          {typeof product.price === "number"
            ? product.price.toFixed(2)
            : "N/A"}
        </p>
        <p>Code: {product.code !== undefined ? product.code : "N/A"}</p>
        {product.category && <p>Category: {product.category}</p>}
      </div>
      <button 
        onClick={handleDelete}
        className="delete-btn"
        aria-label={`Delete ${product.name || "product"}`}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductInfo;