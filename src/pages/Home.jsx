import React from 'react';
import { Link } from 'react-router-dom';
import videos from '../assets/v-home.mp4';
import us from '../assets/contact.jpeg'
import Banner from '../components/Banner';

const Home = () => {
 return (
    <div className="home">
      <div className="containe home__container">
          <div className="home__top">
            <h1 className="home__title">Etud'<span className="home__sp">Net</span></h1>
              <p className="home__content">
              Une plateforme qui met en avant un réseau dynamique d'étudiants connectés.
              C'est ici que les étudiants trouvent un espace central pour partager des connaissances
              </p>
              <Link to='/sign-in' className='home__link'>Connectez-vous</Link>
              <div className="home__video">
              <video className='home__vid' autoplay loop muted playsinline preload="yes">
                  <source src={videos} type="video/mp4"/>
                </video>
              </div>
          </div>
         <Banner />
      </div>
    </div>
 );
};

export default Home;