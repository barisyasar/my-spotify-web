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
        redirectUri: 'http://localhost:3000',
        clientId: '975b05a1870648ecb7680a7e395a6bb2',
        clientSecret: 'd3a30db0a95042809369df0f379cc9f8',
        refreshToken,
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
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
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '975b05a1870648ecb7680a7e395a6bb2',
        clientSecret: 'd3a30db0a95042809369df0f379cc9f8',
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
            console.log('hey1');
            console.log(err);
            res.sendStatus(400)
        })
})

app.listen(3001);