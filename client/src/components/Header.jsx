import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node'
import useAuth from '../api/useAuth';

const spotifyApi = new SpotifyWebApi({
  clientId: 'ca78626eb1704944b58fbc45d014fd85',
}
)

export default function Header(code) {

  const accessToken = useAuth(code)

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if(!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if(!search) return setSearchResults([])
    if(!accessToken) return 
    
    spotifyApi.searchTracks(search).then(res => {
      console.log(res);
    }).catch(e=> console.log(e))
  }, [search,accessToken])
  

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ display:'flex',flexGrow: 1,textDecoration:'none', color:'black' }}>
          <Typography variant="h6">
            My Spotify
          </Typography>
        </Link>
        <TextField id="standard-basic" onChange={e => setSearch(e.target.value)} label="Search" size='small' variant="outlined" color='secondary' />
      </Toolbar>
    </AppBar>
  </Box>
  )
}
