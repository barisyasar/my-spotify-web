import React, {useEffect} from 'react'
import { Container,Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import { useLocation } from "react-router-dom";
import Header from '../components/Header';
import { spotifyApi } from '../api/SpotifyApi';
import Player from '../components/Player';

export default function Detail() {
  const location = useLocation();
  const accessToken = location.state.accessToken
  const music = location.state.music

  useEffect(() => {
    if(!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  return (
    <div>
    <Header accessToken={accessToken} />
    <Container style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',height:'90vh'}}>
      <div className="card">
        <div style={{display:'flex',justifyContent:'center'}}>
          <img className='imgDetail' src={music.albumUrl} alt='dsfdas' />
        </div>
        <br />
        <div>
          My Spotify Player
        </div>
        <CardContent >
          <Typography gutterBottom variant="h5" >
            {music.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {music.artist}
          </Typography>
        </CardContent>
        <Player accessToken={accessToken} trackUri={music.uri}/>
      </div>
    </Container>
    </div>
    
  )
}
