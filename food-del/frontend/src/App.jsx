import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Card/Card.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopUp from './components/LoginPopUp/LoginPopUp.jsx'
import Verify from './pages/Verify/Verify.jsx'
import MyOrders from './pages/MyOrders/MyOrders.jsx'
import Payment from './pages/Payment/payment.jsx'
const App = () => {

  const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          <Route path='/verify' element={<Verify/>}></Route>
          <Route path='/myorders' element={<MyOrders/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App

//hello
// const onSubmitHandler = async (event) => {
//   event.preventDefault();
//   const formData = new FormData();
//   formData.append("name", data.name);
//   formData.append("description", data.description);
//   formData.append("price", Number(data.price));
//   formData.append("category", data.category);
//   formData.append("image", image); // Make sure `image` is a `File` object

//   try {
//       const response = await axios.post(`${url}/api/food/add`, formData, {
//           headers: {
//               "Content-Type": "multipart/form-data",
//           },
//       });
//       if (response.data.success) {
//           setData({
//               name: "",
//               description: "",
//               price: "",
//               category: "Salad",
//           });
//           setImage(null); // Reset image
//       }
//   } catch (error) {
//       console.error("Error adding food:", error);
//   }
// };
