export default function Useritem({ number, name, pfp, matchValue }) {
  return (
    <div className="flex items-center hover:bg-gray-800 transition duration-30 p-2 rounded justify-between">
      <div className="flex items-center">
        <span className="text-gray-700 font-semibold text-3xl w-4">
          {number}
        </span>
        <img
          src={pfp}
          alt={name}
          className="w-24 h-24 mx-4 rounded object-cover" // Set width and height
          style={{ objectFit: "cover" }} // Add object-fit: cover
        />
        <div style={{ width: "250px" }}>
          {name ? (
            <div className="text-gray-200 font-semibold mb-2 text-xl">
              {name}
            </div> // Increased font size
          ) : (
            <div className="bg-gray-700 rounded w-11 h-5 mb-2"></div> // Placeholder for empty name
          )}
        </div>
      </div>
      <div className="rounded w-64 h-5 mb-2 mx-10 text-xl"> {matchValue}%</div>
    </div>
  );
}
