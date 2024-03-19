import React from 'react'
import { Link } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
 clip: 'rect(0 0 0 0)',
 clipPath: 'inset(50%)',
 height: 1,
 overflow: 'hidden',
 position: 'absolute',
 bottom: 0,
 left: 0,
 whiteSpace: 'nowrap',
 width: 1,
});

const Signup = ({ addUser, onChange, name, lastName, mail, password, avatar, university, faculty, country, phone}) => {
 return (
    <div className="signup">
      <div className="container signup__container">
        <span className="signup__free">C'est gratuite la plateforme</span>
        <h1 className="signup__title">Creez votre compte Etudiant</h1>
        <div className="signup__quest">
          <span className="signup__q">Vous avez un compte ? </span>
          <Link className="signup__q" to='/sign-in'>Connectez-vous</Link>
        </div>
        <form onSubmit={addUser} encType='multipart/form-data' className="signup__form">
          <div className="signup__card signup__card__top">
            <input type="text" value={name} name='name' onChange={(e) => onChange(e)} placeholder='Jeancy' className="signup__input" />
            <input type="text" value={lastName} name='lastName' onChange={(e) => onChange(e)} placeholder='Dalos' className="signup__input" />
          </div>
          <div className="signup__card">
            <Button
              className="signup__file"
              component="label"
              role={undefined}
              variant="outlined"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Votre profile
              <VisuallyHiddenInput type="file" name="avatar" onChange={(e) => onChange(e)} />
            </Button>
            <input type="email" value={mail} name='mail' onChange={(e) => onChange(e)} placeholder='jeancydalos@gmail.com' className="signup__input"  required />
            <input type="password" value={password} name='password' onChange={(e) => onChange(e)} placeholder='Mot de passe' className="signup__input" />
            <input type="text" value={university} name='university' onChange={(e) => onChange(e)} placeholder='Unversity' className="signup__input" />
            <input type="text" value={faculty} name='faculty' onChange={(e) => onChange(e)} placeholder='Faculty' className="signup__input" />
            <input type="text" value={country} name='country' onChange={(e) => onChange(e)} placeholder='Country' className="signup__input" />
            <input type="text" value={phone} name='phone' onChange={(e) => onChange(e)} placeholder='Phone' className="signup__input" />
            <Button type='submit' className="signup__btn" variant="contained" endIcon={<SendIcon />}>
              Creation du compte
            </Button>
          </div>
        </form>
      </div>
    </div>
 )
}

export default Signup
