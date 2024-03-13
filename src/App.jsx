import React, { useEffect, useState } from 'react'
import Headers from './components/Headers'
import { Route, Routes } from 'react-router-dom'
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
import Base from './Api/Base' // Assurez-vous que le chemin d'importation est correct

const App = () => {
  // Logic for User 
  //  const [user, setUser] = useState(null);

  const [users, setUsers] = useState([])
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [university, setUniversity] = useState('univ');
  const [faculty, setFaculty] = useState('fac');
  const [country, setCountry] = useState('country');
  const [phone, setPhone] = useState('phone');
  const [avatar, setAvatar] = useState(null);


  useEffect(() => {
    Base.getUsers().then(result => {
      setUsers(result)
    })
  }, [])

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar') {
      setAvatar(files[0]);
    } else {
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
    } catch (err) {
      alert('Erreur lors de la création de l\'utilisateur');
    }
  };


  // Logic for Pub
  return (
    <div className="app">
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/friends' element={<Friends users={users} />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/new' element={<New />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/user' element={<User />} />
        <Route path='/sign-in' element={<Sign />} />
        <Route path='/signup' element={<Signup addUser={addUser}
          onChange={onChange} name={name} lastName={lastName} mail={mail} password={password}
          avatar={avatar} university={university} faculty={faculty} country={country} phone={phone} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
