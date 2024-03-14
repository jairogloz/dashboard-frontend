import React, { useState, useEffect } from "react";
import "../css/profile.css";

import queryString from "query-string";

const Profile = ({ location }) => {
  const { code } = queryString.parse(location.search);
  const [profileData, setProfileData] = useState("none");

  useEffect(() => {
    fetch(`http://localhost:3010/api/private-scoped?code=${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setProfileData(JSON.stringify(res)));
  }, [code]);

  return (
    <div className="Profile-body">
      <h3>Profile</h3>
      <h5 className="Content">{profileData}</h5>
    </div>
  );
};

export default Profile;
