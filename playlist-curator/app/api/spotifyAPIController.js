const CLIENT_ID = "707bf634189c4e8594a161f7ef9808a4";
const CLIENT_SECRET = "56568d00ab634c5fa7f2d8a361b22de4";

const getAccessToken = () => {
  // Gets access token so you can make REST API requests
  const authParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      CLIENT_ID +
      "&client_secret=" +
      CLIENT_SECRET,
  };
  const token = fetch("https://accounts.spotify.com/api/token", authParams)
    .then((res) => res.json())
    .then((data) => data.access_token);

  return token;
};

export const getSong = (trackEndPoint) => {
  const accessToken = getAccessToken();
  const result = fetch(`https://api.spotify.com/v1/tracks/${trackEndPoint}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + accessToken },
  })
    .then((res) => res.json())
    .then((data) => data);

  return result;
};

export const getSongArtist = (trackEndPoint) => {
  const accessToken = getAccessToken();
  const result = fetch(`https://api.spotify.com/v1/tracks/${trackEndPoint}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + accessToken },
  })
    .then((res) => res.json())
    .then((data) => data.artists[0].id);
  return result;
};

export const getArtist = (artistEndPoint) => {
  const accessToken = getAccessToken();
  const result = fetch(`https://api.spotify.com/v1/artists/${artistEndPoint}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + accessToken },
  })
    .then((res) => res.json())
    .then((data) => data);
  return result;
};

export const getArtistGenre = (artistEndPoint) => {
  const accessToken = getAccessToken();
  const result = fetch(`https://api.spotify.com/v1/artists/${artistEndPoint}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + accessToken },
  })
    .then((res) => res.json())
    .then((data) => data.genres);
  return result;
};

export const getTrackCover = (trackEndPoint) => {
  const accessToken = getAccessToken();
  const result = fetch(`https://api.spotify.com/v1/tracks/${trackEndPoint}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + accessToken },
  })
    .then((res) => res.json())
    .then((data) => data.album.images[0].url);
  return result;
};

export const getPlaylist = (playlistEndPoint) => {
  const accessToken = getAccessToken();
  const result = fetch(
    `https://api.spotify.com/v1/playlists/${playlistEndPoint}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + accessToken },
    },
  )
    .then((res) => res.json())
    .then((data) => data);
  return result;
};

export const getPlaylistTracks = (playlistEndPoint) => {
  const accessToken = getAccessToken();
  const result = fetch(
    `https://api.spotify.com/v1/playlists/${playlistEndPoint}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + accessToken },
    },
  )
    .then((res) => res.json())
    .then((data) => data.tracks.items);
  return result;
};

export const getPlaylistTrackNames = (playlistEndPoint) => {
  let playlistTrackNames = [];
  const accessToken = getAccessToken();
  fetch(`https://api.spotify.com/v1/playlists/${playlistEndPoint}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + accessToken },
  })
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.tracks.limit; i++) {
        playlistTrackNames.push(data.tracks.items[i].track.name);
        //console.log(data.tracks.items[i].track.name)
      }
    });
  return playlistTrackNames;
};

export const getPlaylistTrackArtists = (playlistEndPoint) => {
  let playlistTrackArtists = [];
  const accessToken = getAccessToken();
  fetch(`https://api.spotify.com/v1/playlists/${playlistEndPoint}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + accessToken },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.tracks.limit; i++) {
        playlistTrackArtists.push(data.tracks.items[i].track.artists[0].name);
        //console.log(data.tracks.items[i].track.name)
      }
    })
    .catch((e) => {
      console.log(e);
    });

  return playlistTrackArtists;
};

export const getPlaylistTrackCovers = (playlistEndPoint) => {
  let playlistTrackCoverURLs = [];
  const accessToken = getAccessToken();
  fetch(`https://api.spotify.com/v1/playlists/${playlistEndPoint}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + accessToken },
  })
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.tracks.limit; i++) {
        playlistTrackCoverURLs.push(
          data.tracks.items[i].track.album.images[0].url,
        );
        //console.log(data.tracks.items[i].album.images[0].url)
      }
    })
    .catch((e) => {
      console.log(e);
    });

  return playlistTrackCoverURLs;
};
