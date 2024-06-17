import React, { useState } from 'react';
import '../Order/paymentForm.css';

function CartPaymentPage({ handleOrgerPayment }) {
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // Submit the form
            alert('Payment Successfull');
            handleOrgerPayment();
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!/^\d{16}$/.test(cardNumber)) {
            errors.cardNumber = 'Card number must be 16 digits';
        }
        if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(cardExpiry)) {
            errors.cardExpiry = 'Card expiry must be in MM/YY format';
        }
        if (!/^\d{3}$/.test(cvv)) {
            errors.cvv = 'CVV must be 3 digits';
        }
        return errors;
    };


  return (
    <>
    <h2 className="font-bold text-center text-1xl">Visa Card</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
          <div>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength="16"
                  required
              />
              {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
          </div>
          <div>
              <label htmlFor="cardExpiry">Card Expiry</label>
              <input
                  type="text"
                  id="cardExpiry"
                  name="cardExpiry"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  placeholder="MM/YY"
                  required
              />
              {errors.cardExpiry && <p className="error">{errors.cardExpiry}</p>}
          </div>
          <div>
              <label htmlFor="cvv">CVV</label>
              <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  maxLength="3"
                  required
              />
              {errors.cvv && <p className="error">{errors.cvv}</p>}
          </div>
          <button type="submit">Submit Payment</button>
      </form>
    </>
  )
}

export default CartPaymentPage;