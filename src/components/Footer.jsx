import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
         <div className="container footer__container">
            <span className="footer__copyright">
                &copy; Copyright 2024
            </span>
            <span className="footer__span">
              Create by <Link className='footer__link' to='http://wwww.bauzar-digital.com'>Bauzar-Digital</Link>
            </span>
         </div>
    </div>
  )
}

export default Footer