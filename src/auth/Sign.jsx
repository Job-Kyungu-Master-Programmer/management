import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const Sign = () => {
  return (
   <div className="sign">
        <div className="container sign__container">
             <div className="sign__form">
                 <form action="" className="sign__form">
                     <h2 className="sign__title">Connectez-vous</h2>
                     <div className="signup__quest sign__quest">
                      <span className="signup__q">Vous n'avez pas de compte ? </span>
                      <Link className="signup__q" to='/signup'>Creez-en un!</Link>
                    </div>
                     <div className="sign__inputs">
                        <input type="mail" className="sign__input" placeholder='jeancydalos@gmail.com' />
                        <input type="text" className="sign__input" placeholder='Mot de passe' />
                        <Button type='submit' className="signup__btn sign__btn" variant="contained" endIcon={<SendIcon />}>
                          Connexion
                        </Button>
                     </div>
                 </form>
             </div>
        </div>
   </div>
  )
}

export default Sign