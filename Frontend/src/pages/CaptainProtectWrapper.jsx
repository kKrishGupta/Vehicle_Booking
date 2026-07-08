import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { setCaptain } = useContext(CaptainDataContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login", { replace: true });
      return;
    }

    const getCaptainProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        setCaptain(response.data.captain);
      } catch (error) {
        console.error(error.response?.data || error.message);

        localStorage.removeItem("token");
        setCaptain(null);

        navigate("/captain-login", { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    getCaptainProfile();
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;