import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import React, { useEffect, useState } from "react";

import { SpotifyAPIController } from "~/api/spotifyAPIController.tsx";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

const clientId = '707bf634189c4e8594a161f7ef9808a4'; // Replace with your Spotify client ID
const redirectUri = encodeURIComponent('http://localhost:3000/callback'); // Replace with your callback URL
const scopes = 'user-read-private user-read-email'; // Add desired scopes
const spotifyLoginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&state=123`;

export default function Index() {
const spotifyController = new SpotifyAPIController();

  const user = useOptionalUser();
  //spotifyController.getSongArtist('5sdQOyqq2IDhvmx2lHOpwd');
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover bg-black"
              />
              <div className="absolute inset-0 bg-[color:rgba(255,56,56,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-[#1ed760] drop-shadow-md">
                  Playlist Curator
                </span>
              </h1>
              <p className="flex mx-auto mt-6 max-w-lg text-white bold text-xl text-black sm:max-w-3xl justify-center">
                Find your curated playlist.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-700 shadow-sm hover:bg-red-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:gap-5 sm:space-y-0">
                    <Link
                      to={spotifyLoginUrl}
                      className="flex items-center justify-center rounded-md bg-[#1ed760] px-4 py-3 font-medium text-[191414] hover:bg-[#1db954]"
                    >
                      Login with Spotify
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
