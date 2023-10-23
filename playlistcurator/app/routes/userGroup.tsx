import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/Components/Navbar.jsx";
import Playlistbox from "~/Components/PlaylistBox.jsx";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

const tempMusic = 3;
const imagetemp = [
  "https://upload.wikimedia.org/wikipedia/en/3/3d/New_Jeans_%28EP%29.jpg",
  "https://upload.wikimedia.org/wikipedia/en/e/ee/NewJeans_-_Get_Up.png",
  "https://upload.wikimedia.org/wikipedia/en/3/3d/New_Jeans_%28EP%29.jpg",
];
const artists = ["New Jeans", "New Jeans", "New Jeans"];
const songNames = ["Hypeboy", "Super Shy", "Asdas"];

const songData = Array.from({ length: tempMusic + 10 }, (_, num) => ({
  image: imagetemp[num],
  artist: artists[num],
  songName: songNames[num],
}));

export default function usergroup() {
  return (
    <div className="min-h-screen bg-black text-[#1ed760]">
      <Navbar />
      <div className="py-24 sm:py-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Your Playlists
            </p>
          </div>
          <div className="isolate mx-auto mt-10 flex flex-wrap gap-20 justify-between">
            <Playlistbox songs={[]} />
            <Playlistbox songs={songData} />
          </div>
        </div>
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-thumb {
            background: #1ed760;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
}
