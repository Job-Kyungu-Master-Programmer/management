import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import Sheet from '@mui/joy/Sheet';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const User = () => {
    return (
        <Box className="user"  >
            <div className="container user__container">
                <Card className='card--content'
                >
                    <AspectRatio className='card--content-img' flex ratio="1" maxHeight={182} sx={{ minWidth: 292 }}>
                        <img 
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent className='cardContent'>
                        <span className='user__sp user__name'>
                            Alex Morrison
                        </span>
                        <span className='user__sp user__funct'>
                            Senior Developer
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
                                    Articles
                                </span>
                                <span>34</span>
                            </div>
                            <div className='user__blog'>
                                <span className='user__sp'>
                                    Faculte
                                </span>
                                <span>Droit</span>
                            </div>
                            <div className='user__blog'>
                                <span className='user__sp'>
                                    Universite
                                </span>
                                <span>Universite de Kinshasa</span>
                            </div>
                            <div className='user__blog'>
                                <span className='user__sp'>
                                    Amis
                                </span>
                                <span>150</span>
                            </div>
                            <div className='user__blog'>
                                <span className='user__sp'>
                                    Rating
                                </span>
                                <span>8.9</span>
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
                            +145 852 6475
                        </Button>
                        <Button className="user__identity" variant="outlined" size="medium">
                           Etats-unis
                        </Button>
                        </div>
                    </CardContent>
                </Card>
                <div className="user__bottom">
                    <h2 className="user__bottom__title">Articles publier </h2>
                    <List className='user__list' >
                        <ListItem  className='user__item'>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286" />
                            </ListItemAvatar>
                            <div className="user__item__text">
                                <h3 className="user__tr"> Wish I could come, but I'm out of town this…</h3>
                            </div>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem  className='user__item'>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286" />
                            </ListItemAvatar>
                            <div className="user__item__text">
                                <h3 className="user__tr"> Wish I could come, but I'm out of town this…</h3>
                            </div>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem  className='user__item'>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286" />
                            </ListItemAvatar>
                            <div className="user__item__text">
                                <h3 className="user__tr"> Wish I could come, but I'm out of town this…</h3>
                            </div>
                        </ListItem>
                    </List>
                </div>
            </div>
        </Box>
    );
}

export default User

