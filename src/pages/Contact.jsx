import React from 'react'
import us from '../assets/contact.jpeg'

const Contact = () => {
  return (
     <div className="contact">
        <div className="container contact__container">
             <div className="contact__image">
                <img src={us} alt="" className="contact__img" />
             </div>
             <div className="contact__text">
                <div className="contact__card">
                    <h2 className="contact__title">Un probleme ? </h2>
                    <div className="contact__quest">Contactez-nous</div>
                    <a href="tel:+79966178726" className="contact__link">+799 - 66 17 - 8726</a>
                    <a href="mailto:bauzar@gmail.com" className="contact__link">bauzar-digital@gmail.com</a>
                </div>
             </div>
        </div>
     </div>
  )
}

export default Contact