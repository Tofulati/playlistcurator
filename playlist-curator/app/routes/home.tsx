import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

const spotifyLoginUrl = 'https://accounts.spotify.com/authorize?'; // Replace with the actual Spotify login URL




export default function Index() {
  return (
    <div className="bg-black min-h-screen text-[#1ed760]">
      <header className="bg-black">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex items-center">
            <a href="home" className="flex flex-col items-start ml-[-100px]">
              <span className="text-4xl font-bold leading-none">PLAYLIST</span>
              <span className="text-4xl font-bold leading-none mt-[-6px] ml-[12px]">CURATOR</span>
            </a>
            <div className="hidden lg:flex lg:gap-x-12 ml-8">
              <a href="#" className="text-xl font-semibold leading-6 text-[#1ed760] hover:text-green-700 transition duration-300 px-4 py-2">Playlists</a>
              <a href="#" className="text-xl font-semibold leading-6 text-[#1ed760] hover:text-green-700 transition duration-300 px-4 py-2">Settings</a>
              <a href="#" className="text-xl font-semibold leading-6 text-[#1ed760] hover:text-green-700 transition duration-300 px-4 py-2">About</a>
          </div>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#1ed760]">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-xl font-semibold leading-6 text-[#1ed760]">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
      </header>
      
      
      <div className="bg-black py-24 sm:py-3">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-[#1ed760] sm:text-5xl">Your Playlists</p>
        </div>
        <div className="mt-16 flex justify-center"></div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-80 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div 
                className="rounded-3xl p-8 ring-4 xl:p-10 ring-[#1ed760] bg-black hover:bg-gray-800 transition duration-300 cursor-pointer flex items-start justify-start min-h-[700px]"
                onClick={() => { /* Add your onClick functionality here */ }}
            >
                <span className="text-[#1ed760] font-semibold text-xl">Add your playlist</span>
            </div>
            <div 
                className="rounded-3xl p-8 ring-4 xl:p-10 ring-[#1ed760] bg-black hover:bg-gray-800 transition duration-300 cursor-pointer flex flex-col space-y-4 min-h-[700px]"
            >
                <div className="flex items-center space-x-4">
                    <span className="text-[#1ed760] font-semibold text-xl">1</span>
                    <div className="bg-gray-400 w-24 h-24"></div>
                    <div>
                        <span className="text-white font-medium">Artist Name</span><br/>
                        <span className="text-[#1ed760] font-semibold">Song Name</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-[#1ed760] font-semibold text-xl">2</span>
                    <div className="bg-gray-400 w-24 h-24"></div>
                    <div>
                        <span className="text-white font-medium">Artist Name</span><br/>
                        <span className="text-[#1ed760] font-semibold">Song Name</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-[#1ed760] font-semibold text-xl">3</span>
                    <div className="bg-gray-400 w-24 h-24"></div>
                    <div>
                        <span className="text-white font-medium">Artist Name</span><br/>
                        <span className="text-[#1ed760] font-semibold">Song Name</span>
                    </div>
                </div>
                {/* Add more song entries as needed */}
            </div>
        </div>
    </div>
</div>




    </div>
    
  );
}





