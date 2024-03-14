import React from "react";

const LogoutButton = () => {
  const logout = async () => {
    const returnTo = process.env.REACT_APP_AUTH0_APP_URI;
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    window.location.href = `https://${domain}/logout?client_id=${clientId}&returnTo=${returnTo}`;
  };

  return (
    <button className="Login-button" onClick={() => logout()}>
      Log out
    </button>
  );
};

export default LogoutButton;
