import React from 'react';
import { Container, Typography } from '@mui/material';
import ListItem from '../components/ListItem';
import Masonry from 'react-masonry-css'
import Header from '../components/Header';

export default function Home({code}) {
  const breakpoints = {
    default: 3,
    1100: 3,
    700: 2
  };
  
  let musics = [
    {id:1,name:'heloo',group:'justin'},
    {id:2,name:'one kiss',group:'ronaldo'},
    {id:3,name:'love me harder',group:'ariana grande'},
    {id:4,name:'moonlight',group:'xxtention'},
    {id:5,name:'imdat ipmdat',group:'cakakl'},
    {id:6,name:'take me the chyurch',group:'gristen'},
    {id:7,name:'wakanda',group:'marvel'},
  ]

  musics = musics.map(music => {
    return (
      <div key={music.id}>
        <ListItem music={music} />
      </div>
    )
  })

  return (
   <div>
      <Header code={code}/>
   <Container >
       <Typography margin={1} variant="h4" component="h3">My Songs</Typography>
       <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {musics}
      </Masonry>

   </Container>
   </div>
  )
}
