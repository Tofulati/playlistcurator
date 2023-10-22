import React, { useEffect, useState } from "react";


const CLIENT_ID = '707bf634189c4e8594a161f7ef9808a4'
const CLIENT_SECRET = '56568d00ab634c5fa7f2d8a361b22de4'

export default function SpotifyAPIController() {
    const [searchInput, setSearchInput] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const [artist, setArtist] = useState('')

    const playlistTrackNames = [];
    const playlistTrackCovers = [];
    const playlistTrackArtists = [];

    useEffect(() => {
    // Gets access token so you can make REST API requests
        var authParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token',authParams)
            .then(res => res.json())
            .then(data => setAccessToken(data.access_token));

    }, [])

    const getSong = (trackEndPoint) => {
        const result = fetch(`https://api.spotify.com/v1/tracks/${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    const getSongArtist = (trackEndPoint) => {
        const result = fetch(`https://api.spotify.com/v1/tracks/${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
            .then(res => res.json())
            .then(data => setArtist(data.artists[0].id))
    }

    const getArtist = (artistEndPoint) => {
        const result = fetch(`https://api.spotify.com/v1/artists/${artistEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const getArtistGenre = (artistEndPoint) => {
        const result = fetch(`https://api.spotify.com/v1/artists/${artistEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
            .then(res => res.json())
            .then(data => console.log(data.genres))
    }

    const getTrackCover = (trackEndPoint) => {
        const result = fetch(`https://api.spotify.com/v1/tracks/${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
            .then(res => res.json())
            .then(data => console.log(data.album.images[0].url))
    }

    const getPlaylist = (playlistEndPoint) => {
        const result = fetch(`https://api.spotify.com/v1/playlists/${playlistEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const getPlaylistTracks = (playlistEndPoint) => {
        const result = fetch(`https://api.spotify.com/v1/playlists/${playlistEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
            .then(res => res.json())
            .then(data => console.log(data.tracks.items))
    }

    const getPlaylistTrackNames = (playlistEndPoint) => {
        const result = fetch(`https://api.spotify.com/v1/playlists/${playlistEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
            .then(res => res.json())
            .then(data => {
                for(let i = 0; i < data.tracks.limit; i++){
                    playlistTrackNames[i] = data.tracks.items[i].track.name;
                    //console.log(data.tracks.items[i].track.name)
                }
             })
    }

    const getPlaylistTrackArtists = (playlistEndPoint) => {
        const result = fetch(`https://api.spotify.com/v1/playlists/${playlistEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
            .then(res => res.json())
            .then(data => {
                for(let i = 0; i < data.tracks.limit; i++){
                    playlistTrackArtists[i] = data.tracks.items[i].track.artists[0].name;
                    //console.log(data.tracks.items[i].track.name)
                }
             })
    }

    const getPlaylistTrackCovers = (playlistEndPoint) => {
        const result = fetch(`https://api.spotify.com/v1/playlists/${playlistEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
            .then(res => res.json())
            .then(data => {
                for(let i = 0; i < data.tracks.limit; i++){
                    playlistTrackCovers[i] = data.tracks.items[i].track.album.images[0].url;
                    //console.log(data.tracks.items[i].album.images[0].url)
                }
             })
    }



    return(
        //getSongArtist('5sdQOyqq2IDhvmx2lHOpwd'),
        //getArtistGenre(artist)
        //getTrackCover('5sdQOyqq2IDhvmx2lHOpwd')
        getPlaylistTrackArtists('7eypSrxMD0YCIfwRKYtV4C'),
        console.log(playlistTrackArtists)

    )

}