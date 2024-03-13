import React, { useState } from 'react'
import Profile from '../components/Profile'
import Friends from '../components/Friends'
import Search from '../components/Search'
import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ClearIcon from '@mui/icons-material/Clear';
import us from '../assets/student.jpeg'
import pr from '../assets/user.jpeg'

const News = () => {
  const [closePop, setClosePop] = useState(false)

  return (
      <div className="news">
          <div className="container news__container">
               <Profile />
                <div className={closePop ? 'pop__close' : 'pop'}>
                    <div className="pop__container" onClick={() => setClosePop(!closePop)}>
                    </div>
                        <form action="" className="pop__form">
                          <ClearIcon onClick={() => setClosePop(!closePop)} className='pop__icon' />
                            <h1 className="pop__title">Dite quelque chose !</h1>
                            <input type="text" placeholder='Quel sujet ?' className="pop__input pop__input__title" />
                            <input type="file" className="pop__input" />
                            <div className="pop__tool">
                                <AddPhotoAlternateIcon />
                            </div>
                            <textarea placeholder='Quelque chose a publier...' className="pop__textarea"></textarea>
                            <button type='submit' className="pop__btn">Publier</button>
                        </form>
                </div>
               <div className="news__center">
                   <Search />
                   <button onClick={() => setClosePop(true)} className="news__open__pop">
                     Publier quelque chose
                   </button>
                   <div className="news__list">
                    <div className="news__card">
                        <div className="news__users">
                            <div className="news__users__image">
                               <img src={pr} alt="" className="news__users__img" />
                            </div>
                            <div className="news__users__text">
                               <h3 className="news__users__name">Jeancy </h3>
                               <span className="news__users__hours">3 hours ago...</span>
                            </div>
                        </div>
                            <div className="news__image">
                               <img src={us} alt="" className="news__img" />
                            </div>
                            <div className="news__text">
                               <h1 className="news__title">Une plateforme qui met en avant un réseau... </h1>
                               <div className="news__bottom">
                                  <div className="news__like">
                                     <FavoriteBorderIcon className='news__icon' />  <span>150</span>
                                  </div>
                                  <div className="news__delete">
                                     <DeleteForeverIcon className='news__icon' />
                                  </div>
                                  <div className="news__share">
                                     <ShareIcon className='news__icon' />
                                  </div>
                               </div>
                            </div>
                    </div>
                    <div className="news__card">
                        <div className="news__users">
                            <div className="news__users__image">
                               <img src={pr} alt="" className="news__users__img" />
                            </div>
                            <div className="news__users__text">
                               <h3 className="news__users__name">Jeancy </h3>
                               <span className="news__users__hours">3 hours ago...</span>
                            </div>
                        </div>
                            <div className="news__image">
                               <img src={us} alt="" className="news__img" />
                            </div>
                            <div className="news__text">
                               <h1 className="news__title">Une plateforme qui met en avant un réseau... </h1>
                               <div className="news__bottom">
                                  <div className="news__like">
                                     <FavoriteBorderIcon /> 
                                  </div>
                                  <div className="news__delete">
                                     <DeleteForeverIcon />
                                  </div>
                                  <div className="news__share">
                                     <ShareIcon />
                                  </div>
                               </div>
                            </div>
                    </div>
                    <div className="news__card">
                        <div className="news__users">
                            <div className="news__users__image">
                               <img src={pr} alt="" className="news__users__img" />
                            </div>
                            <div className="news__users__text">
                               <h3 className="news__users__name">Jeancy </h3>
                               <span className="news__users__hours">3 hours ago...</span>
                            </div>
                        </div>
                            <div className="news__image">
                               <img src={us} alt="" className="news__img" />
                            </div>
                            <div className="news__text">
                               <h1 className="news__title">Une plateforme qui met en avant un réseau... </h1>
                               <div className="news__bottom">
                                  <div className="news__like">
                                     <FavoriteBorderIcon /> <span>150</span>
                                  </div>
                                  <div className="news__delete">
                                     <DeleteForeverIcon />
                                  </div>
                                  <div className="news__share">
                                     <ShareIcon />
                                  </div>
                               </div>
                            </div>
                    </div>
                   </div>
               </div>
               <Friends />
          </div>
      </div>
  )
}

export default News