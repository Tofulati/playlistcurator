import { Link } from "@remix-run/react";

export default function Login(){
    return(
    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
         <Link
          to="/join"
          className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-700 shadow-sm hover:bg-red-50 sm:px-8"
        >
          Sign up
        </Link>
        <Link
          to="/login"
          className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600"
        >
          Log In
        </Link>
    </div>
    );
}