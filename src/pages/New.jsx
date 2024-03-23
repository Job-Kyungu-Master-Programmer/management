import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import p from '../assets/contact.jpeg'
import Redirect from '../components/Redirect'
import RefreshLoad from '../components/RefreshLoad'

const New = ({ pub, user }) => {
  const ids = useParams().id; // Récupère l'ID de la publication à partir de l'URL
  const newPub = pub.find(p => p.id === ids);
  
  // Quand l'user se deconnecte on lui deconnecte aussi puis on lui affiche un Panneau de Redirection
  const [isLoading, setIsLoading] = useState(true);
  // ICi on va simulez le chargement pourqu'il n'yait point de retour a de la page Redirect, quand deja 
  // l'user est connecter, apres le rechargement
  useEffect(() => {
     setTimeout(() => {
        setIsLoading(false);
     }, 2100); // Ajustez le délai selon vos besoins
  }, []);

  // Vérifie si newPub est défini avant de continuer
  if (!newPub) {
    return <div>Chargement...</div>;
  }


  if (isLoading) {
     return <div className='refresh'> <RefreshLoad /> </div>; // Et ce RefreshLoad je lui ai mis dans un composant
     // Element Material UI
  }
  // Redirection au Component <Redirect />
  if (user == null) {
     return  <Redirect />
  }

  return (
    <div className="new">
      <div className="container new__container">
        {/* <div className="new__image">
          <img src={newPub.img} alt={newPub.title} loading="lazy" className="new__img" />
        </div> */}
       <div className="new__image">
          <img
            src={newPub.img}
            srcSet={newPub.img}
            sizes="(min-width: 1024px) 100vw, 100vw"
            loading="lazy"
            alt={newPub.title}
            style={{
              position: 'absolute',
              inset: 0,
              boxSizing: 'border-box',
              padding: 0,
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: '0px',
              height: '0px',
              minWidth: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
              borderRadius: '.7em',
            }}
          />
        </div>
        <div className="new__text">
          <h1 className="new__title">{newPub.title}</h1>
          <div className="new__title__bottom">
            <h3 className="new__name">Auteur : <span>Jeancy Dalos</span></h3>
            <div className="new__date">
              <span>23 - 05 - 2024</span>
              <span>
                <FavoriteBorderIcon /> <em>50</em>
              </span>
            </div>
          </div>
        </div>
        <div className="new__sl-large">
          <p className="new__content">
            {newPub.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default New;
