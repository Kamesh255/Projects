import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=fe68573a9897414b9ebcbc75aabe8c1d&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
const CLIENT_ID = "7824b4a967934310a50b4e48195e2211";
const SPOTIFY_AUTHORIZE_ENDPOINTS = "https://accounts.spotify.com/authorize"
const  REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000"
const SPACE_DELIMITER = "%20"
const SCOPES = ['user-read-currently-playing', "user-read-playback-state"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
const RESPONSE_TYPE = "token"

const Login = () => {
    const handleLogin = () =>{
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINTS}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
    }
  return (
      <> 
     <Container>
         {/* <a className='btn btn-success btn-lg' href={AUTH_URL}>Login with Spotify</a> */}
         <a href={`${SPOTIFY_AUTHORIZE_ENDPOINTS}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&response_type=${RESPONSE_TYPE}`}>Login with Spotify</a>
         {/* <button onClick={handleLogin}>Login with Spotify</button> */}

     </Container>
      </>
     
  )
}

export default Login