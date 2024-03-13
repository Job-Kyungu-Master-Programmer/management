import {Link} from 'react-router-dom'
import { HiMiniArrowUpLeft } from "react-icons/hi2";
import { RxDividerVertical } from "react-icons/rx";
import student from '../assets/student.jpeg'




const About = () => {
  return (
    <div className="about">
       <div className="container about__container">
           <div className="about__card">
              <div className="about__return">
                  <Link to='/' className='about__link'> 
                    <strong className="about__icon">
                      <HiMiniArrowUpLeft />
                    </strong>
                    <span>
                      Accueil  
                    </span> 
                  </Link>
                  <span className="about__icon">
                      <RxDividerVertical />
                  </span>
                <span className="about__return__is">About</span>
              </div>
              <h1 className="about__title">
                About E-Course Website, About Us Page
              </h1>
              <p className="about__content">
                  We're happy to show you another concept that Yuda designed, 
                  the about us page of Kawruh, an e-course platform. The main concept of this work is to help people
              </p>
              <p className="about__content">
                  understand the bacgkground of the platform easily. The clean 
                  style he made here is to make the user easily stay accessing the website as long as they can without
              </p>
           </div>
           <div className="about__card">
              <img src={student} alt="" className="about__img" />
              <ul className="about__text">
                 <li className="about__item">
                    <h3 className="about__num">3.5</h3>
                    <span className="about__sp">Years experiences</span>
                 </li>
                 <li className="about__item">
                    <h3 className="about__num">23</h3>
                    <span className="about__sp">Projects challenge</span>
                 </li>
                 <li className="about__item">
                    <h3 className="about__num">800+</h3>
                    <span className="about__sp">Positif commentaires</span>
                 </li>
                 <li className="about__item">
                    <h3 className="about__num">100K</h3>
                    <span className="about__sp">Positif commentaires</span>
                 </li>
              </ul>
           </div>
       </div>
    </div>
  )
}

export default About