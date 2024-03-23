import React from 'react'
import { HiOutlineUsers } from "react-icons/hi2";
// import pr from '../assets/student.jpeg'

const Friends = ({ users, user }) => {
   return (
      <div className="friends">
         <h2 className="friends__title"><HiOutlineUsers /> Utilisateurs</h2>
         <div className="friends__container">
            {users.map(item =>
               <div className="friends__card" key={item.id}>
                  <div className="friends__image">
                     <img src={item.avatar} alt={item.name} className="friends__img" />
                  </div>
                  <div className="friends__text">
                     <h3 className="friends__name">{item.name} {item.lastName}</h3>
                     <span className="friends__prof">Etudiant</span>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default Friends