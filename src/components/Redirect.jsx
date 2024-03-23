import React from 'react'
import { Link } from 'react-router-dom'
import redirectImg from '../assets/connected.svg'

const Redirect = () => {
  return (
    <div>
      <div className="redirect">
        <div className="redirect__flow">
            <div className="redirect__image">
              <img src={redirectImg} alt="connected" className="redirect__img" />
            </div>
            <div className="redirect__text">
               <h2 className="redirect__title">Connectez vous et continuer</h2>
                <Link to='/sign-in' className="redirect__link">Connectez-vous</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Redirect
