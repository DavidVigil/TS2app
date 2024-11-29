import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPAÑIA</h2>
            <ul>
                <li>Inicio</li>
                <li>Contactanos</li>
                <li>Entregas a domicilio</li>
                <li>Politica de privacidad</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contactanos</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@nutrideliver.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © NutriDeliver.com - Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer