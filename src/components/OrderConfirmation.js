import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/style.css';

function OrderConfirmation() {
  const location = useLocation();
  const order = location.state;

  const cart = order.cart;
  const paymentMethod = order.paymentMethod;

  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  const getTaxAmount = () => {
    const totalPrice = getTotalPrice();
    const taxPercentage = 20; // Assuming 20% tax (TVA)
    return (totalPrice * taxPercentage) / 100;
  };

  const getFinalPrice = () => {
    return getTotalPrice() + getTaxAmount();
  };

  if (timer > 0) {
    return (
      <div className="order-confirmation">
        <div className="timer">
          <div className="circle">
            <span>{timer}</span>
          </div>
        </div>
        <h1 className="thank-you-message">Order Confirmation</h1>
      </div>
    );
  }

  return (
    <div className="order-confirmation">
      <h1 className="thank-you-message">Order Confirmation</h1>
      <p className="thank-you-text">Thank you for your order! Your order will be delivered soon.</p>

      {cart.length > 0 ? (
        <div>
          <div className="bill-container">
            <h3 className="bill-heading">Order Details:</h3>
            <table className="bill-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price (€)</th>
                  <th>Total Price (€)</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr className="bill-item" key={index}>
                    <td>{item.titre}</td>
                    <td>{item.quantity}</td>
                    <td>{item.prix}</td>
                    <td>{item.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="bill-total-label">Total Price (excluding Tax):</td>
                  <td className="bill-total-price">{getTotalPrice()}</td>
                </tr>
                <tr>
                  <td colSpan="3" className="bill-tax-label">Tax (TVA):</td>
                  <td className="bill-tax-amount">{getTaxAmount()}</td>
                </tr>
                <tr>
                  <td colSpan="3" className="bill-final-price-label">Final Price (including Tax):</td>
                  <td className="bill-final-price">{getFinalPrice()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="payment-method">Payment Method: {paymentMethod}</p>
        </div>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </div>
  );
}

export default OrderConfirmation;




