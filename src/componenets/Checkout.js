import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const CheckoutPage = () => {
  const [membership, setMembership] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [error, setError] = useState('');

  const handleMembershipChange = (membershipType) => {
    setMembership(membershipType);
    setError('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Field validation
    const isFormValid =
      membership.trim() !== '' &&
      name.trim() !== '' &&
      email.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      /^\d{10}$/.test(phoneNumber) &&
      cardNumber.trim() !== '' &&
      /^\d{16}$/.test(cardNumber) &&
      expiry.trim() !== '' &&
      /^\d{2}\/\d{2}$/.test(expiry) &&
      cvv.trim() !== '' &&
      /^\d{3}$/.test(cvv) &&
      address.trim() !== '' &&
      city.trim() !== '' &&
      state.trim() !== '' &&
      /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/.test(zipcode);

    console.log('isFormValid:', isFormValid);

    if (isFormValid) {
      // Handle form submission logic here
      // For demonstration purposes, log the form data to the console
      console.log('Form submitted:', { membership, name, email, phoneNumber, cardNumber, expiry, cvv, address, city, state, zipcode });

      // Reset form fields
      setMembership('');
      setName('');
      setEmail('');
      setPhoneNumber('');
      setCardNumber('');
      setExpiry('');
      setCVV('');
      setAddress('');
      setCity('');
      setState('');
      setZipcode('');

      // Show the popup
      setPopupVisible(true);
    } else {
      setError('Please select a membership');
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const getPrice = () => {
    if (membership === 'basic') {
      return 30;
    } else if (membership === 'premium') {
      return 40;
    } else if (membership === 'vip') {
      return 50;
    }
    return 0;
  };

  const calculateSubtotal = () => {
    const price = getPrice();
    return price;
  };

  const calculateHST = () => {
    const subtotal = calculateSubtotal();
    const hstRate = 0.13;
    return subtotal * hstRate;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const hst = calculateHST();
    return subtotal + hst;
  };

  return (
    <div className='background-image-checkout'>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="item">
            <div className="membership-container">
              <h2 className="membership-title">Select Membership:</h2>
              <br></br>
              <button
                className={`membership-button ${membership === 'basic' ? 'selected' : ''}`}
                onClick={() => handleMembershipChange('basic')}
              >
                Basic
              </button>
              <br></br>
              <button
                className={`membership-button ${membership === 'premium' ? 'selected' : ''}`}
                onClick={() => handleMembershipChange('premium')}
              >
                Premium
              </button>
              <br></br>
              <button
                className={`membership-button ${membership === 'vip' ? 'selected' : ''}`}
                onClick={() => handleMembershipChange('vip')}
              >
                VIP
              </button>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
          <div className="item">
            <div>
              <h2>Your personal information</h2>
            </div>
            <label htmlFor="name">Name:</label>
            <div>
              <input type="text" id="name" value={name} onChange={handleNameChange} required minLength={2} maxLength={50} />
            </div>
            <label htmlFor="email">Email:</label>
            <div>
              <input type="email" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <div>
              <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneChange} required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" />
            </div>
          </div>
          <div className="item">
            <h2>Your Payment information</h2>
            <label htmlFor="cardNumber">Card Number:</label>
            <div>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
                pattern="[0-9]{16}"
                title="Please enter a valid 16-digit card number"
              />
            </div>
            <label htmlFor="expiry">Expiry:</label>
            <div>
              <input type="text" id="expiry" value={expiry} onChange={handleExpiryChange} required pattern="\d{2}/\d{2}" title="Please enter a valid expiry date in MM/YY format" />
            </div>
            <label htmlFor="cvv">CVV:</label>
            <div>
              <input type="text" id="cvv" value={cvv} onChange={handleCVVChange} required pattern="[0-9]{3}" title="Please enter a valid 3-digit CVV" />
            </div>
          </div>
          <div className="item">
            <h2>Your address information</h2>
            <label htmlFor="address">Address:</label>
            <div>
              <input type="text" id="address" value={address} onChange={handleAddressChange} required />
            </div>
            <label htmlFor="city">City:</label>
            <div>
              <input type="text" id="city" value={city} onChange={handleCityChange} required />
            </div>
            <label htmlFor="state">State:</label>
            <div>
              <input type="text" id="state" value={state} onChange={handleStateChange} required />
            </div>
            <label htmlFor="zipcode">Zipcode:</label>
            <div>
              <input
                type="text"
                id="zipcode"
                value={zipcode}
                onChange={handleZipcodeChange}
                required
                pattern="^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$"
                title="Please enter a valid ZIP code EX: A1B 2C3"
              />
            </div>
          </div>
          <div className="item">
            <div className="summary-box">
              <h2 className="summary-title">Summary</h2>
              <div className="summary-item">
                <span className="summary-label">Membership Price: </span>
                <span className="summary-value">${getPrice()}</span>
                <br></br>
                <br></br>
                <br></br>
              </div>
              <div className="summary-item no-border">
                <span className="summary-label">Subtotal:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="summary-value">${calculateSubtotal()}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">HST (13%):</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="summary-value">${calculateHST().toFixed(2)}</span>
                <br></br>

              </div>
              <div className="summary-item">
                <span className="summary-label">Total:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="summary-value">${calculateTotal().toFixed(2)}</span>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <button className="button"type="submit">Checkout</button>
      </form>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popupcheckout">
            <h2>Membership Registration Successful!</h2>
            <p>Thank you for becoming a Member at Forge Fitness!</p>
            <Link to="/"><button className="popupbutton">Go back to Home</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
