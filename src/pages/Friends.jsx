import React, { useState } from 'react'
import { IoPersonAddOutline } from 'react-icons/io5'
import Table from '@mui/joy/Table';
import  us from '../assets/student.jpeg'

const Friends = ({ users }) => {
  const [addFriend, setAddFriend] = useState(null)
  const [changeSection, setChangeSection] = useState(null)

  return (
    <div className="users">
      <div className="container users__container">
        <div className="users__top">
          <button 
           onClick={() => setChangeSection(false)}
           className="users__top__scroll"> Touts les utilisateurs </button>
          <button 
            onClick={() => setChangeSection(true)}
            className="users__top__scroll"> Mes amis(e) </button>
        </div>
        <div className="users__cards">
          <Table className={changeSection ? 'users__table' : 'none'}
            stickyHeader
            sx={(theme) => ({
              // '& tr > *:first-child': { bgcolor: 'white' },
              '& th[scope="col"]': theme.variants.solid.neutral,
              // '& td': theme.variants.soft.neutral,
            })}
          >
            <h1 className="users__title">Utilisateurs dans la plateforme</h1>
              <tr className='users__tbody__tr'>
                <th scope="col">Avatar</th>
                <th scope="col">Nom & Post-nom</th>
                <th scope="col">Universite</th>
                <th scope="col">Faculte</th>
                <th scope="col">Ajouter un(e) amis(e)</th>
              </tr>
            <tbody className='users__tbody'>
              {users.map(user => 
                 <tr key={user.id}>
                 <th scope="row">
                   <img src={user.avatar} alt={user.name} className="users__card__top__case__img" />
                 </th>
                 <td><span className="users__th">{ user.name }</span></td>
                 <td><span className="users__th">{ user.university }</span></td>
                 <td><span className="users__th">{ user.faculty }</span></td>
                 <td>
                   <span 
                    onClick={() => setAddFriend(!addFriend)}
                    className="users__th users__add">
                      {addFriend ? 'Amis(e)' :  <IoPersonAddOutline />}
                   </span>
                 </td>
               </tr>  
              )}
            </tbody>
          </Table>
          <div className={changeSection ? 'none' : 'users__card'}>
          <h1 className="users__title users__card__title">Mes amis</h1>
            <div className="users__friend__list">
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            <div className="users__friend">
              <div className="users__friend__image">
                <img src={us} alt="user congo" className="users__friend__img" />
              </div>
              <div className="users__friend__text">
                <h3 className="users__friend__name">Jeancy Dalos</h3>
                <span className="users__friend__sp">Etudiant</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friends