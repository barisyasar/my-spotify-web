import React from 'react'
import { Container,Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useLocation } from 'react-router-dom';

export default function Detail() {
  const location = useLocation();
  const music = location.state;
  
  return (
    <Container>
      <div className="card">
        <div style={{display:'flex',justifyContent:'center'}}>
          <img className='imgDetail' src={require('../components/iu.jpeg')} alt='dsfdas' />
        </div>
        <br />
        <div style={{textAlign:'center'}}>
          spotify player
        </div>
        <CardContent style={{display:'flex', justifyContent:'center'}}>
          <div >
          <div style={{display:'flex'}}>
          <Typography gutterBottom variant="h5" >
            {music.name}
          </Typography>
          <IconButton aria-label="bookmark" style={{alignSelf:'center'}}>
            <BookmarkIcon />
          </IconButton>
          </div>
          <Typography variant="body2" color="text.secondary">
            {music.group}
          </Typography>
          </div>


        </CardContent>
      </div>
    </Container>
  )
}
