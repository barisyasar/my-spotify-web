import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node'
import useAuth from '../api/useAuth';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

const spotifyApi = new SpotifyWebApi({
  clientId: 'ca78626eb1704944b58fbc45d014fd85',
})

export default function Header({code}) {
  const accessToken = useAuth(code)
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if(!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map((track,i) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            title: track.name,
            artist: track.artists[0].name,
            albumUrl: smallestAlbumImage.url,
            uri: track.uri,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])
  


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ display:'flex',flexGrow: 1,textDecoration:'none', color:'black' }}>
          <Typography variant="h6">
            My Spotify
          </Typography>
        </Link>
        <Autocomplete
        disableClearable
        freeSolo
        loading
        options={searchResults}
        getOptionLabel={option => `${option.title},${option.artist},${option.albumUrl},${option.uri}`}
        renderOption={option => {
          let tempOption = option.key.split(',');
          let objeOoption = {
            title: tempOption[0],
            artist: tempOption[1],
            albumUrl: tempOption[2],
            uri: tempOption[3],
          }

          return (
            <ListItem alignItems="flex-start" key={option.id} onClick={() => navigate('/detail', {state:{objeOoption,accessToken}})}>
            <ListItemAvatar>
              <Avatar src={objeOoption.albumUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={objeOoption.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {objeOoption.artist}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>)
        }}
        renderInput={(params) => (
          <TextField
          style={{ minWidth: 230 }}
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            id="standard-basic" onChange={e => setSearch(e.target.value)} label="Search" size='small' variant="outlined" color='secondary' 
          />
        )}
      />
        
      </Toolbar>
    </AppBar>
  </Box>
  )
}
