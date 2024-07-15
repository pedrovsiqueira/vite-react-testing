import React, { useEffect, useState } from "react";
import axiosInstance from "../server/axiosInstance";

const ProtectedPage: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/auth/test_token/", {
          headers: {
            Authorization: `Token ${localStorage.getItem("authToken")}`,
          },
        });
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching protected data:", error);
      }
    };
    fetchData();
  }, []);

  return <h2>{message ? message : "Loading..."}</h2>;
};

export default ProtectedPage;
