import React, { useContext } from 'react';
import './payment.css';
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Payment= () => {

    const {getTotalCartAmount}=useContext(StoreContext);
    const navigate=useNavigate();
    const handler=()=>{
        navigate('/');
    }
  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="checkmark">&#10004;</div>
        <h1 className='payment-heading'>Payment successful!</h1>
        <p className='payment-para'>Hooray! You have completed your payment.</p>
        <p className="amount-paid">Amount Paid: 
            <br/>
            <strong>RS. {getTotalCartAmount()+2}</strong></p>
        <button className="continue-button" onClick={handler}>Continue</button>
      </div>
    </div>
  );
};

export default Payment;