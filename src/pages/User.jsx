import * as React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import Redirect from '../components/Redirect'
import RefreshLoad from '../components/RefreshLoad'
import BlurOnIcon from '@mui/icons-material/BlurOn';
import Sheet from '@mui/joy/Sheet';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const User = ({ users, user }) => {
    const ids = useParams().id // Recuperation ID de chaque User
    const usersItem = users.find(u => u.id === ids)

    // Quand l'user se deconnecte on lui deconnecte aussi puis on lui affiche un Panneau de Redirection
    const [isLoading, setIsLoading] = useState(true);
    // ICi on va simulez le chargement pourqu'il n'yait point de retour a de la page Redirect, quand deja 
    // l'user est connecter, apres le rechargement
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2100); // Ajustez le délai selon vos besoins
    }, []);

    //tRES IMPORTANT ,c'est ce qui nous permet a recharger la page sans que la oage ne soit pas introuvable
    if (!usersItem) {
        return null
        // return <div>chargement...</div>
    }


    if (isLoading) {
        return <div className='refresh'> <RefreshLoad /> </div>; // Et ce RefreshLoad je lui ai mis dans un composant
        // Element Material UI
    }
    // Redirection au Component <Redirect />
    if (user == null) {
        return <Redirect />
    }



    return (
        <Box className="user"  >
            <div className="container user__container">
                <Card className='card--content'
                >
                    <AspectRatio className='card--content-img' flex ratio="1" maxHeight={182} sx={{ minWidth: 292 }}>
                        <img
                            src={usersItem.avatar}
                            srcSet={usersItem.avatar}
                            loading="lazy"
                            alt={usersItem.name}
                        />
                    </AspectRatio>
                    <CardContent className='cardContent'>
                        <span className='user__sp user__name'>
                            {usersItem.name}  {usersItem.lastName}
                        </span>
                        <span className='user__sp user__funct'>
                            Etudiant
                        </span>
                        <Sheet
                            sx={{
                                bgcolor: 'background.level1',
                                borderRadius: 'sm',
                                p: 1.5,
                                my: 1.5,
                                display: 'flex',
                                gap: 2,
                                '& > div': { flex: 1 },
                            }}
                        >
                            <div className='user__blog'>
                                <span className='user__sp'>
                                    Articles Publier
                                </span>
                                <span>{usersItem.pubs.length}</span>
                            </div>
                            <div className='user__blog'>
                                <span className='user__sp'>
                                    Faculte
                                </span>
                                <span>{usersItem.faculty}</span>
                            </div>
                            <div className='user__blog'>
                                <span className='user__sp'>
                                    Universite
                                </span>
                                <span>{usersItem.university}</span>
                            </div>
                            {/* <div className='user__blog'>
                                <span className='user__sp'>
                                    Amis
                                </span>
                                <span>150</span>
                            </div> */}
                            <div className='user__blog'>
                                <span className='user__sp'>
                                    Follow
                                </span>
                                <span>8</span>
                            </div>
                        </Sheet>
                        <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                            <Button className='user__button' variant="outlined" color="neutral">
                                Chat
                            </Button>
                            <Button className='user__button' variant="solid" color="primary">
                                Follow
                            </Button>
                        </Box>
                        <div className="user__info">
                            <Button className="user__identity" variant="outlined" size="medium">
                                {usersItem.phone}
                            </Button>
                            <Button className="user__identity" variant="outlined" size="medium">
                                {usersItem.country}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <div className="user__bottom">
                    <h2 className="user__bottom__title">Articles publier </h2>
                    <List className='user__list' >
                        {usersItem.pubs.map(item =>
                            <ListItem className='user__item' key={item.id}>
                                <ListItemAvatar>
                                    <BlurOnIcon />
                                </ListItemAvatar>
                                <div className="user__item__text">
                                    <h3 className="user__tr"> {item.title}</h3>
                                </div>
                            </ListItem>
                        )}
                        <Divider variant="inset" component="li" />
                    </List>
                </div>
            </div>
        </Box>
    );
}

export default User

