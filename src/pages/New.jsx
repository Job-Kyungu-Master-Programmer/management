import React from 'react';
import { useParams } from 'react-router-dom';
import pr from '../assets/student.jpeg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const New = ({ pub }) => {
 const ids = useParams().id; // Récupère l'ID de la publication à partir de l'URL
 const newPub = pub.find(p => p.id === ids); 

 // Vérifie si newPub est défini avant de continuer
 if (!newPub) {
    return <div>Chargement...</div>;
 }

 return (
    <div className="new">
      <div className="container new__container">
        <div className="new__image">
          <img src={newPub.img || pr} alt={newPub.title} loading="lazy" className="new__img" />
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
