import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function ListItem({music}) {
  return (
    <Card className='songCard'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={require('./iu.jpeg')} 
      />
      <CardContent >
        <div style={{display:'flex'}}>
        <Typography gutterBottom variant="h5" sx={{ flexGrow: 1 }}>
          {music.name}
        </Typography>

        <IconButton aria-label="play/pause" >
           <PlayArrowIcon />
        </IconButton>
        <IconButton aria-label="bookmark" >
           <BookmarkIcon color='success' />
        </IconButton>
        </div>
        
        <Typography variant="body2" color="text.secondary">
          {music.group}
        </Typography>
      </CardContent>
    </Card>
  );
}
