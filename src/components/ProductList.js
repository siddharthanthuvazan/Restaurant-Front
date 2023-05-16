import React, { useState, useEffect } from 'react';
import ProductService from './ProductService';

const ProductList = ({ props }) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: '', image: '', dateOfExpiry: '', quantity: '' });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCreateProduct = () => {
    ProductService.createProduct(newProduct, product => {
      setProducts([...products, product]);
      setNewProduct({ title: '', image: '', dateOfExpiry: '', quantity: '' });
    });
  };

  const handleUpdateProduct = () => {
    ProductService.updateProduct(selectedProduct.id, selectedProduct, product => {
      const index = products.findIndex(p => p.id === product.id);
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1, product);
      setProducts(updatedProducts);
      setSelectedProduct(null);
    });
  };



const handleDeleteProduct = (id) => {
    ProductService.deleteProduct(id, () => {
      const updatedProducts = products.filter(p => p.id !== id);
      setProducts(updatedProducts);
      setSelectedProduct(null);
    });
  };
  

  


  const handleGetAllProducts = () => {
    ProductService.getAllProducts(data => {
      console.log(data);
      setProducts(data);
    }, error => {
      console.error(error);
    });
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  return(
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Product List</h1>
  <button style={{ margin: '1rem 0' }} onClick={handleGetAllProducts}>Get All Products</button>
  <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '800px' }}>
    <thead>
      <tr>
        <th style={{ padding: '1rem', backgroundColor: '#e9e9e9', textAlign: 'left' }}>ID</th>
        <th style={{ padding: '1rem', backgroundColor: '#e9e9e9', textAlign: 'left' }}>Title</th>
        <th style={{ padding: '1rem', backgroundColor: '#e9e9e9', textAlign: 'left' }}>Quantity</th>
        <th style={{ padding: '1rem', backgroundColor: '#e9e9e9', textAlign: 'left' }}>Image</th>
        <th style={{ padding: '1rem', backgroundColor: '#e9e9e9', textAlign: 'left' }}>Date of Expiry</th>
        <th style={{ padding: '1rem', backgroundColor: '#e9e9e9', textAlign: 'left' }}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product.id}>
          <td style={{ padding: '1rem', border: '1px solid #ccc' }}>{product.id}</td>
          <td style={{ padding: '1rem', border: '1px solid #ccc' }}>{product.title}</td>
          <td style={{ padding: '1rem', border: '1px solid #ccc' }}>{product.quantity}</td>
          <td style={{ padding: '1rem', border: '1px solid #ccc' }}>{product.image}</td>
          <td style={{ padding: '1rem', border: '1px solid #ccc' }}>{product.dateOfExpiry}</td>
          <td style={{ padding: '1rem', border: '1px solid #ccc' }}>
            <button style={{ marginRight: '0.5rem' }} onClick={() => setSelectedProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px', marginTop: '2rem' }}>
  <h2 style={{ textAlign: 'center' }}>Add Product</h2>
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <label style={{ marginRight: '1rem' }}>Title: </label>
      <input type="text" value={newProduct.title} onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} style={{ padding: '0.5rem', borderRadius: '3px', border: '1px solid #ccc' }} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <label style={{ marginRight: '1rem' }}>Image: </label>
      <input type="text" value={newProduct.image} onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} style={{ padding: '0.5rem', borderRadius: '3px', border: '1px solid #ccc' }} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <label style={{ marginRight: '1rem' }}>Date of Expiry: </label>
      <input type="text" value={newProduct.dateOfExpiry} onChange={e => setNewProduct({ ...newProduct, dateOfExpiry: e.target.value })} style={{ padding: '0.5rem', borderRadius: '3px', border: '1px solid #ccc' }} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <label style={{ marginRight: '1rem' }}>Quantity: </label>
      <input type="text" value={newProduct.quantity} onChange={e => setNewProduct({ ...newProduct, quantity: e.target.value })} style={{ padding: '0.5rem', borderRadius: '3px', border: '1px solid #ccc' }} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <button onClick={handleCreateProduct} style={{ padding: '0.5rem 1rem', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '0.5rem' }}>Add Product</button>
      <button onClick={() => setNewProduct({ title: '', image: '', dateOfExpiry: '', quantity: '' })} style={{ padding: '0.5rem 1rem', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Clear</button>
   </div>
   

      {selectedProduct && (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px', marginTop: '2rem' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Edit Product</h2>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}>
      <label style={{ marginBottom: '0.5rem' }}>Title: </label>
      <input type="text" value={selectedProduct.title} onChange={e => setSelectedProduct({ ...selectedProduct, title: e.target.value })} style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '3px', border: '1px solid #ccc' }} />
      
      <label style={{ marginBottom: '0.5rem' }}>Image: </label>
      <input type="text" value={selectedProduct.image} onChange={e => setSelectedProduct({ ...selectedProduct, image: e.target.value })} style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '3px', border: '1px solid #ccc' }} />
      
      <label style={{ marginBottom: '0.5rem' }}>Date of Expiry: </label>
      <input type="text" value={selectedProduct.dateOfExpiry} onChange={e => setSelectedProduct({ ...selectedProduct, dateOfExpiry: e.target.value })} style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '3px', border: '1px solid #ccc' }} />
      
      <label style={{ marginBottom: '0.5rem' }}>Quantity: </label>
      <input type="text" value={selectedProduct.quantity} onChange={e => setSelectedProduct({ ...selectedProduct, quantity: e.target.value })} style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '3px', border: '1px solid #ccc' }} />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <button onClick={handleUpdateProduct} style={{ padding: '0.5rem', borderRadius: '3px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>Save</button>
        <button onClick={() => setSelectedProduct(null)} style={{ padding: '0.5rem', borderRadius: '3px', border: 'none', backgroundColor: '#f44336', color: 'white', cursor: 'pointer' }}>Cancel</button>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
</div>
  );
}
export default ProductList;