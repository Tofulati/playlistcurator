import React, { useState, useEffect } from 'react';
import { Link } from "@remix-run/react"; 

export default function Playlist() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      // Fixing the URL to remove curly braces
      fetch("https://api.spotify.com/v1/tracks/5sdQOyqq2IDhvmx2lHOpwd")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // Assuming the result is an object, you can display its keys and values as an example
      return (
        <div>
          {Object.entries(items).map(([key, value]) => (
            <div key={key}>
              {key}: {JSON.stringify(value)}
            </div>
          ))}
        </div>
      );
    }
}
