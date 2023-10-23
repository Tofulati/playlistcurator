import { Link } from "@remix-run/react";
import Songitem from "~/Components/Songitem.jsx";
import { useState, useEffect } from "react";
import { getPlaylistTrackArtists } from "~/api/spotifyAPIController.js";

export default function PlaylistBox({ songs }) {
  const [playlistArtists, setPlaylistArtists] = useState([]);

  useEffect(() => {
    setPlaylistArtists(getPlaylistTrackArtists());
  }, []);

  return (
    <div className="rounded-3xl p-8 ring-4 xl:p-4 ring-[#1ed760] hover:bg-gray-900 transition duration-300 cursor-pointer flex flex-col items-start justify-between h-[500px] flex-1">
      <div className="overflow-y-auto w-full flex-grow">
        {songs.length > 0 ? (
          songs.map((song, index) => (
            <Songitem
              number={index + 1}
              key={index}
              image={song.image}
              artist={song.artist}
              songName={song.songName}
            />
          ))
        ) : (
          <div className="text-3xl font-bold text-gray-500">
            No playlist selected
          </div>
        )}
      </div>
      <div className="px-4 mt-3 w-full">
        <Link to="/changeplaylist">
          <button className="text-black bg-[#1ed760] border-[#1ed760] border-2 rounded-xl w-full py-2 hover:bg-black hover:text-[#1ed760] transition duration-200">
            Change Playlist
          </button>
        </Link>
      </div>
    </div>
  );

export default function Playlistbox({ songs }) {
    const handleInputChange = (e) => {
        // Handle input change if needed
        console.log(e.target.value);
    };

    const handleSubmit = () => {
        // Handle submit logic here
        console.log("Submitted");
    };
  
    return (
      <div className="rounded-3xl p-8 ring-4 xl:p-4 ring-[#1ed760] hover:bg-gray-900 transition duration-300 cursor-pointer flex flex-col items-start justify-between h-[500px] flex-1">
        <div className="overflow-y-auto w-full flex-grow">
          { 
              songs.length > 0 ?
              songs.map((song, index) => <Songitem number={index + 1} key={index} image={song.image} artist={song.artist} songName={song.songName} />)
              :
              <div className="text-3xl font-bold text-gray-500">No playlist selected</div>
          }
        </div>
        <div className="px-4 mt-3 w-full flex items-center relative"> {/* Add relative positioning */}
    <input 
        type="text" 
        placeholder="type your playlist url here." 
        className="flex-grow p-2 rounded-2xl border-[#1ed760] focus:outline-none"  // Added focus styles
        onChange={handleInputChange}
    />
    <button 
    className="text-black bg-[#1ed760] px-2 py-1 rounded-xl border-[#1ed760] transition duration-200 absolute right-11 mr-[-1.5rem] focus:outline-none"
    onClick={handleSubmit}
>
    →
</button>


</div>

      </div>
    );
}
