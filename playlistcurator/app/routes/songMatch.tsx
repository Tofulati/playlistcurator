import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/Components/Navbar";
import BigMusic from "~/Components/BigMusic";
import Userlistbox from "~/Components/UserListBox";

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

const Users = 3;
const userpfp = [
  "https://upload.wikimedia.org/wikipedia/en/3/3d/New_Jeans_%28EP%29.jpg",
  "https://upload.wikimedia.org/wikipedia/en/e/ee/NewJeans_-_Get_Up.png",
  "https://upload.wikimedia.org/wikipedia/en/3/3d/New_Jeans_%28EP%29.jpg",
];
const Username = ["Abbi", "PATRick", "hajin"];

const userData = Array.from({ length: tempMusic + 10 }, (_, num) => ({
  name: Username[num],
  pfp: userpfp[num],
}));

export default function SongMatch() {
  return (
    <div className="min-h-screen bg-black text-[#1ed760]">
      <Navbar />
      <div className="flex w-full px-24 items-start">
        {" "}
        {/* Removed py-20 */}
        <div className="py-20">
          {" "}
          {/* Added div with py-20 */}
          <div className="rounded-3xl p-2 hover:bg-gray-900 border-[#1ed760] border-2 transition duration-300">
            <BigMusic songData={songData} />
          </div>
        </div>
        <div className=" ml-40 ">
          <Userlistbox Users={userData} />
        </div>
      </div>
    </div>
  );
}
