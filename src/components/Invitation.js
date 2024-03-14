import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

const Invitation = () => {
  const { loginWithRedirect } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const organization = params.get("organization");
    const invitation = params.get("invitation");

    loginWithRedirect({
      authorizationParams: {
        organization,
        invitation,
      },
    });
  }, [location, loginWithRedirect]);

  return <div>Redirecting...</div>;
};

export default Invitation;
