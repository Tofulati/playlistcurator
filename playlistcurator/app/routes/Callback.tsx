// src/routes/Callback.tsx

import React, { useEffect } from "react";
import { json, redirect } from "@remix-run/node";
import { useLocation, Link } from "react-router-dom";
import { SpotifyAPIController } from "~/api/spotifyAPIController";
import type { User } from "~/models/user";
import { setAccessToken, getUserById } from "~/models/user.server.ts";

const spotifyController = new SpotifyAPIController();

export const loader = async ({ request }: LoaderFunctionArgs) => {
    //const tokenSet = await setAccessToken('BQB8nEkQYTtJtTNWF0RQOiiNAnKa2I8_vMLa0H4HcQwCViSwj65-f33OzJWY0zG3wRke2zvu3LNGZpF9JutVCS5aSgmcYNkAwNFYCBOlCkFWEDO2gzFa17TX9S_4dpPyW2atmgei4TSDYqMLKpYmVIA0XhHNwIGhnUWQ7u1D_HgY4B7JcSgTVUCrbnLoXRXg-rWZOzWfXrDUyEzSOb9MDF3gMl3HrvHiGThoT7NNqOXjDukGT-ZD7vjHKKwJ0zOI7M4', "email#addisonxchen@gmail.com");
    //console.log("token set: ")
    //console.log(tokenSet);
     const bruh = await getUserById('email#addisonxchen@gmail.com');
     console.log("bruh next");
     console.log(bruh);
    return json({});
};

export const action = async ({ request }: ActionFunctionArgs) => {
    const bruh = await getUserById('email#addisonxchen@gmail.com');
         console.log("bruh next");
         console.log(bruh);
};

const Callback: React.FC = () => {
    const location = useLocation();

  useEffect(() => {
    // Parse the authentication token from the URL query parameters
      const parsedUrl = new URL(window.location);
          //console.log(parsedUrl.searchParams.get("code"));


          const url = window.location.href;
          //const searchParams = url.substring(1);
          //console.log(searchParams);
          //var access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
          //console.log(access_token);


          const authCode = parsedUrl.searchParams.get("code");
          console.log(authCode);

          const token = spotifyController.createAuthAccessToken(authCode);
          console.log("token " + token);

    //console.log(access_token);
    //const access_token = spotifyController.getNewAuthAccessToken(authCode);
    //console.log("access tokeee " + spotifyController.getNewAuthAccessToken(authCode));
    //spotifyController.getAuthAccessToken(authCode);
    //spotifyController.getCurrentUser(authCode);
    //spotifyController.getCurrentUser(access_token);
    //spotifyController.setAccessToken(access_token);
    //console.log(spotifyController.getAccessToken());
    //spotifyController.getSong('5sdQOyqq2IDhvmx2lHOpwd');
    //console.log(access_token);
    //const authToken = spotifyController.getAccessToken();
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
