// src/routes/Callback.tsx

import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Callback: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Parse the authentication token from the URL query parameters
    const params = new URLSearchParams(location.search);
    const authToken = params.get("access_token");

    // Store the token in your preferred state management solution
    // For simplicity, we'll use local state here
    if (authToken) {
      localStorage.setItem("authToken", authToken);
    }
  }, [location.search]);

  return (
    <div>
      <h1>Callback Page</h1>
      {localStorage.getItem("authToken") ? (
        <>
          <p>Authentication Successful!</p>
          <Link to="/">Go to Home</Link>
        </>
      ) : (
        <p>Authentication failed. Please try again.</p>
      )}
    </div>
  );
};

export default Callback;
