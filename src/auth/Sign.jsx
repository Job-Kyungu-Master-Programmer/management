import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import { quantum } from 'ldrs'

quantum.register()

const Sign = ({ addLogin, password, setPassword, mail, setMail, isLoad, logResp }) => {
  return (
    <div className="sign">
      <div className="container sign__container">
        {isLoad && <div className="isload">
          <l-quantum
            size="150"
            speed="3"
            color="rgb(116, 52, 245)"
          ></l-quantum>
        </div>}
        <div className="sign__form">
          {logResp &&
            <div className="response__http">
              <span className="response__bad">
                {logResp}
              </span>
            </div>
          }
          <form onSubmit={addLogin} className="sign__form">
            <h2 className="sign__title">Connectez-vous</h2>
            <div className="signup__quest sign__quest">
              <span className="signup__q">Vous n'avez pas de compte ? </span>
              <Link className="signup__q" to='/signup'>Creez-en un!</Link>
            </div>
            <div className="sign__inputs">
              <input type="mail" value={mail}
                onChange={(e) => setMail(e.target.value)} className="sign__input" placeholder='jeancydalos@gmail.com' />
              <input type="text" value={password}
                onChange={(e) => setPassword(e.target.value)} className="sign__input" placeholder='Mot de passe' />
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