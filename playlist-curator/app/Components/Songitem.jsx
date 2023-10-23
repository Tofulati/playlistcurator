export default function Songitem({ number, image, artist, songName }) {
    return (
      <div className="flex items-center hover:bg-gray-800 transition duration-30 p-2 rounded">
        <span className="text-gray-700 font-semibold text-xl w-4">{number}</span>
        <img src={image} alt={artist} className="w-14 h-14 mx-4 rounded object-cover" />
        <div>
          {songName ? (
            <div className="text-gray-200 font-semibold mb-2">{songName}</div>
          ) : (
            <div className="bg-gray-700 rounded w-24 h-5 mb-2"></div>  // Placeholder for empty song name
          )}
          {artist ? (
            <div className="text-sm text-gray-500 font-medium">{artist}</div>
          ) : (
            <div className="bg-gray-700 rounded w-20 h-4"></div>  // Placeholder for empty artist
          )}
        </div>
      </div>
    );
  }