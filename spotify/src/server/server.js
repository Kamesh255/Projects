const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh',(req,res)=>{
    const refreshToken = req.body.refreshToken
    console.log(refreshToken)
    const spotifyApi = new SpotifyWebApi({
        redirectUri :"http://localhost:3000",
        clientId:"35d373d27b3741b6a6f95ae38d6ccaf9",
        clientSecret:"ea5a879e6bce4e87ad34f8bc55f490f4",
        refreshToken,
    })
    spotifyApi.refreshAccessToken()
    .then((data)=>{
           res.json({
               accessToken : data.body.accessToken,
               expiresIn : data.body.expiresIn

           })
    }).catch((err)=>{
        console.log(err)
        res.sendStatus(400)
    })
})
app.post('/login',(req,res)=>{
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri :"http://localhost:3000",
        clientId:"35d373d27b3741b6a6f95ae38d6ccaf9",
        clientSecret:"ea5a879e6bce4e87ad34f8bc55f490f4"
    })
    spotifyApi.authorizationCodeGrant(code).then(data=>{
        res.json({
            accessToken:data.body.access_token,
            refreshYoken:data.body.refresh_token,
            expiresIn:data.body.expires_in,
        })
    })
    .catch(err=>{ 
        console.log(err)
        res.sendStatus(400)
    })
})
app.listen(3001)