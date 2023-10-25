// src/routes/Callback.tsx

import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { SpotifyAPIController } from "~/api/spotifyAPIController";

const Callback: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Parse the authentication token from the URL query parameters
    const params = new URLSearchParams(location.search);
    const spotifyController = new SpotifyAPIController();
    const authToken = spotifyController.getAccessToken();
    //console.log(authToken);
    // Store the token in your preferred state management solution
    // For simplicity, we'll use local state here
    // if (authToken) {
    //   globalThis.localStorage.setItem("authToken", authToken);
    // }
  }, [location.search]);

  return (
    <div className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img className="h-full w-full object-cover bg-black" />
              <div className="absolute inset-0 bg-[color:rgba(255,56,56,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
            {/* {globalThis.localStorage.getItem("authToken") ? ( */}
              <>
                <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                  <span className="block uppercase text-[#1ed760] drop-shadow-md">
                    Authentication Successful
                  </span>
                </h1>
                <p className="flex mx-auto mt-6 max-w-lg text-white bold text-xl text-black sm:max-w-3xl justify-center">
                  Your Spotify has been authenticated.
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <Link
                    to="/home"
                    className="flex items-center justify-center rounded-md bg-[#1ed760] px-4 py-3 font-medium text-[191414] hover:bg-[#1db954]"
                  >
                  Go to Playlist Curator
                </Link>
              </div>
              </>
            ) : (
              <p>Authentication failed. Please try again.</p>
            {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Callback;
