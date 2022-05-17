import React from 'react'
import { Container,Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import Header from '../components/Header';

export default function Detail() {
  const location = useLocation();
  const music = location.state.music

  return (
    <div>
    <Header accessToken={location.state.accessToken} />
    <Container style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',height:'90vh'}}>
      <div className="card">
        <div style={{display:'flex',justifyContent:'center'}}>
          <img className='imgDetail' src={music.albumUrl} alt='dsfdas' />
        </div>
        <br />
        <div>
          Spotify player
        </div>
        <CardContent >
          <Typography gutterBottom variant="h5" >
            {music.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {music.artist}
          </Typography>
          <br />
          <Button variant="outlined" color="blackx">Save Audio</Button>

        </CardContent>
        {/* <Player accessToken={location.state.accessToken} trackUri={music.uri}/> */}
      </div>
    </Container>
    </div>
    
  )
}
