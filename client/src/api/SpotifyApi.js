import SpotifyWebApi from 'spotify-web-api-node';

export const spotifyApi = new SpotifyWebApi({
    clientId: 'ca78626eb1704944b58fbc45d014fd85',
})

export const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=ca78626eb1704944b58fbc45d014fd85&response_type=code&redirect_uri=http://localhost:3000/home/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
