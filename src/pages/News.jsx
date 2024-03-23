import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Profile from '../components/Profile'
import Friends from '../components/Friends'
import Search from '../components/Search'
import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ClearIcon from '@mui/icons-material/Clear';
import pr from '../assets/user.jpeg'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import Redirect from '../components/Redirect'
import RefreshLoad from '../components/RefreshLoad'

import Base from '../Api/Base' // Le chemin d'importation est correct




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







const News = ({ pubs, setPubs, title, setTitle, setContent, content, user, users, like, addPub, setImg }) => {
   const [closePop, setClosePop] = useState(false);
   const [search, setSearch] = useState('')
   const [preview, setPreview] = useState(null);

   //State for response
   const [warDel, setWarDel] = useState(null)



   /*HandleImageChange*
    => est une function qui fait en sorte que , quand on selectionne la photo
   On le met dans l'input type='file' que celui-ci affiche une petite photo a cote. avant de soummettre*/
   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setPreview(reader.result);
            setImg(file); // Mettre à jour l'état avec le fichier sélectionné
         };
         reader.readAsDataURL(file);
      } else {
         setPreview(null);
         setImg(null);
      }
   };

   // Utilisons les setters specifiques pour chaque champs
   const onChange = (e) => {
      const { name, value, files } = e.target;
      if (name === 'img') {
         setImg(files[0]);
      } else {
         // Utiliser les setters spécifiques pour chaque champ,
         //Sans cela formData ne pourra pas reconnaitre la valeur du champ
         switch (name) {
            case 'title':
               setTitle(value);
               break;
            case 'content':
               setContent(value);
               break;
            default:
               break;
         }
      }
   };

   // Supprimer une publication
   const onDelete = (id) => {
      const pubId = pubs.filter(p => p.id !== id)
      Base.delet(id, pubId).then(result => {
         setPubs(pubs.map(p => p.id !== id ? p : result))
         setPubs(pubs.filter(p => p.id !== id))
      }).finally(su => {
         setWarDel('Vous venez de supprimer votre publication')
         setTimeout(() => {
            setWarDel(null)
         }, 2000)
      })
   }


   //Pour inverser les publications, que le dernier envoyer soit au dessus des ceux qui l'on preceder
   const reversedPub = pubs.slice().reverse();


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
      <div className="news">
         {(warDel &&
            <div className="popResp">
               <Alert className="popResp__container" severity="warning" color="warning">
                  {warDel}
               </Alert>
            </div>
         )}
         <div className="container news__container">
            <Profile user={user} />
            <div className={closePop ? 'pop__close' : 'pop'}>
               <div className="pop__container" onClick={() => setClosePop(!closePop)}>
               </div>
               <form onSubmit={addPub} encType='multipart/form-data' className="pop__form">
                  <ClearIcon onClick={() => setClosePop(!closePop)} className='pop__icon' />
                  <h1 className="pop__title">Dite quelque chose !</h1>
                  <input type="text" value={title} name='title' onChange={(e) => onChange(e)} placeholder='Quel sujet ?' className="pop__input pop__input__title" required />
                  <Button
                     className="signup__file"
                     component="label"
                     role={undefined}
                     variant="outlined"
                     tabIndex={-1}
                     startIcon={<CloudUploadIcon />}
                  >
                     Ajouter une image
                     <VisuallyHiddenInput type="file" name='img' onChange={handleImageChange} required />
                  </Button>
                  <div className="pop__tool">
                     <AddPhotoAlternateIcon />
                  </div>
                  {preview && <img src={preview} alt="Preview" style={{ objectFit: 'contain', objectPosition: 'center center', width: '120px', height: '120px' }} />}
                  <textarea type="text" value={content} name='content' onChange={(e) => onChange(e)} placeholder='Quelque chose a publier...' className="pop__textarea" required></textarea>
                  <button type='submit' onClick={() => setClosePop(false)} className="pop__btn">Publier</button>
               </form>
            </div>
            <div className="news__center">
               <Search search={search} setSearch={setSearch} />
               <button onClick={() => setClosePop(true)} className="news__open__pop">
                  Publier quelque chose
               </button>
               <div className="news__list">
                  {reversedPub.filter(p => p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(item =>
                     <div className="news__card" key={item.id} >
                        <div className="news__users">
                           <div className="news__users__image">
                              <img src={item.user ? item.user.avatar : 'defaultAvatar.jpg'} alt="User Avatar" className="news__users__img" />
                           </div>
                           <div className="news__users__text">
                              <h3 className="news__users__name">{item.user ? item.user.name : 'Utilisateur non défini'}</h3>
                              <span className="news__users__hours">
                                 {item.hours}:{item.minutes}
                              </span>
                           </div>
                        </div>
                        <AspectRatio style={{ borderRadius: ".7em", marginBottom: "1.1em" }}>
                           <img
                              src={item.img}
                              srcSet={item.img}
                              sizes="(min-width: 1024px) 100vw, 100vw" // Ajusté pour être plus flexible
                              loading="lazy"
                              alt={item.title}
                              style={{
                                 position: 'absolute',
                                 inset: 0,
                                 boxSizing: 'border-box',
                                 padding: 0,
                                 margin: 'auto',
                                 display: 'block',
                                 width: '0px',
                                 height: '0px',
                                 minWidth: '100%',
                                 maxWidth: '100%',
                                 minHeight: '100%',
                                 maxHeight: '100%',
                                 border: '1px solid #ccc',
                                 // objectFit: 'contain',
                                 borderRadius: '.7em',
                              }}
                           />
                        </AspectRatio>
                        <div className="news__text">

                           <Link to={`/news/${item.id}`} className="news__title">{item.title}</Link>
                           <div className="news__bottom">
                              <div className="news__like">
                                 <FavoriteBorderIcon className='news__icon' />  <span>150</span>
                              </div>
                              <div onClick={() => onDelete(item.id)} className="news__delete">
                                 <DeleteForeverIcon className='news__icon' />
                              </div>
                              <div className="news__share">
                                 <ShareIcon className='news__icon' />
                              </div>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
            <Friends users={users} user={user} />
         </div>
      </div>
   )
}

export default News