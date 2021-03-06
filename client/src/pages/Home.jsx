import React from 'react';
import { Container, Typography } from '@mui/material';
import ListItem from '../components/ListItem';
import Masonry from 'react-masonry-css'
import Header from '../components/Header';
import useAuth from '../api/useAuth';
import { useState, useEffect } from 'react';
import { spotifyApi, code} from '../api/SpotifyApi';

export default function Home() {  
  const [musics, setMusics] = useState([]);
  const accessToken = useAuth(code)

  const breakpoints = {
    default: 3,
    1100: 4,
    700: 2,
  };

  useEffect(() => {
    if(!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
    // Write the username that you want to get playlist
    spotifyApi.getPlaylistTracks('USER_ID', {
      offset: 1,
      limit: 10,
      fields: 'items'
    }).then(res => {
      setMusics(
        res.body.items.map((item,i) => {
          return {
            id:i,
            title: item.track.name,
            artist: item.track.artists[0].name,
            albumUrl: item.track.album.images[0].url,
            uri: item.track.uri
          }
        })
      )
    })
  }, [accessToken])

  return (
   <div>
    <Header accessToken={accessToken}/>
    <Container style={{marginTop:'65px'}}>
        <Typography variant="h4" component="h3">My Songs</Typography>
        <br />
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {musics.map(music => {
          return (
            <div key={music.id}>
              <ListItem music={music} accessToken={accessToken}/>
            </div>
          )
        })}
        </Masonry>
    </Container>
   </div>
  )
}
