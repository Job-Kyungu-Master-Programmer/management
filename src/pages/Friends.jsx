import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Redirect from '../components/Redirect'
import RefreshLoad from '../components/RefreshLoad'

const Friends = ({ users, user }) => {
   // Quand l'user se deconnecte on lui deconnecte aussi puis on lui affiche un Panneau de Redirection
   const [isLoading, setIsLoading] = useState(true);
   // ICi on va simulez le chargement pourqu'il n'yait point de retour a de la page Redirect, quand deja 
   // l'user est connecter, apres le rechargement
   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false);
      }, 2100); // Ajustez le délai selon vos besoins
   }, []);

   if (isLoading) {
      return <div className='refresh'> <RefreshLoad /> </div>; // Et ce RefreshLoad je lui ai mis dans un composant
      // Element Material UI
   }
   // Redirection au Component <Redirect />
   if (user == null) {
      return  <Redirect />
   }
  return (
    <div className="users">
      <div className="container users__container">
        <div className="users__cards">
          <div className='users__card'>
            <h1 className="users__title users__card__title">Tous les utilisateurs et leurs profiles</h1>
            <div className="users__friend__list">
              {users.map(item =>
                <div key={item.id} className="users__friend">
                  <div className="users__friend__image">
                    <img src={item.avatar} alt={item.name} className="users__friend__img" />
                  </div>
                  <div className="users__friend__text">
                    <h3 className="users__friend__name">{item.name}</h3>
                    <span className="users__friend__sp">Etudiant</span>
                    <Link to={`/users/${item.id}`} className='users__friend__link'>Voir profile</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friends