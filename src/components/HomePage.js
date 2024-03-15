import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Application</h1>
      {isAuthenticated && <Profile />}
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default HomePage;
