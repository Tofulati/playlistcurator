import React, { useEffect, useState } from "react";


const CLIENT_ID = '707bf634189c4e8594a161f7ef9808a4'
const CLIENT_SECRET = '56568d00ab634c5fa7f2d8a361b22de4'

export function SpotifyAPIController() {
    const [searchInput, setSearchInput] = useState('')
    const [accessToken, setAccessToken] = useState('')

    useEffect(() => {
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

    return(
        getSong('5sdQOyqq2IDhvmx2lHOpwd')
    )

}