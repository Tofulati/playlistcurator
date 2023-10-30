import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from "~/Components/Navbar.jsx";
import Playlistbox from "~/Components/PlaylistBox.jsx";

import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#1ed760]">
      <Navbar />
      <div className="flex justify-center items-center py-20"></div>
      <div className="bg-wblackhite">
        <main className="isolate">
          <div className="relative isolate -z-10">
            <svg
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,black,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width="200"
                  height="200"
                  x="50%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth="0"
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              />
            </svg>
            <div
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                }}
              ></div>
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-[#1ed760] sm:text-6xl">
                      Find the Best Music for You
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-green-500 sm:max-w-md lg:max-w-none">
                      At Playlist Curator, we believe that every song tells a
                      story, and every story has an audience. Through advanced
                      artificial intelligence, we're not just curating
                      playlists; we're orchestrating symphonies of connections.
                    </p>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                      </div>
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                      </div>
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-[#1ed760] sm:text-4xl">
                How it Works
              </h2>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-green-500">
                    Upon joining Playlist Curator, users are prompted to share
                    their personal playlists. Our state-of-the-art AI backend
                    initiates an intricate process called 'Musical DNA
                    Analysis'. Just as human DNA consists of sequences that
                    determine our unique characteristics, each song has its own
                    'musical DNA' — a combination of rhythms, melodies,
                    harmonies, lyrics, and more. Our system breaks down each
                    song into its elemental components, creating a detailed
                    profile that goes beyond just genre or artist.
                  </p>
                  <div className="mt-10 max-w-xl text-base leading-7 text-green-500">
                    <p>
                      With the musical DNA extracted, our sophisticated Neural
                      Network commences its training phase. Utilizing millions
                      of data points from the playlists, the system identifies
                      patterns and similarities among users. It then categorizes
                      users into specific 'User Clusters'. These clusters aren’t
                      just based on common song choices, but on the underlying
                      musical elements that users seem to gravitate towards.
                      This ensures that even if two users have never heard the
                      same song, they can still be matched based on shared
                      musical sensibilities.
                    </p>
                    <p className="mt-10">
                      When a user introduces a new song, Playlist Curator gets
                      to work immediately. The song undergoes a rapid Musical
                      DNA Analysis and is then run through our trained Neural
                      Network. The system determines which User Cluster(s) the
                      song would most resonate with, allowing for highly
                      accurate and tailored recommendations. This means that
                      when you share a new favorite track, our platform knows
                      exactly who in your circle will appreciate it most,
                      creating an environment of shared discovery and joy.
                    </p>
                  </div>
                </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                  <dl className="w-64 space-y-8 xl:w-80">
                    <div className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-[#1ed760]">
                        Total Users
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-green-500">
                        4
                      </dd>
                    </div>
                    <div className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-[#1ed760]">
                        Assets under holding
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-green-500">
                        $19
                      </dd>
                    </div>
                    <div className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-[#1ed760]">
                        New users annually
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-green-500">
                        0.1
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="relative isolate -z-10 mt-32 sm:mt-48">
            <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,black,transparent)]">
              <svg
                className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                    width="200"
                    height="200"
                    x="50%"
                    y="50%"
                    patternUnits="userSpaceOnUse"
                    patternTransform="translate(-100 0)"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                  <path
                    d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                    strokeWidth="0"
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
                />
              </svg>
            </div>
          </div>
        </main>
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
