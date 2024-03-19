import bul from '../assets/bul.svg'
import sms from '../assets/sms.svg'

const Banner = () => {
  return (
    <div className="banner">
       <div className="container banner__container">
            <div className="banner__card">
                <div className="banner__image">
                <img src={bul} alt="" className="banner__img" />
            </div>
            <div className="banner__text">
                <h1 className="banner__title">A nous le future</h1>
                <p className="banner__content">
                 Notre vision est de créer un espace central pour les étudiants, où ils peuvent non seulement 
                 partager des connaissances, 
                </p>
                <p className="banner__content">
                mais aussi développer des compétences essentielles pour leur avenir.
                 En mettant l'accent sur la collaboration et l'échange d'idées, nous visons à créer un environnement
                 d'apprentissage qui inspire et motive les étudiants à atteindre leurs objectifs académiques et personnels.
                </p>
            </div>
            </div>
            <div className="banner__card banner__card__bottom">
                <div className="banner__image">
                <img src={sms} alt="" className="banner__img" />
            </div>
            <div className="banner__text">
                <h1 className="banner__title">Forum des etudiants</h1>
                <p className="banner__content">
                 Notre vision est de créer un espace central pour les étudiants, où ils peuvent non seulement 
                 partager des connaissances, 
                </p>
                <p className="banner__content">
                mais aussi développer des compétences essentielles pour leur avenir.
                 En mettant l'accent sur la collaboration et l'échange d'idées, nous visons à créer un environnement
                 d'apprentissage qui inspire et motive les étudiants à atteindre leurs objectifs académiques et personnels.
                </p>
            </div>
            </div>
       </div>
    </div>
  )
}

export default Banner