import Useritem from "~/Components/Useritem.jsx";
import { Link } from "@remix-run/react";


export default function Userlistbox({ Users }) {
    return (
      <div className="rounded-3xl p-8 ring-2 xl:p-4 ring-[#1ed760] hover:bg-gray-900 transition duration-300 cursor-pointer flex flex-col items-start justify-between h-[600px] flex-1">

        <div className="overflow-y-auto w-full flex-grow">
          { 
              Users.length > 0 ?
              Users.map((Users, index) => <Useritem number={index +1} key={index} name={Users.name} pfp={Users.pfp} matchValue={(Math.random()*100).toFixed(1)}/>)
              :
              <div className="text-3xl font-bold text-gray-500">No playlist selected</div>
          }
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