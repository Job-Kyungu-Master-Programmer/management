import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import us from '../assets/user.jpeg'
import etudnet from '../assets/ico.png'

import HttpsIcon from '@mui/icons-material/Https';
import { CgMenuLeftAlt } from "react-icons/cg";
import { GrClose } from "react-icons/gr";

import LogoutIcon from '@mui/icons-material/Logout';


const Headers = () => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  const checkedScroll = () => {
     setIsScrolled(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkedScroll)
    return () => window.removeEventListener('scroll', checkedScroll)
  },[])

 const toggleMenu = () => {
    setIsOpen(!isOpen);
 };

  return (
     <div className={isScrolled ? 'sticky' : 'header'}>
          <div className="container header__container">
          <Link to='/' className={isScrolled ? 'sticky__logo' : 'header__logo'}>
              <img src={etudnet} alt="" className="header__logo__img" />
             </Link>
              <nav className="header__nav">
                <ul className={isOpen ? 'openList' : 'header__list'}>
                    <li
                      onClick={() => setIsOpen(false)}
                      className="header__item">
                        <Link to="/" className="header__link">
                            Home 
                        </Link>
                    </li>
                    <li 
                      onClick={() => setIsOpen(false)}
                      className="header__item">
                        <Link to='/about' className="header__link">
                            About 
                        </Link>
                    </li>
                    <li 
                      onClick={() => setIsOpen(false)}
                      className="header__item">
                        <Link to='/news' className="header__link">
                            Nouvelles 
                        </Link>
                    </li>
                    <li 
                      onClick={() => setIsOpen(false)}
                      className="header__item">
                        <Link to='/friends' className="header__link">
                            Amis 
                        </Link>
                    </li>
                    <li 
                      onClick={() => setIsOpen(false)}
                      className="header__item">
                        <Link to='/contacts' className="header__link">
                            Contactez-nous 
                        </Link>
                    </li>
                    {/* <li 
                      onClick={() => setIsOpen(false)}
                      className="header__item">
                        <Link to='/new' className="header__link">
                            New
                        </Link>
                    </li> */}
                    {/* <li 
                      onClick={() => setIsOpen(false)}
                      className="header__item">
                        <Link to='/myprofile' className="header__link">
                            My Profile
                        </Link>
                    </li> */}
                    <li 
                      onClick={() => setIsOpen(false)}
                      className="header__item">
                        <Link to='/user' className="header__link">
                           User
                        </Link>
                    </li>
                    <div className="header__menu__bloc">
                        <button 
                         onClick={() => setMenu(!menu)}
                         className="header__btn__connect">
                           <span> Rejoins les intellectuels</span> <HttpsIcon className="header__btn__connect__icon" />
                        </button>
                        <div  onClick={() => setIsOpen(false)}
                           className={  menu ?  "header__menu" : "menu__forConnect"}>
                            <div 
                              onClick={() => setMenu(!menu)}
                              className="header__menu__closed"></div>
                            <Link 
                             onClick={() => setMenu(!menu)}
                              to='/sign-in' className="header__menu__link">Connexion</Link>
                            <Link 
                             onClick={() => setMenu(!menu)}
                              to='/signup' className="header__menu__link">S'inscrire</Link>
                        </div>
                    </div>
                    <div className="header__user">
                        <img src={us} alt="user" className="header__user__image" />
                       <div className="header__user__text">
                          <h4 className="header__user__name">Jeancy</h4>
                            <button className="header__user__logout">
                                <LogoutIcon className='header__user__logout__icon' />
                            </button>
                       </div>
                    </div>
                </ul>
                <button 
                 onClick={toggleMenu}
                 className="header__bars sticky__btn">
                    {isOpen ? (
                        <GrClose className='header__bars__icon header__bars__close' />
                        ) : (
                        <CgMenuLeftAlt className='header__bars__icon sticky__bars__open' />
                    )}
                </button>
              </nav>
          </div>
     </div>
  )
}

export default Headers