import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { SpotifyAPIController } from "~/api/spotifyAPIController";
import * as d3 from "d3";


export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

const clientId = "707bf634189c4e8594a161f7ef9808a4"; // Replace with your Spotify client ID
const redirectUri = encodeURIComponent("http://localhost:3000/callback"); // Replace with your callback URL
const scopes = "user-read-private user-read-email"; // Add desired scopes
const spotifyLoginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&state=123`;


function handleSpotifyLogin(e) {
    e.preventDefault();

    const container = d3.select("#mainContainer").node();
    const containerRect = container.getBoundingClientRect();

    // Calculate the scaling factors with a slight offset
    const scaleX = (window.innerWidth / containerRect.width) *1.1;
    const scaleY = (window.innerHeight / containerRect.height) *1.1;

    // Disable scrolling on the body
    document.body.style.overflow = "hidden";

    d3.select("#mainContainer")
      .transition()
      .duration(1500)
      .ease(d3.easeCubicOut)
      .style("transform", `scale(${scaleX}, ${scaleY})`);

    // Redirect after 1000ms
    setTimeout(() => {
        window.location.href = spotifyLoginUrl;
    }, 700);
}


export default function animatedLogin() {
    const user = useOptionalUser();

    return (
        <main className="flex items-center justify-center min-h-screen bg-white relative">

<div
    id="mainContainer"
    className="absolute mx-auto max-w-7xl shadow-xl sm:rounded-2xl bg-black w-[calc(75vw+70px)] h-[calc(75vh+50px)]"
>
    <div className="absolute inset-0 bg-[color:rgba(255,56,56,0.5)] mix-blend-multiply sm:rounded-2xl"></div>
</div>


            {/* Content */}
            <div className="absolute mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
    <span className="block uppercase text-[#1ed760] drop-shadow-md">Playlist<br/>Curator</span>
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
                        <Link
                            to="#"
                            onClick={handleSpotifyLogin}
                            className="flex items-center justify-center rounded-md bg-[#1ed760] px-4 py-3 font-medium text-[191414] hover:bg-[#1db954]"
                        >
                            Login with Spotify
                        </Link>
                    )}
                </div>
            </div>
        </main>
    );
}


