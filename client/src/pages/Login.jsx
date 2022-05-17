import React from 'react'
import { Container } from '@mui/material'
import { AUTH_URL } from '../api/SpotifyApi'

export default function Login() {
  return (
    <Container style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
      <a href={AUTH_URL}>LOGIN</a>
    </Container>
  )
}
