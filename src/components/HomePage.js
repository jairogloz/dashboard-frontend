import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Application</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default HomePage;
