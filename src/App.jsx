import React, { useEffect, useState } from 'react'
import Headers from './components/Headers'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import New from './pages/New'
import Friends from './pages/Friends'
import MyProfile from './pages/MyProfile'
import Contact from './pages/Contact'
import User from './pages/User'
import Sign from './auth/Sign'
import Signup from './auth/Signup'
import Footer from './components/Footer'
import Success from './components/Sucess'
import Base from './Api/Base' // Assurez-vous que le chemin d'importation est correct
import logAuth from './Api/logAuth'

const App = () => {
  // Logic for User 
   const [user, setUser] = useState();

  //State for Response
  const [sucess, setSucess] = useState(null)
  const navigate = useNavigate()
  const [logResponse, setLogResponse] = useState(null)
  const [isLoad, setIsLoad] = useState(null) // Pour faire de loading a la page sign-in

  const [users, setUsers] = useState([])
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [university, setUniversity] = useState('');
  const [faculty, setFaculty] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState(null);
  //On commence la partie de la publication
  const [pubs, setPubs] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [like, setLike] = useState(0)
  const [img, setImg] = useState(null)
  // ==============================================================

  // Boucle pour afficher les utilisateurs
  useEffect(() => {
    Base.getUsers().then(result => {
      setUsers(result)
    })
  }, [])

  // Boucle por afficher les Publications 
  useEffect(() => {
    Base.getAll().then(result => {
       setPubs(result)
    })
  }, [])


  // Pour valider mes champs *
  const resetForm = () => {
    setName('');
    setLastName('');
    setMail('');
    setPassword('');
    setUniversity('');
    setFaculty('');
    setCountry('');
    setPhone('');
    setAvatar(null);
    setTitle('');
    setContent('');
    setImg(null);
   };

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar') {
      setAvatar(files[0]);
     }  else {
      // Utiliser les setters spécifiques pour chaque champ
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'lastName':
          setLastName(value);
          break;
        case 'mail':
          setMail(value);
          break;
        case 'university':
          setUniversity(value)
          break;
        case 'faculty':
          setFaculty(value)
          break;
        case 'phone':
          setPhone(value)
          break;
        case 'country':
          setCountry(value)
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
    }
  };


  const addUser = async (e) => {
    e.preventDefault();
    const formUser = new FormData();
    formUser.append('name', name);
    formUser.append('lastName', lastName);
    formUser.append('mail', mail);
    formUser.append('password', password);
    formUser.append('university', university);
    formUser.append('faculty', faculty);
    formUser.append('country', country);
    formUser.append('phone', phone);
    formUser.append('avatar', avatar);

    try {
      const result = await Base.createUser(formUser);
      setUsers(users.concat(result));
      resetForm()
      navigate('/sign-in')
    } catch (err) {
      alert('Erreur lors de la création de l\'utilisateur');
    }
  };
  
  // Logic for Pub
  // addPub est notre funct* pour ajouter des publicat* a la DB avec les images
  const addPub = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
    const dates = new Date();
    const hours = dates.getHours();
    const minutes = dates.getMinutes();
    const day = dates.getDate();
    const month = dates.getMonth() + 1; // Les mois sont indexés à partir de 0
    const year = dates.getFullYear();
    const formPub = new FormData();
    formPub.append('title', title);
    formPub.append('content', content);
    formPub.append('img', img);
    formPub.append('hours', hours)
    formPub.append('minutes', minutes)
    formPub.append('day', day)
    formPub.append('month', month)
    formPub.append('year', year)
   
    try {
        const result = await Base.createPub(formPub);
        setPubs(pubs.concat(result));
        resetForm();
        setSucess('Commentaire bien ajouté!');
        setTimeout(() => {
          setSucess(null);
        }, 2500);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la publication:', error);
    }
};



   useEffect(() => {
    const loggedUser = window.localStorage.getItem("userIn");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
      Base.setToken(user.token);
    }
 }, []);

 // Logique pour la connexion
 const addLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await logAuth.login({ mail, password });
      window.localStorage.setItem('userIn', JSON.stringify(user));
      setUser(user);
      Base.setToken(user.token);
      setIsLoad(`Bienvenu(e) ${user.name}`);
      setTimeout(() => {
        navigate('/news');
      }, 3000);
    } catch (exception) {
      setLogResponse("Identifiants incorrects");
      setTimeout(() => {
        setLogResponse(null);
      }, 4500);
    }
 };

 // Déconnecter l'utilisateur avec le bouton
 const logout = () => {
    window.localStorage.removeItem('userIn');
    setUser(null);
    Base.setToken(null);
 };

  console.log(user)
  console.log('localStorage: ', window.localStorage.getItem("userIn"));

  return (
    <div className="app">
      <Headers user={user} logout={logout} />
      {/* sucesss pour remettre des reponse */}
      <Success success={sucess} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path="/news"
          element={
              <News pubs={pubs} setPubs={setPubs} addPub={addPub} title={title}
                    content={content} like={like} setLike={setLike} img={img} setContent={setContent}
                    setTitle={setTitle} setImg={setImg} user={user} users={users} />
          }
        />
        <Route path='/friends' element={<Friends users={users} user={user} />} />
        <Route path='/contacts' element={<Contact />} />
        <Route
          path="/news/:id"
          element={
              <New pub={pubs} user={user} />
          }
        />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route 
        path='/users/:id' 
        element={
        <User users={users} user={user}
         />}
        />
        <Route path='/sign-in' element={<Sign addLogin={addLogin}
        password={password} setPassword={setPassword} mail={mail} setMail={setMail} isLoad={isLoad} 
        logResp={logResponse}/>} />
        <Route path='/signup' element={<Signup addUser={addUser}
          onChange={onChange} name={name} lastName={lastName} mail={mail} password={password}
          avatar={avatar} university={university} faculty={faculty} country={country} phone={phone} isLoad={isLoad} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
