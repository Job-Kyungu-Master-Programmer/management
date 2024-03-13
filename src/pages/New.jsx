import React from 'react'
import pr from '../assets/student.jpeg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const New = () => {
  return (
     <div className="new">
        <div className="container new__container">
            <div className="new__image">
               <img src={pr} alt="" className="new__img" />
            </div>
            <div className="new__text">
               <h1 className="new__title">Lorem Lorem Lorem Lorem LOrem</h1>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt veniam nulla ratione molestiae perferendis quae corporis quia nihil temporibus a excepturi saepe est, possimus suscipit qui? Quo, eum maiores?
               </p>
               <p className="new__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt veniam nulla ratione molestiae perferendis quae corporis quia nihil temporibus a excepturi saepe est, possimus suscipit qui? Quo, eum maiores?
               </p>
            </div>
        </div>
     </div>
  )
}

export default New