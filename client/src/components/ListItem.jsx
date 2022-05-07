import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link } from "react-router-dom";

export default function ListItem({music}) {
  return (
    <Link to= "/detail" state={music} >
    <Card className='songCard' onClick={()=> console.log('!hey')}>
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
           <BookmarkIcon color='secondary' />
        </IconButton>
        </div>
        
        <Typography variant="body2" color="text.secondary">
          {music.group}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
}
