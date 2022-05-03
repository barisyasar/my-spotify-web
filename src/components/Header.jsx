import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ display:'flex',flexGrow: 1,textDecoration:'none', color:'black' }}>
            <Typography variant="h6">
              My Spotify
            </Typography>
          </Link>
          <TextField id="standard-basic" label="Search" size='small' variant="outlined" color='secondary' />
        </Toolbar>
      </AppBar>
    </Box>
  );
}