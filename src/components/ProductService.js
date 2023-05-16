const baseUrl = "http://34.155.218.31:8081/product";

const ProductService = {
  getAllProducts: (callback) => {
    fetch(`${baseUrl}/getProducts`)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error));
  },
  createProduct: (product, callback) => {
    fetch(`${baseUrl}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error));
  },
  updateProduct: (id, product, callback) => {
    fetch(`${baseUrl}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error));
  },
  deleteProduct: (id, callback) => {
    fetch(`${baseUrl}/delete/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error));
  },
  
};

export default ProductService;

