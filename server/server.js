const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const SpotifyWebApi = require('spotify-web-api-node')

const app = express();
app.use(cors())
app.use(bodyParser.json())



app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/home/',
        clientId: 'ca78626eb1704944b58fbc45d014fd85',
        clientSecret: '06e47aa0a349404e83d2dda441150de9',
        refreshToken,
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            })
            // console.log(data.body);
        })
        .catch(err => {
            console.log('hey');
            console.log(err)
            res.sendStatus(400)
        })
})

app.post('/login', (req, res) => {

    const code = req.body.code
    console.log(code);
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/home/',
        clientId: 'ca78626eb1704944b58fbc45d014fd85',
        clientSecret: '06e47aa0a349404e83d2dda441150de9',
    })

    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })

        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400)
        })
})

app.listen(3001);