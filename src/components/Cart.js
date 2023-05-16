import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PaymentForm from './PaymentForm';

function Cart(props) {
  const cart = props.cart;

  const [paymentMethod, setPaymentMethod] = useState('CASH_ON_DELIVERY');

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  const incrementQuantity = (index) => {
    const updatedCart = [...cart];
    const selectedItem = updatedCart[index];
    selectedItem.quantity += 1;
    selectedItem.totalPrice += selectedItem.prix;
    props.updateCart(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cart];
    const selectedItem = updatedCart[index];
    if (selectedItem.quantity === 1) {
      return;
    }
    selectedItem.quantity -= 1;
    selectedItem.totalPrice -= selectedItem.prix;
    props.updateCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    props.updateCart(updatedCart);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected payment method: ${paymentMethod}`);
    // Here you can handle the payment process using the selected payment method
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => (
            <div className="cart-item" key={item.id} >
              <h3>{item.titre}</h3>
              <p>Quantity: {item.quantity}</p>
              <Button className="quantity-button" onClick={() => decrementQuantity(index)}>
                -
              </Button>
              <Button className="quantity-button" onClick={() => incrementQuantity(index)}>
                +
              </Button>
              <Button variant="danger" onClick={() => removeItem(index)}>
                Remove
              </Button>
              <div>
                <p>{item.totalPrice} €</p>
              </div>
            </div>
          ))}
          <p>Total Price: {getTotalPrice()} €</p>
    
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Select Payment Method</Form.Label>
              <Form.Control as="select" onChange={handlePaymentMethodChange}>
                <option value="CASH_ON_DELIVERY">Cash On Delivery</option>
                <option value="CREDIT_CARD">Credit Card</option>
                <option value="DEBIT_CARD">Debit Card</option>
                <option value="PAYPAL">Paypal</option>
                <option value="APPLE_PAY">Apple Pay</option>
                <option value="GOOGLE_PAY">Google Pay</option>
              </Form.Control>
            </Form.Group>

            {paymentMethod !== 'CASH_ON_DELIVERY' && (
              <PaymentForm paymentMethod={paymentMethod} />
            )}

            <Button variant="primary" type="submit">Place Order</Button>
          </Form>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;







