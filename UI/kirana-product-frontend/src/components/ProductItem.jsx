import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <div className="product-item">
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-meta">
          <span className="product-price">₹{product.price.toFixed(2)}</span>
          <span className="product-id">ID: {product.id}</span>
        </div>
      </div>
      <div className="product-actions">
        <button 
          className="btn btn-edit" 
          onClick={() => onEdit(product)}
          title="Edit Product"
        >
          <FaEdit />
        </button>
        <button 
          className="btn btn-delete" 
          onClick={() => onDelete(product.id)}
          title="Delete Product"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;