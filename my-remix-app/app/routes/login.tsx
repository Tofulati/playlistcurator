import React from 'react';

function Login() {
  const spotifyLoginUrl = 'https://accounts.spotify.com/authorize?'; // Replace with the actual Spotify login URL

  return (
    <div>
      <h1>Login to Spotify</h1>
      <a href={spotifyLoginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;