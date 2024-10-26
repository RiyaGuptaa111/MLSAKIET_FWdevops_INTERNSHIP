import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'
import {Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
   const url="http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar></Navbar>
      <hr/>
      <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}></Route>
          <Route path="/list" element={<List  url={url}/>}></Route>
          <Route path="/orders" element={<Orders  url={url}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
