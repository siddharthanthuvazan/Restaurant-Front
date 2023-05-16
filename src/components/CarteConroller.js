import React, { useState, useEffect } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";



 function CarteController(props) {
  const backUrl = "http://localhost:8081/carte";
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(`${backUrl}/getCarte`)
      .then((response) => response.json())
      .then(data => setItems(data))
      .catch((error) => {
        console.error("Error fetching menu list:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedItem) {
      setTotalPrice(selectedItem.prix * quantity);
    }
  }, [quantity, selectedItem]);

  const addToCart = () => {
    const updatedItem = { ...selectedItem };
    updatedItem.quantity = quantity;
    updatedItem.totalPrice = totalPrice;
    props.addToCart(updatedItem);
    setQuantity(1);
    hideDetails();
  };
  
  const hideDetails = () => {
    setSelectedItem(null);
  }
  const showDetails = (item) => {
    setSelectedItem(item);
  }

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    setTotalPrice(prevTotalPrice => prevTotalPrice + selectedItem.prix);
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(prevQuantity => prevQuantity - 1);
    setTotalPrice(prevTotalPrice => prevTotalPrice - selectedItem.prix);
  };

  // const addToCart = (item) => {
  //   props.addToCart(item);
  // }

  return (
    <Container>
      <div className="carte">
        <div className="container">
          <h3 className="title">Menu</h3>
          <div className="products-container" data-name="menus">
            {items.map((item) => (
              <div key={item.id} className="cards">
                <div onClick={() => showDetails(item)}>
                  <div className="product">
                    <Image src={item.image} width="100%" />
                    <h3 className="title">{item.titre}</h3>
                    <div className="price">
                      <span>
                        <i className="fa fa-eur" aria-hidden="true"></i>
                        {item.prix}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedItem && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={hideDetails}>&times;</span>
            <h2>{selectedItem.titre}</h2>
            <Image src={selectedItem.image} fluid />
            <p>{selectedItem.description}</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            <p>{selectedItem.prix} €</p>
            <Button onClick={() => addToCart(selectedItem)}>Add to Cart</Button>
          </div>
        </div>
      )}
    </Container>
  );
  }

  export default CarteController;