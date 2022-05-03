import React from 'react'
import { Container,Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function Detail() {
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
        <CardContent >
          <div style={{display:'flex'}}>
          <Typography gutterBottom variant="h5" sx={{ flexGrow: 1 }}>
            Song Name
          </Typography>

          <IconButton aria-label="bookmark" >
            <BookmarkIcon />
          </IconButton>
          </div>
          
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, facere officia repudiandae quae saepe necessitatibus accusamus. Accusantium fuga, sint repellendus facere, officia quibusdam dignissimos vel hic laborum laboriosam perspiciatis vitae?
          </Typography>
        </CardContent>
      </div>
    </Container>
  )
}
