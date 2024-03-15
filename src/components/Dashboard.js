import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const { isAuthenticated, getAccessTokenWithPopup } = useAuth0();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenWithPopup({
          authorizationParams: {
            audience: process.env.REACT_APP_AUTH0_SMA_AUDIENCE,
            scope: "read:transactions",
          },
        });
        console.log("token", token);
        const response = await fetch("http://localhost:8080/v1/transactions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, getAccessTokenWithPopup]);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Transactions</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.id}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Please authenticate to view the data.</div>
      )}
    </div>
  );
};

export default Dashboard;
