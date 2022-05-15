import React from 'react';
import { Container, Typography } from '@mui/material';
import ListItem from '../components/ListItem';
import Masonry from 'react-masonry-css'
import Header from '../components/Header';
import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from '../api/useAuth';
import { useState, useEffect } from 'react';


const spotifyApi = new SpotifyWebApi({
  clientId: 'ca78626eb1704944b58fbc45d014fd85',
})

export default function Home() {
  const code = new URLSearchParams(window.location.search).get('code')
  const [musics, setMusics] = useState([]);
  const accessToken = useAuth(code)

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    if(!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
    // let cancel = false
    spotifyApi.getPlaylistTracks('5X2Bw74MKsRMQ7CtuHhmQF', {
      offset: 1,
      limit: 10,
      fields: 'items'
    }).then(res => {
      // console.log(res.body.items[0].track);
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

    // return () => (cancel = true)
  }, [accessToken])

  return (
   <div>
    <Header code={code}/>
    <Container >
        <Typography  variant="h4" component="h3">My Songs</Typography>
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
