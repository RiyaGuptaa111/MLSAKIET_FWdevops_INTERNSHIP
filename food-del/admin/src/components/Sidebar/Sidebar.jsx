import React from 'react'
import './Sidebar.css'
import {NavLink} from "react-router-dom"
import { assets } from '../../assets/assets'
const Sidebar = () => {
  return (
    <div  className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" className="src" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.order_icon} alt="" className="src" />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" className="src" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
