import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quos facilis. At ducimus corporis illum sint! Voluptatibus blanditiis repellendus, repellat libero, cumque impedit, ad recusandae quidem a numquam debitis quod.</p>
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
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 99992221234</li>
                    <li>contact@tomato.com</li>

                </ul>
            </div>
          
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 Tomoto.com -All right Reversed
        </p>

      
    </div>
  )
}

export default Footer