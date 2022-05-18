import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

export default function ListItem({music,accessToken}) {
  const navigate = useNavigate();
  return (

    <Card className='songCard' onClick={() => navigate('/detail', {state:{music,accessToken}})}>
      <CardMedia
        component="img"
        image={music.albumUrl} 
      />
      <CardContent >
        <div style={{display:'flex'}}>
        <Typography gutterBottom variant="h5" sx={{ flexGrow: 1 }} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
          {music.title}
        </Typography>
        <IconButton aria-label="play/pause" >
           <PlayArrowIcon />
        </IconButton>
        </div>
        
        <Typography variant="body2" color="text.secondary">
          {music.artist}
        </Typography>
      </CardContent>
    </Card>

  );
}
