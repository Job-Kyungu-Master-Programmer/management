import React from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { HiOutlineUsers } from "react-icons/hi2";
import { BsListCheck } from "react-icons/bs";
import pr from '../assets/student.jpeg'


const Profile = ({ user }) => {

  return (
    <div className="profil">
        <div className="profil__container">
          <div className="profil__image">
              <img src={user ? user.avatar : pr} alt="" className="profil__img" />
          </div>
            <Link to='' className='profil__user' > 
            <CgProfile />
             <span>Votre Profile</span>
            </Link>
            <div className="profil__friends">
             <div className='profil__public'>
               <div className="profil__bloc">
                <HiOutlineUsers />
                <span className="profil__friend">Amis</span>
               </div>
              <strong className="profil__legth">51</strong>
              </div>
            <div className="profil__public">
               <div className="profil__bloc">
                  <BsListCheck />
                  <span className="profil__friend">Publications</span>
               </div>
               <strong className="profil__legth">51</strong>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profile