import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <div className="bg-black text-[#1ed760]">
      <header className="bg-black">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center">
            <a href="home" className="flex flex-col items-start ml-[-100px]">
              {/* <span className="text-4xl font-bold leading-none">PLAYLIST</span>
              <span className="text-4xl font-bold leading-none mt-[-6px] ml-[12px]">CURATOR</span> */}
              <img
                src="https://imageupload.io/ib/Kvlcn2Kt1HpeEF2_1698030177.png"
                alt="image not found"
                className="w-30 h-20"
              />
            </a>
            <div className="hidden lg:flex lg:gap-x-12 ml-8">
              <a
                href="UserGroup"
                className="text-xl font-semibold leading-6 text-[#1ed760] hover:text-green-700 transition duration-300 px-4 py-2"
              >
                My Group
              </a>
              <a
                href="SongMatch"
                className="text-xl font-semibold leading-6 text-[#1ed760] hover:text-green-700 transition duration-300 px-4 py-2"
              >
                Song Match
              </a>
              <a
                href="About"
                className="text-xl font-semibold leading-6 text-[#1ed760] hover:text-green-700 transition duration-300 px-4 py-2"
              >
                About
              </a>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#1ed760]"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="text-xl font-semibold leading-6 text-[#1ed760]"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
