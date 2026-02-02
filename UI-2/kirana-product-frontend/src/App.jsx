import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { addProduct, updateProduct } from './services/api';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFormSubmit = async (productData) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, productData);
      } else {
        await addProduct(productData);
      }
      setShowForm(false);
      setEditingProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Failed to save product. Please try again.');
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Kirana Store Product Management</h1>
        <p>Manage your grocery products efficiently</p>
      </header>
      
      <main className="main-content">
        {showForm ? (
          <div className="form-section">
            <ProductForm
              product={editingProduct}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
            />
          </div>
        ) : (
          <>
            <div className="controls">
              <button 
                className="btn btn-primary" 
                onClick={handleAddProduct}
              >
                + Add New Product
              </button>
            </div>
            
            <div className="list-section">
              <ProductList onEditProduct={handleEditProduct} />
            </div>
          </>
        )}
      </main>
      
      <footer className="footer">
        <p>© 2024 Kirana Store Management System</p>
      </footer>
    </div>
  );
};

export default App;