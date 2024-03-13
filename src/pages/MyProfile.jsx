import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import us from '../assets/student.jpeg'
import { useParams } from 'react-router-dom';
import Base from '../Api/Base';

const MyProfile = () => {
   const { userId } = useParams();

   const [firstName, setFirstName] = useState('ss');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [university, setUniversity] = useState('');
   const [faculty, setFaculty] = useState('');
   const [country, setCountry] = useState('');
   const [phone, setPhone] = useState('');
   const [photo, setPhoto] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('university', university);
      formData.append('faculty', faculty);
      formData.append('country', country);
      formData.append('phone', phone);
      formData.append('photo', photo);
      // Ajoutez d'autres champs ici
      if (photo) {
          formData.append('photo', photo);
      }

      try {
          const updatedUser = await Base.updateUser(formData, userId);
          console.log('Utilisateur mis à jour :', updatedUser);
          // Gérez la réponse ici
      } catch (error) {
          console.error('Erreur lors de la mise à jour du profil :', error);
          // Gérez l'erreur ici
      }
  };

  return (
    <div className="myprofile">
       <div className="container myprofile__container">
           <h1 className="myprofile__title">Mon profil</h1>
           <span className="myprofile__subtitle">Gerez les parametres de vtre profil</span>

           <div className="myprofile__heading">
            <div className="myprofile__image">
              <img src={us} alt="" className="myprofile__img" />
            </div>
            <div className="myprofile__text">
               <button className="myprofile__btn">Changer photo</button>
               <button className="myprofile__btn">
                 <DeleteForeverIcon className='myprofile__delete' />
                 <span>Supprimer</span>
               </button>
            </div>
           </div>
           <div className="myprofile__bar">Ajoutez votre photo. La taille maximale est 256 x 256 px</div>
           <form onSubmit={handleSubmit} encType='multipart/form-data'  className="myprofile__infos">
             <div className="myprofile__card">
                <label htmlFor="" className="myprofile__label">Prenom</label>
                <input type="text"  value={firstName}
                 onChange={(e) => setFirstName(e.target.value)} className="myprofile__input" /> 
             </div> 
             <div className="myprofile__card">
                <label htmlFor="" className="myprofile__label">Nom</label>
                <input type="text" value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
                 className="myprofile__input" /> 
             </div> 
             <div className="myprofile__card">
                <label htmlFor="" className="myprofile__label">Adress email</label>
                <input type="text" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 className="myprofile__input" /> 
             </div> 
             <div className="myprofile__card">
                <label htmlFor="" className="myprofile__label">Universite</label>
                <input type="text" value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="myprofile__input" /> 
             </div> 
             <div className="myprofile__card">
                <label htmlFor="" className="myprofile__label">Faculte</label>
                <input type="text" value={faculty}
                 onChange={(e) => setFaculty(e.target.value)}  className="myprofile__input" /> 
             </div>   
             <div className="myprofile__card">
                <label htmlFor="" className="myprofile__label">Country</label>
                <input type="text" value={country}
                 onChange={(e) => setCountry(e.target.value)} className="myprofile__input" /> 
             </div> 
             <div className="myprofile__card">
                <label htmlFor="" className="myprofile__label">Numero</label>
                <input type="text" value={phone}
                 onChange={(e) => setPhone(e.target.value)} className="myprofile__input" /> 
             </div> 
             <div className="myprofile__card">
                <label htmlFor="" className="myprofile__label">Photo</label>
                <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
             </div> 
             <div className="myprofile__card myprofile__card__btn">
                <button type='submit' className="myprofile__submit">Mettre à jour le profil</button>
             </div>

           </form>
       </div>
    </div>
  )
}

export default MyProfile