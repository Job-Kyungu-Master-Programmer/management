import React from 'react'
import { HiOutlineUsers } from "react-icons/hi2";
import pr from '../assets/student.jpeg'

const Friends = () => {
  return (
    <div className="friends">
       <h2 className="friends__title"><HiOutlineUsers /> Vos amis</h2>
        <div className="friends__container">
           <div className="friends__card">
              <div className="friends__image">
                  <img src={pr} alt="" className="friends__img" />
              </div>
              <div className="friends__text">
                 <h3 className="friends__name">Jeancy Walos</h3>
                 <span className="friends__prof">Etudiant</span>
              </div>
           </div>
           <div className="friends__card">
              <div className="friends__image">
                <img src={pr} alt="" className="friends__img" />
              </div>
              <div className="friends__text">
                 <h3 className="friends__name">Walos</h3>
                 <span className="friends__prof">Etudiant</span>
              </div>
           </div>
           <div className="friends__card">
              <div className="friends__image">
               <img src={pr} alt="" className="friends__img" />
              </div>
              <div className="friends__text">
                 <h3 className="friends__name">Walos</h3>
                 <span className="friends__prof">Etudiant</span>
              </div>
           </div>
           <div className="friends__card">
              <div className="friends__image">
                  <img src={pr} alt="" className="friends__img" />
              </div>
              <div className="friends__text">
                 <h3 className="friends__name">Jeancy Walos</h3>
                 <span className="friends__prof">Etudiant</span>
              </div>
           </div>
           <div className="friends__card">
              <div className="friends__image">
                <img src={pr} alt="" className="friends__img" />
              </div>
              <div className="friends__text">
                 <h3 className="friends__name">Walos</h3>
                 <span className="friends__prof">Etudiant</span>
              </div>
           </div>
           <div className="friends__card">
              <div className="friends__image">
               <img src={pr} alt="" className="friends__img" />
              </div>
              <div className="friends__text">
                 <h3 className="friends__name">Walos</h3>
                 <span className="friends__prof">Etudiant</span>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Friends