import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className="src" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad necessitatibus fugit eos sit, non quo voluptate molestiae modi asperiores, itaque, nulla animi optio quibusdam alias porro sint quisquam reiciendis autem.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>    
        </div>
        <hr/>
        <p className="footer-copywright">Copywright 2024 @ Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
