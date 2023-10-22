import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import { SpotifyAPIController } from "~/routes/spotifyAPIController.tsx";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

const spotifyLoginUrl = 'https://accounts.spotify.com/authorize?'; // Replace with the actual Spotify login URL

export default function Index() {
  const user = useOptionalUser();
  return (
    <SpotifyAPIController />
  );
}
