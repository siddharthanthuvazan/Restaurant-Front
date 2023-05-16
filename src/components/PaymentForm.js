import React, { useState } from 'react';
import '../css/style.css';

function PaymentForm() {
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleNameOnCardChange = (event) => {
    setNameOnCard(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://34.155.218.31:8081/payment/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nameOnCard,
        cardNumber,
        expiryDate,
        cvv,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setPaymentSuccess(true);
        } else {
          throw new Error('Failed to process payment');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="payment-form-card">
      <div className="payment-form-card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardName">Name on card:</label>
            <input type="text" id="cardName" className="form-control" value={nameOnCard} onChange={handleNameOnCardChange} />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" className="form-control" value={cardNumber} onChange={handleCardNumberChange} />
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input type="text" id="expiryDate" className="form-control" value={expiryDate} onChange={handleExpiryDateChange} />
            </div>
            <div className="form-group col">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" className="form-control" value={cvv} onChange={handleCvvChange} />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit Payment</button>
          </div>
        </form>
        {paymentSuccess && (
          <p>Payment successful!</p>
        )}
      </div>
    </div>
  );
}

export default PaymentForm;


