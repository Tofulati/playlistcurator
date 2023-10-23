export default function BigMusic({
  songData,
  trackId = "0a4MMyCrzT0En247IhqZbD",
}) {
  const firstSong = songData[0];
  const spotifyUrl = `https://open.spotify.com/track/${trackId}`;

  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white p-2 hover:bg-gray-900 transition duration-300">
      <a
        href={spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4"
      >
        {/* Big Image */}
        <img
          src={firstSong.image || "path_to_placeholder_image.png"} // Default to a placeholder if no image provided
          alt={firstSong.artist || "Unknown Artist"}
          className="w-64 h-64 rounded object-cover mb-3"
        />

        {/* Song and Artist Details */}
        <div className="text-center mb-5">
          <div className="text-2xl font-bold">
            {firstSong.songName || "Unknown Song"}
          </div>
          <div className="text-lg text-gray-400">
            {firstSong.artist || "Unknown Artist"}
          </div>
        </div>

        {/* Play Button */}
      </a>
      <div className="px-4 w-full">
        <button className="text-black bg-[#1ed760] text-lg border-[#1ed760] border-2 rounded-xl w-full py-1 hover:bg-black hover:text-[#1ed760] transition duration-200">
          Change Music
        </button>
      </div>
    </div>
  );
}
