import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <Link to='#'><img src={assets.logo} alt="" /></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat cum ab magnam suscipit error saepe debitis illum omnis deleniti quisquam, facere voluptates repellat perferendis voluptas, accusamus voluptate quas iste deserunt?</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-234-345-8900</li>
                    <li>contact@appetizer.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © All Rights Reserved</p>
    </div>
  )
}

export default Footer