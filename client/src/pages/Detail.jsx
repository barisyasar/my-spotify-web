import React from 'react'
import { Container,Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useLocation } from "react-router-dom";
import Player from '../components/Player';

export default function Detail() {

  const location = useLocation();
  console.log(location.state.objeOoption)

  const music = location.state.objeOoption

  return (
    <Container>
      <div className="card">
        <div style={{display:'flex',justifyContent:'center'}}>
          <img className='imgDetail' src={music.albumUrl} alt='dsfdas' />
        </div>
        <br />
        <div style={{textAlign:'center'}}>
          spotify player
        </div>
        <CardContent style={{display:'flex', justifyContent:'center'}}>
          <div >
          <div style={{display:'flex'}}>
          <Typography gutterBottom variant="h5" >
            {music.title}
          </Typography>
          <IconButton aria-label="bookmark" style={{alignSelf:'center'}}>
            <BookmarkIcon />
          </IconButton>
          </div>
          <Typography variant="body2" color="text.secondary">
          {music.artist}
          </Typography>
          </div>
        </CardContent>
        <Player accessToken={location.state.accessToken} trackUri={music.uri}/>
      </div>
    </Container>
  )
}
