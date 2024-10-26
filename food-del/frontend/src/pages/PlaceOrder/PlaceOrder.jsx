import React, { useContext,useEffect,useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext);

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder=async(event)=>{
      event.preventDefault();
      let orderItems=[];
      food_list.map((item)=>{
        if(cartItems[item._id]>0){
          let itemInfo=item;
          itemInfo["quantity"]=cartItems[item._id]
          orderItems.push(itemInfo);
        }
      })
      let orderData={
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2
      }
      let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
      
        navigate('/payment');
     
  }
const navigate=useNavigate();
useEffect(()=>{
    if(!token){//if user not logged in
        navigate('/cart');
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart');
    }
},[token])


  return (
    <form onSubmit={placeOrder} className='place-order'>
        <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
              <input name="firstName" value={data.firstName} onChange={onChangeHandler} type="text" placeholder='First Name' required/>
              <input name="lastName" value={data.lastName} onChange={onChangeHandler} type="text" placeholder='Last Name' required/>
            </div>
            <input name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder='Email Address' required/>
            <input name="street" value={data.street} onChange={onChangeHandler} type="text" placeholder='Street' required/>
            <div className="multi-fields">
              <input name="city" value={data.city} onChange={onChangeHandler} type="text" placeholder='City' required/>
              <input name="state" value={data.state} onChange={onChangeHandler}  type="text" placeholder='State' required/>
            </div>
            <div className="multi-fields">
              <input name="zipcode" value={data.zipcode} onChange={onChangeHandler} type="text" placeholder='Zip Code' required/>
              <input name="country" value={data.country} onChange={onChangeHandler} type="text" placeholder='Country' required/>
            </div>
            <input name="phone" value={data.phone} onChange={onChangeHandler} type="text" placeholder='Phone' required/>
        </div>


        <div className="place-order-right">
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button type="submit">PROCEED TO PAYMENT</button>
          </div>
        </div>
    </form>
  )
}

export default PlaceOrder
