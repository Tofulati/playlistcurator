import { Buffer } from 'buffer';
import { setAccessToken } from "~/models/user.server.ts";

const CLIENT_ID = "4b458524a1dc49dc9ebb2c418ee5be32";
const CLIENT_SECRET = "b5b7cefa1b084ccfa7d787af9cbf1a54";

//exports.handler = arc.tables();

export class SpotifyAPIController {
  constructor() {
    this.searchInput = "";
    this.accessToken = "";
    this.authCode = "";
    this.artist = "";
    this.gotToken = false;

    this.playlistTrackNames = [];
    this.playlistTrackCovers = [];
    this.playlistTrackArtists = [];
  }

  async getAuthAccessToken(auth_code){
        //console.log(await this.createAuthAccessToken(auth_code));
        return await this.createAuthAccessToken(auth_code);
  }

  async createAuthAccessToken(auth_code){
    while(this.accessToken == "" || undefined){
        await this.getNewAuthAccessToken(auth_code);
    }
    console.log("function done: " + this.accessToken);
    await setAccessToken(this.accessToken, "email#addisonxchen@gmail.com");
    return this.accessToken;
  }



  async getNewAuthAccessToken(auth_code){
    const redirect_uri = 'http://localhost:3333/callback';
    //console.log("pre request auth code: " + auth_code);
    var authParams = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
      },
      body:
        `grant_type=authorization_code&code=${auth_code}&redirect_uri=${redirect_uri}`,
    };
    //console.log(auth_code);
    var res = await fetch("https://accounts.spotify.com/api/token", authParams)
      .then((res) => res.json())
      .then((data) => {
         //console.log("data.access_token " + data.access_token);
         if(data.access_token != undefined){
            this.accessToken = data.access_token;
            console.log("yay" + this.accessToken);
         }
         console.log("nah")
      });
    //console.log("post request auth " + auth_code);
    //console.log("auth access token func " + this.accessToken);
    //return JSON.stringify(this.accessToken);
  }

  async getNewAccessToken() {
    var authParams = {
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
    var res = await fetch("https://accounts.spotify.com/api/token", authParams)
      .then((res) => res.json())
      .then((data) => {
        this.accessToken = data.access_token;
      });
    console.log("access token func " + this.accessToken);
  }

  getAccessToken(){
    return this.accessToken;
  }

  async getSong(trackEndPoint) {
    await this.getNewAccessToken();
    console.log("song func " + this.accessToken);
    var result = await fetch(
      `https://api.spotify.com/v1/tracks/${trackEndPoint}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.accessToken},
      },
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  async getSongArtist(trackEndPoint) {
    await this.getNewAccessToken();
    const result = await fetch(
      `https://api.spotify.com/v1/tracks/${trackEndPoint}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.accessToken },
      },
    )
      .then((res) => res.json())
      .then((data) => console.log(data.artists[0].id));
  }

  async getArtist(artistEndPoint) {
    await this.getNewAccessToken();
    const result = await fetch(
      `https://api.spotify.com/v1/artists/${artistEndPoint}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.accessToken },
      },
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  async getArtistGenre(artistEndPoint) {
    await this.getNewAccessToken();
    const result = await fetch(
      `https://api.spotify.com/v1/artists/${artistEndPoint}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.accessToken },
      },
    )
      .then((res) => res.json())
      .then((data) => console.log(data.genres));
  }

  async getTrackCover(trackEndPoint) {
    await this.getNewAccessToken();
    const result = await fetch(
      `https://api.spotify.com/v1/tracks/${trackEndPoint}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.accessToken },
      },
    )
      .then((res) => res.json())
      .then((data) => console.log(data.album.images[0].url));
  }

  async getPlaylist(playlistEndPoint) {
    await this.getNewAccessToken();
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistEndPoint}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.accessToken },
      },
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  async getPlaylistTracks(playlistEndPoint) {
    await this.getNewAccessToken();
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistEndPoint}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.accessToken },
      },
    )
      .then((res) => res.json())
      .then((data) => console.log(data.tracks.items));
  }

  async getPlaylistTrackNames(playlistEndPoint) {
    await this.getNewAccessToken();
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistEndPoint}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.accessToken },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.tracks.limit; i++) {
          this.playlistTrackNames[i] = data.tracks.items[i].track.name;
          //console.log(data.tracks.items[i].track.name)
        }
      });
  }

  async getPlaylistTrackArtists(playlistEndPoint) {
    await this.getNewAccessToken();
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistEndPoint}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.accessToken },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.tracks.limit; i++) {
          this.playlistTrackArtists[i] =
            data.tracks.items[i].track.artists[0].name;
          //console.log(data.tracks.items[i].track.name)
        }
      });
  }

  async getPlaylistTrackCovers(playlistEndPoint) {
    await this.getNewAccessToken();
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistEndPoint}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.accessToken },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.tracks.limit; i++) {
          this.playlistTrackCovers[i] =
            data.tracks.items[i].track.album.images[0].url;
          //console.log(data.tracks.items[i].album.images[0].url)
        }
      });
  }
  async getCurrentUser(auth_code) {
      while(this.accessToken == "" || undefined){
          await this.getNewAuthAccessToken(auth_code);
        }
      //console.log("access token user " + access_token);
        var result = await fetch(
            `https://api.spotify.com/v1/me`,
            {
              method: "GET",
              headers: {
              'Authorization': 'Bearer ' + this.accessToken,
              },
            },
          )
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
}
